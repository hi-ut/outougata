import colors from 'vuetify/es5/util/colors'
const fs = require('fs')

const environment = process.env.NODE_ENV
const env = require(`./env/${environment}.ts`)

env.bc = true

env.index = "data/index.json"

env.aggs = {
  label: {
    key: "label",
    sort: '',
    label: '見出し',
    value: {},
    more: false,
    open:true
  },
  本: {
    key: "本",
    sort: '',
    label: '本',
    value: {},
    more: false,
    open:true
  },
  著者: {
    key: "著者",
    sort: '',
    label: '著者',
    value: {},
    more: false,
    open:true
  },

  見出し読み: {
    key: "見出し読み",
    sort: '',
    label: '見出し読み',
    value: {},
    more: false,
    open:true,
    hide: true
  },
  ローマ字1: {
    key: "ローマ字1",
    sort: '',
    label: 'ローマ字',
    value: {},
    more: false,
    open:true,
    hide: true
  }
}

env.hide = []

env.list = [
  "見出し読み", "ローマ字1", "説明文", "本", "著者"
]

env.detail = [
  {
    label: "見出し読み",
    value: "見出し読み",
    type: "text"
  },
  
  {
    label: "ローマ字1",
    value: "ローマ字1",
    type: "text"
  },
  {
    label: "ローマ字2",
    value: "ローマ字2",
    type: "text"
  },
  {
    label: "対訳語",
    value: "対訳語",
    type: "text"
  },
  {
    label: "説明文",
    value: "説明文",
    type: "text"
  },
  {
    label: "ページ番号",
    value: "ページ番号",
    type: "text"
  },
  {
    label: "本",
    value: "本"
  },
  {
    label: "著者",
    value: "著者"
  }
]

env.sort = [
  {label: "適合度", value: "_score"},
  {label: "見出し読み", value: "見出し読み"},
  {label: "ローマ字", value: "ローマ字1"},
]

env.defaultSort = "_score:desc"

env.layout = [
  {
    label: 'list',
    value: 'list',
    icon: 'mdi-view-list',
    component: "search-layout-list"
  },
  /*
  {
    label: 'grid',
    value: 'grid',
    icon: 'mdi-view-grid',
    component: "search-layout-grid"
  },
  */
  {
    label: 'graph',
    value: 'graph',
    icon: 'mdi-chart-bar',
    component: "search-layout-graph"
  },
]

env.defaultLayout = "list"

/*
const legend = JSON.parse(fs.readFileSync('static/data/legend.json'))
env.legend = legend
*/

env.advanced = [
  /*
  {
    label: "図",
    type: "select",
    key: "図",
    value: "",
    values: ["伯耆国河村郡東郷庄之図","但馬国神戸郷絵図","大和国西大寺与秋篠寺堺相論絵図","揖保川筋堰図","紀伊国井上本庄絵図","陸奥国骨寺絵図（詳細図）　[表]","陸奥国骨寺絵図（詳細図）　[裏]","陸奥国骨寺絵図（簡略図）","称名寺古図","神護寺領高雄山絵図","長門二宮絵図1","長門二宮絵図2","舎那院御領之絵図","乙木庄条里坪付図","菅浦与大浦下庄堺絵図","薩摩国日置北郷下地中分絵図(表)","足守庄図","主殿寮御領小野山与神護寺領堺相論指図","高雄山神護寺領地紀伊国〓(かせ)田庄図","箸喰庄差図","膳夫庄差図","百済庄屋敷田畠差図","紀伊国神野真国御庄絵図　康治二年","明月院古図","円覚寺境内古図","尾張国富田庄知行古図","井上庄絵図"]
  },
  */
  /*
  {
    label: "地名/記述",
    type: "text",
    key: "地名/記述",
    value: "",
  },
  {
    label: "備考",
    type: "text",
    key: "備考",
    value: "",
  }
  */
]

env.viewer = "curation"
env.visualization = "https://nakamura196.github.io/dd2"

/*
const settings = JSON.parse(fs.readFileSync('static/data/settings.json'))
env.settings = settings
*/

const norm = JSON.parse(fs.readFileSync('static/data/norm.json'))
env.itaiji =norm

env.image = false

env.rdf = false


// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/outougata/',
        },
      }
    : {}

// path
const baseUrl = env.BASE_URL || ''
const baseDir = env.BASE_DIR || '/'
const basePath = baseUrl + baseDir

// meta
const lang = 'ja'
const siteName = '応答型翻訳支援システム・データセット'
env.siteName = siteName

const siteDesc = '応答型翻訳支援システムのデータセットを検索するプロトタイプシステムです。'
env.siteDesc = siteDesc

const footer = '東京大学史料編纂所'
env.footer = footer

const siteKeywords = 'RDF'

// images
const iconImages = baseDir + 'img/icons/'
const ogpImages = basePath + 'img/ogp/' // cdnPath + 'img/ogp/'

env.top = basePath + 'img/ogp/home.jpg'

// pwa
const shortName = '応答型'
const manifestIcon = 'img/icons/icon-512.png'
// const splashscreens = cdnPath + 'img/splashscreens/'

export default {
  server: {
    port: 8003 // デフォルト: 3000
  },
  // Target (https://go.nuxtjs.dev/config-target)

  ssr: false,
  target: 'static',
  // srcDir: 'src/',

  env,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang,
    },
    titleTemplate: `%s - ${siteName}`,
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      // ogp関連
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: basePath },
      { hid: 'og:title', property: 'og:title', content: siteName },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${ogpImages}home.jpg`,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      // pwa iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: iconImages + 'favicon-16.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: iconImages + 'favicon-32.png',
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: iconImages + 'favicon-48.png',
      },
      {
        rel: 'icon',
        sizes: '72x72',
        type: 'image/png',
        href: iconImages + 'favicon-72.png',
      },
      // apple touch icon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: iconImages + 'apple-touch-icon.png',
      },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      },
    ],
  },

  manifest: {
    lang,
    name: siteName,
    short_name: shortName,
    description: siteDesc,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
  },
  icon: {
    iconFileName: manifestIcon,
  },

  loading: { color: '#E64A19', height: '5px' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/utils.ts',
    '@/plugins/searchUtils.ts',
    '@/plugins/leaflet.js',
    '@/plugins/vue-reactivesearch.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  moment: {
    // ここにオプションが記述できる
    locales: ['ja'],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-i18n',
    // Simple usage
    // '@nuxtjs/amp',
    '@nuxt/content',
    '@nuxtjs/google-gtag'
  ],

  'google-gtag': {
    id: 'G-4HCHKW275B',  //サイトのID
    debug: true,  // 開発環境でも表示したい場合
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en_US', file: 'en.json' },
      { code: 'ja', iso: 'ja_JP', file: 'ja.json' },
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    // strategy: 'no_prefix'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
    //standalone: true, // これを追加！
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    }
    */
  },

  ...routerBase,

  generate: {},
}
