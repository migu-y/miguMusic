module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // ["es2015", { "modules": false }]
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    ["component", 
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ]
}
