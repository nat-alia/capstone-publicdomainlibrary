(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BookPage"],{"0264":function(o,a,t){},"04d3":function(o,a,t){"use strict";var e=t("dbed"),n=t.n(e);n.a},"76f5":function(o,a,t){"use strict";var e=t("0264"),n=t.n(e);n.a},"7db0":function(o,a,t){"use strict";var e=t("23e7"),n=t("b727").find,s=t("44d2"),i=t("ae40"),d="find",l=!0,r=i(d);d in[]&&Array(1)[d]((function(){l=!1})),e({target:"Array",proto:!0,forced:l||!r},{find:function(o){return n(this,o,arguments.length>1?arguments[1]:void 0)}}),s(d)},8566:function(o,a,t){},"98c5":function(o,a,t){"use strict";var e=t("8566"),n=t.n(e);n.a},ab24:function(o,a,t){"use strict";t.r(a);var e=function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("div",{staticClass:"container"},[t("CustomCursor",{class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean}}),t("Header",{class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean}}),t("BackButton",{class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean}}),t("LoadingQuote",{staticClass:"loading-screen",class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean},attrs:{"v-if":o.loadingCount<2,loadingprop:o.isLoading,loadingcountprop:o.loadingCount,fadedprop:o.fadedQuote,booktitleprop:o.book.title,bookquoteprop:o.book.quote}}),t("div",{staticClass:"bookpage"},[t("div",{staticClass:"bp-image-background",style:{backgroundImage:"url("+o.book.adaptations[o.selectedIndex].image+")"}}),t("BookItem",{ref:"bookAnimation",class:{bookslide:o.fadedQuote,"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean},attrs:{slugprop:o.slug,titleprop:o.book.title,authorprop:o.book.author,themeprop:o.book.themes,numberprop:o.book.number}}),t("div",{staticClass:"book-summary-item book-panel-item",class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean}},[t("div",{staticClass:"book-summary-title panel-section",on:{click:function(a){o.expandedSummary=!o.expandedSummary}}},[t("span",{staticClass:"panel-title"},[o._v("Book Summary")]),!1===o.expandedSummary?t("span",{staticClass:"expand"},[o._v("Expand")]):o._e(),!0===o.expandedSummary?t("span",{staticClass:"expand"},[o._v("Close")]):o._e()]),!0===o.expandedSummary?t("div",{staticClass:"book-summary-text"},[t("div",{staticClass:"book-details"},[t("br"),t("div",{staticClass:"book-title"},[o._v(" "+o._s(o.book.title))]),t("div",{staticClass:"sans"},[o._v(" by "+o._s(o.book.author))]),t("div",{staticClass:"sans"},[o._v(" "+o._s(o.book.year))])]),t("br"),t("div",[o._v(" "+o._s(o.book.summary)+" ")]),t("br"),t("div",{staticClass:"book-downloads-links"},[t("a",{staticClass:"pointer-link",attrs:{href:"/books/pdf/"+o.book.slug+".pdf",download:""}},[o._v("PDF")]),t("a",{attrs:{href:"link.jpg",download:o.book.title}},[o._v("HTML Text")]),t("a",{attrs:{href:"link.jpg",download:o.book.title}},[o._v("EPUB")])])]):o._e()]),t("div",{staticClass:"book-adaptation-item book-panel-item",class:{"fantasy-book":o.book.fantasyBookBoolean,"romance-book":o.book.romanceBookBoolean,"adventure-book":o.book.adventureBookBoolean,"history-book":o.book.historyBookBoolean}},[t("div",{staticClass:"book-adaptation-title panel-section pointer-link",on:{click:function(a){o.expandedAdaptations=!o.expandedAdaptations}}},[t("span",{staticClass:"panel-title"},[o._v("Films and Adaptations")]),!1===o.expandedAdaptations?t("span",{staticClass:"expand"},[o._v("Expand")]):o._e(),!0===o.expandedAdaptations?t("span",{staticClass:"expand"},[o._v("Close")]):o._e()]),!0===o.expandedAdaptations?t("div",{staticClass:"book-adaptations-wrapper",on:{mouseover:function(a){o.imageColor=!0},mouseleave:function(a){o.imageColor=!1}}},[t("br"),o._l(o.book.adaptations,(function(a,e){return t("div",{key:a.name+a.year,staticClass:"book-adaptations-text pointer-link",class:[o.selectedIndex===e?"selected-movie":""],on:{click:function(t){a.selectedMovie=!a.selectedMovie,o.selectMovie(e)}}},[t("div",{staticClass:"movie-line"},[t("div",{staticClass:"adaptation-title"},[o._v(" "+o._s(a.name))]),t("div",{staticClass:"adaptation-year"},[o._v(o._s(a.year))])]),t("img",{staticClass:"hide",attrs:{src:a.image}})])})),t("br")],2):o._e()])],1)],1)},n=[],s=(t("7db0"),t("a9e3"),t("c0d6")),i=t("54f3"),d=function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("div",{staticClass:"back pointer-link"},[t("a",{on:{click:function(a){return o.$router.go(-1)}}},[o._v("←")])])},l=[],r={name:"BackButton",data:function(){return{}}},c=r,k=(t("76f5"),t("2877")),p=Object(k["a"])(c,d,l,!1,null,"063183df",null),u=p.exports,b=function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("div",{staticClass:"quote-page",class:{faded:o.faded,displaynone:o.loadingcountprop>1}},[t("div",{staticClass:"quote-page-text"},[t("p",{staticClass:"quote-page-title"},[o._v(" "+o._s(o.booktitleprop)+" ")]),t("p",{staticClass:"quote-page-quote"},[o._v(" "+o._s(o.bookquoteprop)+" ")]),t("br"),t("br"),o.loadingprop?t("div",{staticClass:"loading"},[t("span",[o._v("L")]),t("span",[o._v("o")]),t("span",[o._v("a")]),t("span",[o._v("d")]),t("span",[o._v("i")]),t("span",[o._v("n")]),t("span",[o._v("g")])]):o._e(),1===o.loadingcountprop?t("div",{staticClass:"loading loading-enter pointer-link"},[t("span",{on:{click:function(a){o.faded=!0}}},[o._v(" Enter ")])]):o._e()])])},v=[],f={name:"LoadingQuote",props:{bookquoteprop:String,booktitleprop:String,loadingprop:Boolean,fadedprop:Boolean,loadingcountprop:Number},data:function(){return{faded:this.fadedprop}}},m=f,B=(t("98c5"),Object(k["a"])(m,b,v,!1,null,"1ef5136a",null)),g=B.exports,y=t("96c7"),_=t("0051"),C=t("cffa"),h=t("9ce6"),x=t("a5cf");C["b"].registerPlugin(h["a"]);var w={name:"BookPage",components:{BookItem:i["a"],BackButton:u,LoadingQuote:g,Header:y["a"],CustomCursor:_["a"]},data:function(){return{expandedSummary:!0,expandedDownloads:!0,expandedAdaptations:!0,selectedMovie:!1,adaptations:s["a"].adaptations,selectedIndex:0,fileName:this.slug,isLoading:!0,fadedQuote:!1,loadingCount:0}},props:{slug:{type:String,required:!0},adaptation:{type:Object},selectedFilm:{type:Number}},methods:{selectMovie:function(o){this.selectedIndex=o,console.log(o)},next:function(){this.selectedIndex++},prev:function(){this.selectedIndex--},onLoad:function(){console.log("call on load"),this.loadingCount=this.loadingCount+1,this.isLoading=!1}},computed:{book:function(){var o=this;return s["a"].books.find((function(a){return a.slug===o.slug}))}},created:function(){this.onLoad()},mounted:function(){var o=this.$refs.bookAnimation,a=new x["d"];a.to(o,1,{y:-500,x:200,ease:x["c"].easeIn})}},A=w,q=(t("04d3"),Object(k["a"])(A,e,n,!1,null,"d9f21436",null));a["default"]=q.exports},dbed:function(o,a,t){}}]);
//# sourceMappingURL=BookPage.d8af0493.js.map