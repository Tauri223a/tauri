function _inherits(e, r) {
  if ('function' != typeof r && null !== r)
    throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(r && r.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    r && _setPrototypeOf(e, r)
}
function _setPrototypeOf(e, r) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function (e, r) {
      return (e.__proto__ = r), e
    })(e, r)
}
function _createSuper(e) {
  var r = _isNativeReflectConstruct()
  return function () {
    var t,
      n = _getPrototypeOf(e)
    if (r) {
      var a = _getPrototypeOf(this).constructor
      t = Reflect.construct(n, arguments, a)
    } else t = n.apply(this, arguments)
    return _possibleConstructorReturn(this, t)
  }
}
function _possibleConstructorReturn(e, r) {
  return !r || ('object' !== _typeof(r) && 'function' != typeof r)
    ? _assertThisInitialized(e)
    : r
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return e
}
function _isNativeReflectConstruct() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return !1
  if (Reflect.construct.sham) return !1
  if ('function' == typeof Proxy) return !0
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    )
  } catch (e) {
    return !1
  }
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
}
function _createForOfIteratorHelper(e, r) {
  var t =
    ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
  if (!t) {
    if (
      Array.isArray(e) ||
      (t = _unsupportedIterableToArray(e)) ||
      (r && e && 'number' == typeof e.length)
    ) {
      t && (e = t)
      var n = 0,
        a = function () {}
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }
        },
        e: function (e) {
          throw e
        },
        f: a
      }
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }
  var o,
    u = !0,
    i = !1
  return {
    s: function () {
      t = t.call(e)
    },
    n: function () {
      var e = t.next()
      return (u = e.done), e
    },
    e: function (e) {
      ;(i = !0), (o = e)
    },
    f: function () {
      try {
        u || null == t.return || t.return()
      } finally {
        if (i) throw o
      }
    }
  }
}
function _unsupportedIterableToArray(e, r) {
  if (e) {
    if ('string' == typeof e) return _arrayLikeToArray(e, r)
    var t = Object.prototype.toString.call(e).slice(8, -1)
    return (
      'Object' === t && e.constructor && (t = e.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(e)
        : 'Arguments' === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(e, r)
        : void 0
    )
  }
}
function _arrayLikeToArray(e, r) {
  ;(null == r || r > e.length) && (r = e.length)
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t]
  return n
}
function ownKeys(e, r) {
  var t = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    r &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable
      })),
      t.push.apply(t, n)
  }
  return t
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {}
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        })
  }
  return e
}
function _defineProperty(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[r] = t),
    e
  )
}
function _classCallCheck(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function')
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n)
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), e
}
function asyncGeneratorStep(e, r, t, n, a, o, u) {
  try {
    var i = e[o](u),
      s = i.value
  } catch (e) {
    return void t(e)
  }
  i.done ? r(s) : Promise.resolve(s).then(n, a)
}
function _asyncToGenerator(e) {
  return function () {
    var r = this,
      t = arguments
    return new Promise(function (n, a) {
      var o = e.apply(r, t)
      function u(e) {
        asyncGeneratorStep(o, n, a, u, i, 'next', e)
      }
      function i(e) {
        asyncGeneratorStep(o, n, a, u, i, 'throw', e)
      }
      u(void 0)
    })
  }
}
function _typeof(e) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        })(e)
}
!(function (e, r) {
  'object' ===
    ('undefined' == typeof exports ? 'undefined' : _typeof(exports)) &&
  'undefined' != typeof module
    ? r(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], r)
    : r(
        ((e =
          'undefined' != typeof globalThis ? globalThis : e || self).__TAURI__ =
          {})
      )
})(this, function (e) {
  'use strict'
  var r = (function (e) {
    var r,
      t = Object.prototype,
      n = t.hasOwnProperty,
      a = 'function' == typeof Symbol ? Symbol : {},
      o = a.iterator || '@@iterator',
      u = a.asyncIterator || '@@asyncIterator',
      i = a.toStringTag || '@@toStringTag'
    function s(e, r, t) {
      return (
        Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }),
        e[r]
      )
    }
    try {
      s({}, '')
    } catch (e) {
      s = function (e, r, t) {
        return (e[r] = t)
      }
    }
    function c(e, r, t, n) {
      var a = r && r.prototype instanceof y ? r : y,
        o = Object.create(a.prototype),
        u = new M(n || [])
      return (
        (o._invoke = (function (e, r, t) {
          var n = l
          return function (a, o) {
            if (n === h) throw new Error('Generator is already running')
            if (n === m) {
              if ('throw' === a) throw o
              return C()
            }
            for (t.method = a, t.arg = o; ; ) {
              var u = t.delegate
              if (u) {
                var i = T(u, t)
                if (i) {
                  if (i === d) continue
                  return i
                }
              }
              if ('next' === t.method) t.sent = t._sent = t.arg
              else if ('throw' === t.method) {
                if (n === l) throw ((n = m), t.arg)
                t.dispatchException(t.arg)
              } else 'return' === t.method && t.abrupt('return', t.arg)
              n = h
              var s = p(e, r, t)
              if ('normal' === s.type) {
                if (((n = t.done ? m : f), s.arg === d)) continue
                return { value: s.arg, done: t.done }
              }
              'throw' === s.type &&
                ((n = m), (t.method = 'throw'), (t.arg = s.arg))
            }
          }
        })(e, t, u)),
        o
      )
    }
    function p(e, r, t) {
      try {
        return { type: 'normal', arg: e.call(r, t) }
      } catch (e) {
        return { type: 'throw', arg: e }
      }
    }
    e.wrap = c
    var l = 'suspendedStart',
      f = 'suspendedYield',
      h = 'executing',
      m = 'completed',
      d = {}
    function y() {}
    function _() {}
    function g() {}
    var v = {}
    v[o] = function () {
      return this
    }
    var w = Object.getPrototypeOf,
      b = w && w(w(O([])))
    b && b !== t && n.call(b, o) && (v = b)
    var R = (g.prototype = y.prototype = Object.create(v))
    function k(e) {
      ;['next', 'throw', 'return'].forEach(function (r) {
        s(e, r, function (e) {
          return this._invoke(r, e)
        })
      })
    }
    function x(e, r) {
      function t(a, o, u, i) {
        var s = p(e[a], e, o)
        if ('throw' !== s.type) {
          var c = s.arg,
            l = c.value
          return l && 'object' === _typeof(l) && n.call(l, '__await')
            ? r.resolve(l.__await).then(
                function (e) {
                  t('next', e, u, i)
                },
                function (e) {
                  t('throw', e, u, i)
                }
              )
            : r.resolve(l).then(
                function (e) {
                  ;(c.value = e), u(c)
                },
                function (e) {
                  return t('throw', e, u, i)
                }
              )
        }
        i(s.arg)
      }
      var a
      this._invoke = function (e, n) {
        function o() {
          return new r(function (r, a) {
            t(e, n, r, a)
          })
        }
        return (a = a ? a.then(o, o) : o())
      }
    }
    function T(e, t) {
      var n = e.iterator[t.method]
      if (n === r) {
        if (((t.delegate = null), 'throw' === t.method)) {
          if (
            e.iterator.return &&
            ((t.method = 'return'), (t.arg = r), T(e, t), 'throw' === t.method)
          )
            return d
          ;(t.method = 'throw'),
            (t.arg = new TypeError(
              "The iterator does not provide a 'throw' method"
            ))
        }
        return d
      }
      var a = p(n, e.iterator, t.arg)
      if ('throw' === a.type)
        return (t.method = 'throw'), (t.arg = a.arg), (t.delegate = null), d
      var o = a.arg
      return o
        ? o.done
          ? ((t[e.resultName] = o.value),
            (t.next = e.nextLoc),
            'return' !== t.method && ((t.method = 'next'), (t.arg = r)),
            (t.delegate = null),
            d)
          : o
        : ((t.method = 'throw'),
          (t.arg = new TypeError('iterator result is not an object')),
          (t.delegate = null),
          d)
    }
    function G(e) {
      var r = { tryLoc: e[0] }
      1 in e && (r.catchLoc = e[1]),
        2 in e && ((r.finallyLoc = e[2]), (r.afterLoc = e[3])),
        this.tryEntries.push(r)
    }
    function P(e) {
      var r = e.completion || {}
      ;(r.type = 'normal'), delete r.arg, (e.completion = r)
    }
    function M(e) {
      ;(this.tryEntries = [{ tryLoc: 'root' }]),
        e.forEach(G, this),
        this.reset(!0)
    }
    function O(e) {
      if (e) {
        var t = e[o]
        if (t) return t.call(e)
        if ('function' == typeof e.next) return e
        if (!isNaN(e.length)) {
          var a = -1,
            u = function t() {
              for (; ++a < e.length; )
                if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t
              return (t.value = r), (t.done = !0), t
            }
          return (u.next = u)
        }
      }
      return { next: C }
    }
    function C() {
      return { value: r, done: !0 }
    }
    return (
      (_.prototype = R.constructor = g),
      (g.constructor = _),
      (_.displayName = s(g, i, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (e) {
        var r = 'function' == typeof e && e.constructor
        return (
          !!r && (r === _ || 'GeneratorFunction' === (r.displayName || r.name))
        )
      }),
      (e.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, g)
            : ((e.__proto__ = g), s(e, i, 'GeneratorFunction')),
          (e.prototype = Object.create(R)),
          e
        )
      }),
      (e.awrap = function (e) {
        return { __await: e }
      }),
      k(x.prototype),
      (x.prototype[u] = function () {
        return this
      }),
      (e.AsyncIterator = x),
      (e.async = function (r, t, n, a, o) {
        void 0 === o && (o = Promise)
        var u = new x(c(r, t, n, a), o)
        return e.isGeneratorFunction(t)
          ? u
          : u.next().then(function (e) {
              return e.done ? e.value : u.next()
            })
      }),
      k(R),
      s(R, i, 'Generator'),
      (R[o] = function () {
        return this
      }),
      (R.toString = function () {
        return '[object Generator]'
      }),
      (e.keys = function (e) {
        var r = []
        for (var t in e) r.push(t)
        return (
          r.reverse(),
          function t() {
            for (; r.length; ) {
              var n = r.pop()
              if (n in e) return (t.value = n), (t.done = !1), t
            }
            return (t.done = !0), t
          }
        )
      }),
      (e.values = O),
      (M.prototype = {
        constructor: M,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = r),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = r),
            this.tryEntries.forEach(P),
            !e)
          )
            for (var t in this)
              't' === t.charAt(0) &&
                n.call(this, t) &&
                !isNaN(+t.slice(1)) &&
                (this[t] = r)
        },
        stop: function () {
          this.done = !0
          var e = this.tryEntries[0].completion
          if ('throw' === e.type) throw e.arg
          return this.rval
        },
        dispatchException: function (e) {
          if (this.done) throw e
          var t = this
          function a(n, a) {
            return (
              (i.type = 'throw'),
              (i.arg = e),
              (t.next = n),
              a && ((t.method = 'next'), (t.arg = r)),
              !!a
            )
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var u = this.tryEntries[o],
              i = u.completion
            if ('root' === u.tryLoc) return a('end')
            if (u.tryLoc <= this.prev) {
              var s = n.call(u, 'catchLoc'),
                c = n.call(u, 'finallyLoc')
              if (s && c) {
                if (this.prev < u.catchLoc) return a(u.catchLoc, !0)
                if (this.prev < u.finallyLoc) return a(u.finallyLoc)
              } else if (s) {
                if (this.prev < u.catchLoc) return a(u.catchLoc, !0)
              } else {
                if (!c)
                  throw new Error('try statement without catch or finally')
                if (this.prev < u.finallyLoc) return a(u.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, r) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var a = this.tryEntries[t]
            if (
              a.tryLoc <= this.prev &&
              n.call(a, 'finallyLoc') &&
              this.prev < a.finallyLoc
            ) {
              var o = a
              break
            }
          }
          o &&
            ('break' === e || 'continue' === e) &&
            o.tryLoc <= r &&
            r <= o.finallyLoc &&
            (o = null)
          var u = o ? o.completion : {}
          return (
            (u.type = e),
            (u.arg = r),
            o
              ? ((this.method = 'next'), (this.next = o.finallyLoc), d)
              : this.complete(u)
          )
        },
        complete: function (e, r) {
          if ('throw' === e.type) throw e.arg
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : 'normal' === e.type && r && (this.next = r),
            d
          )
        },
        finish: function (e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var t = this.tryEntries[r]
            if (t.finallyLoc === e)
              return this.complete(t.completion, t.afterLoc), P(t), d
          }
        },
        catch: function (e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var t = this.tryEntries[r]
            if (t.tryLoc === e) {
              var n = t.completion
              if ('throw' === n.type) {
                var a = n.arg
                P(t)
              }
              return a
            }
          }
          throw new Error('illegal catch attempt')
        },
        delegateYield: function (e, t, n) {
          return (
            (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
            'next' === this.method && (this.arg = r),
            d
          )
        }
      }),
      e
    )
  })(
    'object' === ('undefined' == typeof module ? 'undefined' : _typeof(module))
      ? module.exports
      : {}
  )
  try {
    regeneratorRuntime = r
  } catch (e) {
    Function('r', 'regeneratorRuntime = r')(r)
  }
  function t(e) {
    for (var r = void 0, t = e[0], n = 1; n < e.length; ) {
      var a = e[n],
        o = e[n + 1]
      if (
        ((n += 2),
        ('optionalAccess' === a || 'optionalCall' === a) && null == t)
      )
        return
      'access' === a || 'optionalAccess' === a
        ? ((r = t), (t = o(t)))
        : ('call' !== a && 'optionalCall' !== a) ||
          ((t = o(function () {
            for (
              var e, n = arguments.length, a = new Array(n), o = 0;
              o < n;
              o++
            )
              a[o] = arguments[o]
            return (e = t).call.apply(e, [r].concat(a))
          })),
          (r = void 0))
    }
    return t
  }
  function n() {
    var e = new Int8Array(1)
    window.crypto.getRandomValues(e)
    var r = new Uint8Array(Math.max(16, Math.abs(e[0])))
    return window.crypto.getRandomValues(r), r.join('')
  }
  function a(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      a = n()
    return (
      Object.defineProperty(window, a, {
        value: function (n) {
          return (
            r && Reflect.deleteProperty(window, a),
            t([
              e,
              'optionalCall',
              function (e) {
                return e(n)
              }
            ])
          )
        },
        writable: !1,
        configurable: !0
      }),
      a
    )
  }
  function o(e) {
    return u.apply(this, arguments)
  }
  function u() {
    return (u = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        var t,
          n = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (t = n.length > 1 && void 0 !== n[1] ? n[1] : {}),
                  e.abrupt(
                    'return',
                    new Promise(function (e, n) {
                      var o = a(function (r) {
                          e(r), Reflect.deleteProperty(window, u)
                        }, !0),
                        u = a(function (e) {
                          n(e), Reflect.deleteProperty(window, o)
                        }, !0)
                      window.rpc.notify(
                        r,
                        _objectSpread(
                          {
                            __invokeKey: __TAURI_INVOKE_KEY__,
                            callback: o,
                            error: u
                          },
                          t
                        )
                      )
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var i = Object.freeze({
    __proto__: null,
    transformCallback: a,
    invoke: o,
    convertFileSrc: function (e) {
      return navigator.userAgent.includes('Windows')
        ? 'https://custom.protocol.asset_'.concat(e)
        : 'asset://'.concat(e)
    }
  })
  function s(e) {
    return c.apply(this, arguments)
  }
  function c() {
    return (c = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt('return', o('tauri', r))
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function p() {
    return (p = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({ __tauriModule: 'App', message: { cmd: 'getAppVersion' } })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function l() {
    return (l = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({ __tauriModule: 'App', message: { cmd: 'getAppName' } })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function f() {
    return (f = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'App',
                    message: { cmd: 'getTauriVersion' }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var h = Object.freeze({
    __proto__: null,
    getName: function () {
      return l.apply(this, arguments)
    },
    getVersion: function () {
      return p.apply(this, arguments)
    },
    getTauriVersion: function () {
      return f.apply(this, arguments)
    }
  })
  function m() {
    return (m = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({ __tauriModule: 'Cli', message: { cmd: 'cliMatches' } })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var d = Object.freeze({
    __proto__: null,
    getMatches: function () {
      return m.apply(this, arguments)
    }
  })
  function y() {
    return (y = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        var r,
          t = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  'object' ===
                    _typeof(
                      (r = t.length > 0 && void 0 !== t[0] ? t[0] : {})
                    ) && Object.freeze(r),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Dialog',
                      message: { cmd: 'openDialog', options: r }
                    })
                  )
                )
              case 3:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function _() {
    return (_ = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        var r,
          t = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  'object' ===
                    _typeof(
                      (r = t.length > 0 && void 0 !== t[0] ? t[0] : {})
                    ) && Object.freeze(r),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Dialog',
                      message: { cmd: 'saveDialog', options: r }
                    })
                  )
                )
              case 3:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var g = Object.freeze({
    __proto__: null,
    open: function () {
      return y.apply(this, arguments)
    },
    save: function () {
      return _.apply(this, arguments)
    }
  })
  function v(e, r, t) {
    return w.apply(this, arguments)
  }
  function w() {
    return (w = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r, t, n) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  s({
                    __tauriModule: 'Event',
                    message: {
                      cmd: 'emit',
                      event: r,
                      windowLabel: t,
                      payload: n
                    }
                  })
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function b(e) {
    return R.apply(this, arguments)
  }
  function R() {
    return (R = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Event',
                    message: { cmd: 'unlisten', eventId: r }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function k(e, r) {
    return x.apply(this, arguments)
  }
  function x() {
    return (x = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Event',
                    message: { cmd: 'listen', event: r, handler: a(t) }
                  }).then(function (e) {
                    return _asyncToGenerator(
                      regeneratorRuntime.mark(function r() {
                        return regeneratorRuntime.wrap(function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return r.abrupt('return', b(e))
                              case 1:
                              case 'end':
                                return r.stop()
                            }
                        }, r)
                      })
                    )
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function T(e, r) {
    return G.apply(this, arguments)
  }
  function G() {
    return (G = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  k(r, function (e) {
                    t(e), b(e.id).catch(function () {})
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function P(e, r) {
    return M.apply(this, arguments)
  }
  function M() {
    return (M = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt('return', v(r, void 0, t))
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var O,
    C = Object.freeze({ __proto__: null, listen: k, once: T, emit: P })
  function j() {
    return (j = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        var t,
          n = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (t = n.length > 1 && void 0 !== n[1] ? n[1] : {}),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Fs',
                      message: { cmd: 'readTextFile', path: r, options: t }
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function S() {
    return (S = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        var t,
          n = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (t = n.length > 1 && void 0 !== n[1] ? n[1] : {}),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Fs',
                      message: { cmd: 'readBinaryFile', path: r, options: t }
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function F() {
    return (F = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        var t,
          n = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  'object' ===
                    _typeof(
                      (t = n.length > 1 && void 0 !== n[1] ? n[1] : {})
                    ) && Object.freeze(t),
                  'object' === _typeof(r) && Object.freeze(r),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Fs',
                      message: {
                        cmd: 'writeFile',
                        path: r.path,
                        contents: r.contents,
                        options: t
                      }
                    })
                  )
                )
              case 4:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  !(function (e) {
    e[(e.Audio = 1)] = 'Audio'
    e[(e.Cache = 2)] = 'Cache'
    e[(e.Config = 3)] = 'Config'
    e[(e.Data = 4)] = 'Data'
    e[(e.LocalData = 5)] = 'LocalData'
    e[(e.Desktop = 6)] = 'Desktop'
    e[(e.Document = 7)] = 'Document'
    e[(e.Download = 8)] = 'Download'
    e[(e.Executable = 9)] = 'Executable'
    e[(e.Font = 10)] = 'Font'
    e[(e.Home = 11)] = 'Home'
    e[(e.Picture = 12)] = 'Picture'
    e[(e.Public = 13)] = 'Public'
    e[(e.Runtime = 14)] = 'Runtime'
    e[(e.Template = 15)] = 'Template'
    e[(e.Video = 16)] = 'Video'
    e[(e.Resource = 17)] = 'Resource'
    e[(e.App = 18)] = 'App'
    e[(e.Current = 19)] = 'Current'
  })(O || (O = {}))
  var D = 65536
  function z(e) {
    var r = (function (e) {
      if (e.length < D) return String.fromCharCode.apply(null, Array.from(e))
      for (var r = '', t = e.length, n = 0; n < t; n++) {
        var a = e.subarray(n * D, (n + 1) * D)
        r += String.fromCharCode.apply(null, Array.from(a))
      }
      return r
    })(new Uint8Array(e))
    return btoa(r)
  }
  function A() {
    return (A = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        var t,
          n = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  'object' ===
                    _typeof(
                      (t = n.length > 1 && void 0 !== n[1] ? n[1] : {})
                    ) && Object.freeze(t),
                  'object' === _typeof(r) && Object.freeze(r),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Fs',
                      message: {
                        cmd: 'writeBinaryFile',
                        path: r.path,
                        contents: z(r.contents),
                        options: t
                      }
                    })
                  )
                )
              case 4:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function L() {
    return (L = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        var t,
          n = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (t = n.length > 1 && void 0 !== n[1] ? n[1] : {}),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Fs',
                      message: { cmd: 'readDir', path: r, options: t }
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function E() {
    return (E = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        var t,
          n = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (t = n.length > 1 && void 0 !== n[1] ? n[1] : {}),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Fs',
                      message: { cmd: 'createDir', path: r, options: t }
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function W() {
    return (W = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        var t,
          n = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (t = n.length > 1 && void 0 !== n[1] ? n[1] : {}),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Fs',
                      message: { cmd: 'removeDir', path: r, options: t }
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function I() {
    return (I = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r, t) {
        var n,
          a = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = a.length > 2 && void 0 !== a[2] ? a[2] : {}),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Fs',
                      message: {
                        cmd: 'copyFile',
                        source: r,
                        destination: t,
                        options: n
                      }
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function N() {
    return (N = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        var t,
          n = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (t = n.length > 1 && void 0 !== n[1] ? n[1] : {}),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Fs',
                      message: { cmd: 'removeFile', path: r, options: t }
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function U() {
    return (U = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r, t) {
        var n,
          a = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = a.length > 2 && void 0 !== a[2] ? a[2] : {}),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Fs',
                      message: {
                        cmd: 'renameFile',
                        oldPath: r,
                        newPath: t,
                        options: n
                      }
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var B = Object.freeze({
    __proto__: null,
    get BaseDirectory() {
      return O
    },
    get Dir() {
      return O
    },
    readTextFile: function (e) {
      return j.apply(this, arguments)
    },
    readBinaryFile: function (e) {
      return S.apply(this, arguments)
    },
    writeFile: function (e) {
      return F.apply(this, arguments)
    },
    writeBinaryFile: function (e) {
      return A.apply(this, arguments)
    },
    readDir: function (e) {
      return L.apply(this, arguments)
    },
    createDir: function (e) {
      return E.apply(this, arguments)
    },
    removeDir: function (e) {
      return W.apply(this, arguments)
    },
    copyFile: function (e, r) {
      return I.apply(this, arguments)
    },
    removeFile: function (e) {
      return N.apply(this, arguments)
    },
    renameFile: function (e, r) {
      return U.apply(this, arguments)
    }
  })
  function q() {
    return (q = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'GlobalShortcut',
                    message: { cmd: 'register', shortcut: r, handler: a(t) }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function V() {
    return (V = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'GlobalShortcut',
                    message: { cmd: 'registerAll', shortcuts: r, handler: a(t) }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function H() {
    return (H = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'GlobalShortcut',
                    message: { cmd: 'isRegistered', shortcut: r }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function J() {
    return (J = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'GlobalShortcut',
                    message: { cmd: 'unregister', shortcut: r }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function K() {
    return (K = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'GlobalShortcut',
                    message: { cmd: 'unregisterAll' }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var Y,
    $ = Object.freeze({
      __proto__: null,
      register: function (e, r) {
        return q.apply(this, arguments)
      },
      registerAll: function (e, r) {
        return V.apply(this, arguments)
      },
      isRegistered: function (e) {
        return H.apply(this, arguments)
      },
      unregister: function (e) {
        return J.apply(this, arguments)
      },
      unregisterAll: function () {
        return K.apply(this, arguments)
      }
    })
  function Q(e, r) {
    return null != e ? e : r()
  }
  function X(e) {
    for (var r = void 0, t = e[0], n = 1; n < e.length; ) {
      var a = e[n],
        o = e[n + 1]
      if (
        ((n += 2),
        ('optionalAccess' === a || 'optionalCall' === a) && null == t)
      )
        return
      'access' === a || 'optionalAccess' === a
        ? ((r = t), (t = o(t)))
        : ('call' !== a && 'optionalCall' !== a) ||
          ((t = o(function () {
            for (
              var e, n = arguments.length, a = new Array(n), o = 0;
              o < n;
              o++
            )
              a[o] = arguments[o]
            return (e = t).call.apply(e, [r].concat(a))
          })),
          (r = void 0))
    }
    return t
  }
  !(function (e) {
    e[(e.JSON = 1)] = 'JSON'
    e[(e.Text = 2)] = 'Text'
    e[(e.Binary = 3)] = 'Binary'
  })(Y || (Y = {}))
  var Z = (function () {
      function e(r, t) {
        _classCallCheck(this, e), (this.type = r), (this.payload = t)
      }
      return (
        _createClass(e, null, [
          {
            key: 'form',
            value: function (r) {
              return new e('Form', r)
            }
          },
          {
            key: 'json',
            value: function (r) {
              return new e('Json', r)
            }
          },
          {
            key: 'text',
            value: function (r) {
              return new e('Text', r)
            }
          },
          {
            key: 'bytes',
            value: function (r) {
              return new e('Bytes', r)
            }
          }
        ]),
        e
      )
    })(),
    ee = function e(r) {
      _classCallCheck(this, e),
        (this.url = r.url),
        (this.status = r.status),
        (this.ok = this.status >= 200 && this.status < 300),
        (this.headers = r.headers),
        (this.data = r.data)
    },
    re = (function () {
      function e(r) {
        _classCallCheck(this, e), (this.id = r)
      }
      var r, t, n, a, o, u, i
      return (
        _createClass(e, [
          {
            key: 'drop',
            value:
              ((i = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              s({
                                __tauriModule: 'Http',
                                message: { cmd: 'dropClient', client: this.id }
                              })
                            )
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function () {
                return i.apply(this, arguments)
              })
          },
          {
            key: 'request',
            value:
              ((u = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  var t
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t =
                                !r.responseType || r.responseType === Y.JSON) &&
                                (r.responseType = Y.Text),
                              e.abrupt(
                                'return',
                                s({
                                  __tauriModule: 'Http',
                                  message: {
                                    cmd: 'httpRequest',
                                    client: this.id,
                                    options: r
                                  }
                                }).then(function (e) {
                                  var r = new ee(e)
                                  if (t) {
                                    try {
                                      r.data = JSON.parse(r.data)
                                    } catch (e) {
                                      if (r.ok)
                                        throw Error(
                                          'Failed to parse response `'
                                            .concat(r.data, '` as JSON: ')
                                            .concat(
                                              e,
                                              ';\n              try setting the `responseType` option to `ResponseType.Text` or `ResponseType.Binary` if the API does not return a JSON response.'
                                            )
                                        )
                                    }
                                    return r
                                  }
                                  return r
                                })
                              )
                            )
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function (e) {
                return u.apply(this, arguments)
              })
          },
          {
            key: 'get',
            value:
              ((o = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r, t) {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              this.request(
                                _objectSpread({ method: 'GET', url: r }, t)
                              )
                            )
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function (e, r) {
                return o.apply(this, arguments)
              })
          },
          {
            key: 'post',
            value:
              ((a = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r, t, n) {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              this.request(
                                _objectSpread(
                                  { method: 'POST', url: r, body: t },
                                  n
                                )
                              )
                            )
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function (e, r, t) {
                return a.apply(this, arguments)
              })
          },
          {
            key: 'put',
            value:
              ((n = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r, t, n) {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              this.request(
                                _objectSpread(
                                  { method: 'PUT', url: r, body: t },
                                  n
                                )
                              )
                            )
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function (e, r, t) {
                return n.apply(this, arguments)
              })
          },
          {
            key: 'patch',
            value:
              ((t = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r, t) {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              this.request(
                                _objectSpread({ method: 'PATCH', url: r }, t)
                              )
                            )
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function (e, r) {
                return t.apply(this, arguments)
              })
          },
          {
            key: 'delete',
            value:
              ((r = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r, t) {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              this.request(
                                _objectSpread({ method: 'DELETE', url: r }, t)
                              )
                            )
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function (e, t) {
                return r.apply(this, arguments)
              })
          }
        ]),
        e
      )
    })()
  function te(e) {
    return ne.apply(this, arguments)
  }
  function ne() {
    return (ne = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Http',
                    message: { cmd: 'createClient', options: r }
                  }).then(function (e) {
                    return new re(e)
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var ae = null
  function oe() {
    return (oe = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (null !== ae) {
                  e.next = 4
                  break
                }
                return (e.next = 3), te()
              case 3:
                ae = e.sent
              case 4:
                return e.abrupt(
                  'return',
                  ae.request(
                    _objectSpread(
                      {
                        url: r,
                        method: Q(
                          X([
                            t,
                            'optionalAccess',
                            function (e) {
                              return e.method
                            }
                          ]),
                          function () {
                            return 'GET'
                          }
                        )
                      },
                      t
                    )
                  )
                )
              case 5:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var ue = Object.freeze({
    __proto__: null,
    getClient: te,
    fetch: function (e, r) {
      return oe.apply(this, arguments)
    },
    Body: Z,
    Client: re,
    Response: ee,
    get ResponseType() {
      return Y
    }
  })
  function ie() {
    return (ie = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ('default' === window.Notification.permission) {
                  e.next = 2
                  break
                }
                return e.abrupt(
                  'return',
                  Promise.resolve('granted' === window.Notification.permission)
                )
              case 2:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Notification',
                    message: { cmd: 'isNotificationPermissionGranted' }
                  })
                )
              case 3:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function se() {
    return (se = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  window.Notification.requestPermission()
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var ce = Object.freeze({
    __proto__: null,
    sendNotification: function (e) {
      'string' == typeof e
        ? new window.Notification(e)
        : new window.Notification(e.title, e)
    },
    requestPermission: function () {
      return se.apply(this, arguments)
    },
    isPermissionGranted: function () {
      return ie.apply(this, arguments)
    }
  })
  function pe() {
    return (pe = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: { cmd: 'resolvePath', path: '', directory: O.App }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function le() {
    return (le = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Audio
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function fe() {
    return (fe = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Cache
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function he() {
    return (he = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Config
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function me() {
    return (me = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: { cmd: 'resolvePath', path: '', directory: O.Data }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function de() {
    return (de = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Desktop
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function ye() {
    return (ye = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Document
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function _e() {
    return (_e = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Download
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function ge() {
    return (ge = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Executable
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function ve() {
    return (ve = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: { cmd: 'resolvePath', path: '', directory: O.Font }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function we() {
    return (we = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: { cmd: 'resolvePath', path: '', directory: O.Home }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function be() {
    return (be = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.LocalData
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function Re() {
    return (Re = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Picture
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function ke() {
    return (ke = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Public
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function xe() {
    return (xe = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Resource
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function Te() {
    return (Te = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Runtime
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function Ge() {
    return (Ge = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Template
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function Pe() {
    return (Pe = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Video
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function Me() {
    return (Me = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: {
                      cmd: 'resolvePath',
                      path: '',
                      directory: O.Current
                    }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function Oe() {
    return (Oe = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Fs',
                    message: { cmd: 'resolvePath', path: r, directory: t }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var Ce = Object.freeze({
    __proto__: null,
    appDir: function () {
      return pe.apply(this, arguments)
    },
    audioDir: function () {
      return le.apply(this, arguments)
    },
    cacheDir: function () {
      return fe.apply(this, arguments)
    },
    configDir: function () {
      return he.apply(this, arguments)
    },
    dataDir: function () {
      return me.apply(this, arguments)
    },
    desktopDir: function () {
      return de.apply(this, arguments)
    },
    documentDir: function () {
      return ye.apply(this, arguments)
    },
    downloadDir: function () {
      return _e.apply(this, arguments)
    },
    executableDir: function () {
      return ge.apply(this, arguments)
    },
    fontDir: function () {
      return ve.apply(this, arguments)
    },
    homeDir: function () {
      return we.apply(this, arguments)
    },
    localDataDir: function () {
      return be.apply(this, arguments)
    },
    pictureDir: function () {
      return Re.apply(this, arguments)
    },
    publicDir: function () {
      return ke.apply(this, arguments)
    },
    resourceDir: function () {
      return xe.apply(this, arguments)
    },
    runtimeDir: function () {
      return Te.apply(this, arguments)
    },
    templateDir: function () {
      return Ge.apply(this, arguments)
    },
    videoDir: function () {
      return Pe.apply(this, arguments)
    },
    currentDir: function () {
      return Me.apply(this, arguments)
    },
    resolvePath: function (e, r) {
      return Oe.apply(this, arguments)
    },
    get BaseDirectory() {
      return O
    }
  })
  function je() {
    return (je = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        var r,
          t = arguments
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (r = t.length > 0 && void 0 !== t[0] ? t[0] : 0),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Process',
                      message: { cmd: 'exit', exitCode: r }
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function Se() {
    return (Se = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({ __tauriModule: 'Process', message: { cmd: 'relaunch' } })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var Fe = Object.freeze({
    __proto__: null,
    exit: function () {
      return je.apply(this, arguments)
    },
    relaunch: function () {
      return Se.apply(this, arguments)
    }
  })
  function De(e, r) {
    return null != e ? e : r()
  }
  function ze(e, r, t, n) {
    return Ae.apply(this, arguments)
  }
  function Ae() {
    return (Ae = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r, t, n, o) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  'object' === _typeof(n) && Object.freeze(n),
                  e.abrupt(
                    'return',
                    s({
                      __tauriModule: 'Shell',
                      message: {
                        cmd: 'execute',
                        program: t,
                        args: 'string' == typeof n ? [n] : n,
                        options: o,
                        onEventFn: a(r)
                      }
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var Le = (function () {
      function e() {
        _classCallCheck(this, e), e.prototype.__init.call(this)
      }
      return (
        _createClass(e, [
          {
            key: '__init',
            value: function () {
              this.eventListeners = Object.create(null)
            }
          },
          {
            key: 'addEventListener',
            value: function (e, r) {
              e in this.eventListeners
                ? this.eventListeners[e].push(r)
                : (this.eventListeners[e] = [r])
            }
          },
          {
            key: '_emit',
            value: function (e, r) {
              if (e in this.eventListeners) {
                var t,
                  n = _createForOfIteratorHelper(this.eventListeners[e])
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    ;(0, t.value)(r)
                  }
                } catch (e) {
                  n.e(e)
                } finally {
                  n.f()
                }
              }
            }
          },
          {
            key: 'on',
            value: function (e, r) {
              return this.addEventListener(e, r), this
            }
          }
        ]),
        e
      )
    })(),
    Ee = (function () {
      function e(r) {
        _classCallCheck(this, e), (this.pid = r)
      }
      var r, t
      return (
        _createClass(e, [
          {
            key: 'write',
            value:
              ((t = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              s({
                                __tauriModule: 'Shell',
                                message: {
                                  cmd: 'stdinWrite',
                                  pid: this.pid,
                                  buffer: r
                                }
                              })
                            )
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function (e) {
                return t.apply(this, arguments)
              })
          },
          {
            key: 'kill',
            value:
              ((r = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              s({
                                __tauriModule: 'Shell',
                                message: { cmd: 'killChild', pid: this.pid }
                              })
                            )
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function () {
                return r.apply(this, arguments)
              })
          }
        ]),
        e
      )
    })(),
    We = (function (e) {
      _inherits(a, e)
      var r,
        t,
        n = _createSuper(a)
      function a(e) {
        var r,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          o = arguments.length > 2 ? arguments[2] : void 0
        return (
          _classCallCheck(this, a),
          (r = n.call(this)),
          a.prototype.__init2.call(_assertThisInitialized(r)),
          a.prototype.__init3.call(_assertThisInitialized(r)),
          (r.program = e),
          (r.args = 'string' == typeof t ? [t] : t),
          (r.options = De(o, function () {
            return {}
          })),
          r
        )
      }
      return (
        _createClass(
          a,
          [
            {
              key: '__init2',
              value: function () {
                this.stdout = new Le()
              }
            },
            {
              key: '__init3',
              value: function () {
                this.stderr = new Le()
              }
            },
            {
              key: 'spawn',
              value:
                ((t = _asyncToGenerator(
                  regeneratorRuntime.mark(function e() {
                    var r = this
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                'return',
                                ze(
                                  function (e) {
                                    switch (e.event) {
                                      case 'Error':
                                        r._emit('error', e.payload)
                                        break
                                      case 'Terminated':
                                        r._emit('close', e.payload)
                                        break
                                      case 'Stdout':
                                        r.stdout._emit('data', e.payload)
                                        break
                                      case 'Stderr':
                                        r.stderr._emit('data', e.payload)
                                    }
                                  },
                                  this.program,
                                  this.args,
                                  this.options
                                ).then(function (e) {
                                  return new Ee(e)
                                })
                              )
                            case 1:
                            case 'end':
                              return e.stop()
                          }
                      },
                      e,
                      this
                    )
                  })
                )),
                function () {
                  return t.apply(this, arguments)
                })
            },
            {
              key: 'execute',
              value:
                ((r = _asyncToGenerator(
                  regeneratorRuntime.mark(function e() {
                    var r = this
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              new Promise(function (e, t) {
                                r.on('error', t)
                                var n = [],
                                  a = []
                                r.stdout.on('data', function (e) {
                                  n.push(e)
                                }),
                                  r.stderr.on('data', function (e) {
                                    a.push(e)
                                  }),
                                  r.on('close', function (r) {
                                    e({
                                      code: r.code,
                                      signal: r.signal,
                                      stdout: n.join('\n'),
                                      stderr: a.join('\n')
                                    })
                                  }),
                                  r.spawn().catch(t)
                              })
                            )
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )),
                function () {
                  return r.apply(this, arguments)
                })
            }
          ],
          [
            {
              key: 'sidecar',
              value: function (e) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  t = arguments.length > 2 ? arguments[2] : void 0,
                  n = new a(e, r, t)
                return (n.options.sidecar = !0), n
              }
            }
          ]
        ),
        a
      )
    })(Le)
  function Ie() {
    return (Ie = _asyncToGenerator(
      regeneratorRuntime.mark(function e(r, t) {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Shell',
                    message: { cmd: 'open', path: r, with: t }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var Ne = Object.freeze({
    __proto__: null,
    Command: We,
    Child: Ee,
    open: function (e, r) {
      return Ie.apply(this, arguments)
    }
  })
  function Ue(e) {
    for (var r = void 0, t = e[0], n = 1; n < e.length; ) {
      var a = e[n],
        o = e[n + 1]
      if (
        ((n += 2),
        ('optionalAccess' === a || 'optionalCall' === a) && null == t)
      )
        return
      'access' === a || 'optionalAccess' === a
        ? ((r = t), (t = o(t)))
        : ('call' !== a && 'optionalCall' !== a) ||
          ((t = o(function () {
            for (
              var e, n = arguments.length, a = new Array(n), o = 0;
              o < n;
              o++
            )
              a[o] = arguments[o]
            return (e = t).call.apply(e, [r].concat(a))
          })),
          (r = void 0))
    }
    return t
  }
  function Be() {
    return (Be = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        var r, t
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (t = function () {
                    r && r(), (r = void 0)
                  }),
                  e.abrupt(
                    'return',
                    new Promise(function (e, n) {
                      k('tauri://update-status', function (r) {
                        var a
                        ;(a = Ue([
                          r,
                          'optionalAccess',
                          function (e) {
                            return e.payload
                          }
                        ])).error
                          ? (t(), n(a.error))
                          : 'DONE' === a.status && (t(), e())
                      })
                        .then(function (e) {
                          r = e
                        })
                        .catch(function (e) {
                          throw (t(), e)
                        }),
                        P('tauri://update-install').catch(function (e) {
                          throw (t(), e)
                        })
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function qe() {
    return (qe = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        var r, t
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (t = function () {
                    r && r(), (r = void 0)
                  }),
                  e.abrupt(
                    'return',
                    new Promise(function (e, n) {
                      T('tauri://update-available', function (r) {
                        var n
                        ;(n = Ue([
                          r,
                          'optionalAccess',
                          function (e) {
                            return e.payload
                          }
                        ])),
                          t(),
                          e({ manifest: n, shouldUpdate: !0 })
                      }).catch(function (e) {
                        throw (t(), e)
                      }),
                        k('tauri://update-status', function (r) {
                          var a
                          ;(a = Ue([
                            r,
                            'optionalAccess',
                            function (e) {
                              return e.payload
                            }
                          ])).error
                            ? (t(), n(a.error))
                            : 'UPTODATE' === a.status &&
                              (t(), e({ shouldUpdate: !1 }))
                        })
                          .then(function (e) {
                            r = e
                          })
                          .catch(function (e) {
                            throw (t(), e)
                          }),
                        P('tauri://update').catch(function (e) {
                          throw (t(), e)
                        })
                    })
                  )
                )
              case 2:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var Ve,
    He = Object.freeze({
      __proto__: null,
      installUpdate: function () {
        return Be.apply(this, arguments)
      },
      checkUpdate: function () {
        return qe.apply(this, arguments)
      }
    }),
    Je = (function () {
      function e(r, t) {
        _classCallCheck(this, e),
          e.prototype.__init.call(this),
          (this.width = r),
          (this.height = t)
      }
      return (
        _createClass(e, [
          {
            key: '__init',
            value: function () {
              this.type = 'Logical'
            }
          }
        ]),
        e
      )
    })(),
    Ke = (function () {
      function e(r, t) {
        _classCallCheck(this, e),
          e.prototype.__init2.call(this),
          (this.width = r),
          (this.height = t)
      }
      return (
        _createClass(e, [
          {
            key: '__init2',
            value: function () {
              this.type = 'Physical'
            }
          },
          {
            key: 'toLogical',
            value: function (e) {
              return new Je(this.width / e, this.height / e)
            }
          }
        ]),
        e
      )
    })(),
    Ye = (function () {
      function e(r, t) {
        _classCallCheck(this, e),
          e.prototype.__init3.call(this),
          (this.x = r),
          (this.y = t)
      }
      return (
        _createClass(e, [
          {
            key: '__init3',
            value: function () {
              this.type = 'Logical'
            }
          }
        ]),
        e
      )
    })(),
    $e = (function () {
      function e(r, t) {
        _classCallCheck(this, e),
          e.prototype.__init4.call(this),
          (this.x = r),
          (this.y = t)
      }
      return (
        _createClass(e, [
          {
            key: '__init4',
            value: function () {
              this.type = 'Physical'
            }
          },
          {
            key: 'toLogical',
            value: function (e) {
              return new Ye(this.x / e, this.y / e)
            }
          }
        ]),
        e
      )
    })()
  function Qe() {
    return window.__TAURI__.__windows
  }
  !(function (e) {
    e[(e.Critical = 1)] = 'Critical'
    e[(e.Informational = 2)] = 'Informational'
  })(Ve || (Ve = {}))
  var Xe = ['tauri://created', 'tauri://error'],
    Ze = (function () {
      function e(r) {
        _classCallCheck(this, e),
          (this.label = r),
          (this.listeners = Object.create(null))
      }
      var r, t, n
      return (
        _createClass(e, [
          {
            key: 'listen',
            value:
              ((n = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r, t) {
                  var n = this
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this._handleTauriEvent(r, t)) {
                              e.next = 2
                              break
                            }
                            return e.abrupt(
                              'return',
                              Promise.resolve(function () {
                                var e = n.listeners[r]
                                e.splice(e.indexOf(t), 1)
                              })
                            )
                          case 2:
                            return e.abrupt('return', k(r, t))
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function (e, r) {
                return n.apply(this, arguments)
              })
          },
          {
            key: 'once',
            value:
              ((t = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r, t) {
                  var n = this
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this._handleTauriEvent(r, t)) {
                              e.next = 2
                              break
                            }
                            return e.abrupt(
                              'return',
                              Promise.resolve(function () {
                                var e = n.listeners[r]
                                e.splice(e.indexOf(t), 1)
                              })
                            )
                          case 2:
                            return e.abrupt('return', T(r, t))
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function (e, r) {
                return t.apply(this, arguments)
              })
          },
          {
            key: 'emit',
            value:
              ((r = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r, t) {
                  var n, a
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!Xe.includes(r)) {
                              e.next = 4
                              break
                            }
                            n = _createForOfIteratorHelper(
                              this.listeners[r] || []
                            )
                            try {
                              for (n.s(); !(a = n.n()).done; )
                                (0, a.value)({ event: r, id: -1, payload: t })
                            } catch (e) {
                              n.e(e)
                            } finally {
                              n.f()
                            }
                            return e.abrupt('return', Promise.resolve())
                          case 4:
                            return e.abrupt('return', v(r, this.label, t))
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this
                  )
                })
              )),
              function (e, t) {
                return r.apply(this, arguments)
              })
          },
          {
            key: '_handleTauriEvent',
            value: function (e, r) {
              return (
                !!Xe.includes(e) &&
                (e in this.listeners
                  ? this.listeners[e].push(r)
                  : (this.listeners[e] = [r]),
                !0)
              )
            }
          }
        ]),
        e
      )
    })(),
    er = (function (e) {
      _inherits(t, e)
      var r = _createSuper(t)
      function t(e) {
        var n,
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        return (
          _classCallCheck(this, t),
          (n = r.call(this, e)),
          s({
            __tauriModule: 'Window',
            message: {
              cmd: 'createWebview',
              data: { options: _objectSpread({ label: e }, a) }
            }
          })
            .then(
              _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt('return', n.emit('tauri://created'))
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
            )
            .catch(
              (function () {
                var e = _asyncToGenerator(
                  regeneratorRuntime.mark(function e(r) {
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              n.emit('tauri://error', r)
                            )
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (r) {
                  return e.apply(this, arguments)
                }
              })()
            ),
          n
        )
      }
      return (
        _createClass(t, null, [
          {
            key: 'getByLabel',
            value: function (e) {
              return Qe().some(function (r) {
                return r.label === e
              })
                ? new Ze(e)
                : null
            }
          }
        ]),
        t
      )
    })(Ze),
    rr = (function () {
      function e() {
        _classCallCheck(this, e)
      }
      var r,
        t,
        n,
        a,
        o,
        u,
        i,
        c,
        p,
        l,
        f,
        h,
        m,
        d,
        y,
        _,
        g,
        v,
        w,
        b,
        R,
        k,
        x,
        T,
        G,
        P,
        M,
        O,
        C,
        j,
        S,
        F
      return (
        _createClass(e, [
          {
            key: 'scaleFactor',
            value:
              ((F = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'scaleFactor' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return F.apply(this, arguments)
              })
          },
          {
            key: 'innerPosition',
            value:
              ((S = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'innerPosition' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return S.apply(this, arguments)
              })
          },
          {
            key: 'outerPosition',
            value:
              ((j = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'outerPosition' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return j.apply(this, arguments)
              })
          },
          {
            key: 'innerSize',
            value:
              ((C = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'innerSize' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return C.apply(this, arguments)
              })
          },
          {
            key: 'outerSize',
            value:
              ((O = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'outerSize' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return O.apply(this, arguments)
              })
          },
          {
            key: 'isFullscreen',
            value:
              ((M = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'isFullscreen' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return M.apply(this, arguments)
              })
          },
          {
            key: 'isMaximized',
            value:
              ((P = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'isMaximized' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return P.apply(this, arguments)
              })
          },
          {
            key: 'isDecorated',
            value:
              ((G = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'isDecorated' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return G.apply(this, arguments)
              })
          },
          {
            key: 'isResizable',
            value:
              ((T = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'isResizable' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return T.apply(this, arguments)
              })
          },
          {
            key: 'isVisible',
            value:
              ((x = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'isVisible' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return x.apply(this, arguments)
              })
          },
          {
            key: 'center',
            value:
              ((k = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'center' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return k.apply(this, arguments)
              })
          },
          {
            key: 'requestUserAttention',
            value:
              ((R = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  var t
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = null),
                            r &&
                              (t =
                                r === Ve.Critical
                                  ? { type: 'Critical' }
                                  : { type: 'Informational' }),
                            e.abrupt(
                              'return',
                              s({
                                __tauriModule: 'Window',
                                message: {
                                  cmd: 'requestUserAttention',
                                  data: t
                                }
                              })
                            )
                          )
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function (e) {
                return R.apply(this, arguments)
              })
          },
          {
            key: 'setResizable',
            value:
              ((b = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'setResizable', data: r }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function (e) {
                return b.apply(this, arguments)
              })
          },
          {
            key: 'setTitle',
            value:
              ((w = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'setTitle', data: r }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function (e) {
                return w.apply(this, arguments)
              })
          },
          {
            key: 'maximize',
            value:
              ((v = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'maximize' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return v.apply(this, arguments)
              })
          },
          {
            key: 'unmaximize',
            value:
              ((g = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'unmaximize' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return g.apply(this, arguments)
              })
          },
          {
            key: 'minimize',
            value:
              ((_ = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'minimize' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return _.apply(this, arguments)
              })
          },
          {
            key: 'unminimize',
            value:
              ((y = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'unminimize' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return y.apply(this, arguments)
              })
          },
          {
            key: 'show',
            value:
              ((d = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'show' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return d.apply(this, arguments)
              })
          },
          {
            key: 'hide',
            value:
              ((m = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'hide' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return m.apply(this, arguments)
              })
          },
          {
            key: 'close',
            value:
              ((h = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'close' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return h.apply(this, arguments)
              })
          },
          {
            key: 'setDecorations',
            value:
              ((f = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'setDecorations', data: r }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function (e) {
                return f.apply(this, arguments)
              })
          },
          {
            key: 'setAlwaysOnTop',
            value:
              ((l = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'setAlwaysOnTop', data: r }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function (e) {
                return l.apply(this, arguments)
              })
          },
          {
            key: 'setSize',
            value:
              ((p = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            r &&
                            ('Logical' === r.type || 'Physical' === r.type)
                          ) {
                            e.next = 2
                            break
                          }
                          throw new Error(
                            'the `size` argument must be either a LogicalSize or a PhysicalSize instance'
                          )
                        case 2:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: {
                                cmd: 'setSize',
                                data: {
                                  type: r.type,
                                  data: { width: r.width, height: r.height }
                                }
                              }
                            })
                          )
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function (e) {
                return p.apply(this, arguments)
              })
          },
          {
            key: 'setMinSize',
            value:
              ((c = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !r ||
                            'Logical' === r.type ||
                            'Physical' === r.type
                          ) {
                            e.next = 2
                            break
                          }
                          throw new Error(
                            'the `size` argument must be either a LogicalSize or a PhysicalSize instance'
                          )
                        case 2:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: {
                                cmd: 'setMinSize',
                                data: r
                                  ? {
                                      type: r.type,
                                      data: { width: r.width, height: r.height }
                                    }
                                  : null
                              }
                            })
                          )
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function (e) {
                return c.apply(this, arguments)
              })
          },
          {
            key: 'setMaxSize',
            value:
              ((i = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !r ||
                            'Logical' === r.type ||
                            'Physical' === r.type
                          ) {
                            e.next = 2
                            break
                          }
                          throw new Error(
                            'the `size` argument must be either a LogicalSize or a PhysicalSize instance'
                          )
                        case 2:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: {
                                cmd: 'setMaxSize',
                                data: r
                                  ? {
                                      type: r.type,
                                      data: { width: r.width, height: r.height }
                                    }
                                  : null
                              }
                            })
                          )
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function (e) {
                return i.apply(this, arguments)
              })
          },
          {
            key: 'setPosition',
            value:
              ((u = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            r &&
                            ('Logical' === r.type || 'Physical' === r.type)
                          ) {
                            e.next = 2
                            break
                          }
                          throw new Error(
                            'the `position` argument must be either a LogicalPosition or a PhysicalPosition instance'
                          )
                        case 2:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: {
                                cmd: 'setPosition',
                                data: { type: r.type, data: { x: r.x, y: r.y } }
                              }
                            })
                          )
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function (e) {
                return u.apply(this, arguments)
              })
          },
          {
            key: 'setFullscreen',
            value:
              ((o = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'setFullscreen', data: r }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function (e) {
                return o.apply(this, arguments)
              })
          },
          {
            key: 'setFocus',
            value:
              ((a = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'setFocus' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return a.apply(this, arguments)
              })
          },
          {
            key: 'setIcon',
            value:
              ((n = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'setIcon', data: { icon: r } }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function (e) {
                return n.apply(this, arguments)
              })
          },
          {
            key: 'setSkipTaskbar',
            value:
              ((t = _asyncToGenerator(
                regeneratorRuntime.mark(function e(r) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'setSkipTaskbar', data: r }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function (e) {
                return t.apply(this, arguments)
              })
          },
          {
            key: 'startDragging',
            value:
              ((r = _asyncToGenerator(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            s({
                              __tauriModule: 'Window',
                              message: { cmd: 'startDragging' }
                            })
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )),
              function () {
                return r.apply(this, arguments)
              })
          }
        ]),
        e
      )
    })(),
    tr = new rr()
  function nr() {
    return (nr = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Window',
                    message: { cmd: 'currentMonitor' }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function ar() {
    return (ar = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Window',
                    message: { cmd: 'primaryMonitor' }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  function or() {
    return (or = _asyncToGenerator(
      regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  'return',
                  s({
                    __tauriModule: 'Window',
                    message: { cmd: 'availableMonitors' }
                  })
                )
              case 1:
              case 'end':
                return e.stop()
            }
        }, e)
      })
    )).apply(this, arguments)
  }
  var ur = Object.freeze({
      __proto__: null,
      WebviewWindow: er,
      WebviewWindowHandle: Ze,
      WindowManager: rr,
      getCurrent: function () {
        return new Ze(window.__TAURI__.__currentWindow.label)
      },
      getAll: Qe,
      appWindow: tr,
      LogicalSize: Je,
      PhysicalSize: Ke,
      LogicalPosition: Ye,
      PhysicalPosition: $e,
      get UserAttentionType() {
        return Ve
      },
      currentMonitor: function () {
        return nr.apply(this, arguments)
      },
      primaryMonitor: function () {
        return ar.apply(this, arguments)
      },
      availableMonitors: function () {
        return or.apply(this, arguments)
      }
    }),
    ir = o
  ;(e.app = h),
    (e.cli = d),
    (e.dialog = g),
    (e.event = C),
    (e.fs = B),
    (e.globalShortcut = $),
    (e.http = ue),
    (e.invoke = ir),
    (e.notification = ce),
    (e.path = Ce),
    (e.process = Fe),
    (e.shell = Ne),
    (e.tauri = i),
    (e.updater = He),
    (e.window = ur),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
