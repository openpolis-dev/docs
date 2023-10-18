// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SeeDAO Polis",
  tagline: "Builders are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.seedao.tech",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Taoist-Labs", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

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
    // [
    //   "classic",
    //   /** @type {import('@docusaurus/preset-classic').Options} */
    //   ({
    //     docs: {
    //       sidebarPath: require.resolve("./sidebars.js"),
    //     },
    //     theme: {
    //       customCss: require.resolve("./src/css/custom.css"),
    //     },
    //   }),
    // ],

    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        api: {
          path: "seedao-docs/",
          routeBasePath: "/",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/Taoist-Labs/docs/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // proxy: {
        //   "/proxy": {
        //     target: "http://localhost:8091",
        //     pathRewrite: { "^/proxy": "" },
        //   },
        // },
      }),
    ],
  ],
  plugins: [
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "sns",
    //     path: "sns",
    //     routeBasePath: "sns",
    //     sidebarPath: require.resolve("./sidebars.js"),
    //     // ... other options
    //   },
    // ],

    // [
    //   "docusaurus-plugin-openapi",
    //   {
    //     id: "multi-spec",
    //     path: "api",
    //     routeBasePath: "/",
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "SeeDAO Polis",
        logo: {
          alt: "SeeDAO Logo",
          src: "img/logo.png",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          // },
          {
            href: "https://seedao.canny.io/",
            label: "Feedback",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/Taoist-Labs/docs",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          {
            title: "Connect",
            items: [
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
            title: "Community",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "SEED Collection",
                href: "https://opensea.io/collection/seedaoseed",
              },
              {
                label: "GitHub",
                href: "https://github.com/Taoist-Labs/docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SeeDAO.`,
      },
      algolia: {
        appId: 'JX2ACBTOPK',
        apiKey: '2b834afa1285b28066e5ef89e6fa15d6',
        indexName: 'seedao',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      api: {
        authPersistance: "localStorage",
        serverVariablesPersistance: "localStorage",
      },
    }),
};

module.exports = config;
