resource "google_artifact_registry_repository" "loop-repo" {
  project       = var.project
  format        = var.format
  repository_id = var.repository_id
  description   = var.description
  location      = var.location
}

resource "google_project_iam_member" "artifact_registry_writer" {
  count   = var.member != null && var.role != null ? 1 : 0
  project = var.project
  member  = var.member
  role    = var.role
}
