
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/TaskFlow/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/TaskFlow"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S4LQEZFE.js",
      "chunk-YECR6WQL.js"
    ],
    "route": "/TaskFlow/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L6P3XZSA.js"
    ],
    "route": "/TaskFlow/tasks"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GNFGXKIJ.js"
    ],
    "route": "/TaskFlow/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XVAXMSVJ.js"
    ],
    "route": "/TaskFlow/team"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TWS23EC7.js"
    ],
    "route": "/TaskFlow/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H2YQHVCO.js",
      "chunk-YECR6WQL.js"
    ],
    "route": "/TaskFlow/settings"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KQDXCQWK.js"
    ],
    "route": "/TaskFlow/reports"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TQCDD77H.js"
    ],
    "route": "/TaskFlow/time-tracking"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5129, hash: '08cb7dc2b84962973840df0e732d13e4b1e97cac7223e0c11ddefe7923050218', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: 'daa50f21ad6b2b1d070f4424cb15c186e2ce23e21e4393ce6d6c21695bf630b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'tasks/index.html': {size: 42101, hash: '8e2295723342a8ff5edfd9813c16467b2831094e5a3008e11b587684079d0686', text: () => import('./assets-chunks/tasks_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 39574, hash: '0855e2d642f6ddae54110af463610e67b45efa7255e76461c297a8d08e0f59ba', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 52242, hash: 'd50d292f5343b57e5178d6f4121fe60404935be80e16e6343c74fc9e419cbae1', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 39511, hash: '21594866ff8106b5710d8c0b3114c011316ab0fb1058dc56d1d3a089294eff45', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 47809, hash: '3b6777f2a56a1745b219f9a50215f654ec18bb589ff17152b1bdf8993591df81', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'time-tracking/index.html': {size: 45164, hash: '6435dd8fc600d50485b68ecfc24a798209bf7aba7dbe0265c21b89ef489b0038', text: () => import('./assets-chunks/time-tracking_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 60610, hash: '9f9222f8e8bdba6e641a5d4f077757f5fc08a08386c3a1da668c2d66628899c6', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 78983, hash: '954e908ee1cb6e18c1cd395ac6880e2e1c5cad48249cbb5133e9823fb40aa920', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'styles-3FDS4ZVF.css': {size: 230916, hash: '635mquZSb2k', text: () => import('./assets-chunks/styles-3FDS4ZVF_css.mjs').then(m => m.default)}
  },
};
