import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> Newz
            </h1>
            <p className={headerStyles.description}>Keep up to date with latest web dev news</p>            
        </div>
    )
}

/*
An example of CSS in JSX with conditionals

const Header = () => {
    const x = 2
    return (
        <div>
            <h1 className='title'>
                <span>WebDev</span> Newz
            </h1>
            <style jsx>
                {`
                    .title {
                        color: ${x > 3 ? 'red' : 'blue'};
                    }
                `}
            </style>
        </div>
    )
}*/

export default Header
