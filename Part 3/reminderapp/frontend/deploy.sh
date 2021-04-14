#!/bin/sh
npm run build
rm -rf "../../reminderapp/backend/build"
cp -r build "../../reminderapp/backend"