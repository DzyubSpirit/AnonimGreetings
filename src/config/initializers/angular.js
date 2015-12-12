import app from '../app';

angular.appModule = function(...defs) {
  var module = angular.module(...defs);

  app.requires.push(module.name);

  return module;
};

angular.templatePath = function(name, scope = 'app') {
  var [ componentName, directiveName, ...rest ] = name.split('.');

  if (rest.length === 0) {
    rest.push('template');
  }

  return [ scope, componentName, 'directives', directiveName || componentName, ...rest ].join('/') + '.html';
};
