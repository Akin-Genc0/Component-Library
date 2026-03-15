# Dev environment configuration
terraform {
  cloud {
    organization = "Looply"

    workspaces {
      name = "Component-Library-dev"
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
  environment = "dev"

  secrets = {
    DATABASE_URL         = var.database_url
    DIRECT_URL           = var.direct_url
    GITHUB_ID            = var.github_id
    GITHUB_SECRET        = var.github_secret
    GOOGLE_CLIENT_ID     = var.google_client_id
    GOOGLE_CLIENT_SECRET = var.google_client_secret
    NEXT_PUBLIC_HF_TOKEN = var.hf_token
    NEXTAUTH_SECRET      = var.nextauth_secret
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
}
