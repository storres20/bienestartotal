import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[url('/bienestar.jpg')] bg-auto bg-repeat bg-center h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
