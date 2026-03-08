
variable "cloudrun-location" {
  type    = string
  default = "europe-west2"
}

variable "cloudrun-name" {
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
