const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const entry = path.resolve(process.cwd(), 'src', 'index.tsx')

const getRules = (mode) => {
  const styleLoader =
    mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['autoprefixer'],
      },
    },
  }

  return [
    {
      test: /\.module.css$/,
      use: [
        styleLoader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName:
                mode === 'production'
                  ? '[hash:base64]'
                  : '[local]--[hash:base64]',
            },
          },
        },
        postcssLoader,
      ],
    },
    {
      test: /^((?!\.module).)*css$/,
      use: [styleLoader, 'css-loader', postcssLoader],
    },
    {
      test: /\.tsx?$/,
      include: path.resolve(process.cwd(), 'src'),
      use: ['ts-loader'],
    },
  ]
}

const getModule = (mode) => ({
  strictExportPresence: true,
  rules: getRules(mode),
})

const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
  alias: { '@': path.resolve('src') },
}

module.exports = { entry, getModule, resolve }
