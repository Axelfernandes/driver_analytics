#!/bin/bash

# Configuration - Replace with your values or set as env vars
PROJECT_ID=$(gcloud config get-value project)
SERVICE_NAME="curri-driver-dashboard"
REGION="us-central1"

echo "🚀 Starting deployment for $SERVICE_NAME to project $PROJECT_ID..."

# 1. Enable necessary services
echo "📦 Enabling required GCP services..."
gcloud services enable cloudbuild.googleapis.com run.googleapis.com artifactregistry.googleapis.com

# 2. Build and Push using Cloud Build (no local docker needed)
echo "🏗️ Building container image via Cloud Build..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME

# 3. Deploy to Cloud Run
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 3000

echo "✅ Deployment complete!"
gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format 'value(status.url)'
