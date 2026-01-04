#!/bin/bash

if [[ $# -lt 2 ]]; then
    echo "Usage: ./deploy.sh FLAG MESSAGE"
    echo "git commit -m \"[FLAG] : [MESSAGE]\""
    exit 0
else
    npm run build
    cp .env dist/
    cd dist/
    git init
    git add .
    git commit -m "[$1] : $2"
    git branch -M main
    git remote add origin git@github.com:IbrahimDiaby/CV.git
    git push -u origin main
fi