#!/bin/bash

# Validate deploying
read -p 'Do you really want to deploy? [y/N]' response

# If 'y', do the job.
if [ $response = "y" ]
then
	git branch -D master
	git checkout -b master
	git filter-branch --subdirectory-filter _site/ -f
	git push github master
# If 'N', don't do the job and exit.
elif [ $response = "N" ]
then
	exit
fi
