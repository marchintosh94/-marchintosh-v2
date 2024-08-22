import type { Metadata } from 'next'

const mainTitle = 'Marco Baratto'

export const defaultMetadata: Metadata = {
  title: mainTitle,
  description:
    'Marco baratto portfolio website. Here you can find all my projects, experiences and discover curious things about me.',
  applicationName: mainTitle,
  twitter: {
    card: 'summary_large_image'
  },
  openGraph: {
    title: mainTitle,
    type: 'website',
    url: 'https://www.marcobaratto.dev/',
    images: '/meta/marcobaratto.png'
  },
  icons: [
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '57x57',
      url: '/favicon/apple-touch-icon-57x57.png'
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '114x114',
      url: '/favicon/apple-touch-icon-114x114.png'
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '72x72',
      url: '/favicon/apple-touch-icon-72x72.png'
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '144x144',
      url: '/favicon/apple-touch-icon-144x144.png'
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '60x60',
      url: '/favicon/apple-touch-icon-60x60.png'
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '120x120',
      url: '/favicon/apple-touch-icon-120x120.png'
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '76x76',
      url: '/favicon/apple-touch-icon-76x76.png'
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '152x152',
      url: '/favicon/apple-touch-icon-152x152.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon/favicon-196x196.png',
      sizes: '196x196'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon/favicon-96x96.png',
      sizes: '96x96'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon/favicon-32x32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon/favicon-16x16.png',
      sizes: '16x16'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon/favicon-128.png',
      sizes: '128x128'
    }
  ],
  keywords: [mainTitle, 'portfolio', 'developer', 'software engineer'],
  creator: mainTitle,
  appleWebApp: {
    title: mainTitle,
    statusBarStyle: 'black-translucent'
  },
  other: {
    'msapplication-TileColor': '#FFFFFF',
    'msapplication-TileImage': '/favicon/mstile-144x144.png',
    'msapplication-square70x70logo': '/favicon/mstile-70x70.png',
    'msapplication-square150x150logo': '/favicon/mstile-150x150.png',
    'msapplication-wide310x150logo': '/favicon/mstile-310x150.png',
    'msapplication-square310x310logo': '/favicon/mstile-310x310.png'
  }
}
