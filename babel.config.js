module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    '@babel/preset-typescript',
  ],
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
        alias: {
          '~': './src',
          '@components': './src/components',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@store': './src/store',
          '@utils': './src/utils',
          '^react-native$': 'react-native-web',
          // 웹빌드가 아닐때는 주석처리한다(react-native를 모두 react-native로 대체함
          // TODO 웹, 앱 설정파일을 별도로 만들어서 자동화
        },
      },
    ],
  ],
}
