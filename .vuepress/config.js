const {
    description
} = require('../package')

module.exports = {
    title: '避免购买指南',
    description: description,
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
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        repo: 'https://github.com/sumingyd/Anti-Hackintosh-Buyers-Guide',
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: true,
        lastUpdated: '上次更新',
        logo: '/homepage.png',
        nav: [
            {
                text: '指南菜单',
                items: [
                    {
                        text: 'OpenCore安装',
                        link: 'https://sumingyd.github.io/OpenCore-Install-Guide/'
                    },
                    {
                        text: 'OpenCore安装后',
                        link: 'https://sumingyd.github.io/OpenCore-Post-Install/'
                    },
                    {
                        text: 'OpenCore多重引导',
                        link: 'https://sumingyd.github.io/OpenCore-Multiboot/'
                    },
                    {
                        text: '开始使用ACPI',
                        link: 'https://sumingyd.github.io/Getting-Started-With-ACPI/'
                    },
                    {
                        text: '无线购买指南',
                        link: 'https://sumingyd.github.io/Wireless-Buyers-Guide/'
                    },
                    {
                        text: '显卡购买指南',
                        link: 'https://sumingyd.github.io/GPU-Buyers-Guide/'
                    },
                    {
                        text: '避免购买指南',
                        link: 'https://sumingyd.github.io/Anti-Hackintosh-Buyers-Guide/'
                    },
                ]
            },
            { text: 'QQ群', link: 'https://jq.qq.com/?_wv=1027&k=liYHt5VH' },
        ],
        sidebar: [
            {
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
                    'PSU',
                    'Case',
                    'ThermalPaste',
                ]
            },
        ],
    },

    plugins: [
        ['@vuepress/back-to-top', true],//开启右下角返回顶层图标
        ['@vuepress/nprogress', true],//这个插件将会在你切换页面的时候，在顶部显示进度条。
        ['vuepress-plugin-smooth-scroll', false],//在你的 VuePress 站点中使用平滑滚动。
        ['vuepress-plugin-fulltext-search', true],//基于 Headers 的搜索插件
        ['@vuepress/medium-zoom', {
            selector: ".theme-succinct-content :not(a) > img",
            options: {
                background: 'var(--bodyBgColor)'
            }
        }
        ],//这个插件将会使你的图片支持点击缩放。
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }
        ],//页面滚动时自动激活侧边栏链接的插件
    ]
}