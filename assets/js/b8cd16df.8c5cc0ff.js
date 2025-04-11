"use strict";(self.webpackChunkseedao_docs=self.webpackChunkseedao_docs||[]).push([[2109],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(67294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=t.createContext({}),d=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=s,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return r?t.createElement(f,a(a({ref:n},p),{},{components:r})):t.createElement(f,a({ref:n},p))}));function f(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:s,a[1]=l;for(var d=2;d<o;d++)a[d]=r[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68527:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=r(87462),s=(r(67294),r(3905));const o={sidebar_position:1,sidebar_label:"Methods"},a="Methods",l={type:"mdx",unversionedId:"03-sns/sns-go/methods",id:"03-sns/sns-go/methods",title:"Methods",description:"1.1 Resolve addr from sns",source:"@site/seedao-docs/03-sns/sns-go/methods.md",sourceDirName:"03-sns/sns-go",slug:"/sns/sns-go/methods",permalink:"/sns/sns-go/methods",draft:!1,editUrl:null,tags:[],version:"",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Methods"}},i=[{value:"1.1 Resolve addr from sns",id:"11-resolve-addr-from-sns",level:4},{value:"1.2 Resolve sns from addr",id:"12-resolve-sns-from-addr",level:4},{value:"2.1 Batch resolve addr from sns",id:"21-batch-resolve-addr-from-sns",level:4},{value:"2.2 Batch resolve sns from addr",id:"22-batch-resolve-sns-from-addr",level:4}],d={toc:i},p="wrapper";function c(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"methods"},"Methods"),(0,s.kt)("h4",{id:"11-resolve-addr-from-sns"},"1.1 Resolve addr from sns"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'var addr string = sns.Resolve("abc.seedao")\n')),(0,s.kt)("p",null,"If the sns is not registered, it will return ",(0,s.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000")," (zero address)."),(0,s.kt)("p",null,"This method has an equivalent version: ",(0,s.kt)("inlineCode",{parentName:"p"},"func ResolveWithRPC(sns, rpc string) string"),", but you can use your own rpc endpoint, for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'var addr string = sns.ResolveWithRPC("abc.seedao", "https://eth-mainnet.g.alchemy.com/v2/H43zK7UnIN2v7u2ZoTbizIPnXkylKIZl")\n')),(0,s.kt)("h4",{id:"12-resolve-sns-from-addr"},"1.2 Resolve sns from addr"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'var sns string = sns.Name("0x123...789")\n')),(0,s.kt)("p",null,"If the address has no sns, it will return ",(0,s.kt)("inlineCode",{parentName:"p"},'""')," (empty string)."),(0,s.kt)("p",null,"This method also has an equivalent version: ",(0,s.kt)("inlineCode",{parentName:"p"},"func NameWithRPC(addr, rpc string) (sns string)"),", but you can use your own rpc endpoint."),(0,s.kt)("h4",{id:"21-batch-resolve-addr-from-sns"},"2.1 Batch resolve addr from sns"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'var addrArr []string = sns.Resolves([]string{"abc.seedao", "def.seedao"})\n')),(0,s.kt)("p",null,"If the sns is not registered, it will return ",(0,s.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000")," (zero address)."),(0,s.kt)("p",null,"This method also has an equivalent version: ",(0,s.kt)("inlineCode",{parentName:"p"},"func ResolvesWithRPC(sns []string, rpc string) []string"),", but you can use your own rpc endpoint."),(0,s.kt)("h4",{id:"22-batch-resolve-sns-from-addr"},"2.2 Batch resolve sns from addr"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'var nameList []string = sns.Names([]string{"0x123...789", "0x456...654"})\n')),(0,s.kt)("p",null,"If the address has no sns, it will return ",(0,s.kt)("inlineCode",{parentName:"p"},'""')," (empty string)."),(0,s.kt)("p",null,"This method also has an equivalent version: ",(0,s.kt)("inlineCode",{parentName:"p"},"func NamesWithRPC(addr []string, rpc string) []string"),", but you can use your own rpc endpoint."))}c.isMDXComponent=!0}}]);