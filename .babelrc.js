module.exports = {
  plugins: [
    ['module-extension', { mjs: 'js' }],
  ],
  presets: [
    ['@babel/preset-env', {
      corejs: 3,
      shippedProposals: true,
      targets: {
        node: 'current',
        browsers: [],
      },
      useBuiltIns: 'usage',
    }],
  ],
};
