resource "google_monitoring_notification_channel" "monitoring_email" {
  project      = var.project
  display_name = var.name
  type         = var.type
  force_delete = var.force_delete
  labels = {
    email_address = var.email_address
  }
}

resource "google_monitoring_uptime_check_config" "name" {
  project            = var.project
  display_name       = var.display_name
  timeout            = var.timeout
  period             = var.period
  log_check_failures = true

  http_check {
    path           = var.path
    request_method = var.request_method
  }

  monitored_resource {
    type = "uptime_url"
    labels = {
      project_id = var.project
      host       = var.host
    }
  }
}

