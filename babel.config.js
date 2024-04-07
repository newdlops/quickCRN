module.exports = function(api) {
  api.cache(true)
  const isweb = process.env.IS_WEB
  console.log('isweb?', isweb)
  let alias = {
    '~': './src',
    '@components': './src/components',
    '@navigators': './src/navigators',
    '@screens': './src/screens',
    '@store': './src/store',
    '@utils': './src/utils',
  }
  if(isweb){
    alias['^react-native$'] = 'react-native-web'
  }
  return {
    presets: ['module:@react-native/babel-preset', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.web.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.web.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: alias,
        },
      ],
      '@babel/plugin-proposal-export-namespace-from', // reanimated web
      'react-native-reanimated/plugin', // 항상 가장 마지막에 와야함
    ],
  }
}
