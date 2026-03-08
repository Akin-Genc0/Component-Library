
variable "location" {
  type    = string
  default = "europe-west2"
}

variable "name" {
  type    = string
  default = "dev-looply-cloudrun-name"
}

variable "project" {
  type = string
}

variable "service_account_email" {
  type = string
}

variable "image" {
  type    = string
  default = "us-docker.pkg.dev/cloudrun/container/hello"
}

variable "secret_env_vars" {
  description = "Map of ENV_VAR_NAME to Secret Manager secret ID"
  type        = map(string)
}

variable "version_type" {
  type    = string
  default = "latest"
}
