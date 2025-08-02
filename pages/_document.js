// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* 1. Character set */}
          <meta charSet="utf-8" />

          {/* 2. Responsive viewport */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          {/* 3. Favicon */}
          <link rel="icon" href="/assets/plnrLogo.png" />

          {/* 4. Preload your custom fonts */}
          <link
            rel="preload"
            href="/fonts/Helvetica-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Futura-CondensedMedium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* 5. Global stylesheet */}
          <link rel="preload" href="/styles/globals.css" as="style" />
          <link href="/styles/globals.css" rel="stylesheet" />

          {/* 6. FullCalendar CSS */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.18/main.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@6.1.18/main.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@fullcalendar/timegrid@6.1.18/main.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
