(function(e){function a(a){for(var o,n,s=a[0],l=a[1],m=a[2],c=0,u=[];c<s.length;c++)n=s[c],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(a);while(u.length)u.shift()();return i.push.apply(i,m||[]),t()}function t(){for(var e,a=0;a<i.length;a++){for(var t=i[a],o=!0,n=1;n<t.length;n++){var s=t[n];0!==r[s]&&(o=!1)}o&&(i.splice(a--,1),e=l(l.s=t[0]))}return e}var o={},n={app:0},r={app:0},i=[];function s(e){return l.p+"js/"+({BookPage:"BookPage",about:"about"}[e]||e)+"."+{BookPage:"5504e65a",about:"5ff52267"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var t=o[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var a=[],t={BookPage:1,about:1};n[e]?a.push(n[e]):0!==n[e]&&t[e]&&a.push(n[e]=new Promise((function(a,t){for(var o="css/"+({BookPage:"BookPage",about:"about"}[e]||e)+"."+{BookPage:"d7806ebb",about:"443bd208"}[e]+".css",r=l.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var m=i[s],c=m.getAttribute("data-href")||m.getAttribute("href");if("stylesheet"===m.rel&&(c===o||c===r))return a()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){m=u[s],c=m.getAttribute("data-href");if(c===o||c===r)return a()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=a,d.onerror=function(a){var o=a&&a.target&&a.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete n[e],d.parentNode.removeChild(d),t(i)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){n[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(a,t){o=r[e]=[a,t]}));a.push(o[2]=i);var m,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e);var u=new Error;m=function(a){c.onerror=c.onload=null,clearTimeout(d);var t=r[e];if(0!==t){if(t){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",u.name="ChunkLoadError",u.type=o,u.request=n,t[1](u)}r[e]=void 0}};var d=setTimeout((function(){m({type:"timeout",target:c})}),12e4);c.onerror=c.onload=m,document.head.appendChild(c)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(t,o,function(a){return e[a]}.bind(null,o));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/",l.oe=function(e){throw console.error(e),e};var m=window["webpackJsonp"]=window["webpackJsonp"]||[],c=m.push.bind(m);m.push=a,m=m.slice();for(var u=0;u<m.length;u++)a(m[u]);var d=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var o=t("85ec"),n=t.n(o);n.a},"0846":function(e,a,t){},"1f20":function(e,a,t){"use strict";var o=t("0846"),n=t.n(o);n.a},"4ed1":function(e,a,t){},"54f3":function(e,a,t){"use strict";var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"bookspace"},[t("div",{staticClass:"book"},[t("div",{staticClass:"spine"}),t("div",{staticClass:"title"},[e._v(e._s(e.titleprop))]),t("div",{staticClass:"author"},[e._v(e._s(e.authorprop))])]),t("div",{staticClass:"info-bundle"},[t("div",{staticClass:"themes"},[e._v(e._s(e.themeprop))])]),t("div",{staticClass:"sticker-group sticker"},[t("div",{staticClass:"sticker-text"},[t("div",{staticClass:"number"},[e._v(e._s(e.numberprop))]),t("div",[e._v("Contemporary Works")])])])])},n=[],r=(t("a9e3"),t("c0d6")),i={name:"BookItem",props:{titleprop:String,authorprop:String,themeprop:String,numberprop:Number,femaleprop:Boolean,url:String,type:String,summaryprop:String,slug:String},data:function(){return{books:r["a"].books}}},s=i,l=(t("9f0d"),t("2877")),m=Object(l["a"])(s,o,n,!1,null,null,null);a["a"]=m.exports},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("Header"),t("router-view",{key:e.$route.path})],1)},r=[],i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"header"},[t("router-link",{attrs:{to:"/"}},[t("div",{staticClass:"logo"},[e._v(" The"),t("br"),t("span",{staticClass:"logo-sans"},[e._v(" Public Domain ")]),t("br"),e._v(" Library ")])]),!1===e.expandedMenu?t("div",{staticClass:"link",on:{click:function(a){e.expandedMenu=!0}}},[t("br"),e._v(" Menu ")]):e._e(),e.expandedMenu?t("div",{staticClass:"link close-btn",on:{click:function(a){e.expandedMenu=!1}}},[t("br"),e._v(" Close ")]):e._e(),e.expandedMenu?t("div",{staticClass:"link"},[t("br"),t("router-link",{attrs:{to:"/About"}},[e._v(" About, ")]),e._v(" Credits ")],1):e._e()],1)},s=[],l={name:"Header",data:function(){return{expandedMenu:!1}}},m=l,c=(t("a740"),t("2877")),u=Object(c["a"])(m,i,s,!1,null,null,null),d=u.exports,p={name:"App",components:{Header:d},data:function(){return{}},mounted:function(){}},g=p,h=(t("034f"),Object(c["a"])(g,n,r,!1,null,null,null)),y=h.exports,f=(t("d3b7"),t("8c4f")),M=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("QuoteHomePage"),t("BookCatalog")],1)},k=[],v=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"catalog"},[t("div",{staticClass:"book-grid"},e._l(e.books,(function(a){return t("div",{key:a.title,staticClass:"bookspace-two"},[t("div",{staticClass:"bookspacegrid"},[t("transition",{attrs:{name:"slide",mode:"in-out"}},[t("router-link",{attrs:{to:{name:"BookPage",params:{slug:a.slug}}},on:{mouseover:function(a){e.hoveredOn=!0}}},[t("BookItem",{class:{"fantasy-book":a.fantasyBookBoolean,"romance-book":a.romanceBookBoolean,"adventure-book":a.adventureBookBoolean,"history-book":a.historyBookBoolean},attrs:{titleprop:a.title,authorprop:a.author,themeprop:a.themes,numberprop:a.number}})],1)],1)],1)])})),0)])},B=[],b=t("54f3"),_=t("c0d6"),w={name:"BookCatalog",components:{BookItem:b["a"]},data:function(){return{books:_["a"].books,hoveredOn:!1}},methods:{showImage:function(){}}},j=w,T=(t("1f20"),Object(c["a"])(j,v,B,!1,null,null,null)),N=T.exports,z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"quote-page"},[t("div",{ref:"quote",staticClass:"quote-p"},[e._v(" Culture, like science and technology, grows by accretion, each new creator building on the works of those who came before. ")]),t("div",{ref:"quoteTwo",staticClass:"quote-p"},[e._v(" Creativity is impossible without a rich public domain. "),t("br"),t("span",{ref:"speaker",staticClass:"speaker"},[e._v("Alex Kozinski")])])])},A=[],C=t("a5cf"),Y={name:"QuoteHomePage",mounted:function(){var e=this.$refs,a=e.quote,t=e.quoteTwo,o=e.speaker,n=new C["d"];n.to(a,.25,{opacity:1,y:-5,ease:C["c"].easeIn},.25),n.to(t,.25,{opacity:1,y:-5,ease:C["c"].easeIn},.5),n.to(o,.25,{opacity:1,y:-5,ease:C["c"].easeIn},.75)}},O=Y,V=(t("5915"),Object(c["a"])(O,z,A,!1,null,null,null)),F=V.exports,E={name:"Home",components:{BookCatalog:N,QuoteHomePage:F},methods:{changeBackground:function(e){this.backgroundImage="url("+e+");"}}},S=E,D=(t("cccb"),Object(c["a"])(S,M,k,!1,null,null,null)),X=D.exports;o["a"].use(f["a"]);var L=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/book/:slug",name:"BookPage",props:!0,component:function(){return t.e("BookPage").then(t.bind(null,"ab24"))}}],W=new f["a"]({mode:"history",routes:L}),Q=W,x=t("cffa");o["a"].config.productionTip=!1,x["a"].registerPlugin(x["a"]),new o["a"]({router:Q,render:function(e){return e(y)}}).$mount("#app")},5915:function(e,a,t){"use strict";var o=t("4ed1"),n=t.n(o);n.a},"5ced":function(e,a,t){},"85ec":function(e,a,t){},"9f0d":function(e,a,t){"use strict";var o=t("ee1f"),n=t.n(o);n.a},a740:function(e,a,t){"use strict";var o=t("c895"),n=t.n(o);n.a},c0d6:function(e,a,t){"use strict";a["a"]={books:[{title:"Emma",author:"Jane Austen",themes:"Fiction, Romance, British Literature, Female-Lead",number:2,female:!0,imgurl:"https://m.media-amazon.com/images/M/MV5BMTYzMzQ5OTc0MF5BMl5BanBnXkFtZTcwNjkwMDExNA@@._V1_SY1000_CR0,0,1501,1000_AL_.jpg",image:"emmaclueless.jpg",summary:"Emma Woodhouse is one of Austen's most captivating and vivid characters. Beautiful, spoilt, vain and irrepressibly witty, Emma organizes the lives of the inhabitants of her sleepy little village and plays matchmaker with devastating effect.",fantasyBookBoolean:!1,romanceBookBoolean:!0,historyBookBoolean:!1,adventureBookBoolean:!1,slug:"emma",adaptations:[{name:"Clueless",year:1995,image:"https://m.media-amazon.com/images/M/MV5BMTYzMzQ5OTc0MF5BMl5BanBnXkFtZTcwNjkwMDExNA@@._V1_SY1000_CR0,0,1501,1000_AL_.jpg",selectedMovie:!0},{name:"Emma",year:2020,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BN2NkMjY2ZDQtZDQxYS00ZGE3LTgxYTctMjljYmIwOTBhYWE4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,1436,1000_AL_.jpg"},{name:"Emma",year:1996,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BYTQwNmFjMTEtYWRhNi00NDAxLTljYzItODkwYjFlOTZkZjVhXkEyXkFqcGdeQXVyNTQxMTIxMTk@._V1_SY1000_CR0,0,1532,1000_AL_.jpg"},{name:"Aisha",year:2010,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BNjk4OTczYjgtODUzZC00NWMzLWEzMDktODY2YzkyNTY5MzQyXkEyXkFqcGdeQXVyNjY4Nzk0Njk@._V1_.jpg"}]},{title:"Moby Dick",author:"Herman Miller",themes:"Fiction, Adventure, Nautical",number:12,imgurl:"https://m.media-amazon.com/images/M/MV5BZDBlMTk3N2ItYzJjNi00Y2Y0LTg0YWUtYWYwNGNkNDYwYjBhXkEyXkFqcGdeQXVyMDUyOTUyNQ@@._V1_.jpg",summary:"",image:"url(@/assets/emmaclueless.jpg)",slug:"moby-dick",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!0,adaptations:[{name:"Clueless",year:1995,selectedMovie:!1},{name:"Emma",selectedMovie:!1,year:2020}]},{title:"Twelve Years a Slave",author:"Solomon Northup",themes:"Non-Fiction, Autobiography, American History, Slavery",number:5,imgurl:"https://m.media-amazon.com/images/M/MV5BMTM5MTU3MDQ4Ml5BMl5BanBnXkFtZTgwOTQ5MTE0MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",image:"https://media.vanityfair.com/photos/5575fde6ca2dc24e4d2650e0/master/w_2560%2Cc_limit/clueless-amy-heckerling-young-and-clueless.jpg",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!0,adventureBookBoolean:!1,slug:"twelve-years-a-slave",adaptations:[{name:"12 Years a Slave",year:2013,selectedMovie:!0,image:"https://m.media-amazon.com/images/M/MV5BMjI1NDUwOTE0MF5BMl5BanBnXkFtZTcwNDEwMzY3OQ@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",awards:[{name:"Academy Award Winner",categories:["Best Motion Picture of the Year","Best Supporting Actress","Best Writing, Adapted Screenplay"]},{name:"Golden Globe Winner",categories:["Best Drama Motion Picture"]},{name:"BAFTA Winner",categories:["Best Film","Best Leading Actor"]}]},{name:"Solomon Northup's Odyssey",year:1984,selectedMovie:!1,image:"https://theworldthroughlee.files.wordpress.com/2019/09/2014-01-02_northup_02-1.jpg",awards:null}],summary:"It is a slave narrative of a black man who was born free in New York state but kidnapped in Washington, D.C., sold into slavery, and kept in bondage for 12 years in Louisiana. He provided details of slave markets in Washington, D.C. and New Orleans, as well as describing at length cotton and sugar cultivation on major plantations in Louisiana."},{title:"Little Women",author:"Louisa A. Alcott",themes:"Semi-autobiography, Female-Led",number:3,imgurl:"https://m.media-amazon.com/images/M/MV5BOTYzNjdlZGUtNzk3OC00ODgyLWE1MWItY2ViZjljMGNmYWUxXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",fantasyBookBoolean:!1,romanceBookBoolean:!0,historyBookBoolean:!1,adventureBookBoolean:!1,slug:"little-women",adaptations:[{name:"Little Women",year:2019,selectedMovie:!0,image:"https://m.media-amazon.com/images/M/MV5BOTYzNjdlZGUtNzk3OC00ODgyLWE1MWItY2ViZjljMGNmYWUxXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"},{name:"Little Women",selectedMovie:!1,year:2018},{name:"Little Women",selectedMovie:!1,year:1994}],summary:"Generations of readers young and old, male and female, have fallen in love with the March sisters of Louisa May Alcott’s most popular and enduring novel, Little Women. Here are talented tomboy and author-to-be Jo, tragically frail Beth, beautiful Meg, and romantic, spoiled Amy, united in their devotion to each other and their struggles to survive in New England during the Civil War."},{title:"The Home and the World",author:"Rabindranath Tagore",themes:"Non-Fiction, Autobiography, American History, Slavery",number:3,imgurl:"https://m.media-amazon.com/images/M/MV5BMTYzMzQ5OTc0MF5BMl5BanBnXkFtZTcwNjkwMDExNA@@._V1_SY1000_CR0,0,1501,1000_AL_.jpg",summary:"",image:"emmaclueless.jpg",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!0,slug:"the-home-and-the-world",adaptations:[{name:"Clueless",selectedMovie:!1,year:1995},{name:"Emma",selectedMovie:!1,year:2020}]},{title:"Grimms Fairytales",author:"Jacob Grimm and Wilhelm Grimm",themes:"Folklore, Fairytales, German",number:13,imgurl:"https://media.npr.org/assets/img/2015/03/12/princess-disney_wide-f4eeaa53bb8f62c23fed393f3cf586694fba815f-s800-c85.jpg",fantasyBookBoolean:!0,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!1,slug:"grimms-fairytales",adaptations:[{name:"Disney's Cinderella",year:1950,selectedMovie:!0,image:"https://media.npr.org/assets/img/2015/03/12/princess-disney_wide-f4eeaa53bb8f62c23fed393f3cf586694fba815f-s800-c85.jpg"},{name:"A Cinderella Story",year:2004,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTc3MTc1NDQzNV5BMl5BanBnXkFtZTYwNzAwNzE3._V1_.jpg"},{name:"Into the Woods",year:2014,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMjI0MTYxODI5MV5BMl5BanBnXkFtZTgwMjkwMzQzMjE@._V1_.jpg"},{name:"Tangled",year:2010,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTU5MTU2NTIyOF5BMl5BanBnXkFtZTcwNzY2MzQwNA@@._V1_SX1777_CR0,0,1777,936_AL_.jpg"},{name:"Sleeping Beauty",year:1959,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTg2MzYyNDM4NV5BMl5BanBnXkFtZTcwMzE0MjIyNw@@._V1_SX1777_CR0,0,1777,688_AL_.jpg"}],summary:"Originally titled Children’s and Household Tales, The Complete Grimm’s Fairy Tales contains the essential bedtime stories for children worldwide for the better part of two centuries. The Brothers Grimm, Jacob and Wilhelm, were German linguists and cultural researchers who gathered legendary folklore and aimed to collect the stories exactly as they heard them"},{title:"Hearts of Darkness",author:"Joseph Conrad",themes:"Non-Fiction, Autobiography, American History, Slavery",number:2,imgurl:"https://m.media-amazon.com/images/M/MV5BOThiMThjOTYtMDFjZi00OWU1LWFlYzUtNDZjMmQyZjFlMjliXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX1777_CR0,0,1777,744_AL_.jpg",summary:" It is a story within a story, following a character named Charlie Marlow, who recounts his adventure to a group of men onboard an anchored ship. The story told is of his early life as a ferry boat captain. Although his job was to transport ivory downriver, Charlie develops an interest in investing an ivory procurement agent, Kurtz, who is employed by the government. Preceded by his reputation as a brilliant emissary of progress, Kurtz has now established himself as a god among the natives in “one of the darkest places on earth.” Marlow suspects something else of Kurtz: he has gone mad. A reflection on corruptive European colonialism and a journey into the nightmare psyche of one of the corrupted, Heart of Darkness is considered one of the most influential works ever written.",image:"emmaclueless.jpg",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!0,slug:"hearts-of-darkness",adaptations:[{name:"Apocalypse Now",year:1979,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTc5OTI5MzAxMl5BMl5BanBnXkFtZTcwNDYyNDY4Mw@@._V1_SY1000_CR0,0,1465,1000_AL_.jpg",awards:[{name:"Academy Award Winner",categories:["Best Cinematography","Best Sound"]},{name:"Golden Globe Winner",categories:["Best Director","Best Supporting Actor","Best Original Score"]},{name:"BAFTA Winner",categories:["Best Direction","Best Supporting Actor"]}]},{name:"Hearts of Darkness: A Filmmaker's Apocalypse",year:1991,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BNGI5OWU5ZmItOWM0Ni00Y2JiLWIyNTUtMmU4ZjM2YjA4ZmI0XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX1777_CR0,0,1777,999_AL_.jpg"},{name:"Hearts of Darkness",year:1993,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BYmI0MjE0Y2MtMTUzNy00MGU5LThjMTktMWUzMWZlZmU3YjJjXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",awards:null},{name:"Ad Astra",year:2019,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BOThiMThjOTYtMDFjZi00OWU1LWFlYzUtNDZjMmQyZjFlMjliXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX1777_CR0,0,1777,744_AL_.jpg",awards:null}]},{title:"Treasure Island",author:"Robert Louis Stevenson",themes:"Fiction, Adventure, Coming-of-Age Story, Young Adult, Pirates",number:0,imgurl:"https://m.media-amazon.com/images/M/MV5BMTYzMzQ5OTc0MF5BMl5BanBnXkFtZTcwNjkwMDExNA@@._V1_SY1000_CR0,0,1501,1000_AL_.jpg",summary:"",image:"emmaclueless.jpg",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!0,slug:"evelina",adaptations:[{name:"Clueless",selectedMovie:!1,year:1995},{name:"Emma",selectedMovie:!1,year:2020}]},{title:"Oliver Twist",author:"Charles Dickens",themes:"Historical Fiction, Victorian Era London, British Literature",number:3,imgurl:"https://m.media-amazon.com/images/M/MV5BYzY4MTkzMjUtNzQwMy00NGFjLTkzMTQtYzE2M2ZmMWQ5YzcxXkEyXkFqcGdeQXVyOTAwNjUwNTA@._V1_.jpg",summary:"The story of Oliver Twist - orphaned, and set upon by evil and adversity from his first breath - shocked readers when it was published. After running away from the workhouse and pompous beadle Mr Bumble, Oliver finds himself lured into a den of thieves peopled by vivid and memorable characters - the Artful Dodger, vicious burglar Bill Sikes, his dog Bull's Eye, and prostitute Nancy, all watched over by cunning master-thief Fagin. Combining elements of Gothic Romance, the Newgate Novel and popular melodrama, Dickens created an entirely new kind of fiction, scathing in its indictment of a cruel society, and pervaded by an unforgettable sense of threat and mystery.",image:"",fantasyBookBoolean:!1,romanceBookBoolean:!1,historyBookBoolean:!0,adventureBookBoolean:!1,slug:"herland",adaptations:[{name:"Twist",year:2020,selectedMovie:!0,image:"https://m.media-amazon.com/images/M/MV5BYzY4MTkzMjUtNzQwMy00NGFjLTkzMTQtYzE2M2ZmMWQ5YzcxXkEyXkFqcGdeQXVyOTAwNjUwNTA@._V1_.jpg"},{name:"August Rush",year:2007,selectedMovie:!1,image:"https://m.media-amazon.com/images/M/MV5BMTgzMDE2Mzc5OF5BMl5BanBnXkFtZTcwNTM2NjQzMw@@._V1_SY1000_CR0,0,1505,1000_AL_.jpg"},{name:"Oliver Twist",year:2005,selectedMovie:!1,image:""},{name:"Twist",year:2003,selectedMovie:!1,image:""},{name:"Oliver Twist",year:1996,selectedMovie:!1,image:""},{name:"Oliver & Company",year:1998,selectedMovie:!1,image:""}]},{title:"Frankenstein",author:"Mary Shelley",themes:"Horror, Science Fiction, Gothic Novel, Monsters, Creation",number:3,imgurl:"https://cdn.theatlantic.com/thumbor/SFGIzjvZ2gJsrS34e07fynh7lWw=/14x44:1778x1036/1440x810/media/img/mt/2015/09/rocky_horror_image_3/original.jpg",summary:"",image:"emmaclueless.jpg",fantasyBookBoolean:!0,romanceBookBoolean:!1,historyBookBoolean:!1,adventureBookBoolean:!1,slug:"frankenstein",adaptations:[{name:"Rocky Horror Picture Show",year:1975,selectedMovie:!0,image:"https://cdn.theatlantic.com/thumbor/SFGIzjvZ2gJsrS34e07fynh7lWw=/14x44:1778x1036/1440x810/media/img/mt/2015/09/rocky_horror_image_3/original.jpg"},{name:"Frankenweenie",year:2012,selectedMovie:!1,image:""}]}]}},c895:function(e,a,t){},cccb:function(e,a,t){"use strict";var o=t("5ced"),n=t.n(o);n.a},ee1f:function(e,a,t){}});
//# sourceMappingURL=app.bbd0c512.js.map