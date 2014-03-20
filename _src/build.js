
var Metalsmith = require('metalsmith');
var templates = require('metalsmith-templates');
var permalinks = require('metalsmith-permalinks');
var markdown = require('metalsmith-markdown');
var less = require('metalsmith-less');

var srcDir = 'src';
var destDir = '..';

Metalsmith(__dirname)
    // Set source and destination directories
    .source(srcDir)
    .destination(destDir)

    // Compile the blog with markdown
    .use(markdown())

    // Use the title as permalinks
    // TODO: Include year / month year in permalink?
    .use(permalinks(':title'))

    // Jade templating (for html)
    .use(templates({
      'engine': 'jade',
      'directory': 'templates'
    }))

    // Less templating (for css)
    .use(less())

    .build(function(err) {
      if (err) throw err;
      else console.log('Built successfully to \'' + destDir + '\'.');
    });
