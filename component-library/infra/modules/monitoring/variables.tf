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

variable "display_name" {
  type    = string
  default = "http-uptime-check"
}

variable "timeout" {
  type    = string
  default = "60s"
}

variable "period" {
  type    = string
  default = "60s"
}

variable "path" {
  type    = string
  default = "/"
}

variable "request_method" {
  type    = string
  default = "GET"
}


variable "host" {
  type = string

}
