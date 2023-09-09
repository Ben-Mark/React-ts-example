import Head from 'next/head'

type SEOProps = {
  themeColor: string
  title: string
  description: string
  url: string
  image: string
  twitter: {
    card: string
    site: string
    creator: string
  }
}

const config: SEOProps = {
  themeColor: '#805ad6',
  title: 'Animals React',
  description: 'SaaS team collaboration just got better',
  url: 'https://github.com/Ben-Mark/Node-ts-examlple',
  image: 'https://github.com/Ben-Mark/Node-ts-examlple',
  twitter: {
    card: 'summary_large_image',
    site: '@Benma',
    creator: '@Benma',
  },
}

export function SEO(params: Partial<SEOProps>) {
  const {
    themeColor = config.themeColor,
    title = config.title,
    description = config.description,
    url = config.url,
    image = config.image,
    twitter = config.twitter,
  } = params

  return (
    <Head>
      <title>{title}</title>
      <meta name='theme-color' content={themeColor} />
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/public/favicon.ico' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={title} />
      <meta name='twitter:card' content={twitter.card} />
      <meta name='twitter:site' content={twitter.site} />
      <meta name='twitter:creator' content={twitter.creator} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Head>
  )
}
