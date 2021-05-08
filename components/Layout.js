//  Layout component wraps css container across the application.
//  Nav is added to Layout component which wraps around _app.js so it appears on every page.  

import Nav from './Nav'
import Header from './Header' 
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout

