resource "google_monitoring_notification_channel" "monitoring_email" {
  project      = var.project
  display_name = var.name
  type         = var.type
  force_delete = var.force_delete
  labels = {
    email_address = var.email_address
  }
}

resource "google_monitoring_uptime_check_config" "cloud_run_uptime" {
  project            = var.project
  display_name       = var.display_name
  timeout            = var.timeout
  period             = var.period
  log_check_failures = true

  http_check {
    path           = var.path
    request_method = var.request_method
  }

  monitored_resource {
    type = "uptime_url"
    labels = {
      project_id = var.project
      host       = var.host
    }
  }
}

resource "google_monitoring_alert_policy" "alert_policy_uptime" {
  project      = var.project
  display_name = "${var.display_name}-alert"
  combiner     = "OR"

  conditions {
    display_name = "Uptime check failure"

    condition_threshold {
      filter          = "resource.type = \"uptime_url\" AND metric.type = \"monitoring.googleapis.com/uptime_check/check_passed\" AND metric.labels.check_id = \"${google_monitoring_uptime_check_config.name.uptime_check_id}\""
      comparison      = "COMPARISON_GT"
      threshold_value = var.alert_threshold
      duration        = var.alert_duration

      aggregations {
        alignment_period     = var.alert_alignment_period
        per_series_aligner   = "ALIGN_NEXT_OLDER"
        cross_series_reducer = "REDUCE_COUNT_FALSE"
        group_by_fields      = ["resource.label.project_id"]
      }

      trigger {
        count = 1
      }
    }
  }

  notification_channels = [google_monitoring_notification_channel.monitoring_email.id]

  alert_strategy {
    auto_close = var.alert_auto_close
  }
}
