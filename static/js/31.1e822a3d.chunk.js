(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1059:function(e,t,a){"use strict";a.r(t);var n=a(28),r=a(29),l=a(31),c=a(30),o=a(32),s=a(0),i=a.n(s),u=a(14),p=(a(71),a(45)),m=(a(178),a(746)),d=a.n(m),g=a(24),h=a(72),b=a(145),f=a(20),y=a(3),v=a(19),E=a(745),w=a.n(E),k=(a(199),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={img:null,loading:!1,user:{profile_pic:null,link:[],username:""},error:"",bgStyle:null,togelSignUpMessage:!0,textColor:v.d,products:[],render:!1},a.links=[],a.cartItems=[],a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.props.publicPageUser&&this.setState({user:this.props.publicPageUser})}},{key:"componentWillReceiveProps",value:function(e){e.publicPageUser&&this.setState({user:e.publicPageUser})}},{key:"render",value:function(){var e=this.state,t=e.user,a=(e.profile_pic,this.state.textColor);return i.a.createElement("div",{className:"  "},i.a.createElement("div",{className:"home-page-nav-div"},i.a.createElement(b.a,{logostyles:{display:"flex",flexDirection:"row",color:this.state.textColor},parent:this.props.parent?this.props.parent:"public-home-page",username:t.username}),i.a.createElement("button",{className:"home-page-cart-div relative",type:"button",onClick:function(){return f.c.dispatch(Object(p.a)("/".concat(t.username,"/")))}},i.a.createElement(d.a,{style:{color:"white"}}),i.a.createElement("span",{style:{color:a,fontWeight:"bold"}},"Home"))),i.a.createElement("div",{className:" payment-output "},i.a.createElement("div",{className:"dyna-width"},i.a.createElement("div",{className:" center"},i.a.createElement("article",{className:"payment-output-main-div"},i.a.createElement("div",{className:"logo-div"},i.a.createElement(b.a,{logostyles:{display:"flex",flexDirection:"row",margin:"auto",color:"black"},parent:this.props.parent?this.props.parent:"public-home-page",username:t.username})),i.a.createElement("img",{src:w.a}),i.a.createElement("h2",null," Order Confirmed  "),i.a.createElement("p",null,"We have received your order."),i.a.createElement("p",null,"You will receive a message regarding your order shortly."),i.a.createElement("p",null,"Thank you for shopping with us."),i.a.createElement("button",{className:" relative",type:"button",onClick:function(){return f.c.dispatch(Object(p.a)("/".concat(t.username)))}},i.a.createElement(d.a,null),i.a.createElement("span",{style:{fontWeight:"bold"}},"Go To Home")))))),this.state.loading?i.a.createElement(h.a,null):null)}}]),t}(s.Component));t.default=Object(u.c)(function(e){return{publicPageUser:e.HomePageReducers.publicPageUser}},function(e){return{getUserDetails:function(e){return f.c.dispatch({type:y.B,payload:g.a.Auth.getUserDetails(e)})},getPublicPageHeaderInfo:function(t){return e({type:y.v,payload:g.a.AdminPage.getHeaderInfo(t)})},clearCart:function(){return f.c.dispatch({type:y.f})}}})(k)}}]);
//# sourceMappingURL=31.1e822a3d.chunk.js.map