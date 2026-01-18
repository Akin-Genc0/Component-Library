terraform {
  cloud {
    organization = "Looply"
    workspaces {
      name = "Component-Library-dev"
    }
  }

  required_providers {
    google = {
      source = "hashicorp/google"
      version = "6.8.0"
    }
  }
}

provider "google" {
  project = var.project
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_storage_bucket" "app_bucket" {
  name          = "${var.project}-storage-bucket"
  location      = "EU"
  force_destroy = true
}