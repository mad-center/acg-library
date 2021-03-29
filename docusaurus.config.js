/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ACG 图书馆',
  tagline: 'Just make a dream or make a mad',
  onBrokenLinks: 'throw', // maybe warn is better
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mad-center', // Usually your GitHub org/user name.
  projectName: 'acg-library', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ACG Library',
      logo: {
        alt: 'ACG Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/mad-center/acg-library',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} ACG library, org. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/mad-center/acg-library',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  url: 'https://mad-center.github.io', // Your website URL
  baseUrl: '/acg-library/',
};
