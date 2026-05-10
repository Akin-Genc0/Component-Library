resource "google_secret_manager_secret" "all_secrets" {
  for_each  = var.secrets
  secret_id = "${var.environment}-${each.key}"
  project   = var.project_id
  replication {
    auto {}
  }
  labels = {
    environment = var.environment
  }
}

resource "google_secret_manager_secret_version" "each_secret" {
  for_each    = var.secrets
  secret      = google_secret_manager_secret.all_secrets[each.key].id
  secret_data = each.value
}


