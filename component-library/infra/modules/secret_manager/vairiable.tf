variable "project_id" {
  type = string
}

variable "environment" {
  type = string
}

variable "secrets" {
  description = "Map of secret name to secret value"
  type        = map(string)
}
