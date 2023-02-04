const {
    description
} = require('../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: '避免购买指南',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/Anti-Hackintosh-Buyers-Guide/',


    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/sumingyd/Anti-Hackintosh-Buyers-Guide',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        logo: '/homepage.png',
        nav: [{
            text: '指南菜单',
            ariaLabel: 'Language Menu',
            items: [
            {
                text: '开始使用ACPI',
                link: 'https://sumingyd.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'OpenCore安装指南',
                link: 'https://sumingyd.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'OpenCore安装后',
                link: 'https://sumingyd.github.io/OpenCore-Post-Install/'
            },
            {
                text: '无线购买指南',
                link: 'https://sumingyd.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: '显卡购买指南',
                link: 'https://sumingyd.github.io/GPU-Buyers-Guide/'
            },
            ]
        },
            /*
              {
                text: 'Github',
                link: 'https://github.com/sumingyd/OpenCore-Install-Guide'
              }
            */
        ],
        sidebar: [{
            title: '介绍',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '',
            ]

        },
        {
            title: '应该避免什么',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'CPU',
                'GPU',
				'Motherboard',
				'Storage',
				'RAM',
				'Cooler',
				'Networking',
				'Wireless',
				'PowerSupply',
				'Case',
				'ThermalPaste',
            ]
        },
    ],
},
    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}