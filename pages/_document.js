import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className={"skip-link"}>
          <a href="#main">Skip to content</a>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
