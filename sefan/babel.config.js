module.exports = {
    // 插件的集合
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    // 独立安装的插件
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
}