const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: 'AntD Admin',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin  © 2018 Unintelligibility',
  logo: '/logo.svg',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    userBlacklist: `${APIV1}/userBlacklist`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    userBlack: `${APIV1}/userBlack/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
    authenticate: `${APIV1}/authenticate/:id`,
    authenticateList: `${APIV1}/authenticateList`,
  },
}
