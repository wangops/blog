import Image from "next/image";
import { useRouter } from "next/router";
import BlogItem from "@/components/BlogItem/BlogItem";
import { useEffect } from "react";
import style from "./index.module.css"
export default function CV(){
    const router = useRouter()
    
    const toBlog = ()=>{
        router.push("/blog")
    }
    const to3D = ()=>{
        router.push("/3D/city")      
    }

    const data = [{
        key:'blog-css-selector',
        title:"CSS - 选择器",
        description:"CSS 选择器用于选择 HTML 元素并应用样式。",
        url:"/blog/css/selector"
    },{
        key:'blog-css-float',
        title:"CSS - float",
        description:"CSS中的float属性用于将元素从正常文档流中浮动，使其向左或向右对齐，允许其他内容围绕它流动。float属性常用于创建文本环绕图像的效果以及布局设计。",
        url:"/blog/css/float"
    },{
        key:'blog-js-var',
        title:"Javascript - var、let、const",
        description:"在JavaScript 中，var、let 和 const 都是用于声明变量的关键字，但它们有一些重要的区别和联系",
        url:"/blog/js/var"
    },{
        key:'blog-js-compare',
        title:"Javascript - ==",
        description:"== Javascript在进行==比较时，不同类型的数据判断处理方式不一样。",
        url:"/blog/js/compare"
    },{
        key:'blog-js-iife',
        title:"Javascript - IIFE",
        description:"IIFE，全称为 Immediately Invoked Function Expression，即“立即调用的函数表达式”。它是一种在 JavaScript 中创建和执行匿名函数的模式。IIFE 主要用于创建一个私有的作用域，以避免变量污染全局作用域，并可以在函数体内部定义私有变量和函数。",
        url:"/blog/js/iife"
    },{
        key:'blog-web-fetch',
        title:"Web - fetch与XHR",
        description:"Fetch API 和 XMLHttpRequest（XHR）都是用于在 JavaScript 中进行网络请求的工具，但它们有一些显著的区别，影响着它们的使用方式和功能。",
        url:"/blog/web/fetch"
    },{
        key:'blog-css-filter',
        title:"CSS - filter",
        description:"CSS filter 属性用于对元素应用图形效果，如模糊、亮度调整、对比度调整等。filter 属性可以接受多种函数作为值，这些函数定义了应用于元素的不同效果。",
        url:"/blog/css/filter"
    },{
        key:'blog-web-communicate',
        title:"WEB - 标签页通信",
        description:"标签页之间可以通过storage、message，broadcast等进行标签页之间进行通信。",
        url:"/blog/web/communicate"
    },{
        key:'blog-web-mutationobserver',
        title:"WEB - MutationObserver",
        description:"MutationObserver 是一种 Web API，用于监视 DOM (文档对象模型) 的变化。与旧版的 DOM 事件（如 Mutation Events）相比，MutationObserver 提供了更高效、更灵活的方式来处理 DOM 变化。",
        url:"/blog/web/mutationobserver"
    },{
        key:'blog-web-shadowdom',
        title:"WEB - ShadowDom",
        description:"Web Shadow DOM 是一种网页组件技术，允许开发者创建封装的组件，其内部结构和样式与外部页面隔离。",
        url:"/blog/web/shadowdom"
    },{
        key:'blog-web-worker',
        title:"WEB - worker",
        description:"Web Workers 是一种在浏览器中运行 JavaScript 的技术，允许你在后台线程中执行代码，从而不会阻塞用户界面。这使得 Web 应用能够在执行耗时操作时保持响应性。",
        url:"/blog/web/worker"
    },{
        key:'blog-web-cors',
        title:"WEB - CORS",
        description:"CORS（跨源资源共享，Cross-Origin Resource Sharing）是一个浏览器安全功能，它允许服务器指定哪些源可以访问其资源。简单来说，CORS 是一种机制，用于解决网页从不同源（域、协议或端口）请求资源时的安全问题。",
        url:"/blog/web/cors"
    },{
        key:'blog-javsscript-amdcmd',
        title:"Javascript - CommonJS、AMD 和 CMD",
        description:"CommonJS、AMD 和 CMD 是 JavaScript 模块化的三种不同规范和风格，主要用于解决 JavaScript 代码的模块化问题。",
        url:"/blog/js/amdcmd"
    },{
        key:'blog-typescript-type',
        title:"Typescript - 类型编程",
        description:"类型编程（Type Programming）指的是利用 TypeScript 的类型系统来实现复杂的类型逻辑和代码推断。以下是一些常见的 TypeScript 类型编程技术和模式：",
        url:"/blog/ts/type"
    },{
        key:'blog-web-defer',
        title:"Web - defer与async",
        description:"defer 和 async 是用于 <script> 标签的属性，用于控制脚本的加载和执行方式。它们都涉及到异步加载 JavaScript 文件，但它们的行为有所不同。下面是对 defer 和 async 属性的详细介绍及其区别：",
        url:"/blog/web/defer"
    },{
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
        <div className={style.index_container}>
            <div className={style.index_header}>
                <Image src="/assets/images/logo.png" alt="" className={style.index_logo} width={120} height={80} priority={true}></Image>
                    <div className={style.index_menu_background}>
                        <button className={style.index_menu_button} onClick={to3D}>3D</button>
                    </div>
            </div> 
            <div className={style.index_footer}>
                {
                    data.map(item=>(
                        <BlogItem key={item.key} title={item.title} description={item.description} url={item.url}></BlogItem>
                    ))
                }
                <a className={style.index_records} href="https://beian.miit.gov.cn/">皖ICP备2024047102号-1</a>
            </div>
        </div>
        
    );
}
