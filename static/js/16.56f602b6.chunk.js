(window.webpackJsonp=window.webpackJsonp||[]).push([[16,29],{1016:function(e,t,a){},1017:function(e,t,a){e.exports=a.p+"static/media/mobile.2bcf358e.jpg"},1018:function(e,t,a){e.exports=a.p+"static/media/arrow.5c31f900.png"},1019:function(e,t,a){var n={"./WhatsApp Image 2020-04-29 at 10.50.38 PM (1).jpeg":1020,"./WhatsApp Image 2020-04-29 at 10.50.38 PM (2).jpeg":1021,"./WhatsApp Image 2020-04-29 at 10.50.38 PM (3).jpeg":1022};function i(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=c,e.exports=i,i.id=1019},1020:function(e,t,a){e.exports=a.p+"static/media/WhatsApp Image 2020-04-29 at 10.50.38 PM (1).047534f1.jpeg"},1021:function(e,t,a){e.exports=a.p+"static/media/WhatsApp Image 2020-04-29 at 10.50.38 PM (2).4eaea5a7.jpeg"},1022:function(e,t,a){e.exports=a.p+"static/media/WhatsApp Image 2020-04-29 at 10.50.38 PM (3).a23d7e5c.jpeg"},1023:function(e,t,a){e.exports=a.p+"static/media/feature-img.0ece82cf.jpeg"},1024:function(e,t,a){e.exports=a.p+"static/media/shopping_banner-2.759a8882.png"},1025:function(e,t,a){e.exports=a.p+"static/media/analytics-img.10127c68.svg"},1070:function(e,t,a){"use strict";a.r(t);var n=a(28),i=a(29),c=a(31),l=a(30),r=a(32),s=a(0),o=a.n(s),u=a(14),m=(a(71),a(45)),p=(a(177),a(192)),d=a(20),g=a(228),h=(a(1016),a(609)),f=a(1017),E=a.n(f),b=a(1018),v=a.n(b);var y,k=(y=a(1019)).keys().map(y),w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={toggle:!1,mobileView:!0,loggedIn:!1},a.path="",a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){this.setState({mobileView:window.innerWidth<=600})}},{key:"renderImages",value:function(){return k.map(function(e,t){return o.a.createElement("img",{src:e,className:"iframe",alt:"",key:t})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"mobile-outer-div"},o.a.createElement("img",{src:E.a,className:"showcase_instagram_profile",alt:"Instagram page with ContactInBio and AllMy.Link url"}),o.a.createElement("img",{src:v.a,className:"arrow"}),o.a.createElement("div",{className:"smartphone"},o.a.createElement("div",{className:"content"},o.a.createElement(h.a,{autoPlay:!0,infiniteLoop:!0,showIndicators:!1,showArrows:!1,showStatus:!1,showThumbs:!1,renderThumbs:function(){return null}},this.renderImages()))))}}]),t}(s.Component),N=a(741),j=a(1023),O=a.n(j),P=a(1024),C=a.n(P),I=a(1025),S=a.n(I),_=a(24),L=a(3),M=a(19),x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).handleOnClick=function(e){a.myDivToFocus.current&&a.myDivToFocus.current.scrollIntoView({behavior:"smooth",block:"nearest"})},a.state={loggedIn:!1},a.myDivToFocus=o.a.createRef(),a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){window.localStorage.getItem(M.j)?this.setState({loggedIn:!0}):this.setState({loggedIn:!1})}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.state.loggedIn;return o.a.createElement("div",{className:"gradient-bg-landing-page"},o.a.createElement("div",{className:"mobile_header_sdk_img"},o.a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",viewBox:"0 0 1418 995",id:"svg-icon"},o.a.createElement("defs",null,o.a.createElement("clipPath",{id:"clip-path"},o.a.createElement("rect",{id:"Rectangle_696","data-name":"Rectangle 696",className:"cls-1",width:"1418",height:"995",transform:"translate(502)"}))),o.a.createElement("g",{id:"Mask_Group_36","data-name":"Mask Group 36",className:"cls-2",transform:"translate(-502)"},o.a.createElement("path",{id:"Path_546","data-name":"Path 546",className:"cls-3",d:"M3690.005,707.591c133.569,324.227,422.867,194.932,474.868,344.832s-34.88,420.957,447.224,625.954,468.65,145.523,468.65,145.523-28.86-370.6,111.43-621.966-116.268-156.175-44.342-331.1S5091.89,707.666,5126.521,653.2s-274.385,42.715-356.968-32.25,50.616,8.33-303.69-13.883-58.607-24.989-338.322-22.212S3556.437,383.365,3690.005,707.591Z",transform:"translate(-3235.185 -479.435) rotate(-4)"})))),o.a.createElement("div",{className:"main-background"},o.a.createElement(p.a,{loggedIn:this.state.loggedIn}),o.a.createElement("div",{className:""},o.a.createElement("div",{className:"mobile-div main-div-width ",style:{height:"100vh"}},o.a.createElement("div",{className:"tc center white home-page-header"},o.a.createElement("h1",null,"Now Connect with more people by using the power of your link "),o.a.createElement("p",null,"It's quick and easy."),e?o.a.createElement("div",{className:" offer-div "},o.a.createElement("button",{type:"button",className:"color-btn w-100 ",onClick:function(){return d.c.dispatch(Object(m.a)("/admin"))}},"Go To My Account")):o.a.createElement("div",{className:"landing-btn-div"},o.a.createElement("button",{type:"button",className:"",onClick:function(){return d.c.dispatch(Object(m.a)("/signup"))}},"Get Started Free"),o.a.createElement("button",{type:"button",className:"",onClick:function(){return d.c.dispatch(Object(m.a)("/login"))}},"Login")),o.a.createElement("div",{className:"offer-div tc"},o.a.createElement("h2",null,"Sign up today and get",o.a.createElement("b",null," Pro pack free "),"for one week"))),o.a.createElement("div",null,o.a.createElement(w,null))),o.a.createElement("div",{className:"middle-content",id:"products"},o.a.createElement("div",{className:"landing-page-feature-content"},o.a.createElement("div",{className:"content"},o.a.createElement("h1",null,"Sell Online With ",M.a),o.a.createElement("h3",null,"Beautiful themes that are responsive and customizable"),o.a.createElement("p",null,"No design skills needed. You have complete control over the look and feel of your website, from its layout, to content and colors.")),o.a.createElement("img",{src:C.a,alt:"",className:"feature-img-normal"})),o.a.createElement("div",{className:"landing-page-feature-content"},o.a.createElement("img",{src:O.a,alt:"",className:"feature-img"}),o.a.createElement("div",{className:"content"},o.a.createElement("h1",null,"Add Multiple Links In your Instagram Bio"),o.a.createElement("p",null,"Instagram only allows one clickable link, make the most out of it with MyWeblink"),o.a.createElement("div",{className:"ul-list"},o.a.createElement("ul",null,o.a.createElement("li",null,"Unlimited Links"),o.a.createElement("li",null,"Link Scheduling"),o.a.createElement("li",null,"Social Media Integration")),o.a.createElement("ul",null,o.a.createElement("li",null,"Analytics"),o.a.createElement("li",null,"Custom Themes"),o.a.createElement("li",null,"Custom Logos"))))),o.a.createElement("div",{className:"landing-page-feature-content"},o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,"Analytics and Insights"),o.a.createElement("p",null,"Know how many followers visit your website and discover which which content is performing with your audience."),o.a.createElement("h2",null,"Customize your Brand Experience"),o.a.createElement("p",null,"We care for your brand experience.Modify the logo and the brand name as per your own company\u2019s assets.")),o.a.createElement("img",{src:S.a,alt:""}))),o.a.createElement("div",{id:"pricing"},o.a.createElement(N.default,null)),o.a.createElement("div",{className:"tc signup-content"},o.a.createElement("h1",null,"Get the power of MyWebLink.store"),e?o.a.createElement("button",{className:"signup",type:"button",onClick:function(){return d.c.dispatch(Object(m.a)("/signup"))}},"Go To My Account"):o.a.createElement("div",null,o.a.createElement("p",null," Sign up today or login "),o.a.createElement("button",{className:"signup",type:"button",onClick:function(){return d.c.dispatch(Object(m.a)("/signup"))}},"Sign up"),o.a.createElement("button",{className:"login",type:"button",onClick:function(){return d.c.dispatch(Object(m.a)("/login"))}},"Login"))),o.a.createElement(g.a,null))))}}]),t}(s.Component);t.default=Object(u.c)(function(e){return{plans:e.PurchaseReducers.plans}},function(e){return{getPlans:function(){return e({type:L.s,payload:_.a.Purchase.getPlans()})}}})(x)},170:function(e,t,a){},177:function(e,t,a){},192:function(e,t,a){"use strict";a.d(t,"a",function(){return b});var n=a(28),i=a(29),c=a(31),l=a(30),r=a(32),s=a(0),o=a.n(s),u=(a(14),a(45)),m=(a(71),a(170),a(232)),p=a.n(m),d=a(1051),g=a(20),h=a(145),f=a(19),E=[{link:"/",text:"Home"},{link:"/#products",text:"Products"},{link:"/#pricing",text:"Pricing"}],b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).toggleDrawer=function(e,t){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&a.Toggle()}},a.Toggle=function(){a.setState({toggle:!a.state.toggle})},a.list=function(e){return o.a.createElement("ul",{className:"nav-links pa0"},E.map(function(e,t){return o.a.createElement("li",{key:t,onClick:function(){return a.setState({toggle:!1})}},o.a.createElement("a",{href:e.link},e.text))}),a.state.mobileView?a.state.loggedIn?o.a.createElement("li",null,o.a.createElement("a",{onClick:function(){return g.c.dispatch(Object(u.a)("/admin"))}},"Go To My Account")):o.a.createElement("div",null,o.a.createElement("li",null,o.a.createElement("a",{onClick:function(){return g.c.dispatch(Object(u.a)("/signup"))}},"Get Started")),o.a.createElement("li",null,o.a.createElement("a",{onClick:function(){return g.c.dispatch(Object(u.a)("/login"))}},"Login"))):null)},a.state={toggle:!1,mobileView:!0,loggedIn:!1,navBgStyle:null},a.path="",a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.props.loggedIn&&this.setState({loggedIn:this.props.loggedIn}),window.localStorage.getItem(f.j)?this.setState({loggedIn:!0}):this.setState({loggedIn:!1})}},{key:"resize",value:function(){this.setState({mobileView:window.innerWidth<=600})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"navBar items-center ",style:this.state.navBgStyle},o.a.createElement("div",{className:"flex"},o.a.createElement(h.a,{parent:"landing-page"}),this.state.mobileView?null:this.list()),o.a.createElement("div",{className:"flex"},this.state.mobileView?o.a.createElement("button",{onClick:this.Toggle,className:"drawer-btn   "},o.a.createElement(p.a,{style:{color:"black"}})):o.a.createElement("div",{className:"flex align-center justify-center"},this.state.loggedIn?o.a.createElement("button",{onClick:function(){return g.c.dispatch(Object(u.a)("/admin"))},type:"button",className:"  nav-btn center "},"Go To My Account"):o.a.createElement("div",{className:"flex"},o.a.createElement("button",{onClick:function(){return g.c.dispatch(Object(u.a)("/signup"))},type:"button",className:" nav-btn  "},"Get Started"),o.a.createElement("button",{onClick:function(){return g.c.dispatch(Object(u.a)("/login"))},type:"button",className:"nav-btn "},"Login")))),o.a.createElement(d.a,{anchor:"top",open:this.state.toggle,onClose:this.toggleDrawer("right",!1),className:"",style:{width:window.innerWidth}},o.a.createElement("div",{className:"drawer"},o.a.createElement(h.a,{parent:"landing-page"}),this.list("right")))))}}]),t}(s.Component)},228:function(e,t,a){"use strict";var n=a(28),i=a(29),c=a(31),l=a(30),r=a(32),s=a(0),o=a.n(s),u=a(14),m=(a(71),a(45)),p=(a(177),a(20)),d=a(145),g=a(229),h=a.n(g),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={loggedIn:!1},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"tc flex flex-column items-center justify-center"},o.a.createElement("div",{className:"footer-logo"},o.a.createElement(d.a,{parent:"landing-page"})),o.a.createElement("div",{className:"flex items-center justify-center ma2 "},o.a.createElement("a",{href:"https://www.instagram.com/myweblink/"},o.a.createElement(h.a,{style:{background:"#0095f6",color:"white",padding:"3px"}}))),o.a.createElement("p",{className:"mb0 mt0 b"},"support@myweblink.store")),o.a.createElement("div",{className:"footer-links tc"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{onClick:function(){return p.c.dispatch(Object(m.a)("/faqs"))}},"FAQs")),o.a.createElement("li",null,o.a.createElement("a",{onClick:function(){return p.c.dispatch(Object(m.a)("/terms-and-conditions"))}},"Terms & Conditions")),o.a.createElement("li",null,o.a.createElement("a",{onClick:function(){return p.c.dispatch(Object(m.a)("/privacy-policy"))}},"Privacy Policy")),o.a.createElement("li",null,o.a.createElement("a",{onClick:function(){return p.c.dispatch(Object(m.a)("/refund-policy/"))}},"Refund Policy")),o.a.createElement("li",null,o.a.createElement("a",null,"Help & Support")),o.a.createElement("li",null,o.a.createElement("a",{onClick:function(){return p.c.dispatch(Object(m.a)("/contact-us/"))}},"Contact Us"))),o.a.createElement("h3",{style:{color:"#0095f6"},className:"i mb0 pb0"},"Handcrafted In India!")))}}]),t}(s.Component);t.a=Object(u.c)(function(e){return{}},function(e){return{}})(f)},229:function(e,t,a){"use strict";var n=a(133);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),c=(0,n(a(134)).default)(i.default.createElement("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");t.default=c},741:function(e,t,a){"use strict";a.r(t);var n=a(28),i=a(29),c=a(31),l=a(30),r=a(32),s=a(0),o=a.n(s),u=a(14),m=(a(71),a(45)),p=(a(170),a(20)),d=a(3),g=a(72),h=a(24),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={render:!1,mobileView:!1,planType:"month"},a.pricing=[{planName:"Starter",price:null,disc_price:0,features:["Unlimited Links","Integration with Facebook,Instagram,Google Sheets,YouTube,Patreon and many more"]},{planName:"Pro Pack",price:"449",disc_price:" 49",type:"/month",features:["Unlimited Links","Link Priority","Link icons","NewsLetter","Link Analytics","Link Clicks","Change App logo","Assign your own header","Customize Page styling","Integration with Facebook,Instagram,Google Sheets,YouTube,Patreon and many more","Support","Priority Support","Team Access"]},{planName:"Pro Pack",price:"4499",disc_price:" 499",type:"/year",features:["Unlimited Links","Link Priority","Link icons","NewsLetter","Link Analytics","Link Clicks","Change App logo","Assign your own header","Customize Page styling","Integration with Facebook,Instagram,Google Sheets,YouTube,Patreon and many more","Support","Priority Support","Team Access"]}],a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.setState({loading:!0}),this.props.getPlans(),this.props.plans&&(this.plans=this.props.plans),this.props.plans&&(this.plans=this.props.plans)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.plans&&(this.setState({loading:!1}),this.plans=e.plans,this.plans.forEach(function(e){"monthly"===e.period&&(e.disc_price?(t.pricing[1].price=e.price,t.pricing[1].disc_price=e.disc_price):t.pricing[1].disc_price=e.price,t.pricing[1].plan_id=e.plan_id),"yearly"===e.period&&(e.disc_price?(t.pricing[2].price=e.price,t.pricing[2].disc_price=e.disc_price):t.pricing[2].disc_price=e.price,t.pricing[2].plan_id=e.plan_id)}),this.setState({render:!this.state.render}))}},{key:"resize",value:function(){this.setState({mobileView:window.innerWidth<=600})}},{key:"choosePlan",value:function(e){this.props.choosePlan(e),p.c.dispatch(Object(m.a)("/purchase"))}},{key:"renderPricing",value:function(){var e=this;return this.pricing.map(function(t,a){return o.a.createElement("div",{className:1!==a?"single-price":"  single-price pro-pack-bg",key:a},o.a.createElement("div",{className:"deal-top div-2"},o.a.createElement("h3",null,t.planName),t.price?o.a.createElement("strike",null,"Rs.",t.price):null,0!==t.disc_price?o.a.createElement("h4",null,"Rs.",t.disc_price,o.a.createElement("span",null,t.type)):o.a.createElement("h4",null,"Free")),o.a.createElement("div",{className:"deal-bottom"},o.a.createElement("ul",{className:"deal-item"},t.features.map(function(e,t){return o.a.createElement("li",{className:"b",key:t+1e3},"".concat(e))})),o.a.createElement("div",{className:"btn-area"},0===a?o.a.createElement("a",{className:"div-2 purchase-btn",onClick:function(){return p.c.dispatch(Object(m.a)("/signup"))}},"Sign up"):o.a.createElement("a",{className:"div-2 purchase-btn",onClick:function(){return e.choosePlan(t)}},"Get Pack"))))})}},{key:"render",value:function(){var e=this.state.loading;return o.a.createElement("div",{className:"main-div-width pb5 relative",id:"pricing"},o.a.createElement("div",{className:"tc center  home-page-header flex flex-column items-center"},o.a.createElement("h1",{className:"tc"},"Pick you plan or start free")),o.a.createElement("div",{className:"pricing-area"},this.renderPricing()),e?o.a.createElement(g.a,null):null)}}]),t}(s.Component);t.default=Object(u.c)(function(e){return{plans:e.PurchaseReducers.plans}},function(e){return{choosePlan:function(t){return e({type:d.e,payload:t})},getPlans:function(){return e({type:d.s,payload:h.a.Purchase.getPlans()})}}})(f)}}]);
//# sourceMappingURL=16.56f602b6.chunk.js.map