resource "google_artifact_registry_repository" "loop-repo" {
  project       = var.project
  format        = var.format
  repository_id = var.repository_id
  description   = var.description
  location      = var.location
}

resource "google_project_iam_member" "name" {
  project = var.project
  member  = var.member
  role    = var.role
}
