import React, { Component, Fragment } from 'react'
import { ServerStyleSheet } from 'styled-components'

const facebook = `
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
`

const pixel = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '185333372124241', {
  'em': 'pixel_email',
  'fn': 'pixel_firstname',
  'ln': 'pixel_lastname',
  'ph': 'pixel_tel',
  'ge': 'pixel_gender',
  'db': 'pixel_birth',
  'ct': 'pixel_city',
});
fbq('track', 'PageView');
`

const pixelNoScript = `
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=185333372124241&ev=PageView&noscript=1"
/>
`

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      is404: true,
      component: 'src/containers/Home',
    },
  ],
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <title>Nisit Generation</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:url" content="http://nisitgeneration.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Nisit Generation x Techsauce Global Summit 2018" />
            <meta property="og:description" content="รับบัตรเข้างาน Techsauce Global Summit 2018 ในราคาพิเศษ สำหรับนิสิตนักศึกษาเท่านั้น!" />
            <meta property="og:image" content="./preview.jpg" />
            <link rel="icon" href="./favicon.png" />
            <script dangerouslySetInnerHTML={{ __html: pixel }} />
            <noscript dangerouslySetInnerHTML={{ __html: pixelNoScript }} />
            {renderMeta.styleTags}
          </Head>
          <Body>
            <Fragment>
              <div id="fb-root" />
              <script dangerouslySetInnerHTML={{ __html: facebook }} />
              {/* <script dangerouslySetInnerHTML={{ __html: pixel }} />
              <noscript dangerouslySetInnerHTML={{ __html: pixelNoScript }} /> */}
              {children}
            </Fragment>
          </Body>
        </Html>
      )
    }
  },
}
