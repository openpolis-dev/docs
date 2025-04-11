"use strict";(self.webpackChunkseedao_docs=self.webpackChunkseedao_docs||[]).push([[5276],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=a,g=c["".concat(u,".").concat(d)]||c[d]||h[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40230:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:0},i=void 0,s={type:"mdx",unversionedId:"06-seeauth/seeauth-go/intro",id:"06-seeauth/seeauth-go/intro",title:"intro",description:"Overview",source:"@site/seedao-docs/06-seeauth/seeauth-go/intro.md",sourceDirName:"06-seeauth/seeauth-go",slug:"/seeauth/seeauth-go/intro",permalink:"/seeauth/seeauth-go/intro",draft:!1,editUrl:null,tags:[],version:"",sidebarPosition:0,frontMatter:{sidebar_position:0}},u=[{value:"Overview",id:"overview",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Testing",id:"testing",level:2}],l={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"For Third-Part Server, validate user with SeeAuth service, and return the user credentials for accessing his/her data."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/go-mod/go-version/Taoist-Labs/see-auth-go",alt:"GitHub go.mod Go version (subdirectory of monorepo)"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/release/Taoist-Labs/see-auth-go",alt:"GitHub release (with filter)"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ go get github.com/Taoist-Labs/see-auth-go\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"SeeDAOAuth(...)")," function to authenticate user with SeeAuth service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// SeeDAOAuth authenticates with SeeAuth service\n// `recipient` parameter is fixed to `0x0000000000000000000000000000000000000000`\n// `seeAuth` parameter is the `SeeAuth` object, it is parsed from the http request body.\n// It returns the wallet address if the authentication is successful, otherwise it returns an error\nfunc SeeDAOAuth(recipient string, seeAuth *SeeAuth) (string, error)\n")),(0,a.kt)("p",null,"For example(using ",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/"},"Fiber")," framework):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    seeauth "github.com/Taoist-Labs/see-auth-go"\n    "github.com/gofiber/fiber/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Post("/seeauth", func(c *fiber.Ctx) error {\n        var req seeauth.SeeAuth\n        if err := c.BodyParser(&req); err != nil {\n            return err\n        }\n\n        wallet, err := seeauth.SeeDAOAuth("0x0000000000000000000000000000000000000000", &req)\n        if err != nil {\n            return err\n        }\n\n        return c.JSON(struct {\n            Wallet string `json:"wallet"`\n            Token  string `json:"token"`\n        }{\n            Wallet: wallet,\n            Token:  "jwt token",\n        })\n    })\n}\n')),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Open ",(0,a.kt)("a",{parentName:"p",href:"https://seeauth-web.deno.dev/"},"https://seeauth-web.deno.dev/")," and fill your seeauth api url at ",(0,a.kt)("strong",{parentName:"p"},"Third-Server-SeeAuth-Endpoint"),", and then click the ",(0,a.kt)("strong",{parentName:"p"},"With SeeAuth")," button to test."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://docs.seedao.tech/img/seeauth.png",alt:"seeauth"})))}c.isMDXComponent=!0}}]);