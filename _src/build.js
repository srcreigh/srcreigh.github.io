
// Imports
var Metalsmith = require("metalsmith");
var markdown = require("metalsmith-markdown");
var permalinks = require("metalsmith-permalinks");
var templates = require("metalsmith-templates");
var less = require("metalsmith-less");

Metalsmith(__dirname)
    // Add global metadata
    .metadata({
        "title": "My Blog",
        "description": "My second, super-cool blog."
    })

    // Sets the source and destination directories
    .source("src")
    .destination("..")

    // Apply middleware
    /*.use(less({
        "consume": false
    })) */
    .use(markdown())
    .use(permalinks(":title"))
    .use(templates({
        "engine": "jade",
        "directory": "templates"
    }))

    // Build the files to the destination directory
    .build(function(err) {
        if (err) throw err;
    });
