import{u as t,c as n,w as r,_ as c,o as p,a as s,d as o}from"./app-b1fb3549.js";const i=s("div",{class:"prose m-auto"},[s("p",null,"When you need to detect if a string contains Chinese characters, you would commonly think about doing it will RegExp, or grab a ready-to-use package on npm."),s("p",null,[o("If you Google it, you are likely end up with "),s("a",{href:"https://stackoverflow.com/a/21113538",target:"_blank",rel:"noopener"},"this solution"),o(":")]),s("pre",null,[s("code",{class:"language-ts"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#C98A7DAA"}},"/"),s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#C99076"}},"\\u4E00-\\u9FCC\\u3400-\\u4DB5\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#C99076"}},"\\uD840-\\uD868"),s("span",{style:{color:"#666666"}},"]["),s("span",{style:{color:"#C99076"}},"\\uDC00-\\uDFFF"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#C99076"}},"\\uD869"),s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#C99076"}},"\\uDC00-\\uDED6\\uDF00-\\uDFFF"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#C99076"}},"\\uD86A-\\uD86C"),s("span",{style:{color:"#666666"}},"]["),s("span",{style:{color:"#C99076"}},"\\uDC00-\\uDFFF"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#C99076"}},"\\uD86D"),s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#C99076"}},"\\uDC00-\\uDF34\\uDF40-\\uDFFF"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#C99076"}},"\\uD86E"),s("span",{style:{color:"#666666"}},"["),s("span",{style:{color:"#C99076"}},"\\uDC00-\\uDC1D"),s("span",{style:{color:"#666666"}},"]"),s("span",{style:{color:"#C98A7DAA"}},"/")]),o(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#B56959AA"}},"/"),s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#A65E2B"}},"\\u4E00-\\u9FCC\\u3400-\\u4DB5\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#A65E2B"}},"\\uD840-\\uD868"),s("span",{style:{color:"#999999"}},"]["),s("span",{style:{color:"#A65E2B"}},"\\uDC00-\\uDFFF"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#A65E2B"}},"\\uD869"),s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#A65E2B"}},"\\uDC00-\\uDED6\\uDF00-\\uDFFF"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#A65E2B"}},"\\uD86A-\\uD86C"),s("span",{style:{color:"#999999"}},"]["),s("span",{style:{color:"#A65E2B"}},"\\uDC00-\\uDFFF"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#A65E2B"}},"\\uD86D"),s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#A65E2B"}},"\\uDC00-\\uDF34\\uDF40-\\uDFFF"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#A65E2B"}},"\\uD86E"),s("span",{style:{color:"#999999"}},"["),s("span",{style:{color:"#A65E2B"}},"\\uDC00-\\uDC1D"),s("span",{style:{color:"#999999"}},"]"),s("span",{style:{color:"#B56959AA"}},"/")]),o(`
`),s("span",{class:"line"})])])])])]),s("p",null,[o("It works, but a bit dirty. Fortunately, I found "),s("a",{href:"https://stackoverflow.com/a/61151122",target:"_blank",rel:"noopener"},"a much simpler solution"),o(" today:")]),s("pre",null,[s("code",{class:"language-ts"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#C98A7DAA"}},"/"),s("span",{style:{color:"#E6CC77"}},"\\p"),s("span",{style:{color:"#C4704F"}},"{Script=Han}"),s("span",{style:{color:"#C98A7DAA"}},"/"),s("span",{style:{color:"#4D9375"}},"u")]),o(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#B56959AA"}},"/"),s("span",{style:{color:"#BDA437"}},"\\p"),s("span",{style:{color:"#AB5E3F"}},"{Script=Han}"),s("span",{style:{color:"#B56959AA"}},"/"),s("span",{style:{color:"#1E754F"}},"u")]),o(`
`),s("span",{class:"line"})])])])])]),s("pre",null,[s("code",{class:"language-ts"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"!!"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#C98A7D"}},"你好"),s("span",{style:{color:"#C98A7DAA"}},"'"),s("span",{style:{color:"#666666"}},"."),s("span",{style:{color:"#80A665"}},"match"),s("span",{style:{color:"#666666"}},"("),s("span",{style:{color:"#C98A7DAA"}},"/"),s("span",{style:{color:"#E6CC77"}},"\\p"),s("span",{style:{color:"#C4704F"}},"{Script=Han}"),s("span",{style:{color:"#C98A7DAA"}},"/"),s("span",{style:{color:"#4D9375"}},"u"),s("span",{style:{color:"#666666"}},")"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#758575DD"}},"// true")]),o(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"!!"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#B56959"}},"你好"),s("span",{style:{color:"#B56959AA"}},"'"),s("span",{style:{color:"#999999"}},"."),s("span",{style:{color:"#59873A"}},"match"),s("span",{style:{color:"#999999"}},"("),s("span",{style:{color:"#B56959AA"}},"/"),s("span",{style:{color:"#BDA437"}},"\\p"),s("span",{style:{color:"#AB5E3F"}},"{Script=Han}"),s("span",{style:{color:"#B56959AA"}},"/"),s("span",{style:{color:"#1E754F"}},"u"),s("span",{style:{color:"#999999"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// true")]),o(`
`),s("span",{class:"line"})])])])])]),s("p",null,[o("It’s called "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes",target:"_blank",rel:"noopener"},"Unicode property escapes"),o(" and already available in "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#browser_compatibility",target:"_blank",rel:"noopener"},"Chrome 64, Firefox 79, Safari 11.1 and Node.js 10"),o(".")]),s("p",null,[s("a",{href:"https://www.regular-expressions.info/unicode.html",target:"_blank",rel:"noopener"},"All available scripts here"),o(".")])],-1),C="Match Chinese Characters",F="2021-02-25T16:00:00.000Z",d="en",g="2min",m="https://antfu.me/og/match-chinese-characters.png",f=[{property:"og:title",content:"Match Chinese Characters"},{property:"og:image",content:"https://antfu.me/og/match-chinese-characters.png"},{name:"twitter:card",content:"summary_large_image"}],B={__name:"match-chinese-characters",setup(u,{expose:l}){const e={title:"Match Chinese Characters",date:"2021-02-25T16:00:00.000Z",lang:"en",duration:"2min",image:"https://antfu.me/og/match-chinese-characters.png",meta:[{property:"og:title",content:"Match Chinese Characters"},{property:"og:image",content:"https://antfu.me/og/match-chinese-characters.png"},{name:"twitter:card",content:"summary_large_image"}]};return l({frontmatter:e}),t({title:"Match Chinese Characters",meta:[{property:"og:title",content:"Match Chinese Characters"},{property:"og:image",content:"https://antfu.me/og/match-chinese-characters.png"},{name:"twitter:card",content:"summary_large_image"}]}),(A,h)=>{const a=c;return p(),n(a,{frontmatter:e},{default:r(()=>[i]),_:1})}}};export{F as date,B as default,g as duration,m as image,d as lang,f as meta,C as title};
