(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0846":function(o,t,n){},"19dd":function(o,t,n){"use strict";var e=n("4572"),a=n.n(e);a.a},"1dde":function(o,t,n){var e=n("d039"),a=n("b622"),r=n("2d00"),s=a("species");o.exports=function(o){return r>=51||!e((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[o](Boolean).foo}))}},"1f20":function(o,t,n){"use strict";var e=n("0846"),a=n.n(e);a.a},4572:function(o,t,n){},"4de4":function(o,t,n){"use strict";var e=n("23e7"),a=n("b727").filter,r=n("1dde"),s=n("ae40"),i=r("filter"),c=s("filter");e({target:"Array",proto:!0,forced:!i||!c},{filter:function(o){return a(this,o,arguments.length>1?arguments[1]:void 0)}})},"5ced":function(o,t,n){},bb51:function(o,t,n){"use strict";n.r(t);var e=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"home"},[n("Header"),n("div",{staticClass:"cursor"}),n("BookCatalog",{ref:"drag"}),n("InformationButton")],1)},a=[],r=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"catalog",attrs:{id:"drag"}},[n("div",{staticClass:"drag"},[n("div",{staticClass:"book-grid",attrs:{name:"books"}},o._l(o.firstRowBooks,(function(o){return n("div",{key:o.title,staticClass:"bookspace-two"},[n("div",{staticClass:"bookspacegrid"},[n("BookItem",{class:{"fantasy-book":o.fantasyBookBoolean,"romance-book":o.romanceBookBoolean,"adventure-book":o.adventureBookBoolean,"history-book":o.historyBookBoolean},attrs:{categoryprop:o.category,slugprop:o.slug,titleprop:o.title,authorprop:o.author,themeprop:o.themes,numberprop:o.adaptations.length}})],1)])})),0),n("div",{staticClass:"book-grid-two"},o._l(o.secondRowBooks,(function(o){return n("div",{key:o.title,staticClass:"bookspace-two"},[n("div",{staticClass:"bookspacegrid"},[n("BookItem",{class:{"fantasy-book":o.fantasyBookBoolean,"romance-book":o.romanceBookBoolean,"adventure-book":o.adventureBookBoolean,"history-book":o.historyBookBoolean},attrs:{categoryprop:o.category,slugprop:o.slug,titleprop:o.title,authorprop:o.author,themeprop:o.themes,numberprop:o.adaptations.length}})],1)])})),0)])])},s=[],i=(n("4de4"),n("54f3")),c=n("c0d6"),u={name:"BookCatalog",components:{BookItem:i["a"]},data:function(){return{books:c["a"].books,hoveredOn:!1}},methods:{showImage:function(){}},computed:{firstRowBooks:function(){return this.books.filter((function(o){return!0===o.firstRow}))},secondRowBooks:function(){return this.books.filter((function(o){return!0===o.secondRow}))}}},l=u,d=(n("1f20"),n("2877")),f=Object(d["a"])(l,r,s,!1,null,null,null),k=f.exports,p=n("96c7"),b=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"info-btn"},[n("router-link",{staticClass:"info-text",attrs:{to:"/About"}},[o._v("Information")])],1)},m=[],B={name:"InformationButton",data:function(){return{}}},h=B,g=(n("19dd"),Object(d["a"])(h,b,m,!1,null,"4667e978",null)),v=g.exports,w={name:"Home",components:{BookCatalog:k,InformationButton:v,Header:p["a"]},methods:{changeBackground:function(o){this.backgroundImage="url("+o+");"}},mounted:function(){}},y=w,C=(n("cccb"),Object(d["a"])(y,e,a,!1,null,null,null));t["default"]=C.exports},cccb:function(o,t,n){"use strict";var e=n("5ced"),a=n.n(e);a.a}}]);
//# sourceMappingURL=home.e5679212.js.map