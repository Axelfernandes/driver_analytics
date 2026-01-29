#!/bin/bash

# Configuration
PROJECT_ID=$(gcloud config get-value project)
SERVICE_NAME="curri-driver-dashboard"
REGION="us-central1"

if [ -z "$PROJECT_ID" ] || [ "$PROJECT_ID" == "(unset)" ]; then
  echo "❌ Error: Google Cloud project is not set."
  echo "Please run: gcloud config set project [YOUR_PROJECT_ID]"
  exit 1
fi

echo "🚀 Starting deployment for $SERVICE_NAME to project $PROJECT_ID..."

# 1. Enable necessary services
echo "📦 Ensuring required GCP services are enabled..."
gcloud services enable cloudbuild.googleapis.com run.googleapis.com artifactregistry.googleapis.com --quiet

# 2. Build and Push using Cloud Build
echo "🏗️ Building container image via Cloud Build..."
# Using GCR for simplicity, but Artifact Registry is recommended for new projects
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME .

# 3. Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated

echo "✅ Deployment complete!"
gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format 'value(status.url)'
