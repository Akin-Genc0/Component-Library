# Prod environment configuration
terraform {
  cloud {
    organization = "Looply"

    workspaces {
      name = "Component-Library-prod"
    }
  }

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "6.8.0"
    }
  }
}

provider "google" {
  project = var.project
  region  = var.region
}

locals {
  environment = "prod"

  secrets = {
    DATABASE_URL         = var.database_url
    DIRECT_URL           = var.direct_url
    GITHUB_ID            = var.github_id
    GITHUB_SECRET        = var.github_secret
    GOOGLE_CLIENT_ID     = var.google_client_id
    GOOGLE_CLIENT_SECRET = var.google_client_secret
    NEXT_PUBLIC_HF_TOKEN = var.hf_token
    NEXTAUTH_SECRET      = var.nextauth_secret
    NEXTAUTH_URL         = var.nextauth_url
  }
}

# Service Account
module "service_account" {
  source = "../../modules/service_account"

  project_id   = var.project
  account_id   = "${local.environment}-looply-cloudrun-sa"
  display_name = "Cloud Run SA (${local.environment})"
  roles = [
    "roles/secretmanager.secretAccessor",
    "roles/run.admin",
    "roles/iam.serviceAccountUser",
    "roles/artifactregistry.writer",
  ]
}

# Secret Manager 
module "secrets" {
  source = "../../modules/secret_manager"

  project_id  = var.project
  environment = local.environment
  secrets     = local.secrets
}

# Cloud Run
module "cloud_run" {
  source = "../../modules/cloud_run"

  project               = var.project
  name                  = "${local.environment}-looply-app"
  location              = var.region
  service_account_email = module.service_account.email
  image                 = var.image
  secret_env_vars       = module.secrets.secret_ids

  depends_on = [module.service_account]
}


module "artifact_registry" {
  source        = "../../modules/artifact_registry"
  project       = var.project
  location      = var.region
  repository_id = "looply-repo"
  description   = "Looply Docker images"
}


module "storage" {
  source  = "../../modules/storage_bucket"
  name    = "${var.project}-artifact-storage"
  project = var.project
}

# Monitoring
module "monitoring" {
  source = "../../modules/monitoring"

  project       = var.project
  email_address = var.alert_email
  name          = "${local.environment}-notification-channel"
  display_name  = "${local.environment}-cloud-run-uptime"
  host          = replace(module.cloud_run.service_url, "https://", "")

  depends_on = [module.cloud_run]
}
