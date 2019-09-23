webpackJsonp([1],[,,,,,,function(t,e,i){"use strict";var s=i(1),n=i(84);s.a.use(n.a),e.a=new n.a.Store({state:{currentProject:""},mutations:{switchProject:function(t,e){t.currentProject=e}}})},function(t,e,i){"use strict";e.a={1:{id:1,name:"Previous portfolio",description:"My first real project.",mainImg:"https://www.cyriltandy.fr/static/img/old-portfolio_main.png",labels:["Portfolio","UI","canvas","2014"],bgColor:"rgb(25, 25, 25)",color:"rgb(105, 105, 105)",paragraphs:[{link:{href:"https://cyriltandy.fr/old-index.php",text:"Launch my old portfolio"}},{text:"Not terminated, sometimes buggy, not responsive but somewhat interesting."}]},2:{id:2,name:"No mans skies",description:"Random and interactivity.",mainImg:"https://www.cyriltandy.fr/static/img/nms_main.png",labels:["Javascript","canvas","2015"],bgColor:"black",color:"orange",paragraphs:[{link:{href:"https://lab.cyriltandy.fr/noMansSky.html",text:"Launch No mans skies"}}]},3:{id:3,name:"CanardPC",description:'Scholar project : development of a web app version of the french magazine "CanardPC"',mainImg:"https://www.cyriltandy.fr/static/img/cpc_main.jpg",labels:["Web app","2015"],bgColor:"white",color:"rgb(204, 2, 35)",paragraphs:[{link:{href:"https://cyriltandy.fr/ptutS3/home/home.html",text:"Launch the web app"}}]},4:{id:4,name:"IUT du Limousin",description:"Scholar project : development of a web app presenting the Limousin's Institute of Technology",mainImg:"https://www.cyriltandy.fr/static/img/iut_main.jpg",labels:["Web app","2015"],bgColor:"#4A565E",color:"white",paragraphs:[{link:{href:"https://cyriltandy.fr/ptutS4/",text:"Launch the web app"}}]}}},,,,,,function(t,e,i){i(62);var s=i(0)(i(18),i(79),null,null);t.exports=s.exports},function(t,e,i){"use strict";var s=i(1),n=i(82),r=i(6),o=i(69),a=i.n(o),l=i(71),c=i.n(l),h=i(70),p=i.n(h),u=i(68),d=i.n(u);s.a.use(n.a);var v=new n.a({routes:[{path:"/about",name:"about",component:a.a},{path:"/projects",name:"projects",component:c.a,children:[{path:":id",component:p.a,props:!0,name:"project"}]},{path:"/blog",name:"blog",component:d.a,beforeEnter:function(){location="https://medium.com/@tandycyril"}}]});v.beforeEach(function(t,e,i){"project"!=t.name?(r.a.commit("switchProject"),document.body.style.overflow="visible"):(r.a.state.currentProject||r.a.commit("switchProject",t.params.id),document.body.style.overflow="hidden"),i()}),e.a=v},function(t,e,i){i(57);var s=i(0)(i(17),i(74),null,null);t.exports=s.exports},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(65),n=i.n(s);e.default={name:"app",components:{miMenu:n.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mi-chip",props:{bgColor:{type:String,default:"black"},color:{type:String,default:"white"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mi-close",props:{color:String,bgColor:String}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(67),n=i.n(s);e.default={name:"mi-menu",data:function(){return{width:innerWidth,height:innerHeight}},mounted:function(){var t=this;addEventListener("resize",function(){t.width=innerWidth,t.height=innerHeight})},components:{miTab:n.a},methods:{clickTabHandler:function(t){this.$store.commit("switchTab",t)}},computed:{points1:function(){return[{x:0,y:0},{x:.5,y:0},{x:.5,y:.5},{x:0,y:1}]},points2:function(){return[{x:1,y:0},{x:.5,y:0},{x:.5,y:.5},{x:1,y:1}]},points3:function(){return[{x:.5,y:.5},{x:1,y:1},{x:0,y:1},{x:.5,y:.5}]},points4:function(){var t=this.height<this.width?1080:1920,e=Math.min(this.height,this.width),i=Math.max(e*(innerWidth>900?185:135)/t,64),s=Math.max(e*(innerWidth>900?190:140)/t,65);return[{x:.5,y:.5-i/this.height},{x:.5+s/this.width,y:.5},{x:.5,y:.5+i/this.height},{x:.5-s/this.width,y:.5},{x:.5,y:.5-i/this.height}]}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(13),n=i.n(s);e.default={name:"mi-project",components:{"mi-chip":n.a},props:{id:Number,name:{type:String,required:!0},description:{type:String,required:!0},color:{type:String,default:"white"},bgColor:{type:String,default:"rgba(0, 0, 0, 0.6)"},mainImg:{type:String,required:!0},labels:Array,index:String,linkTo:String},data:function(){return{innerWidth:innerWidth,innerHeight:innerHeight,scrollY:scrollY,shiftingCoef:(this.index-1)%2?-1:1}},mounted:function(){var t=this;this.$el.style.height=innerWidth<900?this.getTotalHeight(this.$refs.leftPart)+100+"px":"",this.$refs.bgImg.addEventListener("load",function(){t.setBgImgSize()}),addEventListener("resize",function(){t.innerWidth=innerWidth,t.innerHeight=innerHeight,t.setBgImgSize()}),addEventListener("scroll",function(){t.scrollY=scrollY}),addEventListener("click",function(e){e.path.indexOf(t.$refs.miProject)>-1&&!t.selected&&t.$store.commit("switchProject",t.id),t.selected&&setTimeout(function(){t.$router.push("/projects/"+t.id)},450)})},computed:{selected:function(){return this.$store.state.currentProject===this.id},mainStyle:function(){return this.$store.state.currentProject?this.selected&&(document.querySelector("#app").style.top=-this.$refs.miProject.getBoundingClientRect().top+"px"):document.querySelector("#app").style.top=0,{height:this.selected?"100vh":this.$el&&innerWidth<900?this.getTotalHeight(this.$refs.leftPart)+100+"px":"",left:this.innerWidth>1e3&&!this.selected?.08*(this.left-this.shiftingCoef*this.scrollY*.8)+"px":0,marginTop:this.selected?"0":"",backgroundColor:this.bgColor}},bgImg:function(){var t={maxWidth:this.selected?innerWidth>900?"25vw":"50vw":"100vw",maxHeight:this.selected?innerWidth>900?"29vh":"50vh":"80vh",top:this.selected?this.getTotalHeight(this.$refs.leftPart)+"px":"0",left:this.selected?"23%":"0"};return this.$nextTick(this.setBgImgSize),t},svgPoints:function(){return.25*this.innerWidth+",0 "+this.innerWidth+",0 "+this.innerWidth+","+this.innerHeight+" 0,"+this.innerHeight},projectSvg:function(){return{left:this.selected?"100%":""}},left:function(){return this.shiftingCoef*(this.index-1)*this.innerHeight*.8},desc:function(){return{top:this.selected?"20vh":"33%"}}},methods:{setBgImgSize:function(){var t=this.$refs.bgImg;if(t){var e=this.$el.clientHeight/this.$el.clientWidth;innerWidth,innerHeight;this.selected||(.5625<e?(t.style.maxHeight=this.$el.clientHeight+"px",t.style.maxWidth=this.$el.clientWidth/.5625+"px"):(t.style.maxWidth=this.$el.clientWidth+"px",t.style.maxHeight=.5625*this.$el.clientWidth+"px"))}},getTotalHeight:function(t){var e=getComputedStyle(t);return parseInt(e.height)+parseInt(e.paddingTop)+parseInt(e.paddingBottom)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(27),n=i.n(s);e.default={name:"mi-tab",props:{name:Object,bgColor:{type:String,default:"black"},color:{type:String,default:"white"},points:{type:Array},clickStyle:Object,hoverStyle:Object,textPosClick:Object,fontSize:Number,style:Object,linkTo:String},data:function(){return{mainCvs:void 0,mainCvsCtx:void 0,text:this.name.text,clickCoords:void 0,hoverCoords:void 0}},mounted:function(){var t=this;this.mainCvs=this.$refs.mainCvs,this.mainCvsCtx=this.mainCvs.getContext("2d"),this.mainCvs.width=innerWidth,this.mainCvs.height=innerHeight,this.hoverCvs=this.$refs.hoverCvs,this.hoverCvsCtx=this.hoverCvs.getContext("2d"),this.hoverCvs.width=innerWidth,this.hoverCvs.height=innerHeight,this.updateTab(),addEventListener("resize",function(){var t=this;setTimeout(function(){t.mainCvs.width=innerWidth,t.mainCvs.height=innerHeight,t.hoverCvs.width=innerWidth,t.hoverCvs.height=innerHeight,t.updateTab()},0)}.bind(this)),addEventListener("mousemove",function(e){t.hoverCoords={x:e.x-parseFloat(t.clickstyle.left),y:e.y-parseFloat(t.clickstyle.top)}}),addEventListener("click",function(e){t.clickCoords={x:e.x-parseFloat(t.clickstyle.left),y:e.y-parseFloat(t.clickstyle.top)},0!==t.mainCvsCtx.getImageData(t.clickCoords.x,t.clickCoords.y,1,1).data[3]&&t.linkTo&&(t.$router.push("/"+t.linkTo),t.$store.commit("switchProject","")),t.updateTab()})},computed:{hover:function(){if(this.hoverCoords){if(0!==this.mainCvsCtx.getImageData(this.hoverCoords.x,this.hoverCoords.y,1,1).data[3])return this.$emit("hovered",this.name),!0}return!1},hoverCvsStyle:function(){var t={};return this.hover&&("/"!==this.$store.state.route.path&&(t.display="none"),t=n()(t,this.hoverStyle)),t},hoverTabNameClass:function(){if(this.hover)return["tab-name-hovered"]},clickstyle:function(){return"/"!==this.$store.state.route.path?this.$store.state.route.path.match("/"+this.linkTo)?{top:this.clickStyle.top*innerHeight*2+"px",left:this.clickStyle.left*innerWidth*2+"px"}:{top:this.clickStyle.top*innerHeight+"px",left:this.clickStyle.left*innerWidth+"px"}:{top:0,left:0}},hoverstyle:function(){return"/"!==this.$store.state.route.path?this.hover&&!this.$store.state.route.path.match("/"+this.linkTo)?{top:this.clickStyle.top/1.04*innerHeight+"px",left:this.clickStyle.left/1.04*innerWidth+"px"}:{}:{top:0,left:0}},tabSize:function(){return{width:this.getSize("x"),height:this.getSize("y")}},textStyle:function(){var t=void 0,e=void 0,i=this.avg("y"),s=this.avg("x");return this.text=this.tabSize.width<this.name.text.length*this.fontSize/2+90||"/"!==this.$store.state.route.path?this.name.substitute:this.name.text,t=i*innerHeight-1.2*this.fontSize,e=s*innerWidth-this.text.length*this.fontSize/3.7,"/"!==this.$store.state.route.path&&this.textPosClick&&(t+=this.textPosClick.top*innerHeight,e+=this.textPosClick.left*innerWidth),{fontSize:this.fontSize+"px",top:t+"px",left:e+"px",color:this.color}}},methods:{getSize:function(t){var e=1,i=0;return this.points.forEach(function(s){s[t]<e?e=s[t]:s[t]>i&&(i=s[t])}),(i-e)*innerWidth+parseFloat("x"===t?this.clickstyle.left:this.clickstyle.top)},updateTab:function(){this.draw()},draw:function(){this.mainCvsCtx.fillStyle=this.bgColor,this.mainCvsCtx.strokeStyle=this.hoverCvsCtx.strokeStyle=this.color,this.mainCvsCtx.lineWidth=this.hoverCvsCtx.lineWidth=2,this.mainCvsCtx.shadowColor="rgba(0, 0, 0, 0.35)",this.mainCvsCtx.shadowBlur=35,this.mainCvsCtx.beginPath(),this.mainCvsCtx.moveTo(this.points[0].x*innerWidth,this.points[0].y*innerHeight),this.hoverCvsCtx.beginPath(),this.hoverCvsCtx.moveTo(this.points[0].x*innerWidth,this.points[0].y*innerHeight);for(var t=1;t<this.points.length;t++)this.mainCvsCtx.lineTo(this.points[t].x*innerWidth,this.points[t].y*innerHeight),this.hoverCvsCtx.lineTo(this.points[t].x*innerWidth,this.points[t].y*innerHeight);this.mainCvsCtx.clearRect(0,0,this.mainCvs.width,this.mainCvs.height),this.hoverCvsCtx.clearRect(0,0,this.hoverCvs.width,this.hoverCvs.height),this.mainCvsCtx.fill(),this.mainCvsCtx.stroke(),this.hoverCvsCtx.stroke()},avg:function(t){var e=0;return this.points.forEach(function(i){e+=i[t]}),e/this.points.length}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(13),n=i.n(s),r=i(64),o=i.n(r),a=i(7);e.default={components:{"mi-chip":n.a,"mi-close":o.a},props:{id:String||Number},data:function(){return{project:a.a[this.id]}},mounted:function(){document.querySelector(".mainImg").style.top=parseInt(getComputedStyle(this.$refs.infos).height)+130+"px"},computed:{linksStyle:function(){return{color:this.project.color}}},methods:{close:function(){this.$store.commit("switchProject",""),this.$router.push("/projects"),document.querySelector("#app").style.top="0px"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(66),n=i.n(s),r=i(7);e.default={components:{"mi-project":n.a},data:function(){return{projects:r.a}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(1),n=i(15),r=i.n(n),o=i(14),a=i(6),l=i(16);i.n(l);s.a.config.productionTip=!1,i.i(l.sync)(a.a,o.a),new s.a({el:"#app",router:o.a,store:a.a,template:"<App/>",components:{App:r.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){i(56);var s=i(0)(i(19),i(73),null,null);t.exports=s.exports},function(t,e,i){var s=i(0)(i(20),i(80),null,null);t.exports=s.exports},function(t,e,i){i(58);var s=i(0)(i(21),i(75),"data-v-40d76cac",null);t.exports=s.exports},function(t,e,i){i(63);var s=i(0)(i(22),i(81),null,null);t.exports=s.exports},function(t,e,i){i(59);var s=i(0)(i(23),i(76),"data-v-796f100e",null);t.exports=s.exports},function(t,e,i){i(60);var s=i(0)(null,i(77),null,null);t.exports=s.exports},function(t,e,i){i(55);var s=i(0)(i(24),i(72),"data-v-167b41c0",null);t.exports=s.exports},function(t,e,i){i(61);var s=i(0)(i(25),i(78),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-view",style:[{backgroundColor:t.project.bgColor,color:t.project.color}]},[i("div",{ref:"infos",staticClass:"infos",style:{background:t.project.bgColor}},[i("div",{staticClass:"titleWrapper"},[i("h3",{staticClass:"project-name",attrs:{"border-color":t.project.color}},[t._v(t._s(t.project.name))])]),t._v(" "),i("div",{staticClass:"labels",style:{backgroundColor:t.project.bgColor}},t._l(t.project.labels,function(e){return i("mi-chip",{key:e,staticClass:"label",attrs:{color:t.project.color}},[t._v(t._s(e))])}))]),t._v(" "),i("div",{staticClass:"content"},[i("img",{staticClass:"mainImg",attrs:{src:t.project.mainImg}}),t._v(" "),i("p",{ref:"desc",staticClass:"desc"},[t._v(t._s(t.project.description))]),t._v(" "),i("div",{staticClass:"paragraphs"},t._l(t.project.paragraphs,function(e,s){return i("div",{key:e,staticClass:"paragraph",style:[{padding:s%2?"0 2vw 0 0":"0 0 0 2vw"}]},[e.title?i("h4",{staticClass:"paragraph-title"},[t._v(t._s(e.title))]):t._e(),t._v(" "),e.text?i("p",{staticClass:"paragraph-text"},[t._v(t._s(e.text))]):t._e(),t._v(" "),e.img?i("img",{staticClass:"paragraph-img",attrs:{src:e.img}}):t._e(),t._v(" "),e.link?i("a",{style:t.linksStyle,attrs:{href:e.link.href}},[t._v(t._s(e.link.text))]):t._e()])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mi-close",style:{color:this.color,borderColor:this.color},attrs:{"border-color":t.color}},[i("svg",{staticStyle:{"enable-background":"new 0 0 54 54"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 54 54","xml:space":"preserve"}},[i("path",{style:"fill:"+t.bgColor,attrs:{d:"M27,1L27,1c14.359,0,26,11.641,26,26v0c0,14.359-11.641,26-26,26h0C12.641,53,1,41.359,1,27v0    C1,12.641,12.641,1,27,1z"}}),t._v(" "),i("path",{style:"fill:"+t.bgColor,attrs:{d:"M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,27S41.888,54,27,54z M27,2    C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z"}}),t._v(" "),i("path",{style:"fill:"+t.color,attrs:{d:"M31.706,40c-0.256,0-0.512-0.098-0.707-0.293L19.501,28.209c-0.667-0.667-0.667-1.751,0-2.418   l11.498-11.498c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L21.12,27l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414   C32.218,39.902,31.962,40,31.706,40z"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("mi-menu",{staticClass:"mi-menu"}),t._v(" "),i("transition",{attrs:{name:"fadeTop",mode:"out-in"}},[i("router-view",{attrs:{id:"main"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"miProject",staticClass:"mi-project",style:t.mainStyle,attrs:{id:"p"+t.id}},[i("img",{ref:"bgImg",staticClass:"bgImg",style:t.bgImg,attrs:{src:t.mainImg}}),t._v(" "),i("div",{ref:"leftPart",staticClass:"left-part"},[i("div",{staticClass:"titleWrapper"},[i("h3",{staticClass:"project-name",style:[{color:t.color,borderColor:t.color}]},[t._v(t._s(t.name))])]),t._v(" "),i("div",{staticClass:"labels"},t._l(t.labels,function(e){return i("mi-chip",{key:e,staticClass:"label",attrs:{color:t.color,bgColor:"black"}},[t._v(t._s(e))])}))]),t._v(" "),i("div",{staticClass:"desc-container",style:[{color:t.color}]},[i("svg",{staticClass:"project-svg",style:t.projectSvg,attrs:{id:t.name+"-svg",width:t.innerWidth,height:t.innerHeight,xmlns:"http://www.w3.org/2000/svg"}},[i("polygon",{attrs:{points:t.svgPoints,fill:t.bgColor}})]),t._v(" "),i("p",{staticClass:"desc",style:[{backgroundColor:t.bgColor},t.desc]},[t._v(t._s(t.description))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),i("li",[i("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h3",[t._v("About me")]),t._v(" "),i("p",[i("strong",[t._v("Full-stack developer")]),t._v(" based in Limoges, France (but willing to move). I try to make the web to be\n  open, fast and beautiful! I enjoy to do "),i("strong",[t._v("web apps")]),t._v(" with "),i("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("Vue.js")]),t._v(",\n  design experiences and listen to music.\n  ")]),t._v(" "),i("p",[t._v("I have recently graduated with a bachelor's degree in web development and big data and, previously, earned a two year\n    degree in the multimedia fields.\n  ")]),t._v(" "),i("p",[t._v("In my spare time, I love playing guitar, watching YouTube videos and, mainly, thinking freely.")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"projects"},[t._l(t.projects,function(t,e){return[i("mi-project",{key:t.id,staticClass:"project",attrs:{id:t.id,name:t.name,description:t.description,mainImg:t.mainImg,color:t.color,bgColor:t.bgColor,linkTo:t.linkTo,labels:t.labels,index:e}})]}),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("router-view",{staticClass:"project-view"})],1)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"mi-chip",style:[{color:this.color,borderColor:this.color}]},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mi-menu"},[i("nav",[i("mi-tab",{attrs:{name:{text:"ABOUT ME.",substitute:"ABTM."},hoverStyle:{top:"-17px",left:"-30px"},clickStyle:{top:-.3,left:-.3},textPosClick:{top:.03,left:.13},fontSize:20,points:t.points1,linkTo:"about"},on:{clicked:t.clickTabHandler}}),t._v(" "),i("mi-tab",{attrs:{name:{text:"BLOG.",substitute:"BLG."},hoverStyle:{top:"-17px",left:"30px"},clickStyle:{top:-.3,left:.3},textPosClick:{top:.03,left:-.13},fontSize:20,points:t.points2,linkTo:"blog"},on:{clicked:t.clickTabHandler}}),t._v(" "),i("mi-tab",{attrs:{name:{text:"PROJECTS.",substitute:"PRJCTS."},hoverStyle:{top:"30px"},clickStyle:{top:.32,left:0},textPosClick:{top:-.17,left:0},fontSize:20,points:t.points3,linkTo:"projects"},on:{clicked:t.clickTabHandler}}),t._v(" "),i("mi-tab",{attrs:{name:{text:"CYRIL TANDY",substitute:"CT"},clickStyle:{top:-.5,left:0},textPosClick:{top:.05,left:0},fontSize:20,points:t.points4,linkTo:" "},on:{clicked:t.clickTabHandler}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"miTab",staticClass:"mi-tab",style:[t.clickstyle,t.hoverstyle]},[i("canvas",{ref:"mainCvs",staticClass:"tab-canvas",attrs:{id:"mainCvs",width:"100vw",height:"100vh"}}),t._v(" "),i("canvas",{ref:"hoverCvs",staticClass:"tab-canvas",style:t.hoverCvsStyle,attrs:{id:"hoverCvs",width:"100vw",height:"100vh"}}),t._v(" "),i("h2",{ref:"tabName",staticClass:"tab-name",class:t.hoverTabNameClass,style:t.textStyle,attrs:{"border-color":t.color}},[t._v(t._s(t.text))])])},staticRenderFns:[]}}],[26]);
//# sourceMappingURL=app.a83d1c6d7d81da3ec429.js.map