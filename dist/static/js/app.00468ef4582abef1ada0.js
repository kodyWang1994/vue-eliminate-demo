webpackJsonp([1],{"3bPz":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),l={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var a=t("VU/8")({name:"App"},l,!1,function(e){t("yGYl")},null,null).exports,i=t("/ocq"),r=t("BO1k"),s=t.n(r),c=t("woOf"),u=t.n(c),f=t("rdLu"),d=t.n(f),h={name:"HelloWorld",data:function(){return{gamePanel:[9,9,9,9,9,9,9,9,9,9],blockColors:{},colors:["red","yellow","blue","green"],source:0}},created:function(){this.init()},methods:{cleanBlock:function(e){var n=this,t=this.blockColors[e];-1!==d.a.indexOf(this.colors,t)&&(this.getNeedCleanBlock(parseInt(e),[parseInt(e)]),setTimeout(function(){if(n.needCleanBlock.length>=3){n.cleaning(n.needCleanBlock);var e=new Audio;e.src="http://data.huiyi8.com/2017/gha/03/17/1702.mp3",e.play(),n.source+=n.needCleanBlock.length}},300))},cleaning:function(e){var n=u()({},this.blockColors),t=!0,o=!1,l=void 0;try{for(var a,i=s()(e);!(t=(a=i.next()).done);t=!0){n[a.value]="cleared"}}catch(e){o=!0,l=e}finally{try{!t&&i.return&&i.return()}finally{if(o)throw l}}this.blockColors=n,this.blockDown(e)},blockDown:function(e){var n=!0,t=!1,o=void 0;try{for(var l,a=s()(e);!(n=(l=a.next()).done);n=!0){var i=l.value;delete this.blockColors[i]}}catch(e){t=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(t)throw o}}var r=d.a.groupBy(e,function(e){return e%10});for(var c in r)for(var u=d.a.min(r[c]),f=d.a.max(r[c]),h=f-u==0?10:f-u+10,v=u-10;v>-100;v-=10)v<=10?this.fullBlock(v+h):(this.blockColors[v+h]=this.blockColors[v],this.fullBlock(v))},fullBlock:function(e){this.blockColors[e]=d.a.sample(this.colors)},getNeedCleanBlock:function(e,n){var t=this,o=this.blockColors[e],l=!1;if(-1===d.a.indexOf(n,e+1)&&o===this.blockColors[e+1]&&(l=!0,n.push(e+1),setTimeout(function(){t.getNeedCleanBlock(e+1,n)},0)),-1===d.a.indexOf(n,e-1)&&o===this.blockColors[e-1]&&(l=!0,n.push(e-1),setTimeout(function(){t.getNeedCleanBlock(e-1,n)},0)),-1===d.a.indexOf(n,e+10)&&o===this.blockColors[e+10]&&(l=!0,n.push(e+10),setTimeout(function(){t.getNeedCleanBlock(e+10,n)},0)),-1===d.a.indexOf(n,e-10)&&o===this.blockColors[e-10]&&(l=!0,n.push(e-10),setTimeout(function(){t.getNeedCleanBlock(e-10,n)},0)),!l)return this.needCleanBlock=n,n},init:function(){for(var e in this.gamePanel)for(var n in d.a.range(this.gamePanel[e])){var t=parseInt(e)+1+""+(parseInt(n)+1);this.blockColors[t]=d.a.sample(this.colors)}}}},v={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("div",{staticClass:"game-panel"},e._l(e.gamePanel,function(n,o){return t("div",{key:n+o,staticClass:"row"},e._l(n,function(n,l){return t("div",{key:"col"+l,staticClass:"col",class:e.blockColors[o+1+""+n],on:{click:function(t){e.cleanBlock(o+1+""+n)}}})}))})),e._v(" "),t("div",{staticClass:"game-panel",staticStyle:{"margin-top":"10px","line-height":"1.6"}},[t("div",[e._v("得分： "+e._s(e.source))]),e._v(" "),t("div",{staticClass:"rule-text"},[e._v("\n      点击三个以上连续的同色方块即可消除方块\n    ")]),e._v(" "),t("div",{staticClass:"rule-text"},[e._v("\n      Design By Kody & Vivien\n    ")])])])},staticRenderFns:[]};var p=t("VU/8")(h,v,!1,function(e){t("3bPz")},"data-v-33fc1d4a",null).exports;o.a.use(i.a);var k=new i.a({routes:[{path:"/",name:"eliminate",component:p}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:k,components:{App:a},template:"<App/>"})},yGYl:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.00468ef4582abef1ada0.js.map