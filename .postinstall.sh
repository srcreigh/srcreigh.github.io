#!/bin/bash

WORKING_DIR=`pwd`

# install my metalsmith-ignore
cd node_modules/ 
git clone https://github.com/srcreigh/metalsmith-ignore.git 
cd metalsmith-ignore 
npm install 
rm -rf .git
cd $WORKING_DIR

# install my metalsmith-excerpts
cd node_modules/
git clone https://github.com/srcreigh/metalsmith-excerpts.git
cd metalsmith-excerpts
npm install
rm -rf .git
cd $WORKING_DIR
