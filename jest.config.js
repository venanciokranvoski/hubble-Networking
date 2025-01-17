module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Certifique-se de que o arquivo existe
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-reanimated|react-native-gesture-handler|@react-native(-community)?|react-navigation|react-native-safe-area-context)/)'
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'], // Garante suporte a TypeScript
  moduleDirectories: [
    'node_modules',
    './src/test'
  ],
  modulePathIgnorePatterns: [
    '.*/mockedData/.*'
  ],
  collectCoverageFrom:[
    'src/{components,utils,hooks,domain}/**/*.{js,jsx,ts,tsx}'
  ]
};

