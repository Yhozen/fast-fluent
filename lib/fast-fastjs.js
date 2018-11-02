(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"), require("bluebird"), require("axios"), require("md5"), require("lokijs"));
	else if(typeof define === 'function' && define.amd)
		define("fast-fastjs", ["moment", "bluebird", "axios", "md5", "lokijs"], factory);
	else if(typeof exports === 'object')
		exports["fast-fastjs"] = factory(require("moment"), require("bluebird"), require("axios"), require("md5"), require("lokijs"));
	else
		root["fast-fastjs"] = factory(root["moment"], root["bluebird"], root["axios"], root["md5"], root["lokijs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__16__, __WEBPACK_EXTERNAL_MODULE__29__, __WEBPACK_EXTERNAL_MODULE__40__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-unused-vars */
var Utilities = function () {
  /**
   * Deep clones a JS object using JSON.parse
   * This function will not clone object
   * functions
   * @param {Object} object
   */
  var cloneDeep = function cloneDeep(object) {
    return JSON.parse(JSON.stringify(object));
  };
  /**
   * Given an Object and its path, if exisits it will
   * return the value of it, if not the default
   * @param {Object} obj
   * @param {String} path
   * @param {*} def
   */
  var get = function get(fn, def) {
    try {
      return fn();
    } catch (e) {
      return def;
    }
  };
  /**
   *
   * @param {*} obj
   * @param {*} path
   * @param {*} def
   */
  var getFromPath = function getFromPath(obj, path, def) {
    var _path = path;

    if (path.includes(' as ')) {
      path = path.split(' as ');
      _path = path[0];
    }

    var assignedName = get(function () {
      return Array.isArray(path) && path[1].trim();
    }, undefined);

    var fullPath = _path.replace(/\[/g, '.').replace(/]/g, '').split('.').filter(Boolean).map(function (e) {
      return e.trim();
    });

    function everyFunc(step) {
      return !(step && (obj = obj[step]) === undefined);
    }

    var result = fullPath.every(everyFunc) ? obj : def;

    return { label: assignedName || _path, value: result };
  };
  /**
   *
   * @param {*} arr
   * @param {*} predicate
   */
  var uniqBy = function uniqBy(arr, predicate) {
    var cb = typeof predicate === 'function' ? predicate : function (o) {
      return o[predicate];
    };

    return [].concat(_toConsumableArray(arr.reduce(function (map, item) {
      var key = cb(item);

      map.has(key) || map.set(key, item);

      return map;
    }, new Map()).values()));
  };
  /**
   *
   */
  var orderBy = function orderBy() {};
  /**
   *
   * @param {*} value
   */
  var isEmpty = function isEmpty(value) {
    if (!value) {
      return true;
    }
    if (Array.isArray(value) || typeof value === 'string') {
      return !value.length;
    }
    for (var key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  };
  /**
   *
   * @param {*} fn
   * @param {*} time
   */
  var debounce = function debounce(fn, time) {
    var timeout = void 0;

    return function () {
      var _this = this,
          _arguments = arguments;

      var functionCall = function functionCall() {
        return fn.apply(_this, _arguments);
      };

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  };
  /**
   * Recursively removes all NULL values
   * from an Object or an Array
   *
   * @static
   * @param {Array|Object} object Array, Object to clean
   * @returns {Array|Object} returns the cleaned value
   */
  var deleteNulls = function deleteNulls(object) {
    var obj = object;
    var isArray = obj instanceof Array;

    for (var k in obj) {
      if (obj[k] === null) isArray ? obj.splice(k, 1) : delete obj[k];else if (_typeof(obj[k]) === 'object') deleteNulls(obj[k]);
    }
    return obj;
  };

  var eachComponent = function eachComponent(components, fn, includeAll, path, parent) {
    if (!components) return;
    path = path || '';
    components.forEach(function (component) {
      if (!component) {
        return;
      }
      var hasColumns = component.columns && Array.isArray(component.columns);
      var hasRows = component.rows && Array.isArray(component.rows);
      var hasComps = component.components && Array.isArray(component.components);
      var noRecurse = false;
      var newPath = component.key ? path ? path + '.' + component.key : component.key : '';

      // Keep track of parent references.
      if (parent) {
        // Ensure we don't create infinite JSON structures.
        component.parent = _extends({}, parent);
        delete component.parent.components;
        delete component.parent.componentMap;
        delete component.parent.columns;
        delete component.parent.rows;
      }

      if (includeAll || component.tree || !hasColumns && !hasRows && !hasComps) {
        noRecurse = fn(component, newPath);
      }

      var subPath = function subPath() {
        if (component.key && !['panel', 'table', 'well', 'columns', 'fieldset', 'tabs', 'form'].includes(component.type) && (['datagrid', 'container', 'editgrid'].includes(component.type) || component.tree)) {
          return newPath;
        } else if (component.key && component.type === 'form') {
          return newPath + '.data';
        }
        return path;
      };

      if (!noRecurse) {
        if (hasColumns) {
          component.columns.forEach(function (column) {
            return eachComponent(column.components, fn, includeAll, subPath(), parent ? component : null);
          });
        } else if (hasRows) {
          component.rows.forEach(function (row) {
            if (Array.isArray(row)) {
              row.forEach(function (column) {
                return eachComponent(column.components, fn, includeAll, subPath(), parent ? component : null);
              });
            }
          });
        } else if (hasComps) {
          eachComponent(component.components, fn, includeAll, subPath(), parent ? component : null);
        }
      }
    });
  };

  var matchComponent = function matchComponent(component, query) {
    if (typeof query === 'string') {
      return component.key === query;
    }
    var matches = false;

    Object.keys(query).forEach(function (path) {
      matches = getFromPath(component, path).value === query[path];
      if (!matches) {
        return false;
      }
    });
    return matches;
  };

  var findComponents = function findComponents(components, query) {
    var results = [];

    eachComponent(components, function (component, path) {
      if (matchComponent(component, query)) {
        component.path = path;
        results.push(component);
      }
    }, true);
    return results;
  };

  var unixDate = function unixDate() {
    return Math.round(+new Date() / 1000);
  };

  return Object.freeze({
    cloneDeep: cloneDeep,
    get: get,
    orderBy: orderBy,
    isEmpty: isEmpty,
    debounce: debounce,
    getFromPath: getFromPath,
    deleteNulls: deleteNulls,
    eachComponent: eachComponent,
    findComponents: findComponents,
    unixDate: unixDate
  });
}();

exports.default = Utilities;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Fluent = __webpack_require__(7);

var _Fluent2 = _interopRequireDefault(_Fluent);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _moment = __webpack_require__(3);

var _moment2 = _interopRequireDefault(_moment);

var _Model = __webpack_require__(2);

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// TODO We still have to figure out how to solve the problem of
// The CONFIG URL and FLUENT_URL changing on APP sync
// Every page refresh will make the urls go back to their default
exports.default = _Fluent2.default.extend(_Model2.default, {
  properties: {
    name: "Configuration",
    remoteConnection: {
      path: "configuration",
      token: null,
      type: "config"
    }
  },
  methods: {
    /**
     * Decides whether to set Configurations
     * Online or Offline
     * @param {Object} config.appConfig The application Config
     * @param {Boolean} config.forceOnline If we need online
     */
    set: function set(_ref) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var appConf = _ref.appConf,
            forceOnline = _ref.forceOnline;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(String(appConf.offlineStart) === "true" && !forceOnline)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", _this.setOffline({ appConf: appConf }));

              case 2:
                return _context.abrupt("return", _this.setOnline({ appConf: appConf }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    /**
     *
     * @param {*} param0
     */
    setOffline: function setOffline(_ref2) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var appConf = _ref2.appConf;
        var localConfig, localConfigDate, offlineConfigDate;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.local().first();

              case 2:
                localConfig = _context2.sent;
                localConfigDate = _this2.getConfigDate(localConfig);
                offlineConfigDate = appConf.offlineFiles.lastUpdated.date;

                // If local config is newer than offline

                if (!(localConfigDate > offlineConfigDate)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", localConfig);

              case 7:
                if (!localConfig) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 10;
                return _this2.local().clear({ sure: true });

              case 10:
                return _context2.abrupt("return", _this2.local().insert(_extends({}, appConf.offlineFiles.Configuration.data, {
                  fastUpdated: (0, _moment2.default)().unix()
                })));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    /**
     *
     * @param {*} param0
     */
    setOnline: function setOnline(_ref3) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var appConf = _ref3.appConf;
        var localConfig, remoteConfig;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.local().first();

              case 2:
                localConfig = _context3.sent;
                _context3.next = 5;
                return _this3.remote({ token: false }).first();

              case 5:
                remoteConfig = _context3.sent;

                if (!(!localConfig && !remoteConfig)) {
                  _context3.next = 8;
                  break;
                }

                throw new Error("Application is not connected to internet, or the configuration file cannot be pulled");

              case 8:
                if (remoteConfig) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return", localConfig);

              case 10:
                if (!localConfig) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 13;
                return _this3.local().clear({ sure: true });

              case 13:
                return _context3.abrupt("return", _this3.local().insert(_extends({}, remoteConfig.data, {
                  fastUpdated: (0, _moment2.default)().unix()
                })));

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },

    /**
     *
     * @param {*} config
     */
    getConfigDate: function getConfigDate(config) {
      return _utilities2.default.get(function () {
        return config.fastUpdated;
      }, 0);
    }
  }
}).compose(_Fluent2.default.privatize).privatizeMethods("setOnlineConfig", "setOfflineConfig", "getConfigDate", "assingGlobalVariable", "getRemote")();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _it = __webpack_require__(5);

var _it2 = _interopRequireDefault(_it);

var _privatize = __webpack_require__(47);

var _privatize2 = _interopRequireDefault(_privatize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _it2.default)({
  properties: {
    name: 'baseModel',
    config: {
      remote: {
        path: '/myRemote/model',
        token: undefined,
        pullForm: false
      },
      local: {
        connector: 'loki'
      },
      merge: {
        connector: 'formio-loki'
      }
    }
  },
  methods: {
    /**
     * 
     */
    getModelName: function getModelName() {
      return this.name;
    },

    /**
     * 
     */
    getFluentConfig: function getFluentConfig() {
      var FLUENT = void 0;
      if (typeof window !== 'undefined' && window && window._FLUENT_) {
        FLUENT = window._FLUENT_;
      } else if (global && global._FLUENT_) {
        FLUENT = global._FLUENT_;
      }

      return FLUENT;
    },

    /**
     * 
     * @param {*} connectors 
     * @param {*} type 
     */
    getConnector: function getConnector(connectors, type) {
      if (Array.isArray(connectors)) {
        return this.getConnectorFromArray(connectors, type);
      }

      if (connectors instanceof Object) {
        return connectors;
      }

      return undefined;
    },

    /**
     * 
     * @param {*} connectors 
     * @param {*} type 
     */
    getConnectorFromArray: function getConnectorFromArray(connectors, type) {
      var _this = this;

      // Default case
      if (connectors.length === 1) {
        return connectors[0];
      }

      // If the model assigns specific one
      if (this.config && this.config[type] && this.config[type].connector) {
        var Lcon = connectors.find(function (c) {
          return c.name === _this.config[type].connector;
        });

        if (Lcon instanceof Object) {
          return Lcon;
        }
      }

      var base = connectors.find(function (c) {
        return c.default;
      });

      if (base instanceof Object) {
        return base;
      }

      return undefined;
    },

    /**
     * [remote description]
     * @return {[type]} [description]
     */
    remote: function remote() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$token = _ref.token,
          token = _ref$token === undefined ? undefined : _ref$token,
          _ref$pullForm = _ref.pullForm,
          pullForm = _ref$pullForm === undefined ? undefined : _ref$pullForm;

      var FLUENT = this.getFluentConfig();
      var connectors = FLUENT && FLUENT.connectors && FLUENT.connectors.remote;

      if (!connectors) {
        throw new Error('No remote connector was defined. Please define it using Fluent.config()');
      }

      this.remoteCon.token = this.remoteCon.token || token;

      if (pullForm) {
        this.remoteCon.pullForm = pullForm;
      }

      var remoteConnector = this.getConnector(connectors, 'remote');

      if (remoteConnector) {
        return remoteConnector.connector({
          remoteConnection: this.remoteCon
        });
      }

      throw new Error('No default remote connector found. Please assign one as your default in Fluent.config');
    },

    /**
     * [local description]
     * @return {[type]} [description]
     */
    local: function local() {
      var FLUENT = this.getFluentConfig();
      var connectors = FLUENT && FLUENT.connectors && FLUENT.connectors.local;

      if (!connectors) {
        throw new Error('No local connector was defined. Please define it using Fluent.config()');
      }

      var localConnector = this.getConnector(connectors, 'local');

      if (localConnector) {
        return localConnector.connector({ name: this.name });
      }

      throw new Error('No default local connector found. Please assign one as your default in Fluent.config');
    },

    /**
    * [local description]
    * @return {[type]} [description]
    */
    merged: function merged() {
      var local = this.local();
      var remote = this.remote();

      var FLUENT = this.getFluentConfig();
      var connectors = FLUENT && FLUENT.connectors && FLUENT.connectors.merge;

      if (!connectors) {
        throw new Error('No merge connector was defined. Please define it using Fluent.config()');
      }

      var mergeConnector = this.getConnector(connectors, 'merge');

      if (mergeConnector) {
        return mergeConnector.connector({ local: local, remote: remote, name: this.name });
      }

      throw new Error('No default merge connector found. Please assign one as your default in Fluent.config');
    }
  }
}).compose(_privatize2.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = __webpack_require__(3);

var _moment2 = _interopRequireDefault(_moment);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _Model = __webpack_require__(2);

var _Model2 = _interopRequireDefault(_Model);

var _Labels = __webpack_require__(48);

var _Labels2 = _interopRequireDefault(_Labels);

var _Configuration = __webpack_require__(1);

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _Model2.default.compose({
  properties: {
    name: 'Form',
    remoteConnection: {
      path: 'form',
      pullForm: true
    }
  },
  methods: {
    getModel: function getModel(_ref) {
      var path = _ref.path;

      return _Model2.default.compose({
        properties: {
          remoteConnection: {
            path: path
          }
        }
      })();
    },
    find: function find(_ref2) {
      var path = _ref2.path;

      return this.local().where('data.path', '=', path).first();
    },

    /**
     *
     * @param {*} action
     */
    cardFormattedForms: function cardFormattedForms(action) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.local().get();

              case 2:
                result = _context.sent;


                result = result.filter(function (o) {
                  return o.data.tags.indexOf('visible') > -1;
                });
                result = result.sort(function (a, b) {
                  a = a.data.title;
                  b = b.data.title;
                  return a > b ? 1 : a < b ? -1 : 0;
                });

                result = result.map(function (f) {
                  return {
                    title: f.data.title,
                    tags: f.data.tags,
                    customIcon: true,
                    icon: action === 'create' ? 'statics/customSVG/startSurvey.svg' : 'statics/customSVG/collectedData.svg',
                    subtitle: 'Last updated: ' + (0, _moment2.default)(f.data.modified).fromNow(),
                    actions: [{
                      text: action === 'create' ? 'Start' : 'View data',
                      target: 'form',
                      view: action,
                      path: f.data.path
                    }]
                  };
                });

                result = { cards: result };
                return _context.abrupt('return', result);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    /**
     *
     */
    FormLabels: function FormLabels(selection, i18n) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var forms;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.local().get();

              case 2:
                forms = _context2.sent;
                return _context2.abrupt('return', _Labels2.default.get(forms, i18n));

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    /**
     *
     * @param {*} forms
     */
    getUpdatedAt: function getUpdatedAt(forms) {
      return _utilities2.default.get(function () {
        return forms[0].fastUpdated;
      }, 0);
    },

    /**
     *
     * @param {*} param0
     */
    setOffline: function setOffline(_ref3) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var appConf = _ref3.appConf;
        var localForms, localDate, config, offlineForms;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this3.local().get();

              case 2:
                localForms = _context4.sent;
                localDate = _this3.getUpdatedAt(localForms);
                _context4.next = 6;
                return _Configuration2.default.local().first();

              case 6:
                config = _context4.sent;
                offlineForms = _utilities2.default.get(function () {
                  return appConf.offlineFiles.Forms;
                });

                // If the JSON file is newer than the local
                // DB data

                if (!(config.fastUpdated < localDate)) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt('return', localForms);

              case 10:
                if (!localForms) {
                  _context4.next = 13;
                  break;
                }

                _context4.next = 13;
                return _this3.local().clear({ sure: true });

              case 13:

                offlineForms.forEach(function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(form) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return _this3.local().insert({ data: form, fastUpdated: (0, _moment2.default)().unix() });

                          case 2:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, _this3);
                  }));

                  return function (_x) {
                    return _ref4.apply(this, arguments);
                  };
                }());
                return _context4.abrupt('return', offlineForms);

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3);
      }))();
    },

    /**
     *
     */
    setOnline: function setOnline() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var remoteForms, unixDate;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this4.remote().get();

              case 2:
                remoteForms = _context6.sent;
                unixDate = (0, _moment2.default)().unix();

                if (!(remoteForms && !_utilities2.default.isEmpty(remoteForms))) {
                  _context6.next = 8;
                  break;
                }

                _context6.next = 7;
                return _this4.local().clear({ sure: true });

              case 7:
                remoteForms.forEach(function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(form) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return _this4.local().insert({
                              data: form,
                              fastUpdated: unixDate
                            });

                          case 2:
                          case 'end':
                            return _context5.stop();
                        }
                      }
                    }, _callee5, _this4);
                  }));

                  return function (_x2) {
                    return _ref5.apply(this, arguments);
                  };
                }());

              case 8:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this4);
      }))();
    },

    /**
     *
     * @param {*} param0
     */
    set: function set(_ref6) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var appConf = _ref6.appConf,
            forceOnline = _ref6.forceOnline;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(appConf.offlineStart === 'true' && !forceOnline)) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt('return', _this5.setOffline({ appConf: appConf }));

              case 2:
                return _context7.abrupt('return', _this5.setOnline());

              case 3:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this5);
      }))();
    },
    getFastTableTemplates: function getFastTableTemplates(_ref7) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var path = _ref7.path;
        var fullForm, templates;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this6.local().where('data.path', '=', path).first();

              case 2:
                fullForm = _context8.sent;
                templates = [];


                _utilities2.default.eachComponent(fullForm.data.components, function (c) {
                  if (c.properties && c.properties.FAST_TABLE_TEMPLATE) {
                    templates.push({
                      key: c.key,
                      template: c.properties.FAST_TABLE_TEMPLATE
                    });
                  }
                });

                return _context8.abrupt('return', templates);

              case 6:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this6);
      }))();
    }
  }
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var compose = __webpack_require__(11);
var Shortcut = __webpack_require__(36);
var isStamp = __webpack_require__(24);
var isString = __webpack_require__(37);
var isObject = __webpack_require__(12);
var isFunction = __webpack_require__(14);
var merge = __webpack_require__(26);
var assign = __webpack_require__(25);

var concat = Array.prototype.concat;
function extractFunctions() {
  var fns = concat.apply([], arguments).filter(isFunction);
  return fns.length === 0 ? undefined : fns;
}

function standardiseDescriptor(descr) {
  if (!isObject(descr)) return descr;

  var methods = descr.methods;
  var properties = descr.properties;
  var props = descr.props;
  var initializers = descr.initializers;
  var init = descr.init;
  var composers = descr.composers;
  var deepProperties = descr.deepProperties;
  var deepProps = descr.deepProps;
  var pd = descr.propertyDescriptors;
  var staticProperties = descr.staticProperties;
  var statics = descr.statics;
  var staticDeepProperties = descr.staticDeepProperties;
  var deepStatics = descr.deepStatics;
  var configuration = descr.configuration;
  var conf = descr.conf;
  var deepConfiguration = descr.deepConfiguration;
  var deepConf = descr.deepConf;

  var p = isObject(props) || isObject(properties) ?
    assign({}, props, properties) : undefined;

  var dp = isObject(deepProps) ? merge({}, deepProps) : undefined;
  dp = isObject(deepProperties) ? merge(dp, deepProperties) : dp;

  var sp = isObject(statics) || isObject(staticProperties) ?
    assign({}, statics, staticProperties) : undefined;

  var sdp = isObject(deepStatics) ? merge({}, deepStatics) : undefined;
  sdp = isObject(staticDeepProperties) ? merge(sdp, staticDeepProperties) : sdp;

  var spd = descr.staticPropertyDescriptors;
  if (isString(descr.name)) spd = assign({}, spd || {}, { name: { value: descr.name } });

  var c = isObject(conf) || isObject(configuration) ?
    assign({}, conf, configuration) : undefined;

  var dc = isObject(deepConf) ? merge({}, deepConf) : undefined;
  dc = isObject(deepConfiguration) ? merge(dc, deepConfiguration) : dc;

  var ii = extractFunctions(init, initializers);

  var cc = extractFunctions(composers);

  var descriptor = {};
  if (methods) descriptor.methods = methods;
  if (p) descriptor.properties = p;
  if (ii) descriptor.initializers = ii;
  if (cc) descriptor.composers = cc;
  if (dp) descriptor.deepProperties = dp;
  if (sp) descriptor.staticProperties = sp;
  if (sdp) descriptor.staticDeepProperties = sdp;
  if (pd) descriptor.propertyDescriptors = pd;
  if (spd) descriptor.staticPropertyDescriptors = spd;
  if (c) descriptor.configuration = c;
  if (dc) descriptor.deepConfiguration = dc;

  return descriptor;
}

function stampit() {
  'use strict'; // to make sure `this` is not pointing to `global` or `window`
  var length = arguments.length, args = [];
  for (var i = 0; i < length; i += 1) {
    var arg = arguments[i];
    args.push(isStamp(arg) ? arg : standardiseDescriptor(arg));
  }

  return compose.apply(this || baseStampit, args); // jshint ignore:line
}

var baseStampit = Shortcut.compose({
  staticProperties: {
    create: function () { return this.apply(this, arguments); },
    compose: stampit // infecting
  }
});

var shortcuts = Shortcut.compose.staticProperties;
for (var prop in shortcuts) stampit[prop] = shortcuts[prop].bind(baseStampit);
stampit.compose = stampit.bind();

module.exports = stampit;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Event = __webpack_require__(13);

var _Event2 = _interopRequireDefault(_Event);

var _bluebird = __webpack_require__(8);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
var Connection = function () {
  var online = typeof window !== 'undefined' && window && window.navigator ? window.navigator.onLine : true;

  function setOnline() {
    if (!online) {
      online = true;
      _Event2.default.emit({
        name: 'FAST:CONNECTION:ONLINE',
        data: online,
        text: 'Application is now online'
      });
    }
  }

  function setOffline() {
    if (online) {
      online = false;
      _Event2.default.emit({
        name: 'FAST:CONNECTION:OFFLINE',
        data: online,
        text: 'Application is now offline'
      });
    }
  }

  /**
   * [status description]
   * @return {Promise} [description]
   */
  function initEventListeners() {
    _Event2.default.listen({
      name: 'online',
      callback: function callback() {
        console.log('App is now online');
        setOnline();
      }
    });
    _Event2.default.listen({
      name: 'offline',
      callback: function callback() {
        console.log('App is now offline');
        setOffline();
      }
    });
  }

  function isOnline() {
    return new _bluebird2.default(function (resolve, reject) {
      _axios2.default.get('https://yesno.wtf/api').then(function (res) {
        resolve(true);
      }).catch(function (err) {
        resolve(false);
      });
    });
  }

  return Object.freeze({
    isOnline: isOnline,
    initEventListeners: initEventListeners
  });
}();

exports.default = Connection;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _it = __webpack_require__(5);

var _it2 = _interopRequireDefault(_it);

var _compose = __webpack_require__(11);

var _compose2 = _interopRequireDefault(_compose);

var _Model = __webpack_require__(2);

var _Model2 = _interopRequireDefault(_Model);

var _Collection = __webpack_require__(44);

var _Collection2 = _interopRequireDefault(_Collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _FLUENT_REMOTE_CONNECTORS, _FLUENT_LOCAL_CONNECTORS, _FLUENT_MERGE_CONNECTORS;
var Fluent = (0, _it2.default)({
  init: function init() {
    this.registerGlobalVariable();
  },

  properties: {},
  methods: {
    model: function model() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.registerModel(args);
      return _Model2.default.compose.apply(_Model2.default, _toConsumableArray(args));
    },
    extend: function extend() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.registerModel(args);
      return _Model2.default.compose.apply(_Model2.default, _toConsumableArray(args));
    },
    compose: function compose() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.registerModel(args);
      return _Model2.default.compose.apply(_Model2.default, _toConsumableArray(args));
    },
    collect: function collect(args) {
      return (0, _Collection2.default)(args);
    },
    registerGlobalVariable: function registerGlobalVariable() {
      if (typeof window !== 'undefined' && window) {
        window._FLUENT_ = _extends({}, window._FLUENT_, { models: {} });
      }

      if (global) {
        global._FLUENT_ = _extends({}, global._FLUENT_, { models: {} });
      }
    },
    registerModel: function registerModel(args) {
      var name = args && args[0] && args[0].properties && args[0].properties.name ? args[0].properties.name : undefined;

      if (!name) {
        return;
      }

      if (!(typeof name === 'string')) {
        throw new Error('You must assign a name to your Model when using Fluent.compose');
      }

      if (name !== 'baseModel') {
        if (typeof window !== 'undefined') {
          window._FLUENT_.models[name] = true;
        }
        global._FLUENT_.models[name] = true;
      }
    },
    config: function config(_ref) {
      var _ref$REMOTE_CONNECTOR = _ref.REMOTE_CONNECTORS,
          REMOTE_CONNECTORS = _ref$REMOTE_CONNECTOR === undefined ? undefined : _ref$REMOTE_CONNECTOR,
          _ref$LOCAL_CONNECTORS = _ref.LOCAL_CONNECTORS,
          LOCAL_CONNECTORS = _ref$LOCAL_CONNECTORS === undefined ? undefined : _ref$LOCAL_CONNECTORS,
          _ref$MERGE_CONNECTORS = _ref.MERGE_CONNECTORS,
          MERGE_CONNECTORS = _ref$MERGE_CONNECTORS === undefined ? undefined : _ref$MERGE_CONNECTORS;

      if (typeof window !== 'undefined' && window) {
        window._FLUENT_ = _extends({}, window._FLUENT_, {
          connectors: {
            local: LOCAL_CONNECTORS,
            remote: REMOTE_CONNECTORS,
            merge: MERGE_CONNECTORS
          }
        });
      }

      if (typeof global !== 'undefined' && global) {
        global._FLUENT_ = _extends({}, global._FLUENT_, {
          connectors: {
            local: LOCAL_CONNECTORS,
            remote: REMOTE_CONNECTORS,
            merge: MERGE_CONNECTORS
          }
        });
      }
    },
    getConfig: function getConfig() {
      return {
        REMOTE_CONNECTORS: _FLUENT_REMOTE_CONNECTORS,
        LOCAL_CONNECTORS: _FLUENT_LOCAL_CONNECTORS,
        MERGE_CONNECTORS: _FLUENT_MERGE_CONNECTORS
      };
    }
  }
})();

exports.default = Fluent;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to", function() { return to; });
/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
function to(promise, errorExt) {
    return promise
        .then(function (data) { return [null, data]; })
        .catch(function (err) {
        if (errorExt) {
            Object.assign(err, errorExt);
        }
        return [err, undefined];
    });
}


/* harmony default export */ __webpack_exports__["default"] = (to);
//# sourceMappingURL=await-to-js.es5.js.map


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Auth = __webpack_require__(20);

var _Auth2 = _interopRequireDefault(_Auth);

var _moment = __webpack_require__(3);

var _moment2 = _interopRequireDefault(_moment);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

var _Model = __webpack_require__(2);

var _Model2 = _interopRequireDefault(_Model);

var _Columns = __webpack_require__(51);

var _Columns2 = _interopRequireDefault(_Columns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _Model2.default.compose({
  properties: {
    name: 'Submission',
    remoteConnection: undefined
  },
  init: function init(_ref) {
    var path = _ref.path;

    this.path = path;
    this.remoteConnection = { path: path };
  },

  methods: {
    form: function form() {
      // return this.belongTo('Form', 'path', 'path');

      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    get: function get(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var offline;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = id.replace(/\s/g, '');
                _context2.next = 3;
                return _this2.local().find({
                  filter: {
                    _id: id
                  }
                });

              case 3:
                offline = _context2.sent;

                if (!(offline.length > 0)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt('return', offline[0]);

              case 6:
                return _context2.abrupt('return', {
                  data: false
                });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    offline: function offline(formId) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var filter;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.find({
                  'data.user_email': _Auth2.default.email(),
                  'data.formio.formId': formId
                });

              case 2:
                filter = _context3.sent;

                // updated incomplete submission

                filter = filter.filter(function (o) {
                  return o.data.sync === false || o.data.draft === false;
                });
                filter = filter.sort(function (a, b) {
                  a = new Date(a.data.created);
                  b = new Date(b.data.created);
                  return a > b ? -1 : a < b ? 1 : 0;
                });
                return _context3.abrupt('return', filter);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    stored: function stored(formId) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt('return', _this4.find({
                  'data.formio.formId': formId,
                  'data.owner': _Auth2.default.user()._id
                }));

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    getUnsync: function getUnsync() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var unsynced;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.local().where('sync', '=', false).andWhere('draft', '=', false).andWhere('syncError', '=', false).andWhere('user_email', '=', _Auth2.default.email()).orderBy('created', 'desc', 'date').get();

              case 2:
                _context5.t0 = function (d) {
                  return !d.queuedForSync;
                };

                unsynced = _context5.sent.filter(_context5.t0);
                return _context5.abrupt('return', unsynced);

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },
    showView: function showView(from) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var cols, submissions, templates;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _Columns2.default.getTableView(_this6.path);

              case 2:
                _context6.t0 = function (o) {
                  return 'data.' + o.path + ' as ' + o.path;
                };

                cols = _context6.sent.map(_context6.t0);


                cols = [].concat(_toConsumableArray(cols), ['_id', 'created', 'modified', 'syncError', 'draft', 'sync']);

                submissions = [];

                if (!(from === 'remote')) {
                  _context6.next = 12;
                  break;
                }

                _context6.next = 9;
                return _this6.remote().select(cols).get();

              case 9:
                submissions = _context6.sent;
                _context6.next = 15;
                break;

              case 12:
                _context6.next = 14;
                return _this6.merged().select(cols).get();

              case 14:
                submissions = _context6.sent;

              case 15:
                _context6.next = 17;
                return _Form2.default.getFastTableTemplates({ path: _this6.path });

              case 17:
                templates = _context6.sent;


                submissions = submissions.map(function (s) {
                  var sub = {
                    _id: s._id,
                    status: s.sync === false ? 'offline' : 'online',
                    draft: s.draft,
                    HumanUpdated: Number.isInteger(s.modified) ? _moment2.default.unix(s.modified).fromNow() : (0, _moment2.default)(s.modified).fromNow(),
                    syncError: s.syncError ? s.syncError : false,
                    updated: Number.isInteger(s.modified) ? s.modified : (0, _moment2.default)(s.modified).unix()
                  };

                  // Custom templates using FAST_TABLE_TEMPLATE propertie
                  templates.forEach(function (t) {
                    /* eslint-disable */
                    var newFx = new Function("value", "data", t.template);
                    /* eslint-enable */
                    try {
                      s[t.key] = newFx(s[t.key], s);
                    } catch (error) {
                      console.log('There is an error in one of your calculations', error);
                    }
                  });

                  return _extends({}, sub, s);
                });

                submissions = submissions.sort(function (a, b) {
                  a = new Date(a.updated);
                  b = new Date(b.updated);
                  return a > b ? -1 : a < b ? 1 : 0;
                });

                return _context6.abrupt('return', submissions);

              case 21:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },
    getParallelParticipants: function getParallelParticipants(_id) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var currentSubmission, groupId, submissions, a;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this7.local().where('_id', '=', _id).get();

              case 2:
                currentSubmission = _context7.sent;


                currentSubmission = currentSubmission[0];
                groupId = _utilities2.default.get(function () {
                  return currentSubmission.data.data.parallelSurvey;
                });


                groupId = groupId && groupId !== '[object Object]' ? JSON.parse(groupId).groupId : undefined;

                _context7.next = 8;
                return _this7.local().where('path', '=', _this7.path).get();

              case 8:
                submissions = _context7.sent;
                a = submissions.filter(function (submission) {
                  var parallelSurveyID = _utilities2.default.get(function () {
                    return submission.data.data.parallelSurvey;
                  });

                  parallelSurveyID = parallelSurveyID && parallelSurveyID !== '[object Object]' ? JSON.parse(parallelSurveyID).groupId : undefined;
                  return parallelSurveyID && parallelSurveyID === groupId;
                });


                a = a.map(function (e) {
                  e.data.data.parallelSurvey;
                });
                a = a.map(function (survey) {
                  return JSON.parse(survey);
                });
                return _context7.abrupt('return', a);

              case 13:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },
    getParallelSurvey: function getParallelSurvey(submission) {
      var parallelsurveyInfo = _utilities2.default.get(function () {
        return submission.data.data.paraparallelSurvey;
      }) || _utilities2.default.get(function () {
        return submission.data.parallelSurvey;
      });

      parallelsurveyInfo = parallelsurveyInfo && parallelsurveyInfo !== '[object Object]' ? JSON.parse(parallelsurveyInfo) : undefined;

      return parallelsurveyInfo;
    },
    setParallelSurvey: function setParallelSurvey(parallelsurveyInfo) {
      return JSON.stringify(parallelsurveyInfo);
    },
    getGroups: function getGroups(formId) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var submissions, groups;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this8.local().find();

              case 2:
                submissions = _context8.sent;


                submissions = formId ? submissions.filter(function (submission) {
                  return submission.data.formio.formId === formId;
                }) : submissions;

                groups = submissions.map(function (submission) {
                  return _this8.local().getParallelSurvey(submission) ? {
                    groupId: _this8.local().getParallelSurvey(submission).groupId,
                    groupName: _this8.local().getParallelSurvey(submission).groupName
                  } : undefined;
                });


                groups = groups.filter(function (group) {
                  return typeof group !== 'undefined';
                });

                return _context8.abrupt('return', _utilities2.default.uniqBy(groups, 'groupId'));

              case 7:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this8);
      }))();
    },
    getGroup: function getGroup(id) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var groups;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this9.local().getGroups();

              case 2:
                groups = _context9.sent;


                groups = groups.filter(function (group) {
                  return group.groupId === id;
                });
                return _context9.abrupt('return', groups[0]);

              case 5:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this9);
      }))();
    },
    removeFromGroup: function removeFromGroup(submission) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, _this10);
      }))();
    },
    assingToGroup: function assingToGroup(submissionId, groupId) {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var group, submission, parallelData, parallelSurvey;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _this11.local().getGroup(groupId[0]);

              case 2:
                group = _context11.sent;
                _context11.next = 5;
                return _this11.local().get(submissionId);

              case 5:
                submission = _context11.sent;
                parallelData = _this11.local().getParallelSurvey(submission);
                parallelSurvey = _extends({}, parallelData, {
                  groupId: group.groupId,
                  groupName: group.groupName
                });


                submission.data.data.parallelSurvey = _this11.local().setParallelSurvey(parallelSurvey);
                _context11.next = 11;
                return _this11.local().update(submission);

              case 11:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, _this11);
      }))();
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(23);
var isFunction = __webpack_require__(14);
var isObject = __webpack_require__(12);
var isStamp = __webpack_require__(24);
var isComposable = __webpack_require__(34);

var assign = __webpack_require__(25);
var merge = __webpack_require__(26);

var slice = Array.prototype.slice;

/**
 * Creates new factory instance.
 * @returns {Function} The new factory function.
 */
function createFactory() {
  return function Stamp(options) {
    var descriptor = Stamp.compose || {};
    // Next line was optimized for most JS VMs. Please, be careful here!
    var obj = {__proto__: descriptor.methods}; // jshint ignore:line

    merge(obj, descriptor.deepProperties);
    assign(obj, descriptor.properties);
    Object.defineProperties(obj, descriptor.propertyDescriptors || {});

    if (!descriptor.initializers || descriptor.initializers.length === 0) return obj;

    if (options === undefined) options = {};
    var inits = descriptor.initializers;
    var length = inits.length;
    for (var i = 0; i < length; i += 1) {
      var initializer = inits[i];
      if (isFunction(initializer)) {
        var returnedValue = initializer.call(obj, options,
          {instance: obj, stamp: Stamp, args: slice.apply(arguments)});
        obj = returnedValue === undefined ? obj : returnedValue;
      }
    }

    return obj;
  };
}

/**
 * Returns a new stamp given a descriptor and a compose function implementation.
 * @param {Descriptor} [descriptor={}] The information about the object the stamp will be creating.
 * @param {Compose} composeFunction The "compose" function implementation.
 * @returns {Stamp}
 */
function createStamp(descriptor, composeFunction) {
  var Stamp = createFactory();

  if (descriptor.staticDeepProperties) {
    merge(Stamp, descriptor.staticDeepProperties);
  }
  if (descriptor.staticProperties) {
    assign(Stamp, descriptor.staticProperties);
  }
  if (descriptor.staticPropertyDescriptors) {
    Object.defineProperties(Stamp, descriptor.staticPropertyDescriptors);
  }

  var composeImplementation = isFunction(Stamp.compose) ? Stamp.compose : composeFunction;
  Stamp.compose = function _compose() {
    'use strict'; // to make sure `this` is not pointing to `global` or `window`
    return composeImplementation.apply(this, arguments);
  };
  assign(Stamp.compose, descriptor);

  return Stamp;
}

function concatAssignFunctions(dstObject, srcArray, propName) {
  if (!isArray(srcArray)) return;

  var length = srcArray.length;
  var dstArray = dstObject[propName] || [];
  dstObject[propName] = dstArray;
  for (var i = 0; i < length; i += 1) {
    var fn = srcArray[i];
    if (isFunction(fn) && dstArray.indexOf(fn) < 0) {
      dstArray.push(fn);
    }
  }
}


function combineProperties(dstObject, srcObject, propName, action) {
  if (!isObject(srcObject[propName])) return;
  if (!isObject(dstObject[propName])) dstObject[propName] = {};
  action(dstObject[propName], srcObject[propName]);
}

function deepMergeAssign(dstObject, srcObject, propName) {
  combineProperties(dstObject, srcObject, propName, merge);
}
function mergeAssign(dstObject, srcObject, propName) {
  combineProperties(dstObject, srcObject, propName, assign);
}

/**
 * Mutates the dstDescriptor by merging the srcComposable data into it.
 * @param {Descriptor} dstDescriptor The descriptor object to merge into.
 * @param {Composable} [srcComposable] The composable
 * (either descriptor or stamp) to merge data form.
 */
function mergeComposable(dstDescriptor, srcComposable) {
  var srcDescriptor = (srcComposable && srcComposable.compose) || srcComposable;

  mergeAssign(dstDescriptor, srcDescriptor, 'methods');
  mergeAssign(dstDescriptor, srcDescriptor, 'properties');
  deepMergeAssign(dstDescriptor, srcDescriptor, 'deepProperties');
  mergeAssign(dstDescriptor, srcDescriptor, 'propertyDescriptors');
  mergeAssign(dstDescriptor, srcDescriptor, 'staticProperties');
  deepMergeAssign(dstDescriptor, srcDescriptor, 'staticDeepProperties');
  mergeAssign(dstDescriptor, srcDescriptor, 'staticPropertyDescriptors');
  mergeAssign(dstDescriptor, srcDescriptor, 'configuration');
  deepMergeAssign(dstDescriptor, srcDescriptor, 'deepConfiguration');
  concatAssignFunctions(dstDescriptor, srcDescriptor.initializers, 'initializers');
  concatAssignFunctions(dstDescriptor, srcDescriptor.composers, 'composers');
}

/**
 * Given the list of composables (stamp descriptors and stamps) returns
 * a new stamp (composable factory function).
 * @typedef {Function} Compose
 * @param {...(Composable)} [arguments] The list of composables.
 * @returns {Stamp} A new stamp (aka composable factory function)
 */
module.exports = function compose() {
  'use strict'; // to make sure `this` is not pointing to `global` or `window`
  var descriptor = {};
  var composables = [];
  if (isComposable(this)) {
    mergeComposable(descriptor, this);
    composables.push(this);
  }

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (isComposable(arg)) {
      mergeComposable(descriptor, arg);
      composables.push(arg);
    }
  }

  var stamp = createStamp(descriptor, compose);

  var composers = descriptor.composers;
  if (isArray(composers) && composers.length > 0) {
    for (var j = 0; j < composers.length; j += 1) {
      var composer = composers[j];
      var returnedValue = composer({stamp: stamp, composables: composables});
      stamp = isStamp(returnedValue) ? returnedValue : stamp;
    }
  }

  return stamp;
};


/**
 * The Stamp Descriptor
 * @typedef {Function|Object} Descriptor
 * @returns {Stamp} A new stamp based on this Stamp
 * @property {Object} [methods] Methods or other data used as object instances' prototype
 * @property {Array<Function>} [initializers] List of initializers called for each object instance
 * @property {Array<Function>} [composers] List of callbacks called each time a composition happens
 * @property {Object} [properties] Shallow assigned properties of object instances
 * @property {Object} [deepProperties] Deeply merged properties of object instances
 * @property {Object} [staticProperties] Shallow assigned properties of Stamps
 * @property {Object} [staticDeepProperties] Deeply merged properties of Stamps
 * @property {Object} [configuration] Shallow assigned properties of Stamp arbitrary metadata
 * @property {Object} [deepConfiguration] Deeply merged properties of Stamp arbitrary metadata
 * @property {Object} [propertyDescriptors] ES5 Property Descriptors applied to object instances
 * @property {Object} [staticPropertyDescriptors] ES5 Property Descriptors applied to Stamps
 */

/**
 * The Stamp factory function
 * @typedef {Function} Stamp
 * @returns {*} Instantiated object
 * @property {Descriptor} compose - The Stamp descriptor and composition function
 */

/**
 * A composable object - stamp or descriptor
 * @typedef {Stamp|Descriptor} Composable
 */



/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function isObject(arg) {
  var type = typeof arg;
  return Boolean(arg) && (type === 'object' || type === 'function');
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Event = function () {
  var CustomEvent = function CustomEvent(event, params) {
    var evt = document.createEvent('CustomEvent');

    params = params || { bubbles: false, cancelable: false, detail: undefined };

    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  function emit(_ref) {
    var name = _ref.name,
        data = _ref.data,
        text = _ref.text;

    if (!name) throw new Error('Event must have a name.');
    if (!data) throw new Error('Event must have data.');
    if (!text) throw new Error('Event must have a text.');
    var customEvent = CustomEvent(name, {
      detail: {
        data: data,
        text: text
      }
    });

    window.dispatchEvent(customEvent);
  }
  function listen(_ref2) {
    var name = _ref2.name,
        callback = _ref2.callback;

    if (!name) throw new Error('Listener must have a name.');
    if (!callback) throw new Error('Listener must have a callback.');
    window.addEventListener(name, callback);
  }

  function remove(_ref3) {
    var name = _ref3.name,
        callback = _ref3.callback;

    if (!name) throw new Error('Listener must have a name to detach');
    if (!callback) throw new Error('Listener must have a callback to detach');
    window.removeEventListener(name, callback);
  }
  return Object.freeze({
    emit: emit,
    listen: listen,
    remove: remove
  });
}();

exports.default = Event;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function isFunction(arg) {
  return typeof arg === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _it = __webpack_require__(5);

var _it2 = _interopRequireDefault(_it);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _Collection = __webpack_require__(44);

var _Collection2 = _interopRequireDefault(_Collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import Fluent from './Fluent';

exports.default = (0, _it2.default)({
  init: function init(_ref) {
    var name = _ref.name,
        remoteConnection = _ref.remoteConnection;

    if (!name && !remoteConnection) {
      throw new Error('Model must have a name or path');
    }
    this.name = name || this.name;
    this.remoteConnection = remoteConnection || this.remoteConnection;
    this.chainReference = [];
    this.whereArray = [];
    this.orWhereArray = [];
    this.selectArray = [];
    this.orderByArray = [];
    this.limitNumber = undefined;
    this.offsetNumber = undefined;
    this.populate = [];
    this.chunk = null;
    this.pullSize = null;
  },

  properties: {
    operators: ['=', '<', '>', '<=', '>=', '<>', '!=', 'like', 'regexp', 'startsWith', 'endsWith', 'contains']
  },
  methods: {
    /**
     *
     */
    get: function get() {
      throw new Error('get() method not implemented');
    },

    /**
     *
     */
    all: function all() {
      throw new Error('all() method not implemented');
    },

    /**
     *
     */
    find: function find(id) {
      throw new Error('find() method not implemented');
    },

    /**
     *
     */
    findOne: function findOne() {
      throw new Error('findOne() method not implemented');
    },

    /**
     *
     */
    remove: function remove() {
      throw new Error('remove() method not implemented');
    },

    /**
     *
     */
    softDelete: function softDelete() {
      throw new Error('softDelete() method not implemented');
    },

    /**
     *
     */
    insert: function insert() {
      throw new Error('insert() method not implemented');
    },

    /**
     *
     */
    update: function update() {
      throw new Error('update() method not implemented');
    },

    /**
     *
     */
    clear: function clear() {
      throw new Error('clear() method not implemented');
    },

    /**
     *
     */
    updateOrCreate: function updateOrCreate() {
      throw new Error('updateOrCreate() method not implemented');
    },

    /**
     *
     */
    findAndRemove: function findAndRemove() {
      throw new Error('findAndRemove() method not implemented');
    },
    owner: function owner(user) {
      throw new Error('owner() method not implemented');
    },
    own: function own(user) {
      throw new Error('own() method not implemented');
    },

    /**
     * Executes the Get() method and
     * returns the its first result
     *
     * @return {Object} First result
     */
    first: function first() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.get();

              case 2:
                data = _context.sent;
                return _context.abrupt('return', _utilities2.default.get(function () {
                  return data[0];
                }, []));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    /**
     *
     * Gets the data in the current query and
     * transforms it into a collection
     * @returns {Collection} Fluent Collection
     */
    collect: function collect() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.get();

              case 2:
                data = _context2.sent;

                if (Array.isArray(data)) {
                  _context2.next = 5;
                  break;
                }

                throw new Error('Collect method only accepts arrays of data');

              case 5:
                return _context2.abrupt('return', (0, _Collection2.default)(data));

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    /**
     * Adds the given columns to the SelectArray
     * to use as column filter for the data
     *
     * @param {Array|String} columns The columns to select
     * @returns {Model} Fluent Model
     */
    select: function select() {
      for (var _len = arguments.length, columns = Array(_len), _key = 0; _key < _len; _key++) {
        columns[_key] = arguments[_key];
      }

      columns = this.prepareInput(columns);
      this.chainReference.push({ method: 'select', args: columns });
      this.selectArray = this.selectArray.concat(columns).filter(function (elem, pos, arr) {
        return arr.indexOf(elem) === pos;
      });

      return this;
    },

    /**
     * Maps the given Data to show only those fields
     * explicitly detailed on the Select function
     *
     * @param {Array} data Data from local or remote DB
     * @returns {Array} Formatted data with the selected columns
     */
    jsApplySelect: function jsApplySelect(data) {
      var _this3 = this;

      var _data = Array.isArray(data) ? [].concat(_toConsumableArray(data)) : [data];

      if (this.selectArray.length > 0) {
        _data = _data.map(function (element) {
          var newElement = {};

          _this3.selectArray.forEach(function (attribute) {
            var extract = _utilities2.default.getFromPath(element, attribute, undefined);

            var value = _utilities2.default.get(function () {
              return extract.value;
            }, undefined);

            if (typeof value !== 'undefined') {
              newElement[extract.label] = extract.value;
            }
          });
          return newElement;
        });
      }

      return _data;
    },

    /**
     *  Sets the offset number for
     *  the given query
     *
     * @param {int} offset The given offset
     * @returns {Model} Fluent Model
     */
    offset: function offset(_offset) {
      this.chainReference.push({ method: 'offset', args: _offset });
      this.offsetNumber = _offset;
      return this;
    },

    /**
     *  Alias for the offset method
     *
     * @param {int} offset the given offset
     */
    skip: function skip(offset) {
      return this.offset(offset);
    },

    /**
     *  Adds where filters to the query
     *  whereArray
     * @param {String|Array} args Where filters
     * @returns {Model} Fluent Model
     */
    where: function where() {
      var _this4 = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.chainReference.push({ method: 'where', args: args });
      this.whereArray = [];
      args = Array.isArray(args[0]) ? args : [args];
      args.forEach(function (arg) {
        if (arg.length !== 3) {
          throw new Error('There where clouse is not properly formatted, expecting: ["attribute", "operator","value"] but got "' + JSON.stringify(arg) + '" ');
        }
        _this4.whereArray.push(arg);
      });
      return this;
    },

    /**
     * Pushes where filters with AND condition
     * to the whereArray
     *
     * @param {String|Array} args Where filters
     * @returns {Model} Fluent Model
     */
    andWhere: function andWhere() {
      var _this5 = this;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.chainReference.push({ method: 'andWhere', args: args });
      args = Array.isArray(args[0]) ? args : [args];
      args.forEach(function (arg) {
        if (arg.length !== 3) {
          throw new Error('There where clouse is not properly formatted, expecting: ["attribute", "operator","value"] but got "' + JSON.stringify(arg) + '" ');
        }
        _this5.whereArray.push(arg);
      });
      return this;
    },

    /**
     * Pushes where filter with OR condition
     * to the orWhereArray
     *
     * @param {String|Array} args OR where filters
     * @returns {Model} Fluent Model
     */
    orWhere: function orWhere() {
      var _this6 = this;

      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      args = Array.isArray(args[0]) ? args : [args];
      args.forEach(function (arg) {
        if (arg.length !== 3) {
          throw new Error('There orWhere clouse is not properly formatted, expecting: ["attribute", "operator","value"] but got "' + JSON.stringify(arg) + '" ');
        }
        _this6.orWhereArray.push(arg);
      });
      return this;
    },

    /**
     * Limits the number of results for the
     * given query
     * @param {int} limit limit number
     * @returns {Model} Fluent Model
     */
    limit: function limit(_limit) {
      this.limitNumber = _limit;
      return this;
    },

    /**
     * Alias for the limit method
     *
     * @param {*} limit limit number
     * @returns {Model} Fluent Model
     */
    take: function take(limit) {
      return this.limit(limit);
    },

    /**
     * Gets all values for a given KEY
     * @param {String} keyPath The path to the key
     * @returns {Array}
     */
    pluck: function pluck(keyPath) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this7.get();

              case 2:
                data = _context3.sent;


                data = data.map(function (e) {
                  var extracted = _utilities2.default.getFromPath(e, keyPath, undefined);

                  if (typeof extracted.value !== 'undefined') {
                    return extracted.value;
                  }
                });
                return _context3.abrupt('return', data);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this7);
      }))();
    },

    /**
     *
     * @param {*} args
     */
    orderBy: function orderBy() {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      this.orderByArray = args;
      return this;
    },

    /**
     *
     * @param {*} data
     */
    jsApplyOrderBy: function jsApplyOrderBy(data) {
      var _data = [].concat(_toConsumableArray(data));

      if (this.orderByArray.length === 0) {
        return _data;
      }
      var field = this.orderByArray[0];

      if (this.selectArray.length > 0 && (field.includes('.') || field.includes('['))) {
        throw new Error('Cannot orderBy nested attribute "' + field + '" when using Select. You must rename the attribute');
      }

      var order = this.orderByArray[1];
      var type = this.orderByArray[2];

      if (!type) {
        type = 'string';
      }

      _data = _data.sort(function (a, b) {
        var A = _utilities2.default.getFromPath(a, field, undefined).value;
        var B = _utilities2.default.getFromPath(b, field, undefined).value;

        if (typeof A === 'undefined' || typeof B === 'undefined') {
          throw new Error('Cannot order by property "' + field + '" not all values have this property');
        }
        // For default order and numbers
        if (type.includes('string') || type.includes('number')) {
          if (order === 'asc') {
            return A > B ? 1 : A < B ? -1 : 0;
          }
          return A > B ? -1 : A < B ? 1 : 0;
        } else if (type.includes('date')) {
          if (order === 'asc') {
            return new Date(A) - new Date(B);
          }
          return new Date(B) - new Date(A);
        }
      });
      return _data;
    },

    /**
     *
     * @param {*} input
     */
    prepareInput: function prepareInput(input) {
      var cols = [];

      input.forEach(function (item) {
        var value = Array.isArray(item) ? item : item.split(',');

        value = value.map(function (e) {
          return e.trim();
        });
        cols = cols.concat(value);
      });

      cols.filter(function (elem, pos, arr) {
        return arr.indexOf(elem) === pos;
      });

      return cols;
    },
    ArrayInsert: function ArrayInsert(dataArray, options) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var initial, length, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element, a;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                initial = 1;
                length = dataArray.length;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 5;
                _iterator = dataArray[Symbol.iterator]();

              case 7:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context4.next = 26;
                  break;
                }

                element = _step.value;

                if (options && options.showProgress) {
                  console.log('Inserting ' + initial + ' of ' + length);
                }
                _context4.prev = 10;
                _context4.next = 13;
                return _this8.insert(element, options);

              case 13:
                a = _context4.sent;

                if (options && options.showProgress) {
                  console.log('Element ' + initial + ' inserted');
                }
                initial++;
                _context4.next = 23;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4['catch'](10);

                console.log('ERROR - Element ' + initial + ' - ' + JSON.stringify(element) + ' could not be inserted');
                console.log(_context4.t0);
                initial++;

              case 23:
                _iteratorNormalCompletion = true;
                _context4.next = 7;
                break;

              case 26:
                _context4.next = 32;
                break;

              case 28:
                _context4.prev = 28;
                _context4.t1 = _context4['catch'](5);
                _didIteratorError = true;
                _iteratorError = _context4.t1;

              case 32:
                _context4.prev = 32;
                _context4.prev = 33;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 35:
                _context4.prev = 35;

                if (!_didIteratorError) {
                  _context4.next = 38;
                  break;
                }

                throw _iteratorError;

              case 38:
                return _context4.finish(35);

              case 39:
                return _context4.finish(32);

              case 40:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this8, [[5, 28, 32, 40], [10, 18], [33,, 35, 39]]);
      }))();
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _Model = __webpack_require__(2);

var _Model2 = _interopRequireDefault(_Model);

var _Configuration = __webpack_require__(1);

var _Configuration2 = _interopRequireDefault(_Configuration);

var _moment = __webpack_require__(3);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _Model2.default.compose({
  properties: {
    name: 'Translation',
    remoteConnection: {
      path: 'translations',
      token: undefined
    }
  },
  methods: {
    getFormTranslations: function getFormTranslations() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var i18n, localTranslations;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i18n = {};
                _context.next = 3;
                return _this.local().first();

              case 3:
                localTranslations = _context.sent;


                localTranslations = _utilities2.default.get(function () {
                  return localTranslations.data;
                }, {});

                Object.keys(localTranslations).forEach(function (languageCode) {
                  if (languageCode !== 'type') {
                    i18n[languageCode] = localTranslations[languageCode];
                  }
                });
                return _context.abrupt('return', i18n);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    /**
     *
     */
    supportedLanguages: function supportedLanguages() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var translations, isoLanguages, languages;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.local().get();

              case 2:
                translations = _context2.sent;

                if (!(translations.length === 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt('return', []);

              case 5:
                isoLanguages = _this2.getIsoLanguages();
                languages = [];


                translations = _utilities2.default.get(function () {
                  return translations[0].data;
                }, []);

                Object.keys(translations).forEach(function (languageCode) {
                  var iso = isoLanguages.find(function (l) {
                    return l.code === languageCode;
                  });

                  if (iso) {
                    languages.push(iso);
                  }
                });

                languages = languages.sort(function (a, b) {
                  a = a.label;
                  b = b.label;
                  return a > b ? 1 : a < b ? -1 : 0;
                });
                return _context2.abrupt('return', languages);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    /**
     *
     */
    getIsoLanguages: function getIsoLanguages() {
      return __webpack_require__(49);
    },

    /**
     *
     * @param {*} localTranslations
     */
    getLocalizationDate: function getLocalizationDate(localTranslations) {
      return _utilities2.default.get(function () {
        return localTranslations[0].fastUpdated;
      }, 0);
    },

    /**
     * [authenticate description]
     * @param  {[type]} username [description]
     * @param  {[type]} password [description]
     * @return {[type]}          [description]
     */
    set: function set(_ref) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var appConf = _ref.appConf,
            forceOnline = _ref.forceOnline;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(appConf.offlineStart === 'true' && !forceOnline)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return', _this3.setOffline({ appConf: appConf }));

              case 2:
                return _context3.abrupt('return', _this3.setOnline({ appConf: appConf }));

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },

    /**
     *
     * @param {*} param0
     */
    setOffline: function setOffline(_ref2) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var appConf = _ref2.appConf;
        var localTranslations, localDate, config, offlineTranslations, trans;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this4.local().get();

              case 2:
                localTranslations = _context4.sent;
                localDate = _this4.getLocalizationDate(localTranslations);
                _context4.next = 6;
                return _Configuration2.default.local().first();

              case 6:
                config = _context4.sent;
                offlineTranslations = appConf.offlineFiles.Translations;

                // If the offline Json is older than the local data

                if (!(config.fastUpdated < localDate)) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt('return', localTranslations[0].data);

              case 10:
                _context4.next = 12;
                return _this4.process(offlineTranslations);

              case 12:
                trans = _context4.sent;
                return _context4.abrupt('return', _this4.storeTranslations(trans));

              case 14:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },

    /**
     *
     * @param {*} param0
     */
    setOnline: function setOnline(_ref3) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var appConf = _ref3.appConf;
        var localTranslations, appTranslations;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.local().get();

              case 2:
                localTranslations = _context5.sent;
                _context5.next = 5;
                return _this5.remote().limit(50000).get();

              case 5:
                appTranslations = _context5.sent;

                if (!appTranslations) {
                  _context5.next = 14;
                  break;
                }

                _context5.next = 9;
                return _this5.process(appTranslations);

              case 9:
                appTranslations = _context5.sent;
                _context5.next = 12;
                return _this5.storeTranslations(appTranslations);

              case 12:
                appTranslations = _context5.sent;
                return _context5.abrupt('return', appTranslations);

              case 14:
                if (!(localTranslations.length > 0 && localTranslations[0].data)) {
                  _context5.next = 16;
                  break;
                }

                return _context5.abrupt('return', localTranslations[0].data);

              case 16:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },

    /**
     *
     * @param {*} translationsArray
     */
    storeTranslations: function storeTranslations(translationsArray) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var appTranslations;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // Remove all previous translations
                _this6.local().clear({ sure: true });

                // Insert the new ones
                _context6.next = 3;
                return _this6.local().insert({
                  data: translationsArray,
                  fastUpdated: (0, _moment2.default)().unix()
                });

              case 3:
                appTranslations = _context6.sent;
                return _context6.abrupt('return', appTranslations.data);

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },

    /**
     * [setTranslations description]
     * @param {[type]} appTranslations [description]
     */
    process: function process(translations) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var lenguages, result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                lenguages = _this7.getIsoLanguages();
                result = {};


                result.label = {};
                // Foreach of the locale lenguages, set the translations
                lenguages.forEach(function (language) {
                  translations.forEach(function (translation) {
                    if (translation.data && translation.data[language.code]) {
                      if (!result[language.code]) {
                        result[language.code] = {};
                      }
                      result[language.code][translation.data.label] = translation.data[language.code];
                    }

                    if (translation.data && translation.data.label) {
                      result['label'][translation.data.label] = translation.data.label;
                    }
                  });
                });

                return _context7.abrupt('return', result);

              case 5:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },
    updateLabel: function updateLabel(label, translation) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var trans, id, newTranslations, result;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this8.remote().where('data.label', '=', label).first();

              case 2:
                trans = _context8.sent;
                id = trans._id;
                newTranslations = _extends({}, trans.data, translation);
                _context8.next = 7;
                return _this8.remote().update({
                  _id: id,
                  data: newTranslations
                });

              case 7:
                result = _context8.sent;
                return _context8.abrupt('return', result);

              case 9:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this8);
      }))();
    },
    createTranslation: function createTranslation(label) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt('return', _this9.remote().insert({
                  data: {
                    en: label,
                    label: label
                  }
                }));

              case 1:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this9);
      }))();
    }
  }
})();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Model = __webpack_require__(2);

var _Model2 = _interopRequireDefault(_Model);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _Configuration = __webpack_require__(1);

var _Configuration2 = _interopRequireDefault(_Configuration);

var _awaitToJs = __webpack_require__(9);

var _awaitToJs2 = _interopRequireDefault(_awaitToJs);

var _moment = __webpack_require__(3);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _Model2.default.compose({
  properties: {
    name: 'Pages',
    remoteConnection: {
      path: 'fast-app-pages',
      token: undefined
    }
  },
  methods: {
    /**
     * Decides whether to set submissions
     * Online or Offline
     * @param {Object} config.appConfig The application Config
     * @param {Boolean} config.forceOnline If we need online
     */
    set: function set(_ref) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var appConf = _ref.appConf,
            forceOnline = _ref.forceOnline;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(String(appConf.offlineStart) === 'true' && !forceOnline)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', _this.setOffline({ appConf: appConf }));

              case 2:
                return _context.abrupt('return', _this.setOnline());

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    /**
     * Sets all pages from the offline
     * JSON files
     * @param {Object} appConfig Application config
     * @return {Object} App pages
     */
    setOffline: function setOffline(_ref2) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var appConf = _ref2.appConf;
        var localPages, localDate, config, offlinePages;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.local().first();

              case 2:
                localPages = _context2.sent;
                localDate = _this2.getUpdatedDate(localPages);
                _context2.next = 6;
                return _Configuration2.default.local().first();

              case 6:
                config = _context2.sent;
                offlinePages = _utilities2.default.get(function () {
                  return appConf.offlineFiles.Pages[0].data;
                });

                // If the configuration in the JSON file is
                // older than the one in the local DB

                if (!(config.fastUpdated < localDate)) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt('return', _utilities2.default.get(function () {
                  return localPages.data;
                }));

              case 10:
                if (!localPages) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 13;
                return _this2.local().clear({ sure: true });

              case 13:
                return _context2.abrupt('return', _this2.local().insert(_extends({}, offlinePages, { fastUpdated: (0, _moment2.default)().unix() })));

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    /**
     * Sets all pages from the online
     * JSON files
     * @return {Object} App pages
     */
    setOnline: function setOnline() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var localPages, _ref3, _ref4, error, pages;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.local().first();

              case 2:
                localPages = _context3.sent;
                _context3.next = 5;
                return (0, _awaitToJs2.default)(_this3.remote().first());

              case 5:
                _ref3 = _context3.sent;
                _ref4 = _slicedToArray(_ref3, 2);
                error = _ref4[0];
                pages = _ref4[1];

                if (!error) {
                  _context3.next = 12;
                  break;
                }

                console.log(error);
                throw new Error('Could not get remote Pages.');

              case 12:

                pages = _utilities2.default.get(function () {
                  return pages.data;
                });

                // If we pulled the remote pages and
                // The submission is not empty

                if (!(pages && !_utilities2.default.isEmpty(pages))) {
                  _context3.next = 18;
                  break;
                }

                if (!localPages) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 17;
                return _this3.local().clear({ sure: true });

              case 17:
                return _context3.abrupt('return', _this3.local().insert(_extends({}, pages, { fastUpdated: (0, _moment2.default)().unix() })));

              case 18:
                return _context3.abrupt('return', localPages);

              case 19:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },

    /**
     * Takes the local pages and gets the
     * updated at date
     *
     * @param {Array} pages Array of local pages
     * @returns {number} date las updated
     */
    getUpdatedDate: function getUpdatedDate(pages) {
      return _utilities2.default.get(function () {
        return pages.fastUpdated;
      }, 0);
    }
  }
})();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

var _Configuration = __webpack_require__(1);

var _Configuration2 = _interopRequireDefault(_Configuration);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _Model = __webpack_require__(2);

var _Model2 = _interopRequireDefault(_Model);

var _Connection = __webpack_require__(6);

var _Connection2 = _interopRequireDefault(_Connection);

var _awaitToJs = __webpack_require__(9);

var _awaitToJs2 = _interopRequireDefault(_awaitToJs);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _Model2.default.compose({
  properties: {
    name: 'User',
    remoteConnection: {
      path: 'user',
      token: undefined
    }
  },
  methods: {
    storeLocally: function storeLocally(user) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var localUser, isUserAlreadyStored, _ref, _ref2, error, onlineUser;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.local().where('data.email', '=', user.data.email).first();

              case 2:
                localUser = _context.sent;


                user = _utilities2.default.deleteNulls(user);
                isUserAlreadyStored = !!localUser && !_utilities2.default.isEmpty(localUser);

                //  check if user is already present in local storage

                if (!isUserAlreadyStored) {
                  _context.next = 7;
                  break;
                }

                throw new Error('The user email is already taken');

              case 7:
                if (!_Connection2.default.isOnline()) {
                  _context.next = 17;
                  break;
                }

                _context.next = 10;
                return (0, _awaitToJs2.default)(_Form2.default.getModel({ path: 'userregister' }).remote().insert(user));

              case 10:
                _ref = _context.sent;
                _ref2 = _slicedToArray(_ref, 2);
                error = _ref2[0];
                onlineUser = _ref2[1];

                if (!error) {
                  _context.next = 16;
                  break;
                }

                throw new Error('The user email is already taken');

              case 16:
                return _context.abrupt('return', _this.local().insert(onlineUser));

              case 17:
                return _context.abrupt('return', _this.local().insert(user));

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    updateUser: function updateUser(user) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var localUser;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this2.local().where('data.email', '=', user.data.email).pluck('_id');

              case 2:
                localUser = _context3.sent;


                localUser.forEach(function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_id) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _this2.local().remove(_id);

                          case 2:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this2);
                  }));

                  return function (_x) {
                    return _ref3.apply(this, arguments);
                  };
                }());

                user = _utilities2.default.deleteNulls(user);

                return _context3.abrupt('return', _this2.local().insert(user));

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }))();
    },
    login: function login(_ref4) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var credentials = _ref4.credentials,
            role = _ref4.role;
        var url;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _Configuration2.default.local().first();

              case 2:
                url = _context4.sent.APP_URL;


                if (role === 'admin') {
                  url = url + '/admin/login';
                } else {
                  url = url + '/user/login';
                }
                return _context4.abrupt('return', _axios2.default.post(url, {
                  data: credentials
                }));

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3);
      }))();
    }
  }
})();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Configuration = __webpack_require__(1);

var _Configuration2 = _interopRequireDefault(_Configuration);

var _md = __webpack_require__(29);

var _md2 = _interopRequireDefault(_md);

var _User = __webpack_require__(19);

var _User2 = _interopRequireDefault(_User);

var _Connection = __webpack_require__(6);

var _Connection2 = _interopRequireDefault(_Connection);

var _Role = __webpack_require__(21);

var _Role2 = _interopRequireDefault(_Role);

var _bluebird = __webpack_require__(8);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Auth = function () {
  /**
   *
   *
   * @param {any} credentials
   * @returns
   */
  var localAuthenticate = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(credentials) {
      var username, password, config, hashedPassword, dbUser, userFound, isValidUser;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = credentials.username, password = credentials.password;
              _context.next = 3;
              return _Configuration2.default.local().first();

            case 3:
              config = _context.sent;


              // Hash password
              hashedPassword = (0, _md2.default)(password, config.MD5_KEY);

              // Get the user

              _context.next = 7;
              return _User2.default.local().where('data.username', '=', username).get();

            case 7:
              dbUser = _context.sent;
              userFound = dbUser && dbUser[0] ? dbUser[0] : undefined;

              if (userFound) {
                _context.next = 11;
                break;
              }

              throw new Error();

            case 11:
              // Compare hashed passwords
              isValidUser = userFound.data.hashedPassword === hashedPassword;

              if (isValidUser) {
                _context.next = 14;
                break;
              }

              throw new Error();

            case 14:
              return _context.abrupt('return', userFound);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function localAuthenticate(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   *
   *
   * @param {any} credentials
   * @param {any} baseUrl
   * @param {any} role
   * @returns
   */
  var remoteAuthenticate = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(credentials, baseUrl, role) {
      var response, user;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _User2.default.login({ credentials: credentials, role: role });

            case 2:
              response = _context2.sent;
              user = response.data;
              _context2.next = 6;
              return _User2.default.updateUser(user);

            case 6:
              return _context2.abrupt('return', response);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function remoteAuthenticate(_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   *
   * Authenticates the User with the given credentials
   * @param {any} credentials
   * @param {any} baseUrl
   * @param {any} role
   * @returns
   */
  var authenticate = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(credentials, baseUrl, role) {
      var isOnline;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _Connection2.default.isOnline();

            case 2:
              isOnline = _context3.sent;

              if (!isOnline) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt('return', remoteAuthenticate(credentials, baseUrl, role));

            case 5:
              return _context3.abrupt('return', localAuthenticate(credentials, baseUrl));

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function authenticate(_x5, _x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   *
   *
   * @param {any} credentials
   * @param {any} baseUrl
   * @param {any} role
   * @returns
   */

  var attempt = function attempt(credentials, baseUrl, role) {
    var _this = this;

    role = role || 'user';

    return new _bluebird2.default(function (resolve, reject) {
      authenticate(credentials, baseUrl, role)
      // If credentials are OK
      .then(function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(response) {
          var headers, user, roles;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  headers = response.headers || {};
                  user = response.data;
                  /* eslint-disable*/

                  user.x_jwt_token = headers['x-jwt-token'];
                  /* eslint-enable*/

                  // Save auth user
                  localStorage.setItem('authUser', JSON.stringify(user));
                  localStorage.setItem('formioToken', headers['x-jwt-token']);
                  // user.isAdmin = true
                  _context4.next = 7;
                  return _Role2.default.local().first();

                case 7:
                  roles = _context4.sent;


                  user.rolesNames = [];
                  Object.keys(roles).forEach(function (key) {
                    if (key !== '$loki' && key !== '_id' && key !== 'meta') {
                      if (user.roles && user.roles.indexOf(roles[key]._id) !== -1) {
                        user.rolesNames.push(roles[key]);
                      }
                    }
                  });

                  localStorage.setItem('authUser', JSON.stringify(user));

                  resolve(user);

                case 12:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this);
        }));

        return function (_x8) {
          return _ref4.apply(this, arguments);
        };
      }())
      // If there are errors
      .catch(function (error) {
        console.log('There was an error over here!');
        reject(error);
      });
    });
  };
  /**
   *
   *
   * @returns
   */

  var user = function user() {
    try {
      var _user = JSON.parse(localStorage.getItem('authUser'));

      return _user === null ? false : _user;
    } catch (e) {
      localStorage.removeItem('authUser');
      return false;
    }
  };
  /**
   *
   *
   * @returns
   */

  var email = function email() {
    var email = '';

    if (Auth.user() && Auth.user().data && Auth.user().data.email) {
      email = Auth.user().data.email;
    } else if (Auth.user() && Auth.user().email) {
      email = Auth.user().email;
    }
    return email;
  };
  /**
   *
   *
   * @param {any} roleName
   * @returns
   */

  var hasRole = function hasRole(roleName) {
    var user = JSON.parse(localStorage.getItem('authUser'));

    user = user === null ? false : user;

    var result = user.rolesNames.find(function (r) {
      return r.title === roleName;
    });

    return typeof result !== 'undefined';
  };
  /**
   *
   *
   * @param {any} roles
   * @returns
   */

  var hasRoleIn = function hasRoleIn(roles) {
    if (!roles || _utilities2.default.isEmpty(roles)) {
      return true;
    }
    return roles.some(function (role) {
      return hasRole(role) || role === 'Authenticated';
    });
  };
  /**
   *
   *
   * @param {any} rolesIds
   * @returns
   */

  var hasRoleIdIn = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(rolesIds) {
      var appRoles, roles;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!rolesIds || _utilities2.default.isEmpty(rolesIds))) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt('return', true);

            case 2:
              _context5.next = 4;
              return _Role2.default.local().first();

            case 4:
              appRoles = _context5.sent;
              roles = rolesIds.reduce(function (reducer, roleId) {
                Object.keys(appRoles).forEach(function (role) {
                  if (appRoles[role] && appRoles[role]._id && appRoles[role]._id === roleId) {
                    reducer.push(appRoles[role].title);
                  }
                });
                return reducer;
              }, []);
              return _context5.abrupt('return', roles.some(function (role) {
                return hasRole(role) || role === 'Authenticated';
              }));

            case 7:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function hasRoleIdIn(_x9) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Checks if the current user is
   * Authenticated
   * @return {boolean}
   */

  var check = function check() {
    var user = JSON.parse(localStorage.getItem('authUser'));

    return !!user && !!user.x_jwt_token;
  };
  /**
   * Logs out autheticated user
   *
   */

  var logOut = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return localStorage.removeItem('authUser');

            case 2:
              _context6.next = 4;
              return localStorage.removeItem('formioToken');

            case 4:
              _context6.next = 6;
              return localStorage.removeItem('formioUser');

            case 6:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    return function logOut() {
      return _ref6.apply(this, arguments);
    };
  }();

  return Object.freeze({
    user: user,
    email: email,
    hasRoleIn: hasRoleIn,
    hasRoleIdIn: hasRoleIdIn,
    hasRole: hasRole,
    check: check,
    logOut: logOut,
    attempt: attempt
  });
}();

exports.default = Auth;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Model = __webpack_require__(2);

var _Model2 = _interopRequireDefault(_Model);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _Connection = __webpack_require__(6);

var _Connection2 = _interopRequireDefault(_Connection);

var _awaitToJs = __webpack_require__(9);

var _awaitToJs2 = _interopRequireDefault(_awaitToJs);

var _moment = __webpack_require__(3);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _Model2.default.compose({
  properties: {
    name: 'Role',
    remoteConnection: {
      path: 'access',
      token: undefined,
      pullForm: true
    }
  },
  methods: {
    set: function set(_ref) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url = _ref.url,
            appConf = _ref.appConf,
            forceOnline = _ref.forceOnline;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(appConf.offlineStart === 'true' && !forceOnline)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', _this.setOffline({ appConf: appConf }));

              case 2:
                return _context.abrupt('return', _this.setOnline({ url: url }));

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getRolesDate: function getRolesDate(localRoles) {
      return _utilities2.default.get(function () {
        return localRoles.fastUpdated;
      }, 0);
    },
    setOnline: function setOnline() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var error, remoteRoles, localRoles, isOnline, _ref2, _ref3, insertedRoles;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                error = void 0;
                remoteRoles = void 0;
                _context2.next = 4;
                return _this2.local().first();

              case 4:
                localRoles = _context2.sent;
                _context2.next = 7;
                return _Connection2.default.isOnline();

              case 7:
                isOnline = _context2.sent;

                if (!isOnline) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 11;
                return (0, _awaitToJs2.default)(_this2.remote().first());

              case 11:
                _ref2 = _context2.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                error = _ref3[0];
                remoteRoles = _ref3[1];

                if (!error) {
                  _context2.next = 17;
                  break;
                }

                throw new Error(error);

              case 17:

                remoteRoles = _utilities2.default.get(function () {
                  return remoteRoles.roles;
                });

                if (!remoteRoles) {
                  _context2.next = 27;
                  break;
                }

                if (!localRoles) {
                  _context2.next = 22;
                  break;
                }

                _context2.next = 22;
                return _this2.local().clear();

              case 22:
                remoteRoles.fastUpdated = (0, _moment2.default)().unix();

                _context2.next = 25;
                return _this2.local().insert(remoteRoles);

              case 25:
                insertedRoles = _context2.sent;
                return _context2.abrupt('return', insertedRoles);

              case 27:
                return _context2.abrupt('return', localRoles);

              case 28:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    setOffline: function setOffline(_ref4) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var appConf = _ref4.appConf;
        var localRoles, rolesDate, offlineRolesDate, insertedRoles;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.local().first();

              case 2:
                localRoles = _context3.sent;
                rolesDate = _this3.getRolesDate(localRoles);
                offlineRolesDate = appConf.offlineFiles.lastUpdated.date;

                if (!(offlineRolesDate > rolesDate || !localRoles)) {
                  _context3.next = 13;
                  break;
                }

                if (!localRoles) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 9;
                return _this3.local().clear();

              case 9:
                _context3.next = 11;
                return _this3.local().insert(appConf.offlineFiles.Roles);

              case 11:
                insertedRoles = _context3.sent;
                return _context3.abrupt('return', insertedRoles);

              case 13:
                return _context3.abrupt('return', localRoles);

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  }
})();

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = Array.isArray;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(14);

module.exports = function isStamp(arg) {
  return isFunction(arg) && isFunction(arg.compose);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = Object.assign;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(35);
var isObject = __webpack_require__(12);
var isArray = __webpack_require__(23);

/**
 * The 'src' argument plays the command role.
 * The returned values is always of the same type as the 'src'.
 * @param dst The object to merge into
 * @param src The object to merge from
 * @returns {*}
 */
function mergeOne(dst, src) {
  if (src === undefined) return dst;

  // According to specification arrays must be concatenated.
  // Also, the '.concat' creates a new array instance. Overrides the 'dst'.
  if (isArray(src)) return (isArray(dst) ? dst : []).concat(src);

  // Now deal with non plain 'src' object. 'src' overrides 'dst'
  // Note that functions are also assigned! We do not deep merge functions.
  if (!isPlainObject(src)) return src;

  // See if 'dst' is allowed to be mutated.
  // If not - it's overridden with a new plain object.
  var returnValue = isObject(dst) ? dst : {};

  var keys = Object.keys(src);
  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];

    var srcValue = src[key];
    // Do not merge properties with the 'undefined' value.
    if (srcValue !== undefined) {
      var dstValue = returnValue[key];
      // Recursive calls to mergeOne() must allow only plain objects or arrays in dst
      var newDst = isPlainObject(dstValue) || isArray(srcValue) ? dstValue : {};

      // deep merge each property. Recursion!
      returnValue[key] = mergeOne(newDst, srcValue);
    }
  }

  return returnValue;
}

module.exports = function (dst) {
  for (var i = 1; i < arguments.length; i++) {
    dst = mergeOne(dst, arguments[i]);
  }
  return dst;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(42);
var bytesToUuid = __webpack_require__(43);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _User = __webpack_require__(19);

var _User2 = _interopRequireDefault(_User);

var _Auth = __webpack_require__(20);

var _Auth2 = _interopRequireDefault(_Auth);

var _Submission = __webpack_require__(10);

var _Submission2 = _interopRequireDefault(_Submission);

var _OfflineData = __webpack_require__(52);

var _OfflineData2 = _interopRequireDefault(_OfflineData);

var _Scheduler = __webpack_require__(30);

var _Scheduler2 = _interopRequireDefault(_Scheduler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sync = function () {
  function Sync() {
    _classCallCheck(this, Sync);
  }

  _createClass(Sync, null, [{
    key: 'now',

    /**
     *
     * @param {*} vm
     */
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(vm) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Sync.syncUsers();

              case 2:
                if (!_Auth2.default.check()) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return Sync.syncSubmission(vm);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function now(_x) {
        return _ref.apply(this, arguments);
      }

      return now;
    }()
    /**
     *
     * @param {*} db
     * @param {*} vm
     */

  }, {
    key: 'syncSubmission',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var usersAreSync, unsyncSubmissions, isSyncing;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Sync.areUsersSynced();

              case 2:
                usersAreSync = _context2.sent;

                if (usersAreSync) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt('return');

              case 5:
                _context2.next = 7;
                return (0, _Submission2.default)('*').getUnsync();

              case 7:
                unsyncSubmissions = _context2.sent;
                _context2.next = 10;
                return _Scheduler2.default.isSyncing();

              case 10:
                isSyncing = _context2.sent;


                if (unsyncSubmissions.length > 0 && !isSyncing) {
                  _OfflineData2.default.send(unsyncSubmissions);
                }

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function syncSubmission() {
        return _ref2.apply(this, arguments);
      }

      return syncSubmission;
    }()
    /**
     *
     */

  }, {
    key: 'getUsersToSync',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _User2.default.local().where('sync', '=', false).andWhere('queuedForSync', '=', false).andWhere('syncError', '=', false).get();

              case 2:
                return _context3.abrupt('return', _context3.sent);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUsersToSync() {
        return _ref3.apply(this, arguments);
      }

      return getUsersToSync;
    }()
    /**
     *
     */

  }, {
    key: 'areUsersSynced',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var users;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Sync.getUsersToSync();

              case 2:
                users = _context4.sent;
                return _context4.abrupt('return', !!users && Array.isArray(users) && users.length === 0);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function areUsersSynced() {
        return _ref4.apply(this, arguments);
      }

      return areUsersSynced;
    }()
    /**
     *
     * @param {*} param
     */

  }, {
    key: 'syncUsers',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var users, isSyncing;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Sync.getUsersToSync();

              case 2:
                users = _context5.sent;
                _context5.next = 5;
                return _Scheduler2.default.isSyncing();

              case 5:
                isSyncing = _context5.sent;


                if (Array.isArray(users) && users.length > 0 && !isSyncing) {
                  _OfflineData2.default.syncUsers(users);
                }

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function syncUsers() {
        return _ref5.apply(this, arguments);
      }

      return syncUsers;
    }()
  }]);

  return Sync;
}();

exports.default = Sync;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__29__;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FastIsSyncing = false;
var Scheduler = function () {
  function Scheduler() {
    _classCallCheck(this, Scheduler);
  }

  _createClass(Scheduler, null, [{
    key: "isSyncing",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", FastIsSyncing);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function isSyncing() {
        return _ref.apply(this, arguments);
      }

      return isSyncing;
    }()
  }, {
    key: "startSync",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                FastIsSyncing = true;
                return _context2.abrupt("return", this.isSyncing());

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function startSync() {
        return _ref2.apply(this, arguments);
      }

      return startSync;
    }()
  }, {
    key: "stopSync",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                FastIsSyncing = false;
                return _context3.abrupt("return", this.isSyncing());

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function stopSync() {
        return _ref3.apply(this, arguments);
      }

      return stopSync;
    }()
  }]);

  return Scheduler;
}();

exports.default = Scheduler;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utilities = exports.Sync = exports.Hash = exports.Role = exports.OfflinePlugin = exports.User = exports.Import = exports.Translation = exports.Configuration = exports.ParallelSurvey = exports.Submission = exports.Pages = exports.Form = exports.Auth = exports.Connection = exports.FAST = exports.Event = exports.Moment = exports.Fluent = exports.Model = exports.formioLoki = exports.formio = exports.loki = undefined;

var _start = __webpack_require__(32);

var _start2 = _interopRequireDefault(_start);

var _Auth = __webpack_require__(20);

var _Auth2 = _interopRequireDefault(_Auth);

var _Connection = __webpack_require__(6);

var _Connection2 = _interopRequireDefault(_Connection);

var _Event = __webpack_require__(13);

var _Event2 = _interopRequireDefault(_Event);

var _moment = __webpack_require__(53);

var _moment2 = _interopRequireDefault(_moment);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

var _Pages = __webpack_require__(18);

var _Pages2 = _interopRequireDefault(_Pages);

var _Submission = __webpack_require__(10);

var _Submission2 = _interopRequireDefault(_Submission);

var _ParallelSurvey = __webpack_require__(54);

var _ParallelSurvey2 = _interopRequireDefault(_ParallelSurvey);

var _Configuration = __webpack_require__(1);

var _Configuration2 = _interopRequireDefault(_Configuration);

var _Translation = __webpack_require__(17);

var _Translation2 = _interopRequireDefault(_Translation);

var _Import = __webpack_require__(55);

var _Import2 = _interopRequireDefault(_Import);

var _User = __webpack_require__(19);

var _User2 = _interopRequireDefault(_User);

var _offlinePlugin = __webpack_require__(56);

var _offlinePlugin2 = _interopRequireDefault(_offlinePlugin);

var _Role = __webpack_require__(21);

var _Role2 = _interopRequireDefault(_Role);

var _Hash = __webpack_require__(58);

var _Hash2 = _interopRequireDefault(_Hash);

var _Sync = __webpack_require__(28);

var _Sync2 = _interopRequireDefault(_Sync);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _Fluent = __webpack_require__(7);

var _Fluent2 = _interopRequireDefault(_Fluent);

var _Model = __webpack_require__(2);

var _Model2 = _interopRequireDefault(_Model);

var _FluentConnector = __webpack_require__(38);

var _FluentConnector2 = _interopRequireDefault(_FluentConnector);

var _FluentConnector3 = __webpack_require__(45);

var _FluentConnector4 = _interopRequireDefault(_FluentConnector3);

var _FluentConnector5 = __webpack_require__(46);

var _FluentConnector6 = _interopRequireDefault(_FluentConnector5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.loki = _FluentConnector2.default;
exports.formio = _FluentConnector4.default;
exports.formioLoki = _FluentConnector6.default;
exports.Model = _Model2.default;
exports.Fluent = _Fluent2.default;
exports.Moment = _moment2.default;
exports.Event = _Event2.default;
exports.FAST = _start2.default;
exports.Connection = _Connection2.default;
exports.Auth = _Auth2.default;
exports.Form = _Form2.default;
exports.Pages = _Pages2.default;
exports.Submission = _Submission2.default;
exports.ParallelSurvey = _ParallelSurvey2.default;
exports.Configuration = _Configuration2.default;
exports.Translation = _Translation2.default;
exports.Import = _Import2.default;
exports.User = _User2.default;
exports.OfflinePlugin = _offlinePlugin2.default;
exports.Role = _Role2.default;
exports.Hash = _Hash2.default;
exports.Sync = _Sync2.default;
exports.Utilities = _utilities2.default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Configuration = __webpack_require__(1);

var _Configuration2 = _interopRequireDefault(_Configuration);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

var _Translation = __webpack_require__(17);

var _Translation2 = _interopRequireDefault(_Translation);

var _Pages = __webpack_require__(18);

var _Pages2 = _interopRequireDefault(_Pages);

var _SyncInterval = __webpack_require__(50);

var _SyncInterval2 = _interopRequireDefault(_SyncInterval);

var _Role = __webpack_require__(21);

var _Role2 = _interopRequireDefault(_Role);

var _Fluent = __webpack_require__(7);

var _Fluent2 = _interopRequireDefault(_Fluent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* eslint-disable no-unused-vars */
var FAST = function () {
  /**
   * Loads all configuration for the FAST app
   * This is the main start function and mandatory
   * to execute if you will use it!
   *
   * @param {*} conf
   * @param {*} conf.appConf Configuration of the App
   */
  var start = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var appConf = _ref.appConf,
          forceOnline = _ref.forceOnline;
      var config, appTranslations;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!forceOnline) {
                _Fluent2.default.setConfig({
                  FLUENT_FORMIO_BASEURL: appConf.fluentFormioBaseUrl,
                  FAST_CONFIG_ID: appConf.appConfigId,
                  FAST_CONFIG_URL: appConf.appConfigUrl,
                  OFFLINE_START: appConf.offlineStart
                });
                _SyncInterval2.default.set(3000);
              }

              _context.next = 3;
              return _Configuration2.default.set({ appConf: appConf, forceOnline: forceOnline });

            case 3:
              config = _context.sent;
              _context.next = 6;
              return _Role2.default.set({ appConf: appConf, forceOnline: forceOnline });

            case 6:
              _context.next = 8;
              return _Pages2.default.set({ appConf: appConf, forceOnline: forceOnline });

            case 8:
              _context.next = 10;
              return _Form2.default.set({ appConf: appConf, forceOnline: forceOnline });

            case 10:
              _context.next = 12;
              return _Translation2.default.set({ appConf: appConf, forceOnline: forceOnline });

            case 12:
              appTranslations = _context.sent;
              return _context.abrupt('return', {
                config: config,
                translations: appTranslations,
                defaultLanguage: localStorage.getItem('defaultLenguage') || 'en'
              });

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function start(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   *
   * Triggers a full Online update of all Configuration,
   * Forms, Pages and Roles of the application.
   *
   * @param {Object} conf
   * @param {Object} conf.appConf Configuration of the App
   * @returns
   */


  var sync = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
      var appConf = _ref3.appConf;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', start({ appConf: appConf, forceOnline: true }));

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function sync(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  return Object.freeze({
    start: start,
    sync: sync
  });
}();

exports.default = FAST;

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// More proper implementation would be
// isDescriptor(obj) || isStamp(obj)
// but there is no sense since stamp is function and function is object.
module.exports = __webpack_require__(12);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' &&
    Object.getPrototypeOf(value) === Object.prototype;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var compose = __webpack_require__(11);

function createShortcut(propName) {
  return function (arg) {
    'use strict';
    var param = {};
    param[propName] = arg;
    return this && this.compose ? this.compose(param) : compose(param);
  };
}

var properties = createShortcut('properties');
var staticProperties = createShortcut('staticProperties');
var configuration = createShortcut('configuration');
var deepProperties = createShortcut('deepProperties');
var staticDeepProperties = createShortcut('staticDeepProperties');
var deepConfiguration = createShortcut('deepConfiguration');
var initializers = createShortcut('initializers');

module.exports = compose({
  staticProperties: {
    methods: createShortcut('methods'),

    props: properties,
    properties: properties,

    statics: staticProperties,
    staticProperties: staticProperties,

    conf: configuration,
    configuration: configuration,

    deepProps: deepProperties,
    deepProperties: deepProperties,

    deepStatics: staticDeepProperties,
    staticDeepProperties: staticDeepProperties,

    deepConf: deepConfiguration,
    deepConfiguration: deepConfiguration,

    init: initializers,
    initializers: initializers,

    composers: createShortcut('composers'),

    propertyDescriptors: createShortcut('propertyDescriptors'),

    staticPropertyDescriptors: createShortcut('staticPropertyDescriptors')
  }
});


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function isString(arg) {
  return typeof arg === 'string';
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Database = __webpack_require__(39);

var _Database2 = _interopRequireDefault(_Database);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _v = __webpack_require__(27);

var _v2 = _interopRequireDefault(_v);

var _Interface = __webpack_require__(15);

var _Interface2 = _interopRequireDefault(_Interface);

var _it = __webpack_require__(5);

var _it2 = _interopRequireDefault(_it);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (0, _it2.default)(_Interface2.default, {
  methods: {
    /**
     *
     */
    get: function get() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var filterObject, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                filterObject = _this.prepareFilter();
                _context.next = 3;
                return _this.getModel();

              case 3:
                _context.t0 = filterObject;
                _context.t1 = _this.offsetNumber;
                _context.t2 = _this.limitNumber;
                _context.next = 8;
                return _context.sent.chain().find(_context.t0).offset(_context.t1).limit(_context.t2).data();

              case 8:
                data = _context.sent;


                data = _this.jsApplySelect(data);
                data = _this.jsApplyOrderBy(data);

                return _context.abrupt('return', data);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    /**
     *
     */
    prepareFilter: function prepareFilter() {
      var _this2 = this;

      var andObject = { $and: [] };
      var orObject = { $or: [] };
      var globalFilter = {};

      // All first Level AND conditions
      if (this.whereArray.length > 0) {
        this.whereArray.forEach(function (c) {
          var conditionToObject = {};

          if (c[0].includes('[')) {
            throw new Error('Error in: "' + c[0] + '" "Where" close does not work with Array elements');
          }

          conditionToObject[c[0]] = {};
          var lokiOperator = _this2.getLokiOperator(c[1]);

          conditionToObject[c[0]][lokiOperator] = c[2];
          if (lokiOperator.includes('$regex|')) {
            delete conditionToObject[c[0]][lokiOperator];
            conditionToObject[c[0]]['$regex'] = lokiOperator.replace('$regex|', '').replace('{{$var}}', c[2]);
          }

          andObject['$and'].push(conditionToObject);
        });
        globalFilter = andObject;
      }
      // All second level OR conditions
      if (this.orWhereArray.length > 0) {
        this.orWhereArray.forEach(function (c) {
          var conditionToObject = {};

          conditionToObject[c[0]] = {};
          var lokiOperator = _this2.getLokiOperator(c[1]);

          conditionToObject[c[0]][lokiOperator] = c[2];
          if (lokiOperator.includes('$regex|')) {
            delete conditionToObject[c[0]][lokiOperator];
            conditionToObject[c[0]]['$regex'] = lokiOperator.replace('$regex|', '').replace('{{$var}}', c[2]);
          }

          orObject['$or'].push(conditionToObject);
        });

        globalFilter = { $or: [andObject, orObject] };
      }

      // TODO we should include global level and() or()
      // operators to give room for more complex queries
      return globalFilter;
    },

    /**
     *
     * @param {*} operator
     */
    getLokiOperator: function getLokiOperator(operator) {
      if (!this.operators.includes(operator)) {
        throw new Error('The "' + operator + '" operator is not supported');
      }

      var lokiOperators = {
        '=': '$eq',
        '<': '$lt',
        '>': '$gt',
        '<=': '$lte',
        '>=': '$gte',
        '<>': '$ne',
        '!=': '$ne',
        like: '$aeq',
        regexp: '$regex',
        startsWith: '$regex|^{{$var}}',
        endsWith: '$regex|{{$var}}$',
        contains: '$regex|{{$var}}'
      };
      var converted = _utilities2.default.get(function () {
        return lokiOperators[operator];
      }, undefined);

      if (!converted) {
        throw new Error('The operator "' + operator + '" is not supported in Loki ');
      }
      return converted;
    },

    /**
     *
     * @param {Object} db The name of the model to fetch
     * @param {String} db.model The name of the model to fetch
     * @returns {Promise} The DB model
     */
    getModel: function getModel() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var DB;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _Database2.default.get();

              case 2:
                DB = _context2.sent;
                return _context2.abrupt('return', DB.getCollection(_this3.name));

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },

    /**
     *
     */
    all: function all() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var model;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.getModel();

              case 2:
                model = _context3.sent;
                return _context3.abrupt('return', model.find());

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      }))();
    },

    /**
     * [remove description]
     * @param  {[type]} document [description]
     * @return {[type]}          [description]
     */
    remove: function remove(_id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var model;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (_id) {
                  _context4.next = 2;
                  break;
                }

                throw new Error('No id assign to remove().You must give and _id to delete');

              case 2:
                if (_id.includes('_local')) {
                  _context4.next = 4;
                  break;
                }

                throw new Error('You can`t delete non local submissions');

              case 4:
                _context4.next = 6;
                return _this5.getModel();

              case 6:
                model = _context4.sent;
                return _context4.abrupt('return', model.findAndRemove({ _id: _id }));

              case 8:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this5);
      }))();
    },

    /**
     * [insert description]
     * @param  {Object, Array} element [description]
     * @return {[type]}         [description]
     */
    insert: function insert(data, options) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var model;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!Array.isArray(data)) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return', _this6.ArrayInsert(data, options));

              case 2:
                data = _utilities2.default.cloneDeep(data);

                _context5.next = 5;
                return _this6.getModel();

              case 5:
                model = _context5.sent;


                data._id = (0, _v2.default)() + '_local';

                return _context5.abrupt('return', model.insert(data));

              case 8:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this6);
      }))();
    },

    /**
     * [update description]
     * @param  {[type]} document [description]
     * @return {[type]}          [description]
     */
    update: function update(document) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var model, local, mod;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (document._id) {
                  _context6.next = 2;
                  break;
                }

                throw new Error('Loki connector error. Cannot update a Model without _id key');

              case 2:
                _context6.next = 4;
                return _this7.getModel();

              case 4:
                model = _context6.sent;


                document.modified = Math.round(+new Date() / 1000);
                _context6.next = 8;
                return model.findOne({ _id: document._id });

              case 8:
                local = _context6.sent;
                mod = _extends({}, local, document);
                return _context6.abrupt('return', model.update(mod));

              case 11:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this7);
      }))();
    },

    /**
     *
     * @param {*} param0
     */
    updateOrCreate: function updateOrCreate(_ref) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var document = _ref.document;
        var model, role;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this8.getModel();

              case 2:
                model = _context7.sent;
                _context7.next = 5;
                return model.findOne(document);

              case 5:
                role = _context7.sent;


                if (!role) {
                  model.insert(document);
                }

              case 7:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this8);
      }))();
    },

    /**
     *
     * @param {*} param0
     */
    findAndRemove: function findAndRemove(_ref2) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var filter = _ref2.filter;
        var model;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this9.getModel();

              case 2:
                model = _context8.sent;
                return _context8.abrupt('return', model.findAndRemove(filter));

              case 4:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this9);
      }))();
    },

    /**
     *
     * @param {*} param0
     */
    clear: function clear() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var model;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this10.getModel();

              case 2:
                model = _context9.sent;
                return _context9.abrupt('return', model.clear({ removeIndices: true }));

              case 4:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this10);
      }))();
    },

    /**
     *
     * @param {*} user
     */
    own: function own(user) {
      // TODO user should be auth user
      if (!user) {
        throw new Error('own() method requires a specific user to filter the submissions');
      }
      this.andWhere('user_email', '=', user);
    },

    /**
     *
     * @param {*} user
     */
    owner: function owner(user) {
      if (!user) {
        throw new Error('owner() method requires a specific user to filter the submissions');
      }
      this.andWhere('user_email', '=', user);
    }
  }
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bluebird = __webpack_require__(8);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _lokijs = __webpack_require__(40);

var _lokijs2 = _interopRequireDefault(_lokijs);

var _lokiIndexedAdapter = __webpack_require__(41);

var _lokiIndexedAdapter2 = _interopRequireDefault(_lokiIndexedAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var DB = null;
var Database = function () {
  /*
  |--------------------------------------------------------------------------
  | LockiDB Config
  |--------------------------------------------------------------------------
  | Configuration for the Local DB creation.
  |
  */
  var getModels = function getModels() {
    var models = typeof window !== 'undefined' && window && window._FLUENT_ && window._FLUENT_.models ? window._FLUENT_.models : global && global._FLUENT_ && global._FLUENT_.models ? global._FLUENT_.models : undefined;

    return models;
  };
  /**
   *
   *
   * @param {Object} configuration- The configuration for the DB
   * @param {string} configuration.env - Environment i.e 'production'
   * @returns
   */
  var _create = function _create(_ref) {
    var env = _ref.env;

    return new _bluebird2.default(function (resolve) {
      var idbAdapter = void 0;
      var pa = void 0;
      var db = void 0;

      var dbConfig = {
        autosave: true,
        autosaveInterval: 1000,
        autoload: true,
        /* eslint-disable no-use-before-define */
        autoloadCallback: databaseInitialize,
        throttledSaves: false
      };

      try {
        idbAdapter = new _lokiIndexedAdapter2.default('FAST');
        pa = new _lokijs2.default.LokiPartitioningAdapter(idbAdapter, {
          paging: true
        });

        db = new _lokijs2.default('FAST', _extends({}, dbConfig, { adapter: pa }));
      } catch (error) {
        db = new _lokijs2.default('FAST', dbConfig);
      }

      function databaseInitialize() {
        var baseModels = getModels();
        if (!baseModels) {
          throw new Error('Cannot Start FLUENT, no models registered or you dont have access to the "window" or "global" variable');
        }

        Object.keys(baseModels).forEach(function (model) {
          var dbModel = db.getCollection(model);

          if (!dbModel) {
            db.addCollection(model);
          }
        });
        resolve(db);
      }
    });
  };
  /**
   * Checks if the DB is created or if new
   * Models need to be added to the DB
   * @returns {Boolean}
   */
  var shouldRecreate = function shouldRecreate() {
    if (!DB) {
      return true;
    }
    var windowModels = getModels();
    var dbModels = DB.collections.reduce(function (acc, collection) {
      acc.push(collection.name);
      return acc;
    }, []);
    var should = !Object.keys(windowModels).every(function (element) {
      return dbModels.includes(element);
    });
    return should;
  };
  /**
   *
   *
   * @export
   * @param {Object} configuration- The configuration for the DB
   * @param {string} configuration.env - Environment i.e 'production'
   * @returns
   */
  var get = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$env = _ref3.env,
          env = _ref3$env === undefined ? 'prod' : _ref3$env;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!shouldRecreate()) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return _create({ env: env });

            case 3:
              DB = _context.sent;

            case 4:
              return _context.abrupt('return', DB);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function get() {
      return _ref2.apply(this, arguments);
    };
  }();

  return Object.freeze({
    get: get
  });
}();

exports.default = Database;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__40__;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
  Loki IndexedDb Adapter (need to include this script to use it)

  Console Usage can be used for management/diagnostic, here are a few examples :
  adapter.getDatabaseList(); // with no callback passed, this method will log results to console
  adapter.saveDatabase('UserDatabase', JSON.stringify(myDb));
  adapter.loadDatabase('UserDatabase'); // will log the serialized db to console
  adapter.deleteDatabase('UserDatabase');
*/

(function (root, factory) {
    if (true) {
        // AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
  return (function() {

    /**
     * Loki persistence adapter class for indexedDb.
     *     This class fulfills abstract adapter interface which can be applied to other storage methods. 
     *     Utilizes the included LokiCatalog app/key/value database for actual database persistence.
     *     Indexeddb is highly async, but this adapter has been made 'console-friendly' as well.
     *     Anywhere a callback is omitted, it should return results (if applicable) to console.
     *     IndexedDb storage is provided per-domain, so we implement app/key/value database to 
     *     allow separate contexts for separate apps within a domain.
     *
     * @example
     * var idbAdapter = new LokiIndexedAdapter('finance');
     *
     * @constructor LokiIndexedAdapter
     *
     * @param {string} appname - (Optional) Application name context can be used to distinguish subdomains, 'loki' by default
     */
    function LokiIndexedAdapter(appname)
    {
      this.app = 'loki';

      if (typeof (appname) !== 'undefined')
      {
        this.app = appname;
      }

      // keep reference to catalog class for base AKV operations
      this.catalog = null;

      if (!this.checkAvailability()) {
        throw new Error('indexedDB does not seem to be supported for your environment');
      }
    }

    /**
     * Used to check if adapter is available
     *
     * @returns {boolean} true if indexeddb is available, false if not.
     * @memberof LokiIndexedAdapter
     */
    LokiIndexedAdapter.prototype.checkAvailability = function()
    {
      if (typeof indexedDB !== 'undefined' && indexedDB) return true;

      return false;
    };

    /**
     * Retrieves a serialized db string from the catalog.
     *
     * @example
     * // LOAD
     * var idbAdapter = new LokiIndexedAdapter('finance');
     * var db = new loki('test', { adapter: idbAdapter });
     *   db.loadDatabase(function(result) {
     *   console.log('done');
     * });
     *
     * @param {string} dbname - the name of the database to retrieve.
     * @param {function} callback - callback should accept string param containing serialized db string.
     * @memberof LokiIndexedAdapter
     */
    LokiIndexedAdapter.prototype.loadDatabase = function(dbname, callback)
    {
      var appName = this.app;
      var adapter = this;

      // lazy open/create db reference so dont -need- callback in constructor
      if (this.catalog === null || this.catalog.db === null) {
        this.catalog = new LokiCatalog(function(cat) {
          adapter.catalog = cat;

          adapter.loadDatabase(dbname, callback);
        });

        return;
      }

      // lookup up db string in AKV db
      this.catalog.getAppKey(appName, dbname, function(result) {
        if (typeof (callback) === 'function') {
          if (result.id === 0) {
            callback(null);
            return;
          }
          callback(result.val);
        }
        else {
          // support console use of api
          console.log(result.val);
        }
      });
    };

    // alias
    LokiIndexedAdapter.prototype.loadKey = LokiIndexedAdapter.prototype.loadDatabase;

    /**
     * Saves a serialized db to the catalog.
     *
     * @example
     * // SAVE : will save App/Key/Val as 'finance'/'test'/{serializedDb}
     * var idbAdapter = new LokiIndexedAdapter('finance');
     * var db = new loki('test', { adapter: idbAdapter });
     * var coll = db.addCollection('testColl');
     * coll.insert({test: 'val'});
     * db.saveDatabase();  // could pass callback if needed for async complete
     *
     * @param {string} dbname - the name to give the serialized database within the catalog.
     * @param {string} dbstring - the serialized db string to save.
     * @param {function} callback - (Optional) callback passed obj.success with true or false
     * @memberof LokiIndexedAdapter
     */
    LokiIndexedAdapter.prototype.saveDatabase = function(dbname, dbstring, callback)
    {
      var appName = this.app;
      var adapter = this;

      function saveCallback(result) {
        if (result && result.success === true) {
          callback(null);
        }
        else {
          callback(new Error("Error saving database"));
        }
      }

      // lazy open/create db reference so dont -need- callback in constructor
      if (this.catalog === null || this.catalog.db === null) {
        this.catalog = new LokiCatalog(function(cat) {
          adapter.catalog = cat;

          // now that catalog has been initialized, set (add/update) the AKV entry
          cat.setAppKey(appName, dbname, dbstring, saveCallback);
        });

        return;
      }

      // set (add/update) entry to AKV database
      this.catalog.setAppKey(appName, dbname, dbstring, saveCallback);
    };

    // alias
    LokiIndexedAdapter.prototype.saveKey = LokiIndexedAdapter.prototype.saveDatabase;

    /**
     * Deletes a serialized db from the catalog.
     *
     * @example
     * // DELETE DATABASE
     * // delete 'finance'/'test' value from catalog
     * idbAdapter.deleteDatabase('test', function {
     *   // database deleted
     * });
     *
     * @param {string} dbname - the name of the database to delete from the catalog.
     * @param {function=} callback - (Optional) executed on database delete
     * @memberof LokiIndexedAdapter
     */
    LokiIndexedAdapter.prototype.deleteDatabase = function(dbname, callback)
    {
      var appName = this.app;
      var adapter = this;

      // lazy open/create db reference and pass callback ahead
      if (this.catalog === null || this.catalog.db === null) {
        this.catalog = new LokiCatalog(function(cat) {
          adapter.catalog = cat;

          adapter.deleteDatabase(dbname, callback);
        });

        return;
      }

      // catalog was already initialized, so just lookup object and delete by id
      this.catalog.getAppKey(appName, dbname, function(result) {
        var id = result.id;

        if (id !== 0) {
          adapter.catalog.deleteAppKey(id, callback);
        } else if (typeof (callback) === 'function') {
          callback({ success: true });
        }
      });
    };

    // alias
    LokiIndexedAdapter.prototype.deleteKey = LokiIndexedAdapter.prototype.deleteDatabase;

    /**
     * Removes all database partitions and pages with the base filename passed in.
     * This utility method does not (yet) guarantee async deletions will be completed before returning
     *
     * @param {string} dbname - the base filename which container, partitions, or pages are derived
     * @memberof LokiIndexedAdapter
     */
    LokiIndexedAdapter.prototype.deleteDatabasePartitions = function(dbname) {
      var self=this;
      this.getDatabaseList(function(result) {
        result.forEach(function(str) {
          if (str.startsWith(dbname)) {
            self.deleteDatabase(str);
          }
        });
      });
    };

    /**
     * Retrieves object array of catalog entries for current app.
     *
     * @example
     * idbAdapter.getDatabaseList(function(result) {
     *   // result is array of string names for that appcontext ('finance')
     *   result.forEach(function(str) {
     *     console.log(str);
     *   });
     * });
     *
     * @param {function} callback - should accept array of database names in the catalog for current app.
     * @memberof LokiIndexedAdapter
     */
    LokiIndexedAdapter.prototype.getDatabaseList = function(callback)
    {
      var appName = this.app;
      var adapter = this;

      // lazy open/create db reference so dont -need- callback in constructor
      if (this.catalog === null || this.catalog.db === null) {
        this.catalog = new LokiCatalog(function(cat) {
          adapter.catalog = cat;

          adapter.getDatabaseList(callback);
        });

        return;
      }

      // catalog already initialized
      // get all keys for current appName, and transpose results so just string array
      this.catalog.getAppKeys(appName, function(results) {
        var names = [];

        for(var idx = 0; idx < results.length; idx++) {
          names.push(results[idx].key);
        }

        if (typeof (callback) === 'function') {
          callback(names);
        }
        else {
          names.forEach(function(obj) {
            console.log(obj);
          });
        }
      });
    };

    // alias
    LokiIndexedAdapter.prototype.getKeyList = LokiIndexedAdapter.prototype.getDatabaseList;

    /**
     * Allows retrieval of list of all keys in catalog along with size
     *
     * @param {function} callback - (Optional) callback to accept result array.
     * @memberof LokiIndexedAdapter
     */
    LokiIndexedAdapter.prototype.getCatalogSummary = function(callback)
    {
      var appName = this.app;
      var adapter = this;

      // lazy open/create db reference
      if (this.catalog === null || this.catalog.db === null) {
        this.catalog = new LokiCatalog(function(cat) {
          adapter.catalog = cat;

          adapter.getCatalogSummary(callback);
        });

        return;
      }

      // catalog already initialized
      // get all keys for current appName, and transpose results so just string array
      this.catalog.getAllKeys(function(results) {
        var entries = [];
        var obj,
          size,
          oapp,
          okey,
          oval;

        for(var idx = 0; idx < results.length; idx++) {
          obj = results[idx];
          oapp = obj.app || '';
          okey = obj.key || '';
          oval = obj.val || '';

          // app and key are composited into an appkey column so we will mult by 2
          size = oapp.length * 2 + okey.length * 2 + oval.length + 1;

          entries.push({ "app": obj.app, "key": obj.key, "size": size });
        }

        if (typeof (callback) === 'function') {
          callback(entries);
        }
        else {
          entries.forEach(function(obj) {
            console.log(obj);
          });
        }
      });
    };

    /**
     * LokiCatalog - underlying App/Key/Value catalog persistence
     *    This non-interface class implements the actual persistence.
     *    Used by the IndexedAdapter class.
     */
    function LokiCatalog(callback)
    {
      this.db = null;
      this.initializeLokiCatalog(callback);
    }

    LokiCatalog.prototype.initializeLokiCatalog = function(callback) {
      var openRequest = indexedDB.open('LokiCatalog', 1);
      var cat = this;

      // If database doesn't exist yet or its version is lower than our version specified above (2nd param in line above)
      openRequest.onupgradeneeded = function(e) {
        var thisDB = e.target.result;
        if (thisDB.objectStoreNames.contains('LokiAKV')) {
          thisDB.deleteObjectStore('LokiAKV');
        }

        if(!thisDB.objectStoreNames.contains('LokiAKV')) {
          var objectStore = thisDB.createObjectStore('LokiAKV', { keyPath: 'id', autoIncrement:true });
          objectStore.createIndex('app', 'app', {unique:false});
          objectStore.createIndex('key', 'key', {unique:false});
          // hack to simulate composite key since overhead is low (main size should be in val field)
          // user (me) required to duplicate the app and key into comma delimited appkey field off object
          // This will allow retrieving single record with that composite key as well as
          // still supporting opening cursors on app or key alone
          objectStore.createIndex('appkey', 'appkey', {unique:true});
        }
      };

      openRequest.onsuccess = function(e) {
        cat.db = e.target.result;

        if (typeof (callback) === 'function') callback(cat);
      };

      openRequest.onerror = function(e) {
        throw e;
      };
    };

    LokiCatalog.prototype.getAppKey = function(app, key, callback) {
      var transaction = this.db.transaction(['LokiAKV'], 'readonly');
      var store = transaction.objectStore('LokiAKV');
      var index = store.index('appkey');
      var appkey = app + "," + key;
      var request = index.get(appkey);

      request.onsuccess = (function(usercallback) {
        return function(e) {
          var lres = e.target.result;

          if (lres === null || typeof(lres) === 'undefined') {
            lres = {
              id: 0,
              success: false
            };
          }

          if (typeof(usercallback) === 'function') {
            usercallback(lres);
          }
          else {
            console.log(lres);
          }
        };
      })(callback);

      request.onerror = (function(usercallback) {
        return function(e) {
          if (typeof(usercallback) === 'function') {
            usercallback({ id: 0, success: false });
          }
          else {
            throw e;
          }
        };
      })(callback);
    };

    LokiCatalog.prototype.getAppKeyById = function (id, callback, data) {
      var transaction = this.db.transaction(['LokiAKV'], 'readonly');
      var store = transaction.objectStore('LokiAKV');
      var request = store.get(id);

      request.onsuccess = (function(data, usercallback){
        return function(e) {
          if (typeof(usercallback) === 'function') {
            usercallback(e.target.result, data);
          }
          else {
            console.log(e.target.result);
          }
        };
      })(data, callback);
    };

    LokiCatalog.prototype.setAppKey = function (app, key, val, callback) {
      var transaction = this.db.transaction(['LokiAKV'], 'readwrite');
      var store = transaction.objectStore('LokiAKV');
      var index = store.index('appkey');
      var appkey = app + "," + key;
      var request = index.get(appkey);

      // first try to retrieve an existing object by that key
      // need to do this because to update an object you need to have id in object, otherwise it will append id with new autocounter and clash the unique index appkey
      request.onsuccess = function(e) {
        var res = e.target.result;

        if (res === null || res === undefined) {
          res = {
            app:app,
            key:key,
            appkey: app + ',' + key,
            val:val
          };
        }
        else {
          res.val = val;
        }

        var requestPut = store.put(res);

        requestPut.onerror = (function(usercallback) {
          return function(e) {
            if (typeof(usercallback) === 'function') {
              usercallback({ success: false });
            }
            else {
              console.error('LokiCatalog.setAppKey (set) onerror');
              console.error(request.error);
            }
          };

        })(callback);

        requestPut.onsuccess = (function(usercallback) {
          return function(e) {
            if (typeof(usercallback) === 'function') {
              usercallback({ success: true });
            }
          };
        })(callback);
      };

      request.onerror = (function(usercallback) {
        return function(e) {
          if (typeof(usercallback) === 'function') {
            usercallback({ success: false });
          }
          else {
            console.error('LokiCatalog.setAppKey (get) onerror');
            console.error(request.error);
          }
        };
      })(callback);
    };

    LokiCatalog.prototype.deleteAppKey = function (id, callback) {
      var transaction = this.db.transaction(['LokiAKV'], 'readwrite');
      var store = transaction.objectStore('LokiAKV');
      var request = store.delete(id);

      request.onsuccess = (function(usercallback) {
        return function(evt) {
          if (typeof(usercallback) === 'function') usercallback({ success: true });
        };
      })(callback);

      request.onerror = (function(usercallback) {
        return function(evt) {
          if (typeof(usercallback) === 'function') {
            usercallback({ success: false });
          }
          else {
            console.error('LokiCatalog.deleteAppKey raised onerror');
            console.error(request.error);
          }
        };
      })(callback);
    };

    LokiCatalog.prototype.getAppKeys = function(app, callback) {
      var transaction = this.db.transaction(['LokiAKV'], 'readonly');
      var store = transaction.objectStore('LokiAKV');
      var index = store.index('app');

      // We want cursor to all values matching our (single) app param
      var singleKeyRange = IDBKeyRange.only(app);

      // To use one of the key ranges, pass it in as the first argument of openCursor()/openKeyCursor()
      var cursor = index.openCursor(singleKeyRange);

      // cursor internally, pushing results into this.data[] and return
      // this.data[] when done (similar to service)
      var localdata = [];

      cursor.onsuccess = (function(data, callback) {
        return function(e) {
          var cursor = e.target.result;
          if (cursor) {
            var currObject = cursor.value;

            data.push(currObject);

            cursor.continue();
          }
          else {
            if (typeof(callback) === 'function') {
              callback(data);
            }
            else {
              console.log(data);
            }
          }
        };
      })(localdata, callback);

      cursor.onerror = (function(usercallback) {
        return function(e) {
          if (typeof(usercallback) === 'function') {
            usercallback(null);
          }
          else {
            console.error('LokiCatalog.getAppKeys raised onerror');
            console.error(e);
          }
        };
      })(callback);

    };

    // Hide 'cursoring' and return array of { id: id, key: key }
    LokiCatalog.prototype.getAllKeys = function (callback) {
      var transaction = this.db.transaction(['LokiAKV'], 'readonly');
      var store = transaction.objectStore('LokiAKV');
      var cursor = store.openCursor();

      var localdata = [];

      cursor.onsuccess = (function(data, callback) {
        return function(e) {
          var cursor = e.target.result;
          if (cursor) {
            var currObject = cursor.value;

            data.push(currObject);

            cursor.continue();
          }
          else {
            if (typeof(callback) === 'function') {
              callback(data);
            }
            else {
              console.log(data);
            }
          }
        };
      })(localdata, callback);

      cursor.onerror = (function(usercallback) {
        return function(e) {
          if (typeof(usercallback) === 'function') usercallback(null);
        };
      })(callback);

    };

    return LokiIndexedAdapter;

  }());
}));


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _methods;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _it = __webpack_require__(5);

var _it2 = _interopRequireDefault(_it);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = (0, _it2.default)({
  init: function init(data) {
    if (!Array.isArray(data)) {
      throw new Error('Collect method only accepts arrays of data');
    }
    this.data = data;
  },

  properties: {
    data: []
  },
  methods: (_methods = {
    /**
     * 
     */
    get: function get() {
      return this.data;
    },

    /**
     * Alias for the "get" method
     * @return function
     */
    all: function all() {
      return this.get();
    },

    /**
     * Alias for the "average" method.
     *
     * @param  {String}  path Path of the key
     * @return function
     */
    avg: function avg(path) {
      return this.average(path);
    },

    /**
     * Get the average value of a given key.
     *
     * @param  {String}  path Path of the key
     * @return static
     */
    average: function average() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var data = [].concat(_toConsumableArray(this.data));
      var sum = data.reduce(function (acc, element) {
        var value = element;

        if (element instanceof Object) {
          var extract = _utilities2.default.getFromPath(element, path, undefined);
          if (typeof extract !== 'undefined' && extract.value) {
            value = extract.value;
          }
        }
        return acc + value;
      }, 0);

      try {
        var avg = sum / data.length;
        return avg;
      } catch (e) {
        throw new Error('Division between "' + sum + '" and "' + data.length + '" is not valid.');
      }
    },

    /**
     * Chunks the given array
     *
     * @param {Int} size
     * @return static
     */
    chunks: function chunks(size) {
      var data = [].concat(_toConsumableArray(this.data));
      var results = [];

      while (data.length) {
        results.push(data.splice(0, size));
      }

      this.data = results;
      return this;
    },

    /**
     * 
     */
    collapse: function collapse() {
      var data = [].concat(_toConsumableArray(this.data));
      var results = [];

      data.forEach(function (chunk) {
        if (Array.isArray(chunk)) {
          chunk.forEach(function (element) {
            results.push(element);
          });
        } else {
          results.push(chunk);
        }
      });
      this.data = results;

      return this;
    },
    unChunk: function unChunk() {
      return this.collapse();
    },
    combine: function combine(array) {
      var data = [].concat(_toConsumableArray(this.data));
      var result = void 0;
      data.forEach(function (e, index) {
        if (!(e instanceof Object)) {
          if (!result) {
            result = {};
          }
          result[e] = array[index];
        } else {
          if (!result) {
            result = [];
          }
          result[index] = _extends({}, e, { _value: array[index] });
        }
      });

      this.data = result;
      return this;
    },
    concat: function concat(array) {
      this.data = [].concat(_toConsumableArray(this.data), _toConsumableArray(array));
      return this;
    },
    contains: function contains() {
      var _this = this;

      var value = void 0;
      var path = void 0;
      var Fx = void 0;
      if (arguments.length === 1) {
        if (this.isFunction(arguments.length <= 0 ? undefined : arguments[0])) {
          Fx = arguments.length <= 0 ? undefined : arguments[0];
        }
        value = arguments.length <= 0 ? undefined : arguments[0];
      } else {
        value = arguments.length <= 1 ? undefined : arguments[1];
        path = arguments.length <= 0 ? undefined : arguments[0];
      }
      var data = [].concat(_toConsumableArray(this.data));

      return data.some(function (e, index) {
        if (Fx) {
          return !!Fx(e, index);
        }
        var val = e;
        if (e instanceof Object) {
          var extract = _this.getFromPath(e, path, undefined);
          if (extract.value) {
            val = extract.value;
          }
        }
        return val === value;
      });
    },
    count: function count() {
      return this.data.length;
    },
    getFromPath: function getFromPath(obj, path, def) {
      var _path = path;

      if (path.includes(' as ')) {
        path = path.split(' as ');
        _path = path[0];
      }

      var assignedName = this.get(function () {
        return Array.isArray(path) && path[1].trim();
      }, undefined);

      var fullPath = _path.replace(/\[/g, '.').replace(/]/g, '').split('.').filter(Boolean).map(function (e) {
        return e.trim();
      });

      function everyFunc(step) {
        return !(step && (obj = obj[step]) === undefined);
      }

      var result = fullPath.every(everyFunc) ? obj : def;

      return { label: assignedName || _path, value: result };
    }
  }, _defineProperty(_methods, 'get', function get(fn, def) {
    try {
      return fn();
    } catch (e) {
      return def;
    }
  }), _defineProperty(_methods, 'isFunction', function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
  }), _methods)
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _awaitToJs = __webpack_require__(9);

var _awaitToJs2 = _interopRequireDefault(_awaitToJs);

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

var _Interface = __webpack_require__(15);

var _Interface2 = _interopRequireDefault(_Interface);

var _it = __webpack_require__(5);

var _it2 = _interopRequireDefault(_it);

var _Connection = __webpack_require__(6);

var _Connection2 = _interopRequireDefault(_Connection);

var _Fluent = __webpack_require__(7);

var _Fluent2 = _interopRequireDefault(_Fluent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// import Utilities from 'utilities';


exports.default = (0, _it2.default)(_Interface2.default, {
  methods: {
    getToken: function getToken() {
      return localStorage.getItem('formioToken');
    },
    baseUrl: function baseUrl() {
      if (this.remoteConnection && this.remoteConnection.type && this.remoteConnection.type === 'config') {
        var _Fluent$getConfig = _Fluent2.default.getConfig(),
            FAST_CONFIG_URL = _Fluent$getConfig.FAST_CONFIG_URL;

        return FAST_CONFIG_URL;
      }

      var _Fluent$getConfig2 = _Fluent2.default.getConfig(),
          FLUENT_FORMIO_BASEURL = _Fluent$getConfig2.FLUENT_FORMIO_BASEURL;

      return FLUENT_FORMIO_BASEURL;
    },
    id: function id() {
      if (this.remoteConnection && this.remoteConnection.type && this.remoteConnection.type === 'config') {
        var _Fluent$getConfig3 = _Fluent2.default.getConfig(),
            FAST_CONFIG_ID = _Fluent$getConfig3.FAST_CONFIG_ID;

        return FAST_CONFIG_ID;
      }
      return this.remoteConnection.id;
    },
    get: function get() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var error, result, _ref, _ref2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                error = void 0;
                result = void 0;
                _context.next = 4;
                return (0, _awaitToJs2.default)(_this.httpGET());

              case 4:
                _ref = _context.sent;
                _ref2 = _slicedToArray(_ref, 2);
                error = _ref2[0];
                result = _ref2[1];

                if (!error) {
                  _context.next = 11;
                  break;
                }

                console.log(error);
                throw new Error('Error while getting submissions');

              case 11:

                result = _this.jsApplySelect(result.data);
                result = _this.jsApplyOrderBy(result);

                return _context.abrupt('return', result);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    all: function all() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', _this2.get());

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    insert: function insert(data, options) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _ref3, _ref4, error, result;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!Array.isArray(data)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return', _this3.ArrayInsert(data, options));

              case 2:
                _context3.next = 4;
                return (0, _awaitToJs2.default)(_this3.httpPOST(data));

              case 4:
                _ref3 = _context3.sent;
                _ref4 = _slicedToArray(_ref3, 2);
                error = _ref4[0];
                result = _ref4[1];

                if (!error) {
                  _context3.next = 11;
                  break;
                }

                console.log(error);
                throw new Error('Cannot insert data');

              case 11:
                return _context3.abrupt('return', result.data);

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    update: function update(data) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _ref5, _ref6, error, result;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (data._id) {
                  _context4.next = 2;
                  break;
                }

                throw new Error('Formio connector error. Cannot update a Model without _id key');

              case 2:
                if (!data._id.includes('_local')) {
                  _context4.next = 4;
                  break;
                }

                throw new Error('Formio connector error. Cannot update a local document');

              case 4:
                _context4.next = 6;
                return (0, _awaitToJs2.default)(_this4.httpPUT(data));

              case 6:
                _ref5 = _context4.sent;
                _ref6 = _slicedToArray(_ref5, 2);
                error = _ref6[0];
                result = _ref6[1];

                if (!error) {
                  _context4.next = 13;
                  break;
                }

                console.log(error);
                throw new Error('Cannot insert data');

              case 13:
                return _context4.abrupt('return', result.data);

              case 14:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    clear: function clear() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            sure = _ref7.sure;

        var promises, _ref8, _ref9, error, data;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(!sure || sure !== true)) {
                  _context5.next = 2;
                  break;
                }

                throw new Error('Clear() method will delete everything!, you must set the "sure" parameter "clear({sure:true})" to continue');

              case 2:
                promises = [];
                _context5.next = 5;
                return (0, _awaitToJs2.default)(_this5.select('_id').pluck('_id'));

              case 5:
                _ref8 = _context5.sent;
                _ref9 = _slicedToArray(_ref8, 2);
                error = _ref9[0];
                data = _ref9[1];

                if (!error) {
                  _context5.next = 12;
                  break;
                }

                console.log(error);
                throw new Error('Cannot get remote Model');

              case 12:

                data.forEach(function (_id) {
                  promises.push(_this5.httpDelete(_id));
                });

                return _context5.abrupt('return', _axios2.default.all(promises));

              case 14:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },
    remove: function remove(_id) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _ref10, _ref11, error, removed;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _awaitToJs2.default)(_this6.httpDelete(_id));

              case 2:
                _ref10 = _context6.sent;
                _ref11 = _slicedToArray(_ref10, 2);
                error = _ref11[0];
                removed = _ref11[1];

                if (!error) {
                  _context6.next = 9;
                  break;
                }

                console.log(error);
                throw new Error('FormioConnector: Could not delete ' + _id);

              case 9:
                return _context6.abrupt('return', removed);

              case 10:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },
    find: function find(_id) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var _ref12, _ref13, error, data;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(typeof _id !== 'string')) {
                  _context7.next = 2;
                  break;
                }

                throw new Error('Formio connector find() method only accepts strings "' + (typeof _id === 'undefined' ? 'undefined' : _typeof(_id)) + '" given "' + _id + '"');

              case 2:
                _context7.next = 4;
                return (0, _awaitToJs2.default)(_this7.where('_id', '=', _id).first());

              case 4:
                _ref12 = _context7.sent;
                _ref13 = _slicedToArray(_ref12, 2);
                error = _ref13[0];
                data = _ref13[1];

                if (!error) {
                  _context7.next = 11;
                  break;
                }

                console.log(error);
                throw new Error('Find() could not get remote data');

              case 11:
                return _context7.abrupt('return', data);

              case 12:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },
    getUrl: function getUrl() {
      var baseUrl = this && this.baseUrl() ? this.baseUrl() : undefined;
      var path = this.remoteConnection && this.remoteConnection.path ? this.remoteConnection.path : undefined;

      if (!this.remoteConnection.pullForm) {
        path = !this.id() ? path + '/submission' : path + '/submission/' + this.id();
      }

      if (!baseUrl || !path) {
        throw new Error('Cannot get remote model. BaseUrl or Path is not defined');
      }

      var url = baseUrl + path;

      return url;
    },
    getHeaders: function getHeaders() {
      var headers = {};
      // Include Auth headers
      if (this.remoteConnection.token) {
        var type = this.getTokenType(this.remoteConnection.token);

        headers[type] = this.remoteConnection.token;
      }

      return headers;
    },
    getSpacer: function getSpacer(url) {
      return url.substr(url.length - 1) === '&' ? '' : '&';
    },
    httpGET: function httpGET() {
      var url = this.getUrl();
      var headers = this.getHeaders();
      var filters = this.getFilters();
      var limit = this.getLimit();
      var skip = this.getSkip();
      var select = this.getSelect();
      var spacer = '';

      // Always limit the amount of requests
      url = url + spacer + limit;

      url = filters ? url + this.getSpacer(url) + filters : url;

      url = skip ? url + this.getSpacer(url) + skip : url;

      url = select ? url + this.getSpacer(url) + select : url;

      if (!_Connection2.default.isOnline()) {
        throw new Error('Cannot make get request to ' + url + '. You are not online');
      }

      return _axios2.default.get(url, { headers: headers });
    },
    httpPOST: function httpPOST(data) {
      var url = this.getUrl();
      var headers = this.getHeaders();

      if (!_Connection2.default.isOnline()) {
        throw new Error('Cannot make request post to ' + url + '. You are not online');
      }
      return _axios2.default.post(url, data, { headers: headers });
    },
    httpPUT: function httpPUT(data) {
      var url = this.getUrl() + '/' + data._id;
      var headers = this.getHeaders();

      if (!_Connection2.default.isOnline()) {
        throw new Error('Cannot make request post to ' + url + '. You are not online');
      }
      return _axios2.default.put(url, data, { headers: headers });
    },
    httpDelete: function httpDelete(_id) {
      var headers = this.getHeaders();
      var url = this.getUrl() + '/' + _id;

      return _axios2.default.delete(url, { headers: headers });
    },
    getTokenType: function getTokenType(token) {
      if (token.length > 32) {
        return 'x-jwt-token';
      }
      return 'x-token';
    },
    getFilters: function getFilters() {
      var filter = this.whereArray;

      if (!filter || filter.length === 0) {
        return undefined;
      }

      var filterQuery = '';

      filter.forEach(function (condition) {
        var valueString = '';
        var element = condition[0];
        var operator = condition[1];
        var value = condition[2];

        switch (operator) {
          case '=':
            filterQuery = filterQuery + element + '=' + value + '&';
            break;
          case '!=':
            filterQuery = filterQuery + element + '__ne=' + value + '&';
            break;
          case '>':
            filterQuery = filterQuery + element + '__gt=' + value + '&';
            break;
          case '>=':
            filterQuery = filterQuery + element + '__gte=' + value + '&';
            break;
          case '<':
            filterQuery = filterQuery + element + '__lt=' + value + '&';
            break;
          case '<=':
            filterQuery = filterQuery + element + '__lte=' + value + '&';
            break;
          case 'in':
            valueString = '';
            value.forEach(function (val, index, array) {
              valueString = index === array.length - 1 ? valueString + val : valueString + val + ',';
            });
            filterQuery = filterQuery + element + '__in=' + valueString + '&';
            break;
          case 'nin':
            valueString = '';
            value.forEach(function (val, index, array) {
              valueString = index === array.length - 1 ? valueString + val : valueString + val + ',';
            });
            filterQuery = filterQuery + element + '__nin=' + valueString + '&';
            break;
          case 'exists':
            filterQuery = filterQuery + element + '__exists=' + true + '&';
            break;
          case '!exists':
            filterQuery = filterQuery + element + '__exists=' + false + '&';
            break;
          case 'regex':
            filterQuery = filterQuery + element + '__regex=' + value + '&';
            break;
        }
      });
      return filterQuery.substring(0, filterQuery.length - 1);
    },
    getLimit: function getLimit() {
      var limit = '?limit=';

      if (!this.limitNumber || this.limitNumber === 0) {
        this.limitNumber = 50;
      }

      return limit + this.limitNumber;
    },
    getSkip: function getSkip() {
      var skip = 'skip=';

      if (!this.offsetNumber) {
        this.offsetNumber = 0;
      }

      return skip + this.offsetNumber;
    },
    getSelect: function getSelect() {
      var select = this.selectArray;

      select = select.map(function (e) {
        return e.split(' as ')[0];
      });

      if (!select) {
        return;
      }

      return 'select=' + select.join(',');
    },

    /**
     *
     * @param {*} user
     */
    own: function own(user) {
      if (!user) {
        throw new Error('own() method requires a specific user to filter the submissions');
      }
      this.andWhere('owner', '=', user);
    },

    /**
     *
     * @param {*} user
     */
    owner: function owner(user) {
      if (!user) {
        throw new Error('owner() method requires a specific user to filter the submissions');
      }
      this.andWhere('owner', '=', user);
    }
  }
});

/**
  const remoteModel = ((path) => {
    let all = async function () {
      let remoteData, error;
      let formio = await getFormioInstance({ path });

      [error, remoteData] = await to(formio.loadForms());
      if (error) {
        console.log(error);
        throw new Error('Cannot get data');
      }

      return remoteData;
    };

    async function find ({ filter = undefined, limit = 30, select = undefined, populate = undefined, pagination }) {
      let remoteSubmissions, error;
      let formio = await getFormioInstance({ path: path });

      let queryParams = {
        limit: limit
      };

      if (filter && Array.isArray(filter)) {
        let filterQuery = filterToString(filter);

        queryParams = { ...queryParams, ...filterQuery };
      }

      if (select) {
        let selectQuery = selectToString(select);

        queryParams = { ...queryParams, ...selectQuery };
      }

      if (populate && Array.isArray(populate)) {
        queryParams.populate = populate.join(',');
      }

      [error, remoteSubmissions] = await to(
        formio.loadSubmissions({
          params: queryParams
        })
      );
      if (error) {
        let path;

        switch (path) {
          case 'custom':
            path = await config.get().baseURL;
            break;
          case undefined:
            path = await config.get().url;
            break;
          default:
            path = await config.get().baseURL;
            path = path + '/' + path;
            break;
        }
        let e = 'The API call to "' + path + '" could not be completed, server responded with ' + JSON.stringify(error);

        throw new Error(e);
      }

      return remoteSubmissions;
    }

    async function findOne ({ filter }) {}

    async function remove ({ id }) {
      let formio = await getFormioInstance({ path: path, submissionID: id });
      let a = await formio.deleteSubmission();
    }

    async function softDelete ({ id }) {
      let formio = await getFormioInstance({ path: path, submissionID: id });
      let original = await formio.loadSubmission();

      original.data.enabled = false;
      let data = original.data;
      let softDeleted = await formio.saveSubmission({
        _id: id,
        data
      });

      return softDeleted;
    }

    async function insert ({ element }) {
      let formio = await getFormioInstance({ path: path });

      Formio.deregisterPlugin('offline');
      let sub = await formio.saveSubmission(element);

      return sub;
    }

    async function update ({ document }) {
      let formio = await getFormioInstance({ path: path });

      Formio.deregisterPlugin('offline');
      let sub = await formio.saveSubmission(document);

      return sub;
    }

    async function updateOrCreate ({ document }) {}

    async function findAndRemove ({ filter }) {}

    return Object.freeze({
      find,
      findOne,
      remove,
      insert,
      update,
      updateOrCreate,
      findAndRemove,
      getFormioInstance,
      softDelete,
      all
    });
  })();

export default remoteModel;
*/

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Interface = __webpack_require__(15);

var _Interface2 = _interopRequireDefault(_Interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _Interface2.default.compose({
  properties: {
    localFx: undefined,
    remoteFx: undefined
  },
  init: function init(connectors) {
    this.connectors = connectors;
  },

  methods: {
    get: function get() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var localData, remoteData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.prepareMergedFunctions();
                _context.next = 3;
                return _this.localFx.get();

              case 3:
                localData = _context.sent;
                _context.next = 6;
                return _this.remoteFx.get();

              case 6:
                remoteData = _context.sent;
                return _context.abrupt('return', localData.concat(remoteData));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    owner: function owner(user) {
      this.chainReference.push({ method: 'owner', args: user });
    },
    own: function own(user) {
      this.chainReference.push({ method: 'own', args: user });
    },
    prepareMergedFunctions: function prepareMergedFunctions() {
      var _this2 = this;

      this.localFx = this.connectors.local;
      this.remoteFx = this.connectors.remote;

      this.chainReference.forEach(function (chain) {
        var method = chain.method;
        var args = chain.args;

        _this2.localFx = _this2.localFx[method](args);
        _this2.remoteFx = _this2.remoteFx[method](args);
      });
    }
  }
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var compose = __webpack_require__(11);
var privates = new WeakMap(); // WeakMap works in IE11, node 0.12

var makeProxyFunction = function (fn, name) {
  function proxiedFn() {
    'use strict';
    var fields = privates.get(this); // jshint ignore:line
    return fn.apply(fields, arguments);
  }

  Object.defineProperty(proxiedFn, 'name', {
    value: name,
    configurable: true
  });

  return proxiedFn;
};

function initializer(_, opts) {
  var descriptor = opts.stamp.compose;
  var privateMethodNames = descriptor.deepConfiguration.Privatize.methods;

  var newObject = {}; // our proxy object
  privates.set(newObject, this);

  var methods = descriptor.methods;
  if (!methods) {
    return newObject;
  }

  var methodNames = Object.keys(methods);
  for (var i = 0; i < methodNames.length; i++) {
    var name = methodNames[i];
    if (privateMethodNames.indexOf(name) < 0) { // not private, thus wrap
      newObject[name] = makeProxyFunction(methods[name], name);
    }
  }

  // Integration with @stamp/instanceof
  if (typeof Symbol !== "undefined") {
    var stampSymbol = Symbol.for('stamp');
    if (methods[stampSymbol]) {
      newObject[stampSymbol] = opts.stamp;
    }
  }

  return newObject;
}

var Privatize = compose({
  initializers: [initializer],
  deepConfiguration: {Privatize: {methods: []}},
  staticProperties: {
    privatizeMethods: function () {
      'use strict';
      var methodNames = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (typeof arg === 'string' && arg.length > 0) {
          methodNames.push(arg);
        }
      }
      var Stamp = this && this.compose ? this : Privatize;
      return Stamp.compose({
        deepConfiguration: {
          Privatize: {
            methods: methodNames
          }
        }
      });
    }
  },
  composers: [function (opts) {
    var initializers = opts.stamp.compose.initializers;
    // Keep our initializer the last to return proxy object
    initializers.splice(initializers.indexOf(initializer), 1);
    initializers.push(initializer);
  }]
});

module.exports = Privatize;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _Translation = __webpack_require__(17);

var _Translation2 = _interopRequireDefault(_Translation);

var _Pages = __webpack_require__(18);

var _Pages2 = _interopRequireDefault(_Pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormLabels = function () {
  function FormLabels() {
    _classCallCheck(this, FormLabels);
  }

  _createClass(FormLabels, null, [{
    key: 'get',

    /**
     *
     * @param {*} formNameFilter
     * @param {*} languageFilter
     */
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(forms, i18n) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', this.handle(forms, i18n));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return get;
    }()
    /**
     *
     * @param {*} formNameFilter
     * @param {*} languageFilter
     */

  }, {
    key: 'handle',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(forms, i18n) {
        var labels, translations;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fetchAllLabels(forms, i18n);

              case 2:
                labels = _context2.sent;
                _context2.next = 5;
                return _Translation2.default.local().first();

              case 5:
                translations = _context2.sent.data;


                // Merge labels and translations
                Object.keys(translations).forEach(function (languageCode) {
                  var translationsLabels = translations[languageCode];

                  Object.keys(translationsLabels).forEach(function (translationLabel) {
                    if (labels[translationLabel] && translationsLabels[translationLabel] && translationsLabels[translationLabel] !== '') {
                      labels[translationLabel].translations[languageCode] = translationsLabels[translationLabel];
                    }
                  });
                });

                return _context2.abrupt('return', labels);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handle(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return handle;
    }()
    /**
     *  Fetches all Labels for the different
     *  types of labels inputs that the
     *  application has
     */

  }, {
    key: 'fetchAllLabels',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(forms, i18n) {
        var allLabels, formLabels, appLabels, pagesLabels;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                allLabels = {};


                forms = forms.map(function (form) {
                  return form.data;
                });

                formLabels = this.getFormLabels(forms);
                _context3.next = 5;
                return this.getAppLabels(i18n);

              case 5:
                appLabels = _context3.sent;


                allLabels = this.mergeLabels(formLabels, appLabels);

                _context3.t0 = this;
                _context3.next = 10;
                return _Pages2.default.local().first();

              case 10:
                _context3.t1 = _context3.sent;
                _context3.next = 13;
                return _context3.t0.getPagesLabels.call(_context3.t0, _context3.t1);

              case 13:
                pagesLabels = _context3.sent;


                allLabels = this.mergeLabels(allLabels, pagesLabels);

                return _context3.abrupt('return', allLabels);

              case 16:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchAllLabels(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return fetchAllLabels;
    }()
    /**
     * Given an Object with text labels and a label Object
     * to add it checks if it already exists or
     * creates it if needed
     * @param {Object} labels
     * @param {Object} label
     */

  }, {
    key: 'createOrAdd',
    value: function createOrAdd(_ref4) {
      var labels = _ref4.labels,
          label = _ref4.label;

      var newObject = _extends({}, labels);

      // If the label already exists
      if (newObject[label.text]) {
        // If the location is an Array of Locations
        if (label.location && Array.isArray(label.location)) {
          label.location.forEach(function (l) {
            newObject[label.text].location.push({
              text: label.text,
              template: label.template,
              type: l.type,
              picture: l.picture
            });
          });
        } else {
          newObject[label.text].location.push(label);
        }
        // If the label does not exist
      } else {
        if (label.location && Array.isArray(label.location)) {
          newObject[label.text] = {
            location: [],
            template: label.template,
            translations: {}
          };
          label.location.forEach(function (l) {
            newObject[label.text].location.push({
              text: label.text,
              template: label.template,
              type: l.type,
              picture: l.picture
            });
          });
        } else {
          newObject[label.text] = {
            location: [label],
            translations: {}
          };
        }
      }
      return newObject;
    }
    /**
     * Merges 2 different sets of translations
     * into a single one with no repeted
     * elements
     * @param {Object} labelsObject1
     * @param {Object} labelsObject2
     */

  }, {
    key: 'mergeLabels',
    value: function mergeLabels(labelsObject1, labelsObject2) {
      var _this = this;

      var merged = _extends({}, labelsObject1);

      Object.keys(labelsObject2).forEach(function (key) {
        merged = _this.createOrAdd({
          labels: merged,
          label: _extends({}, labelsObject2[key], {
            text: key
          })
        });
      });
      return merged;
    }
    /**
     * Extracts all labels that could potentially
     * be translated from the Form.io forms
     * @param {Array} Forms
     */

  }, {
    key: 'getFormLabels',
    value: function getFormLabels(Forms) {
      var _this2 = this;

      var componentLabels = {};
      // Extranct all labels for all available forms

      var formioLabelsPositions = ['suffix', 'prefix', 'addAnother', 'removeRow', 'saveRow', 'legend', 'title', 'label', 'placeholder', 'tooltip'];

      Forms.forEach(function (form) {
        // Add title of the Forms to the translations
        componentLabels = _this2.createOrAdd({
          labels: componentLabels,
          label: {
            text: form.title,
            type: 'formTitle',
            component: form.path,
            form: form.path,
            picture: null
          }
        });
        // Go across every component
        _utilities2.default.eachComponent(form.components, function (component) {
          // Check for the common translated Items listed above
          formioLabelsPositions.forEach(function (position) {
            if (component[position] && component[position] !== '') {
              // Add the Label if is not empty
              componentLabels = _this2.createOrAdd({
                labels: componentLabels,
                label: {
                  text: component[position],
                  type: position,
                  component: component.key,
                  form: form.path,
                  picture: null
                }
              });
            }
          });

          // Check for components that have values with labels (i.e: radio)
          if (component.values) {
            component.values.forEach(function (value) {
              if (value.label && value.label !== '') {
                componentLabels = _this2.createOrAdd({
                  labels: componentLabels,
                  label: {
                    text: value.label,
                    type: 'value',
                    component: component.key,
                    form: form.path,
                    picture: null
                  }
                });
              }
            });
          }

          // Check for HTML tag elements in the forms
          if (component.type === 'htmlelement' && component.content !== '') {
            componentLabels = _this2.createOrAdd({
              labels: componentLabels,
              label: {
                text: component.content,
                type: 'htmlElement',
                component: component.key,
                form: form.path,
                picture: null
              }
            });
          }

          // Check specificaly for select elements
          if (component.type === 'select') {
            if (component.data && component.data.values) {
              component.data.values.forEach(function (value) {
                if (value.label && value.label !== '') {
                  componentLabels = _this2.createOrAdd({
                    labels: componentLabels,
                    label: {
                      text: value.label,
                      type: 'selectValue',
                      component: component.key,
                      form: form.path,
                      picture: null
                    }
                  });
                }
              });
            }
          }

          // Check for survey elements
          if (component.type && component.type === 'survey') {
            if (component.questions) {
              // Check for every question on the survey
              component.questions.forEach(function (q) {
                componentLabels = _this2.createOrAdd({
                  labels: componentLabels,
                  label: {
                    text: q.label,
                    type: 'surveyLabel',
                    component: component.key,
                    form: form.path,
                    picture: null
                  }
                });
              });
              // Check every text of the answers
              component.values.forEach(function (v) {
                componentLabels = _this2.createOrAdd({
                  labels: componentLabels,
                  label: {
                    text: v.label,
                    type: 'surveyValues',
                    component: component.key,
                    form: form.path,
                    picture: null
                  }
                });
              });
            }
          }
        }, true);
      });

      return componentLabels;
    }
    /**
     *  Creates the Labels Object for the
     *  App translations
     * @param {Array} appLabels
     */

  }, {
    key: 'getAppLabels',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(appLabels) {
        var _this3 = this;

        var translations;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                translations = {};


                appLabels.forEach(function (l) {
                  translations = _this3.createOrAdd({
                    labels: translations,
                    label: l
                  });
                });

                return _context4.abrupt('return', translations);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getAppLabels(_x7) {
        return _ref5.apply(this, arguments);
      }

      return getAppLabels;
    }()
    /**
     *  Creates the Labels Object for the
     *  App Pages
     * @param {Array} appLabels
     */

  }, {
    key: 'getPagesLabels',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(Pages) {
        var _this4 = this;

        var pagesLabels;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log('----------------------');
                console.log('===>Pages', Pages);
                console.log('----------------------');

                pagesLabels = {};


                Pages.pages.forEach(function (page) {
                  if (page.title && page.title !== '') {
                    pagesLabels = _this4.createOrAdd({
                      labels: pagesLabels,
                      label: {
                        text: page.title,
                        type: 'pageTitle',
                        picture: null,
                        page: page
                      }
                    });
                  }
                  page.cards.forEach(function (card) {
                    if (card.title && card.title !== '') {
                      pagesLabels = _this4.createOrAdd({
                        labels: pagesLabels,
                        label: {
                          text: card.title,
                          type: 'pageCardTitle',
                          picture: null,
                          card: card,
                          page: page
                        }
                      });
                    }

                    if (card.subtitle && card.subtitle !== '') {
                      _this4.createOrAdd({
                        labels: pagesLabels,
                        label: {
                          text: card.subtitle,
                          type: 'pageCardSubtitle',
                          picture: null,
                          card: card,
                          page: page
                        }
                      });
                    }

                    card.actions.forEach(function (action) {
                      if (action.text && action.text !== '') {
                        pagesLabels = _this4.createOrAdd({
                          labels: pagesLabels,
                          label: {
                            text: action.text,
                            type: 'pageActionButtonText',
                            picture: null,
                            card: card,
                            page: page
                          }
                        });
                      }
                    });
                  });
                });

                return _context5.abrupt('return', pagesLabels);

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getPagesLabels(_x8) {
        return _ref6.apply(this, arguments);
      }

      return getPagesLabels;
    }()
  }]);

  return FormLabels;
}();

exports.default = FormLabels;

/***/ }),
/* 49 */
/***/ (function(module) {

module.exports = [{"code":"ab","direction":"ltr","label":"Abkhazian"},{"code":"aa","direction":"ltr","label":"Afar"},{"code":"af","direction":"ltr","label":"Afrikaans"},{"code":"ak","direction":"ltr","label":"Akan"},{"code":"sq","direction":"ltr","label":"Albanian"},{"code":"am","direction":"ltr","label":"Amharic"},{"code":"ar","direction":"rtl","label":"Arabic"},{"code":"an","direction":"ltr","label":"Aragonese"},{"code":"hy","direction":"ltr","label":"Armenian"},{"code":"as","direction":"ltr","label":"Assamese"},{"code":"av","direction":"ltr","label":"Avaric"},{"code":"ae","direction":"ltr","label":"Avestan"},{"code":"ay","direction":"ltr","label":"Aymara"},{"code":"az","direction":"ltr","label":"Azerbaijani"},{"code":"bm","direction":"ltr","label":"Bambara"},{"code":"ba","direction":"ltr","label":"Bashkir"},{"code":"eu","direction":"ltr","label":"Basque"},{"code":"be","direction":"ltr","label":"Belarusian"},{"code":"bn","direction":"ltr","label":"Bengali"},{"code":"bh","direction":"ltr","label":"Bihari languages"},{"code":"bi","direction":"ltr","label":"Bislama"},{"code":"bs","direction":"ltr","label":"Bosnian"},{"code":"br","direction":"ltr","label":"Breton"},{"code":"bg","direction":"ltr","label":"Bulgarian"},{"code":"my","direction":"ltr","label":"Burmese"},{"code":"ca","direction":"ltr","label":"Catalan, Valencian"},{"code":"km","direction":"ltr","label":"Central Khmer"},{"code":"ch","direction":"ltr","label":"Chamorro"},{"code":"ce","direction":"ltr","label":"Chechen"},{"code":"ny","direction":"ltr","label":"Chichewa"},{"code":"zh","direction":"ltr","label":"Chinese"},{"code":"cu","direction":"ltr","label":"Church Slavonic, Old Bulgarian, Old Church Slavonic"},{"code":"cv","direction":"ltr","label":"Chuvash"},{"code":"kw","direction":"ltr","label":"Cornish"},{"code":"co","direction":"ltr","label":"Corsican"},{"code":"cr","direction":"ltr","label":"Cree"},{"code":"hr","direction":"ltr","label":"Croatian"},{"code":"cs","direction":"ltr","label":"Czech"},{"code":"da","direction":"ltr","label":"Danish"},{"code":"dv","direction":"ltr","label":"Divehi, Dhivehi, Maldivian"},{"code":"nl","direction":"ltr","label":"Dutch, Flemish"},{"code":"dz","direction":"ltr","label":"Dzongkha"},{"code":"en","direction":"ltr","label":"English"},{"code":"eo","direction":"ltr","label":"Esperanto"},{"code":"et","direction":"ltr","label":"Estonian"},{"code":"ee","direction":"ltr","label":"Ewe"},{"code":"fo","direction":"ltr","label":"Faroese"},{"code":"fj","direction":"ltr","label":"Fijian"},{"code":"fi","direction":"ltr","label":"Finnish"},{"code":"fr","direction":"ltr","label":"French"},{"code":"ff","direction":"ltr","label":"Fulah"},{"code":"gd","direction":"ltr","label":"Gaelic, Scottish Gaelic"},{"code":"gl","direction":"ltr","label":"Galician"},{"code":"lg","direction":"ltr","label":"Ganda"},{"code":"ka","direction":"ltr","label":"Georgian"},{"code":"de","direction":"ltr","label":"German"},{"code":"ki","direction":"ltr","label":"Gikuyu, Kikuyu"},{"code":"el","direction":"ltr","label":"Greek (Modern)"},{"code":"kl","direction":"ltr","label":"Greenlandic, Kalaallisut"},{"code":"gn","direction":"ltr","label":"Guarani"},{"code":"gu","direction":"ltr","label":"Gujarati"},{"code":"ht","direction":"ltr","label":"Haitian, Haitian Creole"},{"code":"ha","direction":"ltr","label":"Hausa"},{"code":"he","direction":"ltr","label":"Hebrew"},{"code":"hz","direction":"ltr","label":"Herero"},{"code":"hi","direction":"ltr","label":"Hindi"},{"code":"ho","direction":"ltr","label":"Hiri Motu"},{"code":"hu","direction":"ltr","label":"Hungarian"},{"code":"is","direction":"ltr","label":"Icelandic"},{"code":"io","direction":"ltr","label":"Ido"},{"code":"ig","direction":"ltr","label":"Igbo"},{"code":"id","direction":"ltr","label":"Indonesian"},{"code":"ia","direction":"ltr","label":"Interlingua (International Auxiliary Language Association)"},{"code":"ie","direction":"ltr","label":"Interlingue"},{"code":"iu","direction":"ltr","label":"Inuktitut"},{"code":"ik","direction":"ltr","label":"Inupiaq"},{"code":"ga","direction":"ltr","label":"Irish"},{"code":"it","direction":"ltr","label":"Italian"},{"code":"ja","direction":"ltr","label":"Japanese"},{"code":"jv","direction":"ltr","label":"Javanese"},{"code":"kn","direction":"ltr","label":"Kannada"},{"code":"kr","direction":"ltr","label":"Kanuri"},{"code":"ks","direction":"ltr","label":"Kashmiri"},{"code":"kk","direction":"ltr","label":"Kazakh"},{"code":"rw","direction":"ltr","label":"Kinyarwanda"},{"code":"kv","direction":"ltr","label":"Komi"},{"code":"kg","direction":"ltr","label":"Kongo"},{"code":"ko","direction":"ltr","label":"Korean"},{"code":"kj","direction":"ltr","label":"Kwanyama, Kuanyama"},{"code":"ku","direction":"ltr","label":"Kurdish"},{"code":"ky","direction":"ltr","label":"Kyrgyz"},{"code":"lo","direction":"ltr","label":"Lao"},{"code":"la","direction":"ltr","label":"Latin"},{"code":"lv","direction":"ltr","label":"Latvian"},{"code":"lb","direction":"ltr","label":"Letzeburgesch, Luxembourgish"},{"code":"li","direction":"ltr","label":"Limburgish, Limburgan, Limburger"},{"code":"ln","direction":"ltr","label":"Lingala"},{"code":"lt","direction":"ltr","label":"Lithuanian"},{"code":"lu","direction":"ltr","label":"Luba-Katanga"},{"code":"mk","direction":"ltr","label":"Macedonian"},{"code":"mg","direction":"ltr","label":"Malagasy"},{"code":"ms","direction":"ltr","label":"Malay"},{"code":"ml","direction":"ltr","label":"Malayalam"},{"code":"mt","direction":"ltr","label":"Maltese"},{"code":"gv","direction":"ltr","label":"Manx"},{"code":"mi","direction":"ltr","label":"Maori"},{"code":"mr","direction":"ltr","label":"Marathi"},{"code":"mh","direction":"ltr","label":"Marshallese"},{"code":"ro","direction":"ltr","label":"Moldovan, Moldavian, Romanian"},{"code":"mn","direction":"ltr","label":"Mongolian"},{"code":"na","direction":"ltr","label":"Nauru"},{"code":"nv","direction":"ltr","label":"Navajo, Navaho"},{"code":"nd","direction":"ltr","label":"Northern Ndebele"},{"code":"ng","direction":"ltr","label":"Ndonga"},{"code":"ne","direction":"ltr","label":"Nepali"},{"code":"se","direction":"ltr","label":"Northern Sami"},{"code":"no","direction":"ltr","label":"Norwegian"},{"code":"nb","direction":"ltr","label":"Norwegian Bokmål"},{"code":"nn","direction":"ltr","label":"Norwegian Nynorsk"},{"code":"ii","direction":"ltr","label":"Nuosu, Sichuan Yi"},{"code":"oc","direction":"ltr","label":"Occitan (post 1500)"},{"code":"oj","direction":"ltr","label":"Ojibwa"},{"code":"or","direction":"ltr","label":"Oriya"},{"code":"om","direction":"ltr","label":"Oromo"},{"code":"os","direction":"ltr","label":"Ossetian, Ossetic"},{"code":"pi","direction":"ltr","label":"Pali"},{"code":"pa","direction":"ltr","label":"Panjabi, Punjabi"},{"code":"ps","direction":"ltr","label":"Pashto, Pushto"},{"code":"fa","direction":"ltr","label":"Persian"},{"code":"pl","direction":"ltr","label":"Polish"},{"code":"pt","direction":"ltr","label":"Portuguese"},{"code":"qu","direction":"ltr","label":"Quechua"},{"code":"rm","direction":"ltr","label":"Romansh"},{"code":"rn","direction":"ltr","label":"Rundi"},{"code":"ru","direction":"ltr","label":"Russian"},{"code":"sm","direction":"ltr","label":"Samoan"},{"code":"sg","direction":"ltr","label":"Sango"},{"code":"sa","direction":"ltr","label":"Sanskrit"},{"code":"sc","direction":"ltr","label":"Sardinian"},{"code":"sr","direction":"ltr","label":"Serbian"},{"code":"sn","direction":"ltr","label":"Shona"},{"code":"sd","direction":"ltr","label":"Sindhi"},{"code":"si","direction":"ltr","label":"Sinhala, Sinhalese"},{"code":"sk","direction":"ltr","label":"Slovak"},{"code":"sl","direction":"ltr","label":"Slovenian"},{"code":"so","direction":"ltr","label":"Somali"},{"code":"st","direction":"ltr","label":"Sotho, Southern"},{"code":"nr","direction":"ltr","label":"South Ndebele"},{"code":"es","direction":"ltr","label":"Spanish"},{"code":"su","direction":"ltr","label":"Sundanese"},{"code":"sw","direction":"ltr","label":"Swahili"},{"code":"ss","direction":"ltr","label":"Swati"},{"code":"sv","direction":"ltr","label":"Swedish"},{"code":"tl","direction":"ltr","label":"Tagalog"},{"code":"ty","direction":"ltr","label":"Tahitian"},{"code":"tg","direction":"ltr","label":"Tajik"},{"code":"ta","direction":"ltr","label":"Tamil"},{"code":"tt","direction":"ltr","label":"Tatar"},{"code":"te","direction":"ltr","label":"Telugu"},{"code":"th","direction":"ltr","label":"Thai"},{"code":"bo","direction":"ltr","label":"Tibetan"},{"code":"ti","direction":"ltr","label":"Tigrinya"},{"code":"to","direction":"ltr","label":"Tonga (Tonga Islands)"},{"code":"ts","direction":"ltr","label":"Tsonga"},{"code":"tn","direction":"ltr","label":"Tswana"},{"code":"tr","direction":"ltr","label":"Turkish"},{"code":"tk","direction":"ltr","label":"Turkmen"},{"code":"tw","direction":"ltr","label":"Twi"},{"code":"ug","direction":"ltr","label":"Uighur, Uyghur"},{"code":"uk","direction":"ltr","label":"Ukrainian"},{"code":"umb","direction":"ltr","label":"Umbundu"},{"code":"ur","direction":"ltr","label":"Urdu"},{"code":"uz","direction":"ltr","label":"Uzbek"},{"code":"ve","direction":"ltr","label":"Venda"},{"code":"vi","direction":"ltr","label":"Vietnamese"},{"code":"vo","direction":"ltr","label":"Volap_k"},{"code":"wa","direction":"ltr","label":"Walloon"},{"code":"cy","direction":"ltr","label":"Welsh"},{"code":"fy","direction":"ltr","label":"Western Frisian"},{"code":"wo","direction":"ltr","label":"Wolof"},{"code":"xh","direction":"ltr","label":"Xhosa"},{"code":"yi","direction":"ltr","label":"Yiddish"},{"code":"yo","direction":"ltr","label":"Yoruba"},{"code":"za","direction":"ltr","label":"Zhuang, Chuang"},{"code":"zu","direction":"ltr","label":"Zulu"}];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sync = __webpack_require__(28);

var _Sync2 = _interopRequireDefault(_Sync);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var SyncInterval = function () {
  var set = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(milliseconds) {
      var rInterval, _debouncedSync;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              rInterval = function rInterval(callback, delay) {
                var dateNow = Date.now,
                    requestAnimation = typeof window !== 'undefined' && window.requestAnimationFrame,
                    start = dateNow(),
                    stop = void 0,
                    intervalFunc = function intervalFunc() {
                  // eslint-disable-next-line no-use-before-define
                  dateNow() - start < delay || (start += delay, callback());
                  // eslint-disable-next-line no-use-before-define
                  stop || requestAnimation(intervalFunc);
                };

                requestAnimation(intervalFunc);
                return {
                  clear: function clear() {
                    stop = 1;
                  }
                };
              };

              _debouncedSync = _utilities2.default.debounce(_Sync2.default.now, 2000);


              rInterval(_debouncedSync, milliseconds);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function set(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return Object.freeze({
    set: set
  });
}();

exports.default = SyncInterval;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Columns = function () {
  function Columns() {
    _classCallCheck(this, Columns);
  }

  _createClass(Columns, null, [{
    key: 'getTableView',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
        var form;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Form2.default.find({ path: path });

              case 2:
                form = _context.sent.data;
                return _context.abrupt('return', _utilities2.default.findComponents(form.components, {
                  input: true,
                  tableView: true
                }).slice(0, 7).filter(function (c) {
                  return !!(c.label !== '');
                }));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTableView(_x) {
        return _ref.apply(this, arguments);
      }

      return getTableView;
    }()
  }]);

  return Columns;
}();

exports.default = Columns;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Connection = __webpack_require__(6);

var _Connection2 = _interopRequireDefault(_Connection);

var _Submission = __webpack_require__(10);

var _Submission2 = _interopRequireDefault(_Submission);

var _Event = __webpack_require__(13);

var _Event2 = _interopRequireDefault(_Event);

var _Scheduler = __webpack_require__(30);

var _Scheduler2 = _interopRequireDefault(_Scheduler);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

var _awaitToJs = __webpack_require__(9);

var _awaitToJs2 = _interopRequireDefault(_awaitToJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var OfflineData = function () {
  var send = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
      var _this = this;

      var offlineSubmissions, isOnline, PromiseEach, _ref8, _ref9, error;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              offlineSubmissions = data;
              _context4.next = 3;
              return _Connection2.default.isOnline();

            case 3:
              isOnline = _context4.sent;

              PromiseEach = function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(arr, fn) {
                  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _iteratorNormalCompletion = true;
                          _didIteratorError = false;
                          _iteratorError = undefined;
                          _context2.prev = 3;
                          _iterator = arr[Symbol.iterator]();

                        case 5:
                          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context2.next = 12;
                            break;
                          }

                          item = _step.value;
                          _context2.next = 9;
                          return fn(item);

                        case 9:
                          _iteratorNormalCompletion = true;
                          _context2.next = 5;
                          break;

                        case 12:
                          _context2.next = 18;
                          break;

                        case 14:
                          _context2.prev = 14;
                          _context2.t0 = _context2['catch'](3);
                          _didIteratorError = true;
                          _iteratorError = _context2.t0;

                        case 18:
                          _context2.prev = 18;
                          _context2.prev = 19;

                          if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                          }

                        case 21:
                          _context2.prev = 21;

                          if (!_didIteratorError) {
                            _context2.next = 24;
                            break;
                          }

                          throw _iteratorError;

                        case 24:
                          return _context2.finish(21);

                        case 25:
                          return _context2.finish(18);

                        case 26:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this, [[3, 14, 18, 26], [19,, 21, 25]]);
                }));

                return function PromiseEach(_x3, _x4) {
                  return _ref7.apply(this, arguments);
                };
              }();

              if (!isOnline) {
                _context4.next = 17;
                break;
              }

              _context4.next = 8;
              return _Scheduler2.default.startSync();

            case 8:
              _context4.next = 10;
              return (0, _awaitToJs2.default)(PromiseEach(offlineSubmissions, function () {
                var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(offlineSubmission) {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return sendSubmission(offlineSubmission);

                        case 2:
                        case 'end':
                          return _context3.stop();
                      }
                    }
                  }, _callee3, _this);
                }));

                return function (_x5) {
                  return _ref10.apply(this, arguments);
                };
              }()));

            case 10:
              _ref8 = _context4.sent;
              _ref9 = _slicedToArray(_ref8, 1);
              error = _ref9[0];


              _Scheduler2.default.stopSync();
              if (error) {
                console.log(error);
              }

              console.log('Submissions Synced');
              _Event2.default.emit({
                name: 'FAST:SUBMISSION:SYNCED',
                data: {},
                text: 'The submissions have been synced'
              });

            case 17:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function send(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  var sendSubmission = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(offlineSubmission) {
      var remoteEndPoint, sub, _ref2, _ref3, error, insertedData, _ref4, _ref5, e;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              remoteEndPoint = _Form2.default.getModel({ path: offlineSubmission.path }).remote();


              offlineSubmission.queuedForSync = true;
              sub = (0, _Submission2.default)(offlineSubmission.path);

              // Set the submission as queuedForSync

              _context.next = 5;
              return sub.local().update(offlineSubmission);

            case 5:
              _context.next = 7;
              return (0, _awaitToJs2.default)(remoteEndPoint.insert(offlineSubmission));

            case 7:
              _ref2 = _context.sent;
              _ref3 = _slicedToArray(_ref2, 2);
              error = _ref3[0];
              insertedData = _ref3[1];

              if (!error) {
                _context.next = 17;
                break;
              }

              console.log(error);
              offlineSubmission.queuedForSync = false;
              offlineSubmission.syncError = error;
              sub.local().update(offlineSubmission);
              throw new Error('Error while Syncing data');

            case 17:
              if (insertedData._id) {
                _context.next = 19;
                break;
              }

              throw Error('The remote endpoint did not save the submission properly (no _id back)');

            case 19:
              _context.next = 21;
              return (0, _awaitToJs2.default)(sub.local().remove(offlineSubmission._id));

            case 21:
              _ref4 = _context.sent;
              _ref5 = _slicedToArray(_ref4, 1);
              e = _ref5[0];

              if (!e) {
                _context.next = 26;
                break;
              }

              throw new Error('Sync error:Could not remove local submission after sync');

            case 26:
              return _context.abrupt('return', true);

            case 27:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function sendSubmission(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return Object.freeze({
    send: send
  });
}();

exports.default = OfflineData;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = __webpack_require__(3);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import 'moment/min/locales';

var Moment = function () {
  function Moment() {
    _classCallCheck(this, Moment);
  }

  _createClass(Moment, null, [{
    key: 'setLocales',
    value: function setLocales() {
      _moment2.default.locale(Moment.getLenguage());
    }
  }, {
    key: 'changeLanguage',
    value: function changeLanguage(code) {
      _moment2.default.locale(code);
    }
  }, {
    key: 'getLenguage',
    value: function getLenguage() {
      return localStorage.getItem('defaultLenguage') ? localStorage.getItem('defaultLenguage') : 'en';
    }
  }]);

  return Moment;
}();

exports.default = Moment;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _v = __webpack_require__(27);

var _v2 = _interopRequireDefault(_v);

var _utilities = __webpack_require__(0);

var _utilities2 = _interopRequireDefault(_utilities);

var _Submission = __webpack_require__(10);

var _Submission2 = _interopRequireDefault(_Submission);

var _bluebird = __webpack_require__(8);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var ParallelSurvey = function () {
  /**
   * Creates the Wizard object to have new user or new group
   * @param {*} param0
   */
  var createWizard = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var submission = _ref.submission,
          vm = _ref.vm;
      var groupId;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              groupId = getGroupId(submission);

              if (!submissionHasGroup(groupId)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return', Object.assign({}, getNewUserWizard(vm), { groupId: groupId }));

            case 3:
              return _context.abrupt('return', Object.assign({}, getNewGroupWizard(vm), { groupId: groupId }));

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function createWizard(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var createNewSurvey = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref5) {
      var submission = _ref5.submission,
          vm = _ref5.vm,
          info = _ref5.info;
      var groupId;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              groupId = getGroupId(submission);

              if (!submissionHasGroup(groupId)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return', prepareNewUserObject({ submission: submission, vm: vm, info: info }));

            case 3:
              return _context2.abrupt('return', prepareNewGroupObject({ submission: submission, vm: vm, info: info }));

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function createNewSurvey(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();
  /*
  async function storeNewSurvey ({ survey, vm }) {
    let formio = new Formio(vm.$FAST_CONFIG.APP_URL + '/' + vm.$route.params.idForm);
    // De register if there was a previous registration
     Formio.deregisterPlugin('offline');
    // Register the plugin for offline mode
    Formio.registerPlugin(OFFLINE_PLUGIN.getPlugin({ formio: formio, hashField: vm.hashField }), 'offline');
     let formSubmission = {
      data: survey,
      redirect: 'Update',
      draft: true,
      trigger: 'createParalelSurvey'
    };
     let created = await formio.saveSubmission(formSubmission);
     return created;
  }
  */


  function getNewGroupWizard(vm) {
    var progressSteps = ['1', '2', '3'];
    var steps = [{
      title: vm.$t('Group Name'),
      text: vm.$t('Give the group a name'),
      inputValidator: function inputValidator(value) {
        return new _bluebird2.default(function (resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            var error = new Error(vm.$t('The group name is already taken'));

            reject(error);
          }
        });
      }
    }, {
      title: vm.$t('Current Participant Name'),
      text: vm.$t('Give the current participant a name')
    }, {
      title: vm.$t('Next participant Name'),
      text: vm.$t('Give the next participant a name')
    }];

    return { progressSteps: progressSteps, steps: steps };
  }

  function getNewUserWizard(vm) {
    var progressSteps = ['1'];
    var steps = [{
      title: vm.$t('Participant Name'),
      text: vm.$t('Give the next participant a name')
    }];

    return { progressSteps: progressSteps, steps: steps };
  }

  function getGroupId(submission) {
    var groupId = _utilities2.default.get(function () {
      return (0, _Submission2.default)('*').local().getParallelSurvey(submission).groupId;
    });

    return groupId;
  }

  function submissionHasGroup(groupId) {
    return groupId;
  }
  function prepareNewGroupObject(_ref3) {
    var submission = _ref3.submission,
        vm = _ref3.vm,
        info = _ref3.info;

    var groupName = info[0];
    var participantName = info[1];
    var nextParticipant = info[2];
    // Format the parallelSurvey object
    var parallelSurvey = {
      groupId: (0, _v2.default)(),
      groupName: groupName,
      participantName: participantName,
      submissionId: submission._id
    };

    // Store information of the parallelSurvey on the current submission
    vm.currentSubmission.data.parallelSurvey = (0, _Submission2.default)('*').local().setParallelSurvey(parallelSurvey);

    // New survey Information
    var surveyData = {
      parallelSurvey: (0, _Submission2.default)('*').local().setParallelSurvey(_extends({}, parallelSurvey, {
        participantName: nextParticipant
      }))
    };

    return surveyData;
  }

  function prepareNewUserObject(_ref4) {
    var submission = _ref4.submission,
        vm = _ref4.vm,
        info = _ref4.info;

    var participantName = info[0];
    var parallelsurveyInfo = (0, _Submission2.default)('*').local().getParallelSurvey(submission);

    parallelsurveyInfo.participantName = participantName;
    // New survey Information
    var surveyData = {
      parallelSurvey: (0, _Submission2.default)('*').local().setParallelSurvey(parallelsurveyInfo)
    };

    return surveyData;
  }

  return Object.freeze({
    createWizard: createWizard,
    createNewSurvey: createNewSurvey
    // storeNewSurvey
  });
}();

exports.default = ParallelSurvey;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import Formio from 'formiojs/Formio';
// import offlinePlugin from 'offlinePlugin/offlinePlugin';


var _Submission = __webpack_require__(10);

var _Submission2 = _interopRequireDefault(_Submission);

var _Event = __webpack_require__(13);

var _Event2 = _interopRequireDefault(_Event);

var _bluebird = __webpack_require__(8);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Import = function () {
  function Import() {
    _classCallCheck(this, Import);
  }

  _createClass(Import, null, [{
    key: 'fromJsonFile',

    /**
     *
     * @param {*} file
     * @param {*} vm
     */
    value: function fromJsonFile(file, vm) {
      var reader = new FileReader();
      // Closure to capture the file information.

      reader.onload = function (theFile) {
        return function (e) {
          var json = void 0;

          try {
            json = JSON.parse(e.target.result);
          } catch (ex) {
            throw new Error('The Json file could not be parsed');
          }
          Import.parseJson(json, vm);
        };
      }(file);
      reader.readAsText(file);
    }
    /**
     *
     * @param {*} json
     * @param {*} vm
     */

  }, {
    key: 'parseJson',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(json, vm) {
        var formio;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // let totalSubmissions = json.length;
                formio = Import.getFormIOInstance(vm);

                // Loading.show({ message: 'Importing ' + totalSubmissions + ' submissions' });
                // json = json.slice(151, 200);

                _bluebird2.default.each(json, function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(row, index) {
                    var submission;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            // await Uploader.sendDataToFormIO(row)
                            submission = Import.prepareSubmission(row);
                            _context.next = 3;
                            return Import.saveSubmission(submission, formio, vm);

                          case 3:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }()).then(function () {
                  _Event2.default.emit({ name: 'FAST:DATA:IMPORTED', data: { imported: true }, text: 'Data was imported' });
                }).catch(function (error) {
                  // Loading.hide(error);
                  console.log(error);
                  vm.$swal(vm.$t('Import Error!'), vm.$t('Your submission could not be Imported. Please check the format of your Json file.'), 'error');
                });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function parseJson(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return parseJson;
    }()
  }, {
    key: 'emitNotification',
    value: function emitNotification(vm) {
      vm.$eventHub.emit('FAST-DATA_IMPORTED');
    }
    /**
     *
     * @param {*} row
     */

  }, {
    key: 'prepareSubmission',
    value: function prepareSubmission(row) {
      if (row.id || row._id) {
        delete row.id;
        delete row._id;
      }
      if (row.modified) {
        delete row.modified;
      }
      if (row.owner) {
        delete row.owner;
      }
      var data = row.data ? row.data : row;
      var formSubmission = {
        data: data,
        redirect: false,
        syncError: false,
        draft: true,
        trigger: 'importSubmission'
      };

      return formSubmission;
    }
    /**
     *
     * @param {*} vm
     */
    /*
    static getFormIOInstance (vm) {
      Formio.deregisterPlugin('offline');
      Formio.registerPlugin(offlinePlugin.getPlugin(vm.form.data.path, undefined, false), 'offline');
      let APP_URL = vm.$FAST_CONFIG.APP_URL;
      let formUrl = APP_URL + '/' + vm.form.data.path;
      let formio = new Formio(formUrl);
       return formio;
    }
    */
    /**
     *
     * @param {*} vm
     */

  }, {
    key: 'saveSubmission',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(submission, formio, vm) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _Submission2.default)('*').add({ submission: submission, formio: formio });

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function saveSubmission(_x5, _x6, _x7) {
        return _ref3.apply(this, arguments);
      }

      return saveSubmission;
    }()
  }]);

  return Import;
}();

exports.default = Import;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getRequest = __webpack_require__(57);

var _getRequest2 = _interopRequireDefault(_getRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OFFLINE_PLUGIN = function () {
  function OFFLINE_PLUGIN() {
    _classCallCheck(this, OFFLINE_PLUGIN);
  }

  _createClass(OFFLINE_PLUGIN, null, [{
    key: 'get',
    value: function get() {
      var _this = this;

      var plugin = {
        priority: 0,
        preRequest: function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(args.method === 'GET')) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt('return', _getRequest2.default.handle(args));

                  case 2:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          function preRequest(_x) {
            return _ref.apply(this, arguments);
          }

          return preRequest;
        }(),
        request: function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(args) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(args.method === 'GET')) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt('return', _getRequest2.default.handle(args));

                  case 2:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this);
          }));

          function request(_x2) {
            return _ref2.apply(this, arguments);
          }

          return request;
        }(),
        staticRequest: function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(args) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(args.method === 'GET')) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt('return', _getRequest2.default.handle(args));

                  case 2:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee3, _this);
          }));

          function staticRequest(_x3) {
            return _ref3.apply(this, arguments);
          }

          return staticRequest;
        }()
      };

      return plugin;
    }
  }]);

  return OFFLINE_PLUGIN;
}();

exports.default = OFFLINE_PLUGIN;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetRequest = function () {
  function GetRequest() {
    _classCallCheck(this, GetRequest);
  }

  _createClass(GetRequest, null, [{
    key: 'handle',

    /**
     *
     * @param {*} args
     */
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(args.url.indexOf('form.io') === -1)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', GetRequest.handleExternalAPI(args));

              case 2:
                if (!(args.type === 'form')) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt('return', GetRequest.handleLocalForm(args));

              case 4:
                if (!(args.type === 'select' && args.url.indexOf('form.io') !== -1)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt('return', GetRequest.handleInternalResource(args));

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handle(_x) {
        return _ref.apply(this, arguments);
      }

      return handle;
    }()
    /**
     *
     */

  }, {
    key: 'handleExternalAPI',
    value: function handleExternalAPI() {
      // TODO
      return null;
    }
    /**
     *
     * @param {*} args
     */

  }, {
    key: 'handleLocalForm',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(args) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _Form2.default.local().where('data.path', '=', args.formio.formId).first();

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleLocalForm(_x2) {
        return _ref2.apply(this, arguments);
      }

      return handleLocalForm;
    }()
    /**
     *
     * @param {*} args
     */

  }, {
    key: 'handleInternalResource',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(args) {
        var formID, form;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', null);

              case 4:
                form = _context3.sent;


                form = form.filter(function (f) {
                  return f.data._id === formID;
                })[0];

                if (form) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt('return');

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleInternalResource(_x3) {
        return _ref3.apply(this, arguments);
      }

      return handleInternalResource;
    }()
  }]);

  return GetRequest;
}();

exports.default = GetRequest;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _md = __webpack_require__(29);

var _md2 = _interopRequireDefault(_md);

var _Configuration = __webpack_require__(1);

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hash = function () {
  function Hash() {
    _classCallCheck(this, Hash);
  }

  _createClass(Hash, null, [{
    key: 'string',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_string) {
        var config, hashed;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Configuration2.default.local().first();

              case 2:
                config = _context.sent;
                hashed = '';


                hashed = (0, _md2.default)(_string, config.MD5_KEY);
                return _context.abrupt('return', hashed);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function string(_x) {
        return _ref.apply(this, arguments);
      }

      return string;
    }()
  }]);

  return Hash;
}();

exports.default = Hash;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fast-fastjs.js.map