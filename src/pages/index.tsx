import Image from "next/image";
import { useRouter } from "next/router";
import BlogItem from "@/components/BlogItem";
export default function CV(){
    const router = useRouter()
    const toBlog = ()=>{
        router.push("/blog")
    }
    const to3D = ()=>{
        router.push("/3D/city")
    }

    const data = [{
        key:'blog-web-onload',
        title:"Web - window.onload与DomContentLoad",
        description:"window.onload 和 DOMContentLoaded 都是 JavaScript 中处理页面加载事件的重要方式，它们有一些关键的区别",
        url:"/blog/web/onload"
    },{
        key:'blog-javascript-trash',
        title:"Javascript - 垃圾回收",
        description:"垃圾回收机制是一种自动内存管理机制",
        url:"/blog/js/trash"
    },{
        key:'blog-javascript-asyncawait',
        title:"Javascript - async/await",
        description:"async 和 await 是 JavaScript 中用于处理异步操作的关键字，它们使得异步代码的编写和阅读变得更加简洁和直观",
        url:"/blog/js/asyncawait"
    },{
        key:'blog-algorithm-quicksort',
        title:"算法 - 快速排序",
        description:"其基本思想是通过重复比较相邻的元素，并在必要时交换它们的位置，从而将最大或最小的元素逐渐“冒泡”到序列的一端。这个过程会继续进行，直到整个序列排序完成。",
        url:"/blog/algorithm/quicksort"
    },{
        key:'blog-algorithm-bubble',
        title:"算法 - 冒泡排序",
        description:"其基本思想是通过重复比较相邻的元素，并在必要时交换它们的位置，从而将最大或最小的元素逐渐“冒泡”到序列的一端。这个过程会继续进行，直到整个序列排序完成。",
        url:"/blog/algorithm/bubble"
    },{
        key:'blog-web-cache',
        title:"Web - 缓存",
        description:"缓存策略是指在网络请求和响应过程中，浏览器如何缓存数据的规则和方法。合理的缓存策略能够提高网页加载速度，减少网络带宽消耗，并改善用户体验。以下是一些常见的浏览器缓存策略和相关概念：",
        url:"/blog/web/cache"
    },{
        key:'blog-vue-attr',
        title:"Vue - $attr",
        description:"$attrs 是一个属性，它保存了传递给组件但没有明确声明为 prop 的所有属性。这在创建可重用组件时特别有用，你可以通过 $attrs 将这些属性传递给子组件或 HTML 元素，而不需要将每个属性都声明为 prop。",
        url:"/blog/vue/attr"
    },{
        key:'blog-vue-key',
        title:"Vue - key的作用",
        description:"key 是用于帮助 Vue 识别虚拟 DOM 中 VNode 的一个特殊属性。它主要用于优化 Vue 的虚拟 DOM diff 算法的过程，确保在列表渲染时能够正确地复用和重新排序现有元素，从而提升性能和避免一些潜在的渲染问题。",
        url:"/blog/vue/key"
    },{
        key:'blog-oc-import',
        title:"OC - #import与#include",
        description:"#include 和 #import 是预处理指令，用于在编译过程中将外部文件（通常是头文件）的内容包含到源文件中。它们的使用与在C++中类似，但有一些细微的差异。",
        url:"/blog/oc/import"
    },{
        key:'blog-javascript-prototype',
        title:"Javascript - 原型链",
        description:"JavaScript中的原型链是指每个对象都有一个原型对象（prototype），对象可以通过原型链继承另一个对象的属性和方法。",
        url:"/blog/js/prototype"
    },{
        key:'blog-javascript-eventloop',
        title:"Javascript - 事件循环",
        description:"JavaScript 的事件循环机制指的是 JavaScript 运行时环境中处理和调度代码执行的方式",
        url:"/blog/js/eventloop"
    },{
        key:'blog-javascript-closure',
        title:"Javascript - 闭包",
        description:"闭包（closure）是指在 JavaScript 中，一个函数和其周围的状态（lexical environment，词法环境）的引用捆绑在一起形成的组合。换句话说，闭包允许函数访问其定义时所处的词法作用域以外的变量。",
        url:"/blog/js/closure"
    },{
        key:'blog-javascript-debounce',
        title:"WEB - 防抖和节流",
        description:"防抖（Debounce）和节流（Throttle）是两种常用于优化高频率执行的 JavaScript 函数的技术，特别是在处理用户输入、滚动事件等频繁触发的情况下非常有用。它们的目的都是减少函数执行的次数，提升性能和用户体验。",
        url:"/blog/js/debounce"
    },{
        key:'blog-web-reflow',
        title:"WEB - 重绘（Repaint）和重排（Reflow）",
        description:"重绘是指当页面上的元素样式发生变化，但没有影响其布局（即位置和大小）时，浏览器会重新绘制这些元素。重绘不会影响页面的布局，因此性能消耗较小。",
        url:"/blog/web/reflow"
    },{
        key:'blog-http-options',
        title:"HTTP - options预检请求",
        description:"OPTIONS 请求是一种 HTTP 方法，它通常用于获取目标资源支持的通信选项，或者用于检查服务器的支持性。",
        url:"/blog/http/options"
    },{
        key:'blog-http-getpost',
        title:"HTTP -             Get与Post",
        description:"OPTIONS 请求是一种 HTTP 方法，它通常用于获取目标资源支持的通信选项，或者用于检查服务器的支持性。",
        url:"/blog/http/getpost"
    },{
        key:'blog-js-for',
        title:"Javascript - 遍历(合集)",
        description:"OPTIONS 请求是一种 HTTP 方法，它通常用于获取目标资源支持的通信选项，或者用于检查服务器的支持性。",
        url:"/blog/js/for"
    },{
        key:'blog-http-http2',
        title:"HTTP - HTTP/1.x与HTTP/2.x",
        description:"HTTP/2 和 HTTP/1 有几个重要的区别，主要集中在性能、安全性和功能方面：",
        url:"/blog/http/http2"
    },{
        key:'blog-http-https',
        title:"HTTP - HTTPS",
        description:"HTTPS（HyperText Transfer Protocol Secure）的工作原理主要依赖于TLS（Transport Layer Security）协议来加密数据传输，保证通信的安全性和数据的完整性。以下是HTTPS的基本原理解析：：",
        url:"/blog/http/https"
    },{
        key:'blog-web-https',
        title:"WEB - IntersectionObserver",
        description:"用于异步地观察目标元素与其祖先元素或顶级文档视窗（viewport）交叉的情况。它提供了一种更有效率和性能更好的方法来实现各种观察情况，比如实现懒加载图片、无限滚动等场景。",
        url:"/blog/web/observer"
    },{
        key:'blog-typescript-annotation',
        title:"Typescript - 装饰器",
        description:"装饰器是一种特殊类型的声明，可以附加到类声明、方法、属性或参数上，用来修改其行为或者添加元数据。装饰器在设计模式中广泛应用，它们提供了一种优雅的语法来通过简单的注释方式给类和类成员添加功能。",
        url:"/blog/ts/annotation"
    },{
        key:'blog-javsscript-apply',
        title:"Javbascript - apply、bind、call",
        description:"apply、call 和 bind 是用于控制函数执行时 this 上下文的方法。它们都是 Function 原型的一部分，虽然它们的目的类似，但用法略有不同。",
        url:"/blog/js/apply"
    }]

    return (
        <div className="index_container">
            <div className="index_header">
                <Image src="/assets/images/logo.png" alt="" className="index_logo" width={120} height={80} priority={true}></Image>
                    <div className="index_menu_background">
                        <button className="index_menu_button" onClick={to3D}>3D</button>
                    </div>
            </div> 
            <div className="index_footer">
                {
                    data.map(item=>(
                        <BlogItem key={item.key} title={item.title} description={item.description} url={item.url}></BlogItem>
                    ))
                }
                <a className="index_records" href="https://beian.miit.gov.cn/">皖ICP备2024047102号-1</a>
            </div>
        </div>
        
    );
}
