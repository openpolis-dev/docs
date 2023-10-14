// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SeeDAO Polis Docs",
  tagline: "Builders are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Taoist Labs", // Usually your GitHub org/user name.
  projectName: "SeeDAO Docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        label: "English", // 语言标签
        direction: "ltr", // 文字方向，ltr表示从左到右，rtl表示从右到左
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sns",
        path: "sns",
        routeBasePath: "sns",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "seepass",
        path: "seepass",
        routeBasePath: "seepass",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "SeeDAO Polis Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            to: "/sns/intro", // To highlight the navbar item, you must link to a document, not a top-level directory
            position: "left",
            label: "SNS",
            activeBaseRegex: `/sns/`,
          },
          {
            to: "/seepass/intro", // To highlight the navbar item, you must link to a document, not a top-level directory
            position: "left",
            label: "SeePASS",
            activeBaseRegex: `/seepass/`,
          },
          {
            type: "dropdown",
            label: "Products",
            position: "left",
            items: [
              {
                to: "/sns/intro", // To highlight the navbar item, you must link to a document, not a top-level directory
                label: "SNS",
                activeBaseRegex: `/sns/`,
              },
              {
                to: "/seepass/intro", // To highlight the navbar item, you must link to a document, not a top-level directory
                label: "SeePASS",
                activeBaseRegex: `/seepass/`,
              },
            ],
          },
          {
            type: "localeDropdown",
            position: "left",
          },
          {
            href: "https://github.com/Taoist-Labs/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "OpenSea Collection",
                href: "https://opensea.io/collection/seedaoseed",
              },
              {
                label: "Discord",
                href: "https://discord.gg/seedao",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/see_dao",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/Taoist-Labs/docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SeeDAO. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
