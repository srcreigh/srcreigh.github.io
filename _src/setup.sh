#!/bin/bash

# TODO: Add some kind of error handling to this bad boy? Should probably handle
# bad working dirs somehow
WORKING_DIR=`pwd`

# Clean whatever I had in there before
rm -rf node_modules/

# Install dependencies
npm install

# Add `jade` dependency to `metalsmith-templates` and reinstall dependencies
# there
cd node_modules/metalsmith-templates/
npm install jade --save

# Add my metalsmith-less repo
cd $WORKING_DIR
cd node_modules/
git clone https://github.com/srcreigh/metalsmith-less.git
cd metalsmith-less/
npm install
