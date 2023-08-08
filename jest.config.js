module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  coverageProvider: "v8",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ]
}
