resource "google_artifact_registry_repository" "loop-repo" {
  project       = var.project
  format        = var.format
  repository_id = var.repository_id
  description   = var.description
  location      = var.location
}


