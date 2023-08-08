const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const { merge } = require('webpack-merge');

const config = {
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                'scss': 'vue-style-loader!css-loader!sass-loader',
                                'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                            }
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
};

const mainConfig = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        filename: 'js/index.js',
        library: {
            name: 'treeSelect',
            type: 'umd'
        },
        umdNamedDefine: true
    }
};

const pluginConfig = {
    entry: path.resolve(__dirname, 'src/plugin.js'),
    output: {
        filename: 'js/tree-select.min.js',
        library: {
            name: 'treeSelect',
            type: 'window'
        }
    }
};

module.exports = [merge(config, mainConfig), merge(config, pluginConfig)];
