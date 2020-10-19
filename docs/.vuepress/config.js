module.exports = {
    lang: 'ko',
    title: 'VuePress',
    // description: 'Hello World',
    plugins: [
      '@vuepress/back-to-top',
      '@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      },
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }]
    ],
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    markdown: {
      lineNumbers: true,
      extractHeaders: [ 'h2', 'h3', 'h4' ]
    },
    themeConfig: {
        // nav: [
        //     {
        //       text: '기초',
        //       items: [
        //          { text: 'About Me', link: '/about/me' },
        //          { text: 'About Blog', link: '/about/blog' }
        //       ]
        //     }
        //   ],
          
          sidebar: [
            {
              title: 'Group 1',   // required
              path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/',
                '/about/me',
                '/about/blog'
              ]
            }
          ],


   


          // sidebar: 'auto',
          // displayAllHeaders: true,
          displayAllHeaders: false,
          activeHeaderLinks: true,
          
          //search: false, 검색 비활성화
          lastUpdated: 'Last Updated', //마지막 업데이트
          smoothScroll: true,

          //이미지 상대경로
          configureWebpack: {
            resolve: {
              alias: {
                '@alias': 'path/to/some/dir'
              }
            }
          }
    }    
  }