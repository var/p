#!/bin/bash
sudo git add .

c=`cat push-count.txt`

count=$((c+1))

echo "$count" > push-count.txt

sudo git commit -m "$count"

git push origin gh-pages