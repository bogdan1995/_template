## Front-end template created by Bogdan Ponomarenko

### Project structure:

```
├── .bowerrc        # settings for bower
├── bower.json      # config for bower
├── .gitignore      # untracked files and folders
├── package.json    # config for npm
├── gulpfile.js     # config for gulp
├── proj/           # project source files
├── css/            # stylesheets
├── fonts/          # fonts
├── img/            # images
├── jade/           # jade files
    ├── blocks/     # repeating blocks
    ├── layouts/    # templates 
    ├── pages/      # page layout
├── js/             # javascript files
    ├── vendor/     # javascript plugins
    main.js         # your js code
├── php/            # php files
├── scss/           # SASS files (SMACSS)
    ├── base/       # basic stylesheet (reset, normalize and e.t.c)
    ├── layouts/    # blocks stylesheet
    ├── modules/    # elements stylesheet
    ├── tools/      # variables, mixins, functions and e.t.c.
    style.scss      # main scss file
```

### Gulp tasks
* `connect` - the creation of a local server and run livereload
* `css` - compiling SCSS files and add-vendor prefixes
* `jade` - compiling JADE files
* `uncss` - remove unused styles (if you want to use this plugin, uncomment the task in gulp config)
* `jshint` - Check for errors your js-scripts 
* `wiredep` - add the path to the styles and scripts downloaded from the bower
*`build` - prepares an application to the production: minify and concatenate styles and scripts in the index file adds the path to these files (all located in the folder `dist`)
* `clean` - remove folder `dist`
* `watch `- monitors changes to files
* `default` - starts a tasks `watch` and `connect`


### How it works?
1. Download project
2. In your console write `npm install` and `bower install`
3. Start "default" task in gulp (write in console `gulp`)
4. Enjoy! :)