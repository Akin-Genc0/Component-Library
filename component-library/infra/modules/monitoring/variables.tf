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

variable "alert_threshold" {
  type    = number
  default = 1
}

variable "alert_duration" {
  type    = string
  default = "60s"
}

variable "alert_alignment_period" {
  type    = string
  default = "300s"
}

variable "alert_auto_close" {
  type    = string
  default = "1800s"
}

variable "combiner" {
  type    = string
  default = "OR"
}
