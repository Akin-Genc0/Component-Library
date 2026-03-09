variable "account_id" {
  type    = string
  default = "service-account"
}
variable "display_name" {
  type    = string
  default = "service-account-all"
}

variable "project_id" {
  type = string
}

variable "roles" {
  type        = list(string)
  description = "The roles that will be granted to the service account."
  default     = []
}
