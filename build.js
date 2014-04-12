
// Imports
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-templates');
var less = require('metalsmith-less');
var ignore = require('metalsmith-ignore');
var metadata = require('metalsmith-metadata');
var give = require('metalsmith-give');

Metalsmith(__dirname)

  // Default directories:
  // source: ./src
  // dest:   ./build

  // Apply middleware

  // Metadata
  .use(metadata({
    global: "metadata/global.json",
    sidebar: "metadata/sidebar.json"
  }))
  .use(give({
    options: {
      matchBase: true
    },
    'blog/*': {
      here: 'blog'
    },
    'hire/*': {
      here: 'hire'
    },
    'projects/*': {
      here: 'projects'
    },

  }))

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

  .use(markdown())
  .use(permalinks({
    pattern: ':title',
    relative: false
  }))
  .use(templates({
    engine: 'jade',
    directory: 'templates'
  }))

  .use(ignore({
    patterns: '*.swp',
    options: {
      matchBase: true,
      dot: true
    }
  }))

  //.use(log())

  // Build the files to the destination directory
  .build(function(err) {
    if (err) throw err;
  });

function log() {
  return function(files, metalsmith, done) {
    console.log('files');
    console.log(JSON.stringify(files, function(k,v) {
      if (k == 'contents') return k;
      else return v;
    }, 3));

    console.log('metadata');
    console.log(JSON.stringify(metalsmith.metadata(), function(k,v) {
      if (k == 'contents') return k;
      else return v;
    }, 3));
    return done();
  }
}

















