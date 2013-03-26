#!/bin/bash
sudo git add .

c=`cat push-count.txt`

count=$((c+1))

echo "$count" > push-count.txt

sudo git commit -m "$count"

sudo git push origin gh-pages