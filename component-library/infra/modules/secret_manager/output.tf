output "secret_ids" {
  description = "Map of secret name to full secret resource ID"
  value       = { for k, s in google_secret_manager_secret.all_secrets : k => s.id }
}
