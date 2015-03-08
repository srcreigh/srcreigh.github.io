# /src/reigh
[Source code](http://github.com/srcreigh/srcreigh.github.io/tree/source) 
and [current build](http://github.com/srcreigh/srcreigh.github.io/tree/master)
for my website and its articles.

Copyright (C) Shane Creighton-Young 2014 except where otherwise noted.
All rights reserved.

### Setup instructions

Install npm. Clone the repo. Then:

```
# install dependencies
npm install

# build the website locally
npm run build

# deploy to github
npm run deploy
```

### Testing locally
The [http-server](https://www.npmjs.com/package/http-server) npm package is a
zero-configuration command line server. To use it:

```
npm install -g http-server

cd $PATH_TO_REPO_ROOT
http-server build/
```
