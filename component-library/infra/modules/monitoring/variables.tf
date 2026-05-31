#var for type
variable "type" {
  type    = string
  default = "email"
}

variable "name" {
  type    = string
  default = "Notification-Channel-"
}

variable "email_address" {
  type = string
}

variable "project" {
  type = string
}

variable "force_delete" {
  type    = bool
  default = false
}
