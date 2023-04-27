import{u as t,c as n,w as r,_ as c,o as p,a as e,d as s}from"./app-5cf5a87e.js";const i=e("div",{class:"prose m-auto"},[e("p",null,[s("When you want to get the real file path of a certain package, you could use "),e("code",null,"require.resolve"),s(" to fetch their main entry path.")]),e("pre",null,[e("code",{class:"language-bash"},[e("div",{class:"shiki-container"},[e("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CAEE"}}," require.resolve"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"vite"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/Users/.../node_modules/vite/dist/node/index.js"),e("span",{style:{color:"#C98A7DAA"}},"'")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CAEE"}}," require.resolve"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"windicss"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/Users/.../node_modules/windicss/index.js"),e("span",{style:{color:"#C98A7DAA"}},"'")]),s(`
`),e("span",{class:"line"})])]),e("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#393A34"}}," require.resolve"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"vite"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/Users/.../node_modules/vite/dist/node/index.js"),e("span",{style:{color:"#B56959AA"}},"'")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#393A34"}}," require.resolve"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"windicss"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/Users/.../node_modules/windicss/index.js"),e("span",{style:{color:"#B56959AA"}},"'")]),s(`
`),e("span",{class:"line"})])])])])]),e("p",null,[s("However, when you want to get the root directory of the package, you will find the result of "),e("code",null,"require.resolve"),s(" could vary based on different packages’ configurations.")]),e("p",null,[s("A trick for this is to resolve the "),e("code",null,"package.json"),s(" instead, as the "),e("code",null,"package.json"),s(" is always located at the root of the package. Combining with "),e("code",null,"path.dirname"),s(", you could always get the package root.")]),e("pre",null,[e("code",{class:"language-bash"},[e("div",{class:"shiki-container"},[e("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CAEE"}}," path.dirname"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#DBD7CAEE"}},"require.resolve"),e("span",{style:{color:"#666666"}},"("),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"vite/package.json"),e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#666666"}},"))")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7DAA"}},"'"),e("span",{style:{color:"#C98A7D"}},"/Users/.../node_modules/vite"),e("span",{style:{color:"#C98A7DAA"}},"'")]),s(`
`),e("span",{class:"line"})])]),e("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#393A34"}}," path.dirname"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#393A34"}},"require.resolve"),e("span",{style:{color:"#999999"}},"("),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"vite/package.json"),e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#999999"}},"))")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959AA"}},"'"),e("span",{style:{color:"#B56959"}},"/Users/.../node_modules/vite"),e("span",{style:{color:"#B56959AA"}},"'")]),s(`
`),e("span",{class:"line"})])])])])]),e("p",null,[s("Update: or you can use my package "),e("a",{href:"https://github.com/antfu/local-pkg",target:"_blank",rel:"noopener"},[e("code",null,"local-pkg")]),s(" now :)")])],-1),m="Get Package Root",h="2021-07-14T16:00:00.000Z",k="en",f="1min",B="https://antfu.me/og/get-package-root.png",_=[{property:"og:title",content:"Get Package Root"},{property:"og:image",content:"https://antfu.me/og/get-package-root.png"},{name:"twitter:card",content:"summary_large_image"}],C={__name:"get-package-root",setup(y,{expose:a}){const o={title:"Get Package Root",date:"2021-07-14T16:00:00.000Z",lang:"en",duration:"1min",image:"https://antfu.me/og/get-package-root.png",meta:[{property:"og:title",content:"Get Package Root"},{property:"og:image",content:"https://antfu.me/og/get-package-root.png"},{name:"twitter:card",content:"summary_large_image"}]};return a({frontmatter:o}),t({title:"Get Package Root",meta:[{property:"og:title",content:"Get Package Root"},{property:"og:image",content:"https://antfu.me/og/get-package-root.png"},{name:"twitter:card",content:"summary_large_image"}]}),(g,d)=>{const l=c;return p(),n(l,{frontmatter:o},{default:r(()=>[i]),_:1})}}};export{h as date,C as default,f as duration,B as image,k as lang,_ as meta,m as title};