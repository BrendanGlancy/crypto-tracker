import Head from 'next/head';

const Layout = ({ children, title = "Crypto Tracker" }) => {
    return (
        <div className="layout">
                <Head>
                    <title>{title}</title>
                    <meta 
                        name="viewport" 
                        content="width=device-width, initial-scale=1.0">
                    </meta>
                    <link rel="icon" href="favicon.svg"/>
                </Head>
            <header className="header">
                <img className="img-logo" src="blockchain.svg"></img>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout
