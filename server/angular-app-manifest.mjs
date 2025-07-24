
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-S4LQEZFE.js",
      "chunk-YECR6WQL.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L6P3XZSA.js"
    ],
    "route": "/tasks"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GNFGXKIJ.js"
    ],
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XVAXMSVJ.js"
    ],
    "route": "/team"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TWS23EC7.js"
    ],
    "route": "/calendar"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H2YQHVCO.js",
      "chunk-YECR6WQL.js"
    ],
    "route": "/settings"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KQDXCQWK.js"
    ],
    "route": "/reports"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TQCDD77H.js"
    ],
    "route": "/time-tracking"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5120, hash: '95e8b1f45072cf0dcd64eb225314d4189c982fc4839d548ac83f5bc681b96393', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1049, hash: 'a547ee778bf69325f2b9be9a104ba9e56dd7c5fe1011e3c2160b1c0486b51504', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 39430, hash: 'fd2c801c3c90a4ace4ba0ff3c82a94e2e988828545fe27a8ae0370489c2e8763', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 47728, hash: '40ac456342fbc4a3674b63a6fe95191da8f817acc3ceb7564522a7105629d45c', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 39493, hash: 'bae094428bfadeac6ccc293f5b2cadc5deee16adb0bbc6cec73941b6065903cd', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 52165, hash: '18910dd39745926f5bf9b26d6fc29adcd389895b2004ce3cdc5716ec98212f02', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 60529, hash: 'ae22b3ab518d90e8264dce19cbb55899b4e2106e3dd77c94731cff07b61664d4', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'tasks/index.html': {size: 42020, hash: '4aeb62da6740e767b1cb39a8be1fd366a4bbc0c6950603318c8e6eadefa903ec', text: () => import('./assets-chunks/tasks_index_html.mjs').then(m => m.default)},
    'time-tracking/index.html': {size: 45083, hash: '61c9c72de836d95679ef631fa7c0ee4fc910b44aeff65df6f0c1ea5e3ac0e32c', text: () => import('./assets-chunks/time-tracking_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 78908, hash: '9345517632aff683f953309f48facdf67e7c907a4f46bb54b9879d5ded91d2fb', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'styles-3FDS4ZVF.css': {size: 230916, hash: '635mquZSb2k', text: () => import('./assets-chunks/styles-3FDS4ZVF_css.mjs').then(m => m.default)}
  },
};
