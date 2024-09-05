import vue from '@vitejs/plugin-vue';
import path from 'path';
import externalGlobals from 'rollup-plugin-external-globals'; // cdn 外链不打包
import { visualizer } from 'rollup-plugin-visualizer'; // 打包分析工具
import { defineConfig } from 'vite';
// 自动导入模块  除了一些ui  vue  vue-router  其他尽量不要自动导入 破电脑不配用自动导入
import AutoImport from 'unplugin-auto-import/vite';
// import { TDesignResolver } from 'unplugin-vue-components/resolvers';
// import legacy from '@vitejs/plugin-legacy'; // 版本兼容  一般不用
import Components from 'unplugin-vue-components/vite';

export default ({ mode }) => {
  const _plugins = () => {
    let result: any = [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: true, // 自动导入 类型全局生成
        resolvers: [],
      }),
      Components({
        resolvers: [],
      }),
    ];

    if (mode === 'development') {
    } else {
      // 版本兼容  一般不用
      // result.push(
      //   legacy({
      //     targets: ['defaults', 'not IE 11', "Edge >=10", 'Safari >=10', 'Firefox >=10', 'Chrome >=10']
      //   })
      // )
      // 打包分析工具
      result.push(
        visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true,
        })
      );
      // index.html 文件处理
      // result.push(
      //   createHtmlPlugin({
      //     template: './index.html',
      //     inject: {
      //      tags:[
      //       {
      //           injectTo: 'body',
      //           tag: 'script',
      //           attrs: {
      //             src: 'https://cdn.bootcdn.net/ajax/libs/echarts/5.4.2/echarts.min.js',
      //           defer: true
      //       }
      //     },
      //      ]
      //     }
      //   })
      // );
    }
    return result;
  };

  return defineConfig({
    base: './',
    build: {
      outDir: 'build',
      minify: 'terser',
      rollupOptions: {
        // 不打包依赖
        external: ['echarts'],
        // 不打包依赖映射的对象
        plugins: [
          externalGlobals({
            echarts: 'echarts',
          }),
        ],
      },
    },
    resolve: {
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@srcTypes': path.resolve(__dirname, './src/types'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      proxy: {
        '/api': 'https://scykc.hzsc.gov.cn',
      },
    },
    plugins: _plugins(),
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `@import "${path.resolve(
            __dirname,
            'src/styles/variables.sass'
          )}";`,
        },
      },
    },
    // 可对css module生效
    // css: {
    //   postcss: {
    //     plugins: [
    //       pxtovw({
    //         unitToConvert: "px", // 要转化的单位
    //         viewportWidth: 1600, // UI设计稿的宽度
    //         unitPrecision: 6, // 转换后的精度，即小数点位数
    //         propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
    //         viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
    //         fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
    //         selectorBlackList: [], // 指定不转换为视窗单位的类名，
    //         minPixelValue: 12, // 默认值1，小于或等于1px则不进行转换
    //         mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
    //         replace: true, // 是否转换后直接更换属性值
    //         exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
    //         landscape: false // 是否处理横屏情况
    //         })
    //     ]
    //   }
    // }
  });
};
