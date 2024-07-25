
import { useRouter } from 'next/router';

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
        <div className="blog_item" onClick={blogNavigate}>
            <p className="blog_title">{prop.title}</p>
            <p className="blog_summary">{prop.description}</p>
        </div>
    )
}