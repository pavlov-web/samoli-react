const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.resolve(__dirname, "assets")],
    additionalData:
      `@import "styles/helpers/functions.scss";` +
      `@import "styles/helpers/variables.scss";` +
      `@import "styles/helpers/mixins.scss";` +
      `@import "styles/fonts/mixins.scss";`,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve("@svgr/webpack"),
          options: {
            prettier: false,
            svgo: false,
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
            titleProp: true,
            ref: true,
          },
        },
        {
          loader: require.resolve("file-loader"),
          options: {
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};
module.exports = nextConfig;
