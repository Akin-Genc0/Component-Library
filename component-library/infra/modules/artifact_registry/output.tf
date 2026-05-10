output "repository_url" {
  description = "The full URL of the Artifact Registry repository"
  value       = "${var.location}-docker.pkg.dev/${google_artifact_registry_repository.loop-repo.project}/${google_artifact_registry_repository.loop-repo.repository_id}"
}
