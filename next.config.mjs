/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx"
const nextConfig = {
    distDir:"html",
    output:"export",
    pageExtensions:["js","jsx","md","mdx","ts","tsx"],
    images:{
        unoptimized:true
    }
};

const  withMDX = createMDX({})
export default withMDX(nextConfig);
