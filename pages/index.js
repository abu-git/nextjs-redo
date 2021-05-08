import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      
      <ArticleList articles={articles} />
    </div>
  )
}

/*  getStaticProps fetches data at build time.

    Since this is the home/index page, it is sensible to fetch data at build time.
*/
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}