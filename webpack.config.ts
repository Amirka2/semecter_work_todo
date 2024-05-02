import path from "path";
import HtmlWebPackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration} from 'webpack-dev-server';

type Mode = 'development' | 'production';

interface EnvVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development';

  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      // generate filename depending on files content
      filename: '[name].[contenthash].js',
      // to delete old builds
      clean: true,
    },
    plugins: [
      // plugin for creating build html using own html
      new HtmlWebPackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      // slow plugin showing progress of build
      isDev && new webpack.ProgressPlugin(),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        "components": path.resolve(__dirname, 'src/components'),
        "constants": path.resolve(__dirname, 'src/constants'),
        "interfaces": path.resolve(__dirname, 'src/interfaces'),
        "mock": path.resolve(__dirname, 'src/mock'),
        "pages": path.resolve(__dirname, 'src/pages'),
        "helpers": path.resolve(__dirname, 'src/helpers'),
      }
    },
    // getting stacktrace
    devtool: isDev ? 'inline-source-map' : false,
    // dev-server options
    devServer: isDev ? {
      port: env.port ?? 3000,
      open: true,
    } : undefined,
  }

  return config;
}
