(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{182:function(t,e,r){var content=r(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("325a6a3f",content,!0,{sourceMap:!1})},183:function(t,e,r){var content=r(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("72904a7d",content,!0,{sourceMap:!1})},186:function(t,e,r){t.exports=r.p+"img/fox_news.b598fc3.png"},187:function(t,e,r){t.exports=r.p+"img/cnn.be9cd04.png"},188:function(t,e,r){"use strict";var o=r(182);r.n(o).a},189:function(t,e,r){(e=r(48)(!1)).push([t.i,".article-headline[data-v-8f23bf94]{font-weight:700;font-size:1.1em;padding-bottom:5px}.article-date[data-v-8f23bf94]{font-style:italic;font-size:.8em;color:#777;padding-bottom:10px}",""]),t.exports=e},190:function(t,e,r){"use strict";var o=r(183);r.n(o).a},191:function(t,e,r){(e=r(48)(!1)).push([t.i,".news-source-logo-container[data-v-33230ce5]{display:block;margin:25px auto}",""]),t.exports=e},192:function(t,e,r){"use strict";r.r(e);var o={props:{article:{type:Object,required:!0}},methods:{prettyDate:function(t){return new Date(t).toLocaleDateString()}}},l=(r(188),r(23)),n={components:{Article:Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"article-headline"},[r("a",{attrs:{href:t.article.url,target:"_blank"}},[t._v(t._s(t.article.title))])]),t._v(" "),r("div",{staticClass:"article-date"},[t._v(t._s(t.prettyDate(t.article.publishedAt)))]),t._v(" "),r("a",{attrs:{href:t.article.url,target:"_blank"}},[r("img",{staticStyle:{width:"100%"},attrs:{src:t.article.urlToImage}})])])}),[],!1,null,"8f23bf94",null).exports},props:{articles:{type:Array,required:!0},ideology:{type:String,required:!0}}},c=(r(190),{components:{ArticleIdeology:Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",["right"==t.ideology?o("figure",{staticClass:"image is-64x64 news-source-logo-container"},[o("img",{staticClass:"is-rounded",attrs:{src:r(186)}})]):t._e(),t._v(" "),"left"==t.ideology?o("figure",{staticClass:"image is-64x64 news-source-logo-container"},[o("img",{staticClass:"is-rounded",attrs:{src:r(187)}})]):t._e(),t._v(" "),t._l(t.articles,(function(article){return o("Article",{key:article.url,staticClass:"box",attrs:{article:article}})}))],2)}),[],!1,null,"33230ce5",null).exports},data:function(){return{left:null,right:null,screenWidth:null}},methods:{getNews:function(){var t=this;this.$axios.get("polarination.json").then((function(e){t.left=e.data.left.articles,t.right=e.data.right.articles}))}},mounted:function(){var t=this;this.screenWidth=window.innerWidth,this.getNews(),window.addEventListener("resize",(function(e){t.screenWidth=window.innerWidth}))}}),d=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.screenWidth<770?[e("b-tabs",{staticClass:"block",attrs:{position:"is-centered"}},[e("b-tab-item",{staticClass:"background-color-left",attrs:{label:"🐴 Left"}},[e("div",{staticClass:"box background-color-left"},[e("ArticleIdeology",{attrs:{ideology:"left",articles:this.left}})],1)]),this._v(" "),e("b-tab-item",{attrs:{label:"Right 🐘"}},[e("div",{staticClass:"box background-color-right"},[e("ArticleIdeology",{attrs:{ideology:"right",articles:this.right}})],1)])],1)]:e("div",{staticClass:"columns"},[e("div",{staticClass:"column box background-color-left"},[e("ArticleIdeology",{attrs:{ideology:"left",articles:this.left}})],1),this._v(" "),e("div",{staticClass:"column box background-color-right"},[e("ArticleIdeology",{attrs:{ideology:"right",articles:this.right}})],1)])],2)}),[],!1,null,null,null);e.default=d.exports}}]);