#!/bin/bash
# starter-kit/scripts/rename-project.sh
NEW_NAME=$1

if [ -z "$NEW_NAME" ]; then
  echo "Usage: ./scripts/rename-project.sh <new-project-name>"
  exit 1
fi

# Update package.json
# Note: Using sed for simplicity. For robustness, consider using 'npm pkg set' but sed is faster for a simple template.
# macOS requires empty string for sed -i backup extension
sed -i '' "s/\"name\": \"starter-kit\"/\"name\": \"$NEW_NAME\"/" package.json
sed -i '' "s/\"name\": \"starter-kit\"/\"name\": \"$NEW_NAME\"/" package-lock.json

echo "Project renamed to $NEW_NAME. Please run 'npm install' to update lockfile consistency if needed."
