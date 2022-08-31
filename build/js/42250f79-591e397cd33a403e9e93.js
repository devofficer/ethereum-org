"use strict";(self.webpackChunkethereum_org_website=self.webpackChunkethereum_org_website||[]).push([[6721],{5571:function(e,t,a){var n=a(95318);t.__esModule=!0,t.default=void 0;var l=n(a(71087)),r=n(a(69983)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=h(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=l?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(67294)),o=a(94961),u=a(54098),f=n(a(43618)),s=a(89546),d=n(a(5080)),m=n(a(81643)),g=a(69786),c=n(a(92364)),p=a(4382);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(h=function(e){return e?a:t})(e)}var b=(0,l.default)(g.Page,{target:"exd98iy7"})({name:"iyyzlo",styles:"margin-top:4rem"}),x=(0,l.default)(g.Content,{target:"exd98iy6"})("margin-bottom:2rem;justify-content:center;@media (max-width: ",(function(e){return e.theme.breakpoints.xl}),"){padding:0 2rem 2rem;}"),w=(0,l.default)("h1",{target:"exd98iy5"})("font-style:normal;font-weight:normal;font-family:",(function(e){return e.theme.fonts.monospace}),";text-transform:uppercase;font-weight:600;font-size:2rem;line-height:140%;text-align:center;margin:0 0 1.625rem;"),v=(0,l.default)("p",{target:"exd98iy4"})("font-size:1.25rem;line-height:140%;color:",(function(e){return e.theme.colors.text200}),";margin-bottom:0.5rem;text-align:center;"),j=(0,l.default)("div",{target:"exd98iy3"})("display:flex;align-items:center;width:100%;justify-content:space-between;@media (max-width: ",(function(e){return e.theme.breakpoints.l}),"){flex-direction:column-reverse;align-items:flex-start;}"),k=(0,l.default)("div",{target:"exd98iy2"})("flex:1 0 33%;justify-content:flex-end;@media (max-width: ",(function(e){return e.theme.breakpoints.m}),"){max-width:100%;}margin-bottom:1.5rem;margin-right:2rem;width:100%;"),y=(0,l.default)(o.GatsbyImage,{target:"exd98iy1"})({name:"17kagrd",styles:"flex:1 1 100%;max-width:800px;background-size:cover;background-repeat:no-repeat"}),U=(0,l.default)("h2",{target:"exd98iy0"})({name:"17la434",styles:"margin:0 0 1.625rem"}),M=[{id:"waffle",url:"https://getwaffle.io/",githubUrl:"https://github.com/EthWorks/waffle",background:"#ffffff",name:"Waffle",description:"page-local-environment-waffle-desc",alt:"page-local-environment-waffle-logo-alt"},{id:"hardhat",url:"https://hardhat.org/",githubUrl:"https://github.com/nomiclabs/hardhat",background:"#faf8fb",name:"Hardhat",description:"page-local-environment-hardhat-desc",alt:"page-local-environment-hardhat-logo-alt"},{id:"truffle",url:"https://www.trufflesuite.com/",githubUrl:"https://github.com/trufflesuite/truffle",background:"#31272a",name:"Truffle",description:"page-local-environment-truffle-desc",alt:"page-local-environment-truffle-logo-alt"},{id:"embark",url:"https://framework.embarklabs.io/",githubUrl:"https://github.com/embarklabs/embark",background:"#1b3e5f",name:"Embark",description:"page-local-environment-embark-desc",alt:"page-local-environment-embark-logo-alt"},{id:"brownie",url:"https://github.com/eth-brownie/brownie",githubUrl:"https://github.com/eth-brownie/brownie",background:"#ffffff",name:"Brownie",description:"page-local-environment-brownie-desc",alt:"page-local-environment-brownie-logo-alt"},{id:"epirus",url:"https://www.web3labs.com/epirus",githubUrl:"https://github.com/web3labs/epirus-free",background:"#ffffff",name:"Epirus",description:"page-local-environment-epirus-desc",alt:"page-local-environment-epirus-logo-alt"},{id:"createethapp",url:"https://github.com/PaulRBerg/create-eth-app",githubUrl:"https://github.com/PaulRBerg/create-eth-app",background:"#ffffff",name:"Create Eth App",description:"page-local-environment-eth-app-desc",alt:"page-local-environment-eth-app-logo-alt"},{id:"scaffoldeth",url:"https://github.com/austintgriffith/scaffold-eth",githubUrl:"https://github.com/austintgriffith/scaffold-eth",background:"#ffffff",name:"scaffold-eth",description:"page-local-environment-scaffold-eth-desc",alt:"page-local-environment-scaffold-eth-logo-alt"},{id:"soliditytemplate",url:"https://github.com/paulrberg/solidity-template",githubUrl:"https://github.com/paulrberg/solidity-template",background:"#ffffff",name:"Solidity template",description:"page-local-environment-solidity-template-desc",alt:"page-local-environment-solidity-template-logo-alt"},{id:"foundry",url:"https://getfoundry.sh/",githubUrl:"https://github.com/foundry-rs/foundry",background:"#ffffff",name:"Foundry",description:"page-local-environment-foundry-desc",alt:"page-local-environment-foundry-logo-alt"}],C=function(e){var t=e.data,a=(0,u.useIntl)(),n=(0,i.useState)([]),l=n[0],h=n[1];return(0,i.useEffect)((function(){var e=(0,r.default)(M.map((function(e){return e.image||(e.image=(0,o.getImage)(t[e.id])),e})));h(e)}),[t]),(0,p.jsx)(b,null,(0,p.jsx)(d.default,{title:(0,s.translateMessageId)("page-local-environment-setup-meta-title",a),description:(0,s.translateMessageId)("page-local-environment-setup-meta-desc",a)}),(0,p.jsx)(x,null,(0,p.jsx)(w,null,(0,p.jsx)(f.default,{id:"page-local-environment-setup-title"})),(0,p.jsx)(v,null,(0,p.jsx)(f.default,{id:"page-local-environment-setup-subtitle"}),(0,p.jsx)("br",null),(0,p.jsx)(f.default,{id:"page-local-environment-setup-subtitle-2"}))),(0,p.jsx)(g.Content,null,(0,p.jsx)(j,null,(0,p.jsx)(k,null,(0,p.jsx)(U,null,(0,p.jsx)(f.default,{id:"page-local-environment-frameworks-title"})),(0,p.jsx)("p",null,(0,p.jsx)(f.default,{id:"page-local-environment-frameworks-desc"})),(0,p.jsx)("p",null,(0,p.jsx)(f.default,{id:"page-local-environment-framework-features"})),(0,p.jsx)("ul",null,(0,p.jsx)("li",null,(0,p.jsx)(f.default,{id:"page-local-environment-framework-feature-1"})),(0,p.jsx)("li",null,(0,p.jsx)(f.default,{id:"page-local-environment-framework-feature-2"})),(0,p.jsx)("li",null,(0,p.jsx)(f.default,{id:"page-local-environment-framework-feature-3"})),(0,p.jsx)("li",null,(0,p.jsx)(f.default,{id:"page-local-environment-framework-feature-4"})),(0,p.jsx)("li",null,(0,p.jsx)(f.default,{id:"page-local-environment-framework-feature-5"})))),(0,p.jsx)(k,null,(0,p.jsx)(y,{image:(0,o.getImage)(t.hero),alt:(0,s.translateMessageId)("alt-eth-blocks",a),loading:"eager"}))),(0,p.jsx)(g.CardGrid,null,l.map((function(e,t){return(0,p.jsx)(m.default,{key:t,url:e.url,background:e.background,image:e.image,name:e.name,githubUrl:e.githubUrl,repoLangCount:2,alt:(0,s.translateMessageId)(e.alt,a)},(0,p.jsx)(f.default,{id:e.description}))})))),(0,p.jsx)(g.Content,null,(0,p.jsx)(c.default,null)))};t.default=C}}]);
//# sourceMappingURL=42250f79-591e397cd33a403e9e93.js.map