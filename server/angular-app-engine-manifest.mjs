
export default {
  basePath: 'https://kashyap369.github.io/TaskFlow',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
