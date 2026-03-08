variable "project" {
  type        = string
  default     = "looply-loo-dev"
  description = "GCP Project ID for development environment"
}

variable "region" {
  type    = string
  default = "europe-west2"
}

variable "image" {
  type        = string
  description = "Container image to deploy"
  default     = "us-docker.pkg.dev/cloudrun/container/hello"
}

# ── Secrets (set these in Terraform Cloud as SENSITIVE variables) ──

variable "database_url" {
  type      = string
  sensitive = true
}

variable "direct_url" {
  type      = string
  sensitive = true
}

variable "github_id" {
  type      = string
  sensitive = true
}

variable "github_secret" {
  type      = string
  sensitive = true
}

variable "google_client_id" {
  type      = string
  sensitive = true
}

variable "google_client_secret" {
  type      = string
  sensitive = true
}

variable "hf_token" {
  type      = string
  sensitive = true
}

variable "nextauth_secret" {
  type      = string
  sensitive = true
}
