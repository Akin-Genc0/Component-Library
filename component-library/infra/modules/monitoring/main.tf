resource "google_monitoring_notification_channel" "monitoring_email" {
  project      = var.project
  display_name = var.name
  type         = var.type
  force_delete = var.force_delete
  labels = {
    email_address = var.email_address
  }
}


