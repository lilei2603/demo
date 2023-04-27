import{u as t,c as a,w as r,_ as c,o as p,a as s,d as o}from"./app-b1fb3549.js";const y=s("div",{class:"prose m-auto"},[s("blockquote",null,[s("p",null,[o("Note: This is my personal notes/tips for migrating to Vue 3 and will be updated overtime. Please refer to "),s("a",{href:"https://v3.vuejs.org",target:"_blank",rel:"noopener"},"the official docs"),o(" for the complete changelog.")])]),s("p",null,"Sorted by the importance of my personal sense."),s("h3",{id:"💫-use-markraw-for-vendor-objects",tabindex:"-1"},[o("💫 use "),s("code",null,"markRaw"),o(" for vendor objects "),s("a",{class:"header-anchor",href:"#💫-use-markraw-for-vendor-objects","aria-hidden":"true"},"#")]),s("p",null,[o("The new reactivity system proxied the object passed to the Vue context. For vendor objects or class instances, you need to wrap it with "),s("code",null,"markRaw"),o(" in order to disable the reactivity injection.")]),s("pre",null,[s("code",{class:"language-ts"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// works in Vue 2")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C99076"}},"this"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BD976A"}},"codemirror"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BD976A"}},"CodeMirror"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"fromTextArea"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BD976A"}},"el"),s("span",{style:{color:"#666666"}},")")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// in Vue 3 you need to use markRaw()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"// otherwise the CodeMirror won't work as expected")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C99076"}},"this"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#BD976A"}},"codemirror"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#80A665"}},"markRaw"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BD976A"}},"CodeMirror"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"fromTextArea"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#BD976A"}},"el"),s("span",{style:{color:"#666666"}},"))")]),o(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// works in Vue 2")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"codemirror"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"CodeMirror"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"fromTextArea"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"el"),s("span",{style:{color:"#999999"}},")")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// in Vue 3 you need to use markRaw()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// otherwise the CodeMirror won't work as expected")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#B07D48"}},"codemirror"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#59873A"}},"markRaw"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"CodeMirror"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"fromTextArea"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B07D48"}},"el"),s("span",{style:{color:"#999999"}},"))")]),o(`
`),s("span",{class:"line"})])])])])]),s("p",null,"I think this is a pretty tricky one. You won’t see any warn or error on initialization, but the internal state of the vendor object might be messed up. You might face errors that comes from the libraries while couldn’t find out why (the example above took me one hour of debugging to find out)."),s("h3",{id:"💫-sync-→-v-model",tabindex:"-1"},[o("💫 "),s("code",null,".sync"),o(" → "),s("code",null,"v-model:"),o(),s("a",{class:"header-anchor",href:"#💫-sync-→-v-model","aria-hidden":"true"},"#")]),s("p",null,[s("code",null,".sync"),o(" modifier is unified by "),s("code",null,"v-model:")]),s("pre",null,[s("code",{class:"language-html"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"<!-- Vue 2 -->")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#FDAEB7"}},"Component"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BD976A"}},"name.sync"),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"name"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#666666"}},"/>")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575DD"}},"<!-- Vue 3 -->")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#FDAEB7"}},"Component"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BD976A"}},"v-model:name"),s("span",{style:{color:"#666666"}},"="),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#C98A7D"}},"name"),s("span",{style:{color:"#C98A7DAA"}},'"'),s("span",{style:{color:"#666666"}},"/>")]),o(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"<!-- Vue 2 -->")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#B31D28"}},"Component"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"name.sync"),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"name"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#999999"}},"/>")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"<!-- Vue 3 -->")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#B31D28"}},"Component"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"v-model:name"),s("span",{style:{color:"#999999"}},"="),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#B56959"}},"name"),s("span",{style:{color:"#B56959AA"}},'"'),s("span",{style:{color:"#999999"}},"/>")]),o(`
`),s("span",{class:"line"})])])])])]),s("p",null,[s("code",null,"v-model"),o(" on native element would be "),s("code",null,"value/input"),o(" while on custom components, it changed to "),s("code",null,"modelValue"),o(" and "),s("code",null,"update:modelValue")]),s("h3",{id:"💫-shims-vue-d-ts",tabindex:"-1"},[o("💫 "),s("code",null,"shims-vue.d.ts"),o(),s("a",{class:"header-anchor",href:"#💫-shims-vue-d-ts","aria-hidden":"true"},"#")]),s("blockquote",null,[s("p",null,[o("Update: now you can use "),s("a",{href:"https://github.com/znck/vue-developer-experience/tree/main/packages/typescript-plugin-vue",target:"_blank",rel:"noopener"},[s("code",null,"@vuedx/typescript-plugin-vue")]),o(" for better type inference with SFC (no need for "),s("code",null,"shims-vue.d.ts"),o(" then)")])]),s("p",null,"Changed to this:"),s("pre",null,[s("code",{class:"language-ts"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"declare"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#CB7676"}},"module"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"*.vue"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"{"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BD976A"}},"defineComponent"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#666666"}},"}"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"vue"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#CB7676"}},"const "),s("span",{style:{color:"#BD976A"}},"Component"),s("span",{style:{color:"#666666"}},": "),s("span",{style:{color:"#5DA9A7"}},"ReturnType"),s("span",{style:{color:"#666666"}},"<"),s("span",{style:{color:"#CB7676"}},"typeof"),s("span",{style:{color:"#666666"}}," "),s("span",{style:{color:"#BD976A"}},"defineComponent"),s("span",{style:{color:"#666666"}},">;")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CAEE"}},"  "),s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#BD976A"}},"Component"),s("span",{style:{color:"#666666"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#666666"}},"}")]),o(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"declare"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"module"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"*.vue"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"defineComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#999999"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"vue"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const "),s("span",{style:{color:"#B07D48"}},"Component"),s("span",{style:{color:"#999999"}},": "),s("span",{style:{color:"#2E808F"}},"ReturnType"),s("span",{style:{color:"#999999"}},"<"),s("span",{style:{color:"#AB5959"}},"typeof"),s("span",{style:{color:"#999999"}}," "),s("span",{style:{color:"#B07D48"}},"defineComponent"),s("span",{style:{color:"#999999"}},">;")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1E754F"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1E754F"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B07D48"}},"Component"),s("span",{style:{color:"#999999"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#999999"}},"}")]),o(`
`),s("span",{class:"line"})])])])])])],-1),D="Vue 3 Migration Notes",h="2020-07-01T00:00:00.000Z",B="en",f="https://antfu.me/og/vue-3-notes.png",g=[{property:"og:title",content:"Vue 3 Migration Notes"},{property:"og:image",content:"https://antfu.me/og/vue-3-notes.png"},{name:"twitter:card",content:"summary_large_image"}],C={__name:"vue-3-notes",setup(i,{expose:l}){const e={title:"Vue 3 Migration Notes",date:"2020-07-01T00:00:00.000Z",lang:"en",image:"https://antfu.me/og/vue-3-notes.png",meta:[{property:"og:title",content:"Vue 3 Migration Notes"},{property:"og:image",content:"https://antfu.me/og/vue-3-notes.png"},{name:"twitter:card",content:"summary_large_image"}]};return l({frontmatter:e}),t({title:"Vue 3 Migration Notes",meta:[{property:"og:title",content:"Vue 3 Migration Notes"},{property:"og:image",content:"https://antfu.me/og/vue-3-notes.png"},{name:"twitter:card",content:"summary_large_image"}]}),(A,u)=>{const n=c;return p(),a(n,{frontmatter:e},{default:r(()=>[y]),_:1})}}};export{h as date,C as default,f as image,B as lang,g as meta,D as title};