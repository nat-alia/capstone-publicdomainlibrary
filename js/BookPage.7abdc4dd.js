(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BookPage"],{"0eb2":function(o,a,t){},"49aa":function(o,a,t){"use strict";var e=t("a593"),n=t.n(e);n.a},"65f0":function(o,a,t){var e=t("861d"),n=t("e8b5"),s=t("b622"),i=s("species");o.exports=function(o,a){var t;return n(o)&&(t=o.constructor,"function"!=typeof t||t!==Array&&!n(t.prototype)?e(t)&&(t=t[i],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===a?0:a)}},"74b4":function(o,a,t){},"7db0":function(o,a,t){"use strict";var e=t("23e7"),n=t("b727").find,s=t("44d2"),i=t("ae40"),r="find",d=!0,c=i(r);r in[]&&Array(1)[r]((function(){d=!1})),e({target:"Array",proto:!0,forced:d||!c},{find:function(o){return n(this,o,arguments.length>1?arguments[1]:void 0)}}),s(r)},"8cea":function(o,a,t){"use strict";var e=function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("div",{staticClass:"back"},[t("a",{on:{click:function(a){return o.$router.go(-1)}}},[o._v("←")])])},n=[],s={name:"BackButton",data:function(){return{}}},i=s,r=(t("cb90"),t("2877")),d=Object(r["a"])(i,e,n,!1,null,"774461d4",null);a["a"]=d.exports},a593:function(o,a,t){},ab24:function(o,a,t){"use strict";t.r(a);var e=function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("div",{staticClass:"container"},[t("BackButton"),t("LoadingQuote",{directives:[{name:"show",rawName:"v-show",value:o.isLoading,expression:"isLoading"}],staticClass:"loading-screen",class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean},attrs:{booktitleprop:o.book.title,bookquoteprop:o.book.quote}}),t("div",{staticClass:"bookpage"},[t("div",{staticClass:"bp-image-background",style:{backgroundImage:"url("+o.book.adaptations[o.selectedIndex].image+")"}}),t("BookItem",{ref:"bookAnimation",class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean},attrs:{slug:o.slug,titleprop:o.book.title,authorprop:o.book.author,themeprop:o.book.themes,numberprop:o.book.number}}),t("div",{staticClass:"book-summary-item book-panel-item",class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean}},[t("div",{staticClass:"book-summary-title panel-section",on:{click:function(a){o.expandedSummary=!o.expandedSummary}}},[t("span",{staticClass:"panel-title"},[o._v("Book Summary")]),!1===o.expandedSummary?t("span",{staticClass:"expand"},[o._v("Expand")]):o._e(),!0===o.expandedSummary?t("span",{staticClass:"expand"},[o._v("Close")]):o._e()]),!0===o.expandedSummary?t("div",{staticClass:"book-summary-text"},[t("br"),t("div",[o._v(" "+o._s(o.book.summary)+" ")]),t("br")]):o._e()]),t("div",{staticClass:"book-panel-item book-downloads-item",class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean}},[t("div",{staticClass:"book-downloads-title panel-section",on:{click:function(a){o.expandedDownloads=!o.expandedDownloads}}},[t("span",{staticClass:"panel-title"},[o._v("Book Downloads")]),!1===o.expandedDownloads?t("span",{staticClass:"expand"},[o._v("Expand")]):o._e(),!0===o.expandedDownloads?t("span",{staticClass:"expand"},[o._v("Close")]):o._e()]),!0===o.expandedDownloads?t("div",{staticClass:"book-downloads-links"},[t("a",{attrs:{href:"../../src/assets/books/pdf/"+o.book.slug+".pdf",download:""}},[o._v("PDF")]),t("a",{attrs:{href:"link.jpg",download:o.book.title}},[o._v("HTML Text")]),t("a",{attrs:{href:"link.jpg",download:o.book.title}},[o._v("EPUB")])]):o._e()]),t("div",{staticClass:"book-adaptation-item book-panel-item",class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean}},[t("div",{staticClass:"book-adaptation-title panel-section",on:{click:function(a){o.expandedAdaptations=!o.expandedAdaptations}}},[t("span",{staticClass:"panel-title"},[o._v("Films and Adaptations")]),!1===o.expandedAdaptations?t("span",{staticClass:"expand"},[o._v("Expand")]):o._e(),!0===o.expandedAdaptations?t("span",{staticClass:"expand"},[o._v("Close")]):o._e()]),!0===o.expandedAdaptations?t("div",{staticClass:"book-adaptations-wrapper"},[t("br"),o._l(o.book.adaptations,(function(a,e){return t("div",{key:a.name+a.year,staticClass:"book-adaptations-text",class:[o.selectedIndex===e?"selected-movie":""],on:{click:function(t){a.selectedMovie=!a.selectedMovie,o.selectMovie(e)}}},[t("div",{staticClass:"movie-line"},[t("div",{staticClass:"adaptation-title"},[o._v(" "+o._s(a.name))]),t("div",{staticClass:"adaptation-year"},[o._v(o._s(a.year))]),t("img",{staticClass:"hide",attrs:{src:a.image}})])])})),t("br"),t("div",{staticClass:"movie-arrows"},[t("div",{staticClass:"arrow",on:{click:o.prev}},[o._v("←")]),t("div",{staticClass:"arrow",on:{click:o.next}},[o._v("→")])])],2):o._e()])],1)],1)},n=[],s=(t("7db0"),t("c0d6")),i=t("54f3"),r=t("8cea"),d=function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("div",{staticClass:"quote-page"},[t("div",{staticClass:"quote-page-text"},[t("p",{staticClass:"quote-page-title"},[o._v(" "+o._s(o.booktitleprop)+" ")]),t("p",{staticClass:"quote-page-quote"},[o._v(" "+o._s(o.bookquoteprop)+" ")]),o._m(0)])])},c=[function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("div",{staticClass:"loading"},[t("span",[o._v("L")]),t("span",[o._v("o")]),t("span",[o._v("a")]),t("span",[o._v("d")]),t("span",[o._v("i")]),t("span",[o._v("n")]),t("span",[o._v("g")])])}],l={name:"LoadingQuote",props:{bookquoteprop:String,booktitleprop:String}},u=l,p=(t("49aa"),t("2877")),k=Object(p["a"])(u,d,c,!1,null,"8e27c6e8",null),b=k.exports,v=t("cffa"),f=t("9ce6"),m=t("a5cf");v["b"].registerPlugin(f["a"]);var B={name:"BookPage",components:{BookItem:i["a"],BackButton:r["a"],LoadingQuote:b},data:function(){return{expandedSummary:!0,expandedDownloads:!0,expandedAdaptations:!0,books:s["a"].books,selectedMovie:!1,adaptations:s["a"].adaptations,selectedIndex:0,fileName:this.slug,isLoading:!0}},props:{slug:{type:String,required:!0},adaptation:{type:Object}},methods:{selectMovie:function(o){this.selectedIndex=o,console.log(o)},next:function(){this.selectedIndex++},prev:function(){this.selectedIndex--}},computed:{book:function(){var o=this;return s["a"].books.find((function(a){return a.slug===o.slug}))}},mounted:function(){var o=this,a=this.$refs.bookAnimation,t=new m["d"];t.to(a,1,{y:-500,x:200,ease:m["c"].easeIn}),setTimeout((function(){o.isLoading=!1}),4e3)}},_=B,y=(t("ad1d"),Object(p["a"])(_,e,n,!1,null,null,null));a["default"]=y.exports},ad1d:function(o,a,t){"use strict";var e=t("0eb2"),n=t.n(e);n.a},ae40:function(o,a,t){var e=t("83ab"),n=t("d039"),s=t("5135"),i=Object.defineProperty,r={},d=function(o){throw o};o.exports=function(o,a){if(s(r,o))return r[o];a||(a={});var t=[][o],c=!!s(a,"ACCESSORS")&&a.ACCESSORS,l=s(a,0)?a[0]:d,u=s(a,1)?a[1]:void 0;return r[o]=!!t&&!n((function(){if(c&&!e)return!0;var o={length:-1};c?i(o,1,{enumerable:!0,get:d}):o[1]=1,t.call(o,l,u)}))}},b727:function(o,a,t){var e=t("0366"),n=t("44ad"),s=t("7b0b"),i=t("50c4"),r=t("65f0"),d=[].push,c=function(o){var a=1==o,t=2==o,c=3==o,l=4==o,u=6==o,p=5==o||u;return function(k,b,v,f){for(var m,B,_=s(k),y=n(_),x=e(b,v,3),g=i(y.length),C=0,h=f||r,w=a?h(k,g):t?h(k,0):void 0;g>C;C++)if((p||C in y)&&(m=y[C],B=x(m,C,_),o))if(a)w[C]=B;else if(B)switch(o){case 3:return!0;case 5:return m;case 6:return C;case 2:d.call(w,m)}else if(l)return!1;return u?-1:c||l?l:w}};o.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},cb90:function(o,a,t){"use strict";var e=t("74b4"),n=t.n(e);n.a},e8b5:function(o,a,t){var e=t("c6b6");o.exports=Array.isArray||function(o){return"Array"==e(o)}}}]);
//# sourceMappingURL=BookPage.7abdc4dd.js.map