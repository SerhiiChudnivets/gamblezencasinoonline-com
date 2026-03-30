import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    const data = require('../data.json')
    const lang = data.language_code || 'en'
      return (
        <Html lang={lang}>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
}


