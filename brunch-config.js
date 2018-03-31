module.exports = {

  paths: {
    public: "tmp/dist",
    watched: [
      "source/index/",
      "source/founderscard/",
      "node_modules/normalize.css/normalize.css",
      "node_modules/webfontloader/webfontloader.js"
    ]
  },

  files: {
    javascripts: {
      joinTo: {
        "javascripts/index.js": [
          "node_modules/webfontloader/webfontloader.js",
          "source/index/javascripts/index.js"
        ]
      },
    },

    stylesheets: {
      joinTo: {
        "stylesheets/index.css": [
          "node_modules/normalize.css/normalize.css",
          "source/index/stylesheets/tofino.css",
          "source/index/stylesheets/index.css"
        ],
        "stylesheets/founderscard.css": [
          "node_modules/normalize.css/normalize.css",
          "source/founderscard/stylesheets/founderscard.css"
        ]
      }
    }
  },

  modules: {
    nameCleaner: path => path.replace(/^source\/index\/javascripts\//, ""),
    autoRequire: {
      "javascripts/index.js": ["index.js"]
    }
  },
  sourceMaps: false,

  plugins: {
    postcss: {
      processors: [
        require("postcss-cssnext")()
      ]
    }
  }

}
