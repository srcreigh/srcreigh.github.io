
// Imports
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-templates');
var less = require('metalsmith-less');
var ignore = require('metalsmith-ignore');

Metalsmith(__dirname)
  // Add global metadata
  .metadata({
    global: {
      title: '/src/reigh',
      description: 'Shane Creighton-Young\'s website.',
      url: 'http://srcreigh.github.io',

      bio: {
        name: 'Shane Creighton-Young',
        purpose: 'CS \'17 at UWaterloo. Mobile developer.'
      }
    },

    // Sidebar items
    sidebar: {
      items: [
        { title: 'blog',
          url: 'http://facebook.com'
        },
        { title: 'hire',
          url: 'http://twitter.com'
        },
        { title: 'projects',
          url: 'http://myspace.com'
        },
        { title: 'source',
          url: 'http://github.com/srcreigh/srcreigh.github.io'
        }
      ]  
    }
  })

  // Default directories:
  // source: ./src
  // dest:   ./build

  // Apply middleware
  .use(less())
  .use(ignore('*.less'))

  .use(markdown())
  .use(permalinks({
    pattern: ':title',
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
