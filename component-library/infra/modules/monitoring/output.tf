# output the notf channle
output "notification_channel" {
  description = "ID of the notification channel"
  value       = google_monitoring_notification_channel.monitoring_email.id
}
