
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
    'calendar/index.html': {size: 39574, hash: '0855e2d642f6ddae54110af463610e67b45efa7255e76461c297a8d08e0f59ba', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 47809, hash: '3b6777f2a56a1745b219f9a50215f654ec18bb589ff17152b1bdf8993591df81', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 39511, hash: '21594866ff8106b5710d8c0b3114c011316ab0fb1058dc56d1d3a089294eff45', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 60610, hash: '57b319fc7d7e3307976967c8e3c644fa1ac9a1c1a75ad1ae925b9731263880ec', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'time-tracking/index.html': {size: 45164, hash: 'b7ce0f700803ea84ec6a14770a260fc709e4b20daf9bf898f2033c52dd21d96e', text: () => import('./assets-chunks/time-tracking_index_html.mjs').then(m => m.default)},
    'tasks/index.html': {size: 42101, hash: 'bf538ffd7831a488192525215b1d13b1cc512f10652117265ed22ca7cac89bc2', text: () => import('./assets-chunks/tasks_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 52242, hash: 'b858d3cbca49d4e07a75534073222c80539e3ca45bf33b088ea8254361f02735', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 78979, hash: '98c29b161b0136741127472e897249c7354cf1af3e797e244a7578a3b14b33c0', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'styles-3FDS4ZVF.css': {size: 230916, hash: '635mquZSb2k', text: () => import('./assets-chunks/styles-3FDS4ZVF_css.mjs').then(m => m.default)}
  },
};
