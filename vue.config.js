const webpack = require("webpack");
module.exports = {
    configureWebpack: {

        resolve: {
            alias: {
                'assets' : '@/assets',
                'common' : '@/common',
                'components' : '@/components',
                'network' : '@/network',
                'views' : '@/views',
            }
        },
        plugins: [
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery"  : "jquery",

            semantic     : 'semantic-ui-css',
            Semantic     : 'semantic-ui-css',
            'semantic-ui': 'semantic-ui-css'

          })
        ]

    }
}
