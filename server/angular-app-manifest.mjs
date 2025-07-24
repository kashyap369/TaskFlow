
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://kashyap369.github.io/TaskFlow/',
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
    'index.csr.html': {size: 5157, hash: '14c64f2b68f919447028768f3f4efbefdfdf58fa7d91cd00c8740247be8f870c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1086, hash: '44e770c95614465be10235f544a63a4caf2deb8f31d8979f3bbdf1f7ece1261b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 48061, hash: '8f4fb061e4b4f3d26c018793997c92beea737299212b3fcfdf6f2cf2da4bd3ea', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 39763, hash: 'c989376f818d6126b90f10e75ee23db4367cc11c42656155cd3bf0adbad02f0e', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'tasks/index.html': {size: 42353, hash: '7f749c3f43012103524549429b9160b1bf5622140ab959d7c52060ce12309c4a', text: () => import('./assets-chunks/tasks_index_html.mjs').then(m => m.default)},
    'time-tracking/index.html': {size: 45416, hash: '03d0ea552471c4cc8ef6f68524d983c81540b5f53127328f8ec8e647c73095a9', text: () => import('./assets-chunks/time-tracking_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 60862, hash: '554687ca241abb0c4f4317080c059998cef5ea3af8af32a21eaa6d7f870a6683', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 52494, hash: 'df720e4a0276b834d2e8ffe404b593f2357ef50f49392a0088b16b94460cec9d', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 79231, hash: 'ade6c0da953f443052f175366ec3a501244c438bac42abd1fb70bf65a013281a', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'calendar/index.html': {size: 39826, hash: 'be279e15654b4a83b94d791e288990a0c30497b17ffd58d6ae3e8a22129349a2', text: () => import('./assets-chunks/calendar_index_html.mjs').then(m => m.default)},
    'styles-3FDS4ZVF.css': {size: 230916, hash: '635mquZSb2k', text: () => import('./assets-chunks/styles-3FDS4ZVF_css.mjs').then(m => m.default)}
  },
};
