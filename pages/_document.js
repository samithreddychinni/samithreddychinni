import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <Script
                        src="https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js"
                        strategy="beforeInteractive"
                    />
                    <Script
                        src="https://www.gstatic.com/firebasejs/9.x.x/firebase-analytics.js"
                        strategy="beforeInteractive"
                    />
                    <script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <elevenlabs-convai 
                        agent-id="yXHR1NGsfgs8l1vWunKz"
                        firebase-config='{"apiKey":"AIzaSyBXI9ka49MdZrEbK135XgCGMgP0WxhlAzg","authDomain":"ubantu-c1e20.firebaseapp.com","projectId":"ubantu-c1e20","storageBucket":"ubantu-c1e20.firebasestorage.app","messagingSenderId":"368031711657","appId":"1:368031711657:web:68ec674d2489542efd84b8","measurementId":"G-24CVKDRTT1"}'
                    ></elevenlabs-convai>
                </body>
            </Html>
        )
    }
}

export default MyDocument