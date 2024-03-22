// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// const versions = require('./versions.json');

// function getNextVersionName() {
//   const expectedPrefix = '0.';

//   const lastReleasedVersion = versions[0];
//   if (!lastReleasedVersion.includes(expectedPrefix)) {
//     throw new Error(
//       'this code is only meant to be used during the 0.X phase.',
//     );
//   }
//   const version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
//   return `${expectedPrefix}${version + 1}`;
// }

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fluid',
  tagline: 'Fluid, elastic data abstraction and acceleration for BigData/AI applications in cloud.',
  favicon: 'img/fluid-icon-color.png',

  // Set the production url of your site here
  url: 'https://billychen1.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/fluid-website-demo/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BillyChen1', // Usually your GitHub org/user name.
  projectName: 'fluid-website-demo', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['public', 'static'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BillyChen1/fluid-website-demo/tree/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
          lastVersion: undefined,
          routeBasePath: 'docs',
          // onlyIncludeVersions: (() => {
          //   return ['current', ...versions.slice(0, 3)];
          // })(),
          // versions: {
          //   current: {
          //     label: `${getNextVersionName()} 🚧`,
          //   },
          // },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TrafalgarZZZ/fluid-website-demo/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        include: ['**/*.md'],
        sidebarPath: './sidebars-community.js',
      },
    ]
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Fluid',
          src: 'img/fluid-horizontal-color.png',
          srcDark: 'img/fluid-horizontal-white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Docs',
          },
          {
            to: "community/meeting_schedule",
            sidebarId: 'communitySidebar',
            position: 'right',
            label: 'Community',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/fluid-cloudnative/fluid',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Ding Talk',
                href: '/',
              },
              {
                label: 'Bi-week Meeting',
                href: '/community/meeting_schedule',
              },
              {
                label: 'WeChat',
                href: '/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fluid-cloudnative/fluid',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Fluid Authors. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our Trademark Usage page: 
        https://www.linuxfoundation.org/trademark-usage`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
