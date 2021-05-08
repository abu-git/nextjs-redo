import { useRouter } from 'next/router'
import Link from 'next/link'

const article = ({ article }) => {
/*  
    The following lines were used to show access to props 
    using the router

    const router = useRouter()
    const {id} = router.query
*/
    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />

            <Link href='/'>Go Back</Link>
        </>
    )
}

// getStaticProps fetches data at build time
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

// getStaticPaths specifies dynamic routes to pre-render pages based on data
export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

    const articles = await res.json()

    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}


/*
    getServerSideProps fetches data on each request.

    As this page needs to be displayed on request depending on the article
    clicked on, it is sensible to fetch data on request.

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

*/

export default article
