/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: 'https://github.com/',
  title: {
    template: '%s - Docs'
  },
  description: 'laoyang的个人记录Docs',
  applicationName: 'yang-docs',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Yang Docs'
  },
}

function f () { return <div> </div>}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Yang Docs</b>{' '}
          <span style={{ opacity: '60%' }}>捞杨的个人记录</span>
        </div>
      }
      // Next.js discord server
      chatLink=""
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={<Banner storageKey="yang docs">yang docs</Banner>}
          navbar={navbar}
          footer={<Footer>MIT {new Date().getFullYear()} © yang docs.</Footer>}
          editLink=""
          docsRepositoryBase="https://github.com/hungryyangc/yang-docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          feedback={{
            content: null
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
