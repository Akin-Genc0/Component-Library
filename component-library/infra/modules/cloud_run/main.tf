resource "google_cloud_run_v2_service" "cloudrun" {
  name                = var.name
  location            = var.location
  project             = var.project
  deletion_protection = false

  template {
    service_account = var.service_account_email
    containers {
      image = var.image
      dynamic "env" {
        for_each = var.secret_env_vars
        content {
          name = env.key
          value_source {
            secret_key_ref {
              secret  = env.value
              version = var.version
            }
          }
        }
      }
    }
  }
}



