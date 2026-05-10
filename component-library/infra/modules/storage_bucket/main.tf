resource "google_storage_bucket" "storage" {
  name     = var.name
  location = var.location
  project  = var.project
}
