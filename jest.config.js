module.exports = {
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
}
