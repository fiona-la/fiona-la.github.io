import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fiona's website",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Quick Nav',
        items: [
          { text: 'About me', link: '/about-me' },
          { text: 'Resume', link: '/resume' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fiona-la' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/~fiona/' },
    ]
  }
})
