
import style from "@/style/blog.module.css"
export default function BlogIndex (){
    return (
        <div className={style.blog_container}>
            <div className={style.blog_options} style={{"background-color":"red"}}>
                <p className={style.blog_options_title}>Vue</p>
            </div>
            <div className={style.blog_options}>
                <p className={style.blog_options_title}>JS/TS</p>
            </div>
            <div className={style.blog_options}>
                <p className={style.blog_options_title}>Web</p>
            </div>
            <div className={style.blog_options}>
                <p className={style.blog_options_title}>CSS</p>
            </div>
            <div className={style.blog_options}>
                <p className={style.blog_options_title}>iOS</p>
            </div>
            <div className={style.blog_options}>
                <p className={style.blog_options_title}>Algorithm</p>
            </div>
            <div className={style.blog_options}>
                <p className={style.blog_options_title}>HTTP</p>
            </div>
        </div>
    );
}