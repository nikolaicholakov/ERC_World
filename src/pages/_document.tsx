/* eslint-disable @next/next/no-css-tags */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymious' />
          <link
            href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link href='/assets/fonts/fonts.css' rel='stylesheet' />
          <link href='/assets/fontawesome/css/solid.css' rel='stylesheet' />
          <link href='/assets/fontawesome/css/brands.css' rel='stylesheet' />
          <link href='/assets/fontawesome/css/regular.css' rel='stylesheet' />
          <meta name='description' content='app description goes here'></meta>
          <meta name='title' content='app title goes here' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
