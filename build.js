
// Imports
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-templates');
var less = require('metalsmith-less');
var ignore = require('metalsmith-ignore');
var metadata = require('metalsmith-metadata');
var give = require('metalsmith-give');
var excerpts = require('metalsmith-excerpts');
var collections = require('metalsmith-collections');
var highlightjs = require('highlight.js');

Metalsmith(__dirname)

  // Default directories:
  // source: ./src
  // dest:   ./build

  // Apply middleware

  // ignore *.swp files in the build
  .use(ignore({
    patterns: '*.swp',
    options: {
      matchBase: true,
      dot: true
    }
  }))

  // Compile less and remove the less source code from the build
  .use(less({
    render: {
      compress: true
    }
  }))
  .use(ignore({
    patterns: '*.less',
    options: {
      matchBase: true
    }
  }))

  // Get excerpts from markdown posts and create a posts collection
  .use(excerpts())
  .use(collections({
    posts: {
      pattern: 'blog/posts/**.markdown',
      sortBy: 'date',
      reverse: true
    },
    journal: {
      pattern: 'journal/**.markdown',
      sortBy: 'date',
      reverse: true
    },
    poetry: {
      pattern: 'poetry/**.markdown',
      sortBy: 'date',
      reverse: true
    }
  }))

  .use(markdown({
    smartypants: true
  }))
  .use(permalinks({
    pattern: ':path/:title',
    relative: false
  }))

  .use(templates({
    engine: 'jade',
    directory: 'templates'
  }))

  // Build the files to the destination directory
  .build(function(err) {
    if (err) throw err;
  });




function log(opts) {
  opts = opts || {};
  opts.files = opts.hasOwnProperty('files') || true;
  opts.metadata = opts.hasOwnProperty('metadata') || false;

  return function(files, metalsmith, done) {
    if (opts.files) {
      console.log('files');

      // note: file metadata are circular, so don't print out 'next' or 'previous'
      console.log(JSON.stringify(files, function(k,v) {
        if (k == 'contents' || k == 'next' || k == 'previous') return k;
        else return v;
      }, 3));
    }

    if (opts.metadata) {
      console.log('metadata');
      
      // note: metadata is circular, so don't print out 'next' or 'previous'
      console.log(JSON.stringify(metalsmith.metadata(), function(k,v) {
        if (k == 'contents' || k == 'next' || k == 'previous') return k;
        else return v;
      }, 3));
    }
  }
}

