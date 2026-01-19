#!/bin/bash

if [[ $# -lt 2 ]]; then
    echo "Usage: $0 FLAG MESSAGE"
    echo "git commit -m \"[FLAG] : [MESSAGE]\""
    exit 0
else
    git add .
    git commit -m "[$1] : $2"
    git push
fi