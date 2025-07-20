#!/bin/bash

# Azure Static Web Apps Setup Script
# This script helps you set up Azure Static Web Apps and get the deployment token

echo "🚀 Azure Static Web Apps Setup"
echo "=============================="

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI is not installed. Please install it first:"
    echo "   brew install azure-cli"
    exit 1
fi

# Check if user is logged in
if ! az account show &> /dev/null; then
    echo "🔐 Please log in to Azure:"
    az login
fi

echo ""
echo "📋 Please provide the following information:"
read -p "Static Web App name (e.g., my-portfolio): " APP_NAME
read -p "Resource group name (or 'new' to create): " RESOURCE_GROUP
read -p "Location (e.g., eastus, westus2): " LOCATION

# Create resource group if needed
if [ "$RESOURCE_GROUP" = "new" ]; then
    read -p "New resource group name: " RESOURCE_GROUP
    echo "Creating resource group: $RESOURCE_GROUP"
    az group create --name $RESOURCE_GROUP --location $LOCATION
fi

echo ""
echo "🏗️  Creating Azure Static Web App..."
echo "This may take a few minutes..."

# Create Static Web App
az staticwebapp create \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --source . \
    --location $LOCATION \
    --branch main \
    --app-location "/" \
    --output-location ".next" \
    --login-with-github

echo ""
echo "✅ Azure Static Web App created successfully!"
echo ""
echo "🔑 Getting deployment token..."

# Get deployment token
TOKEN=$(az staticwebapp secrets list --name $APP_NAME --resource-group $RESOURCE_GROUP --query "properties.apiKey" -o tsv)

echo ""
echo "📝 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings → Secrets and variables → Actions"
echo "3. Add a new repository secret:"
echo "   - Name: AZURE_STATIC_WEB_APPS_API_TOKEN"
echo "   - Value: $TOKEN"
echo ""
echo "🌐 Your app will be available at: https://$APP_NAME.azurestaticapps.net"
echo ""
echo "📚 For more information, visit: https://docs.microsoft.com/en-us/azure/static-web-apps/" 