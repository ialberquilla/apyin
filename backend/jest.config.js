module.exports = {
  'moduleFileExtensions': [ 'js', 'ts', 'json' ],
  'roots': [
    '<rootDir>/src'
  ],
  'testEnvironment': 'node',
  'testRegex': '.*\\.(manual-)?(int-)?spec\\.ts$',
  'transform': {
    '^.+\\.ts$': 'ts-jest'
  }
}
