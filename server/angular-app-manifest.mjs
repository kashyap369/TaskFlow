
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/TaskFlow5/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/TaskFlow5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S4LQEZFE.js",
      "chunk-YECR6WQL.js"
    ],
    "route": "/TaskFlow5/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L6P3XZSA.js"
    ],
    "route": "/TaskFlow5/tasks"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GNFGXKIJ.js"
    ],
    "route": "/TaskFlow5/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XVAXMSVJ.js"
    ],
    "route": "/TaskFlow5/team"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TWS23EC7.js"
    ],
    "route": "/TaskFlow5/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H2YQHVCO.js",
      "chunk-YECR6WQL.js"
    ],
    "route": "/TaskFlow5/settings"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KQDXCQWK.js"
    ],
    "route": "/TaskFlow5/reports"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TQCDD77H.js"
    ],
    "route": "/TaskFlow5/time-tracking"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5130, hash: '3d4d78fde21437c9326eb1a9bb9f34cf4a02644c0332886e3fdfafac88afe31d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1059, hash: 'cdd06324b2b74031b6a58814775ab3b6cb65c8470497647f4f478db102257e9b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 39520, hash: '0d031dcb5dca54ac924084ce522f6578258442bb23e682b69051532727ca5762', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 47818, hash: 'c74f406da114903ab3e82fc27ba3b6c910055c8f2695c99261f956f954f63555', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 60619, hash: '0f3d6d97cdca79ee33b598bc62d665af495fa4fe023673665ffbe6c8c6eab21f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'time-tracking/index.html': {size: 45173, hash: '423b02b3c6b0eff09979258d507192bd3b8b63c2523495363b43511e2a817e40', text: () => import('./assets-chunks/time-tracking_index_html.mjs').then(m => m.default)},
    'tasks/index.html': {size: 42110, hash: '552d793cb5565596faca391b3479376ea9ccfaec30487d16f4ddeb9c3adcf542', text: () => import('./assets-chunks/tasks_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 52255, hash: '20ae478ede7ab4c95826d066efd309bfa300026fe0972e95e47401f98277bf95', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 78988, hash: '74c850c5266ebcd0cfb39d1b01bb46e53b5fcd6cf75a90e13bf4b9f4f322554f', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 39583, hash: 'c097b2a2248686245aed38d007da46bc198702d08f10f8812bfaa473ad76a19a', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-3FDS4ZVF.css': {size: 230916, hash: '635mquZSb2k', text: () => import('./assets-chunks/styles-3FDS4ZVF_css.mjs').then(m => m.default)}
  },
};
