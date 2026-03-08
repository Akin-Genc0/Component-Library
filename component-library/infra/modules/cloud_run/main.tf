
resource "google_cloud_run_v2_service" "cloudrun" {
  name                = var.cloudrun-name
  location            = var.cloudrun-location
  project             = var.project
  deletion_protection = false

  template {
    service_account = var.service_account_email
    containers {
      image = var.image
    }
  }
}


