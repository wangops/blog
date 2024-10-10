
import { useRouter } from 'next/router';
import style from './BlogItem.module.css';
interface BlogItemProp {
    title:string,
    description:string,
    url:string
}

export default function BlogItem(prop:BlogItemProp){
    const router = useRouter();
    const blogNavigate = ()=>{
        router.push(prop.url)
    }
    return (
        <div className={style.blog_item} onClick={blogNavigate}>
            <p className={style.blog_title}>{prop.title}</p>
            <p className={style.blog_summary}>{prop.description}</p>
        </div>
    )
}