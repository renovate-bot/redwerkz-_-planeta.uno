import { useRouter } from 'next/router'

const Logo = ({ height }) => (
  <svg height={height} viewBox='0 0 2 2'>
    <circle cx='1' cy='1' r='1' />
  </svg>
)

export default {
  projectLink: 'https://github.com/redwerkz/planeta.uno',
  titleSuffix: '',
  unstable_faviconGlyph: '⚫️',
  logo: () => {
    const { route } = useRouter()
    return (
      <>
        <Logo height={18} />
        {route === '/' ? null : (
          <span
            className='mx-2 font-extrabold hidden md:inline select-none'
            title=' Time is Up!'
            style={{ whiteSpace: 'nowrap' }}
          >
            Time is Up!
          </span>
        )}
      </>
    )
  },
  head: ({ title, meta }) => {
    const ogImage =
      'https://repository-images.githubusercontent.com/429536908/62a4e686-8613-4b45-b7bb-fa35b558ae8e'

    return (
      <>
        <meta
          name='description'
          content={meta.description || 'A 5kB WebGL globe library.'}
        />
        <meta
          name='og:description'
          content={meta.description || 'A 5kB WebGL globe library.'}
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@redwerkz' />
        <meta name='twitter:image' content={ogImage} />
        <meta name='og:title' content={title ? title + ' – COBE' : 'COBE'} />
        <meta name='og:image' content={ogImage} />
        <meta name='apple-mobile-web-app-title' content='COBE' />
      </>
    )
  }
}
