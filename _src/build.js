
// Imports
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-templates');
var less = require('metalsmith-less');
var cleanscript = require('metalsmith-cleanscript');

Metalsmith(__dirname)
  // Add global metadata
  .metadata({
    global: {
      title: '/src/reigh',
      description: 'Shane Creighton-Young\'s website.',
      url: 'http://srcreigh.github.io',

      bio: {
        name: 'Shane Creighton-Young',
        purpose: 'CS \'17 at UWaterloo. Freelance mobile developer.'
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

  // Sets the source and destination directories
  .source("src")
  .destination("..")

  // Apply middleware
  .use(less({
    consume: true
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
  .use(cleanscript({
    root: false,
    out: 'clean.sh'
  }))

  // Build the files to the destination directory
  .build(function(err) {
    if (err) throw err;
  });
