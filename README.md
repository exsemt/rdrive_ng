# Client App with AngularJS



## Instalation (with Yeoman)
(Only as info: link to remove old node.js from MAC https://github.com/DomT4/scripts/blob/master/OSX_Node_Removal/terminatenode.sh)
### Installing yo and some generators
Install the required tools: `yo`, `gulp`, `bower`
```bash
$ npm install -g yo bower grunt-cli gulp
```

Install `generator-gulp-angular`:
```bash
$ npm install -g generator-gulp-angular
```

Clone and `cd` into [project_dir]:

Install all dependencies:

```bash
$ npm install
$ bower install
```

## Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp wiredep` to fill bower dependencies in your `.html` file(s)
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
