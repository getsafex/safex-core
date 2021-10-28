"use strict";(self.webpackChunkcore_js_docs=self.webpackChunkcore_js_docs||[]).push([[608,201],{3012:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),a=n(2699),l=n(6742),c=n(4973);function o(e){var t=e.year,n=e.posts;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,n.map((function(e){return r.createElement("li",{key:e.metadata.date},r.createElement(l.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function i(e){var t=e.years;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(o,e))})))))}function s(e){var t,n,l=e.archive,o=(0,c.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,c.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),u=(t=l.blogPosts,n=t.reduceRight((function(e,t){var n=t.metadata.date.split("-")[0],r=e.get(n)||[];return e.set(n,[t].concat(r))}),new Map),Array.from(n,(function(e){return{year:e[0],posts:e[1]}})));return r.createElement(a.Z,{title:o,description:s},r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},o),r.createElement("p",{className:"hero__subtitle"},s))),r.createElement("main",null,u.length>0&&r.createElement(i,{years:u})))}},6979:function(e,t,n){var r=n(7462),a=n(3366),l=n(7294),c=n(3935),o=n(2263),i=n(5977),s=n(4996),u=n(6742),m=n(9105),h=n(6397),d=n(7052),f=n(6747),p=n(5613),g=n(4973),v=["contextualSearch"],E=null;function b(e){var t=e.hit,n=e.children;return l.createElement(u.Z,{to:t.url},n)}function C(e){var t=e.state,n=e.onClose,r=(0,h.Z)().generateSearchPageLink;return l.createElement(u.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function k(e){var t,u,h=e.contextualSearch,k=(0,a.Z)(e,v),y=(0,o.Z)().siteMetadata,Z=(0,p.Z)(),S=null!=(t=null==(u=k.searchParameters)?void 0:u.facetFilters)?t:[],P=h?[].concat(Z,S):S,A=Object.assign({},k.searchParameters,{facetFilters:P}),N=(0,s.C)().withBaseUrl,_=(0,i.k6)(),w=(0,l.useRef)(null),I=(0,l.useRef)(null),R=(0,l.useState)(!1),F=R[0],O=R[1],M=(0,l.useState)(null),T=M[0],j=M[1],x=(0,l.useCallback)((function(){return E?Promise.resolve():Promise.all([n.e(300).then(n.bind(n,4300)),Promise.all([n.e(532),n.e(945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(846)]).then(n.bind(n,9846))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),B=(0,l.useCallback)((function(){x().then((function(){w.current=document.createElement("div"),document.body.insertBefore(w.current,document.body.firstChild),O(!0)}))}),[x,O]),D=(0,l.useCallback)((function(){O(!1),w.current.remove()}),[O]),L=(0,l.useCallback)((function(e){x().then((function(){O(!0),j(e.key)}))}),[x,O,j]),U=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;_.push(t)}}).current,V=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:N(""+t.pathname+t.hash)})}))})).current,Y=(0,l.useMemo)((function(){return function(e){return l.createElement(C,(0,r.Z)({},e,{onClose:D}))}}),[D]),q=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",y.docusaurusVersion),e}),[y.docusaurusVersion]);(0,d.D)({isOpen:F,onOpen:B,onClose:D,onInput:L,searchButtonRef:I});var H=(0,g.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(m.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+k.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement(f.a,{onTouchStart:x,onFocus:x,onMouseOver:x,onClick:B,ref:I,translations:{buttonText:H,buttonAriaLabel:H}}),F&&(0,c.createPortal)(l.createElement(E,(0,r.Z)({onClose:D,initialScrollY:window.scrollY,initialQuery:T,navigator:U,transformItems:V,hitComponent:b,resultsFooterComponent:Y,transformSearchClient:q},k,{searchParameters:A})),w.current))}t.Z=function(){var e=(0,o.Z)().siteConfig;return l.createElement(k,e.themeConfig.algolia)}}}]);