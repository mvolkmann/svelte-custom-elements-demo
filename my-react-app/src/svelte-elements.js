/* eslint-disable eqeqeq, no-self-compare, no-sequences, no-unused-expressions */
function t() {}
function e(t) {
  return t();
}
function n() {
  return Object.create(null);
}
function o(t) {
  t.forEach(e);
}
function r(t) {
  return 'function' == typeof t;
}
function c(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
}
function s(t, e) {
  t.appendChild(e);
}
function u(t, e, n) {
  t.insertBefore(e, n || null);
}
function i(t) {
  t.parentNode.removeChild(t);
}
function a(t) {
  return document.createElement(t);
}
function l(t) {
  return document.createTextNode(t);
}
function d() {
  return l(' ');
}
function f(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function h(t, e) {
  (e = '' + e), t.data !== e && (t.data = e);
}
let p;
function $(t) {
  p = t;
}
const m = [],
  g = [],
  b = [],
  x = [],
  y = Promise.resolve();
let _ = !1;
function v(t) {
  b.push(t);
}
const w = new Set();
function C() {
  do {
    for (; m.length; ) {
      const t = m.shift();
      $(t), E(t.$$);
    }
    for (; g.length; ) g.pop()();
    for (let t = 0; t < b.length; t += 1) {
      const e = b[t];
      w.has(e) || (w.add(e), e());
    }
    b.length = 0;
  } while (m.length);
  for (; x.length; ) x.pop()();
  (_ = !1), w.clear();
}
function E(t) {
  if (null !== t.fragment) {
    t.update(), o(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(v);
  }
}
const k = new Set();
function A(t, e) {
  -1 === t.$$.dirty[0] &&
    (m.push(t), _ || ((_ = !0), y.then(C)), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function L(c, s, u, i, a, l, d = [-1]) {
  const f = p;
  $(c);
  const h = s.props || {},
    m = (c.$$ = {
      fragment: null,
      ctx: null,
      props: l,
      update: t,
      not_equal: a,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(f ? f.$$.context : []),
      callbacks: n(),
      dirty: d
    });
  let g = !1;
  var b, x;
  (m.ctx = u
    ? u(c, h, (t, e, ...n) => {
        const o = n.length ? n[0] : e;
        return (
          m.ctx &&
            a(m.ctx[t], (m.ctx[t] = o)) &&
            (m.bound[t] && m.bound[t](o), g && A(c, t)),
          e
        );
      })
    : []),
    m.update(),
    (g = !0),
    o(m.before_update),
    (m.fragment = !!i && i(m.ctx)),
    s.target &&
      (s.hydrate
        ? m.fragment &&
          m.fragment.l(
            (function(t) {
              return Array.from(t.childNodes);
            })(s.target)
          )
        : m.fragment && m.fragment.c(),
      s.intro && (b = c.$$.fragment) && b.i && (k.delete(b), b.i(x)),
      (function(t, n, c) {
        const {fragment: s, on_mount: u, on_destroy: i, after_update: a} = t.$$;
        s && s.m(n, c),
          v(() => {
            const n = u.map(e).filter(r);
            i ? i.push(...n) : o(n), (t.$$.on_mount = []);
          }),
          a.forEach(v);
      })(c, s.target, s.anchor),
      C()),
    $(f);
}
let H;
function M(e) {
  let n, r, c, p, $, m, g, b;
  return {
    c() {
      var o, s, u;
      (n = a('div')),
        (r = a('button')),
        (r.textContent = '-'),
        (c = d()),
        (p = a('span')),
        ($ = l(e[0])),
        (m = d()),
        (g = a('button')),
        (g.textContent = '+'),
        (this.c = t),
        (o = n),
        (s = 'class'),
        null == (u = 'counter')
          ? o.removeAttribute(s)
          : o.getAttribute(s) !== u && o.setAttribute(s, u);
    },
    m(t, o) {
      u(t, n, o),
        s(n, r),
        s(n, c),
        s(n, p),
        s(p, $),
        s(n, m),
        s(n, g),
        (b = [f(r, 'click', e[1]), f(g, 'click', e[2])]);
    },
    p(t, [e]) {
      1 & e && h($, t[0]);
    },
    i: t,
    o: t,
    d(t) {
      t && i(n), o(b);
    }
  };
}
function T(t, e, n) {
  let {count: o = 0} = e;
  return (
    (t.$set = t => {
      'count' in t && n(0, (o = t.count));
    }),
    [o, () => n(0, o--, o), () => n(0, o++, o)]
  );
}
'function' == typeof HTMLElement &&
  (H = class extends HTMLElement {
    constructor() {
      super(), this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
      for (const t in this.$$.slotted) this.appendChild(this.$$.slotted[t]);
    }
    attributeChangedCallback(t, e, n) {
      this[t] = n;
    }
    $destroy() {
      !(function(t, e) {
        const n = t.$$;
        null !== n.fragment &&
          (o(n.on_destroy),
          n.fragment && n.fragment.d(e),
          (n.on_destroy = n.fragment = null),
          (n.ctx = []));
      })(this, 1),
        (this.$destroy = t);
    }
    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1);
        }
      );
    }
    $set() {}
  });
class N extends H {
  constructor(t) {
    super(),
      (this.shadowRoot.innerHTML =
        '<style>button{border:solid lightgray 1px;border-radius:4px;padding:10px}.counter{font-size:24px}</style>'),
      L(this, {target: this.shadowRoot}, T, M, c, {count: 0}),
      t &&
        (t.target && u(t.target, this, t.anchor),
        t.props && (this.$set(t.props), C()));
  }
  static get observedAttributes() {
    return ['count'];
  }
  get count() {
    return this.$$.ctx[0];
  }
  set count(t) {
    this.$set({count: t}), C();
  }
}
function R(e) {
  let n, o, r, c;
  return {
    c() {
      (n = a('div')),
        (o = l('Hello, ')),
        (r = l(e[0])),
        (c = l('!')),
        (this.c = t);
    },
    m(t, e) {
      u(t, n, e), s(n, o), s(n, r), s(n, c);
    },
    p(t, [e]) {
      1 & e && h(r, t[0]);
    },
    i: t,
    o: t,
    d(t) {
      t && i(n);
    }
  };
}
function S(t, e, n) {
  let {name: o = 'World'} = e;
  return (
    (t.$set = t => {
      'name' in t && n(0, (o = t.name));
    }),
    [o]
  );
}
class j extends H {
  constructor(t) {
    super(),
      L(this, {target: this.shadowRoot}, S, R, c, {name: 0}),
      t &&
        (t.target && u(t.target, this, t.anchor),
        t.props && (this.$set(t.props), C()));
  }
  static get observedAttributes() {
    return ['name'];
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(t) {
    this.$set({name: t}), C();
  }
}
export {N as Counter, j as Greet};
//# sourceMappingURL=bundle.js.map
