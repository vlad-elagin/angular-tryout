import angular from 'angular';

import {AppDirective, PostsController} from './components/app/app.js';
import Posts from './services/posts';

import './style/styles.styl';

const MODULE_NAME = 'test_app';

angular.module(MODULE_NAME, [])
  .directive('app', AppDirective)
  .controller('PostsController', PostsController)
  .service('Posts', Posts);

export default MODULE_NAME;