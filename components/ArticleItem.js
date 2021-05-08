import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

/*
    Notice that without the directory /pages/article/[id], the Link gives a 404
*/

const ArticleItem = ({ article }) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleItem
