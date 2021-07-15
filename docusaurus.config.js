const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kevin`s dev life',
  tagline: 'Dinosaurs are cool',
  url: 'https://rohn.tech',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'KevinRohn', // Usually your GitHub org/user name.
  projectName: 'KevinRohn.github.io', // Usually your repo name.
  //trailingSlash: false,
  themeConfig: {
    navbar: {
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/KevinRohn',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Kevin Rohn, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        pages: {},
        docs: {},
        blog: {
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: 'blog',

          /**
           * Blog page title for better SEO
           */
          blogTitle: 'Blog title',
          /**
           * Blog page meta description for better SEO
           */
          blogDescription: 'Blog',
          /**
           * Number of blog post elements to show in the blog sidebar
           * 'ALL' to show all blog posts
           * 0 to disable
           */
          blogSidebarCount: 5,
          /**
           * Title of the blog sidebar
           */
          blogSidebarTitle: 'My posts',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'blog',
          include: ['*.md', '*.mdx'],
          postsPerPage: 10,


          /**
           * Theme components used by the blog pages.
           */
          //blogListComponent: '@theme/BlogListPage',
          //blogPostComponent: '@theme/BlogPostPage',
          //blogTagsListComponent: '@theme/BlogTagsListPage',
          //blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          /**
           * Remark and Rehype plugins passed to MDX.
           */
          remarkPlugins: [
            /* require('remark-math') */
          ],
          rehypePlugins: [],
          /**
           * Custom Remark and Rehype plugins passed to MDX before
           * the default Docusaurus Remark and Rehype plugins.
           */
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          /**
           * Truncate marker, can be a regex or string.
           */
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          /**
           * Show estimated reading time for the blog post.
           */
          showReadingTime: true,
          /**
           * Blog feed.
           * If feedOptions is undefined, no rss feed will be generated.
           */
          feedOptions: {
            type: 'all', // required. 'rss' | 'feed' | 'all'
            title: '', // default to siteConfig.title
            description: '', // default to  `${siteConfig.title} Blog`
            copyright: 'Kev',
            language: undefined, // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/blog', // string
            from: ['/'], // string | string[]
          },
        ],
      },
    ],
  ]
};
