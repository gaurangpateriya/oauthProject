(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(e,t,a){"use strict";var n=a(4),r=a(28),s=a(29),o=a(31),i=a(30),c=a(32),l=a(0),h=a.n(l),d=(a(71),a(14)),u=(a(155),a(45)),p=a(20),f=a(19),m=a(168),g=a.n(m),b=a(3),I=a(24),v=a(199),_=(a(195),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={style:{},user:{},isNormalUser:!0,isLogoEditable:!1,headerInfo:{header_icon:g.a,header_text:f.a}},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.logostyles?this.setState({style:this.props.logostyles}):this.setState({hideText:!1}),"login"!==this.props.parent&&"signup"!==this.props.parent&&"landing-page"!==this.props.parent&&(this.props.hideText&&this.setState({hideText:this.props.hideText}),"public-home-page"===this.props.parent?this.props.publicHeaderInfo&&(this.props.publicHeaderInfo.header_icon&&this.props.publicHeaderInfo.header_text?this.setState({headerInfo:this.props.publicHeaderInfo}):this.setState({headerInfo:{header_text:f.a,header_icon:g.a}})):this.props.headerInfo&&(this.props.headerInfo.header_icon&&this.props.headerInfo.header_text?this.props.headerInfo!==this.state.headerInfo&&this.setState({headerInfo:this.props.headerInfo}):this.setState({headerInfo:{header_text:f.a,header_icon:g.a}})))}},{key:"componentWillReceiveProps",value:function(e){if("login"!==this.props.parent&&"signup"!==this.props.parent&&"landing-page"!==this.props.parent){if(this.props.hideText?this.setState({hideText:this.props.hideText,style:e.logostyles}):this.setState({hideText:!1,style:e.logostyles}),"public-home-page"===this.props.parent){if(e.publicHeaderInfo){var t={};t=e.publicHeaderInfo.header_icon?{header_icon:e.publicHeaderInfo.header_icon}:{header_icon:g.a},t=e.publicHeaderInfo.header_text?Object(n.a)({},t,{header_text:e.publicHeaderInfo.header_text}):Object(n.a)({},t,{header_text:f.a}),this.setState({headerInfo:t})}}else e.headerInfo&&e.headerInfo.header_icon&&e.headerInfo.header_text?e.headerInfo!==this.state.headerInfo&&this.setState({headerInfo:e.headerInfo}):this.setState({headerInfo:{header_text:f.a,header_icon:g.a}});if(e.user&&e.user.user!==this.state.user){var a="normal"===e.user.user.user_type;this.setState({isNormalUser:a,isLogoEditable:"public-home-page"!==this.props.parent,user:e.user.user})}}}},{key:"render",value:function(){var e=this.state.headerInfo,t=e.header_text,a=e.header_icon,n=this.state,r=n.style,s=n.isLogoEditable,o=(n.isNormalUser,n.hideText);return h.a.createElement("div",{className:"logo-img-div  ",style:r},h.a.createElement("img",{src:a,alt:""}),o?null:h.a.createElement("p",null,"".concat(t)),h.a.createElement("div",{className:"logo-change-logo-div"},s?h.a.createElement(v.a,null):h.a.createElement("button",{className:"w-100 h-100",onClick:function(){return p.c.dispatch(Object(u.a)("/"))}})))}}]),t}(l.Component));t.a=Object(d.c)(function(e){return{headerInfo:e.AdminPageReducers.headerInfo,user:e.AuthReducer.user,publicHeaderInfo:e.HomePageReducers.publicHeaderInfo}},function(e){return{getHeaderInfo:function(t){return e({type:b.l,payload:I.a.AdminPage.getHeaderInfo(t)})}}})(_)},155:function(e,t,a){},168:function(e,t,a){e.exports=a.p+"static/media/instalink_logo.85014d77.png"},174:function(e,t,a){},193:function(e,t,a){"use strict";var n=a(28),r=a(29),s=a(31),o=a(30),i=a(32),c=a(0),l=a.n(c),h=a(14),d=(a(71),a(309)),u=a.n(d),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={message:""},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.setState({message:this.props.message})}},{key:"render",value:function(){var e=this.state.message;return l.a.createElement("div",{className:""},l.a.createElement("div",{className:"disabled flex justify-center items-center white flex-column tc"},l.a.createElement(u.a,{style:{color:"white"}}),e?l.a.createElement("p",null,"".concat(e)):null,e?l.a.createElement("button",{className:"color-btn",style:{height:"52px"},type:"button",onClick:function(){return window.location.href="/#pricing"}},"Join Pro"):null))}}]),t}(c.Component);t.a=Object(h.c)(function(e){return{}},function(e){return{}})(p)},195:function(e,t,a){"use strict";t.a=function(e){var t,a,n;return e.match(/^rgb/)?(t=(e=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1],a=e[2],n=e[3]):(t=(e=+("0x"+e.slice(1).replace(e.length<5&&/./g,"$&$&")))>>16,a=e>>8&255,n=255&e),Math.sqrt(t*t*.299+a*a*.587+n*n*.114)>127.5?"#000":"#fff"}},199:function(e,t,a){"use strict";var n=a(47),r=a(172),s=a.n(r),o=a(173),i=a(4),c=a(28),l=a(29),h=a(31),d=a(30),u=a(33),p=a(32),f=a(0),m=a.n(f),g=a(14),b=(a(71),a(1045)),I=a(1050),v=a(1049),_=a(1068),y=a(240),x=a.n(y),O=a(1044),j=a(310),E=a.n(j),k=(a(174),a(17)),C=a(168),H=a.n(C),S=a(3),N=a(72),w=a(193),P=a(19),T=a(24),D=m.a.forwardRef(function(e,t){return m.a.createElement(O.a,Object.assign({direction:"up",ref:t},e))}),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={render:!1,iconSrc:H.a,loading:!1,changeHeaderOpen:!1,error:"",headerText:P.a,isNormalUser:!0,iconBlob:null,headerInfo:{header_icon:H.a,header_text:P.a,style:{}}},a.handleChangeHeaderDialogOpen=a.handleChangeHeaderDialogOpen.bind(Object(u.a)(a)),a.onCustomIconSelect=a.onCustomIconSelect.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){if(this.props.user&&this.props.user.user){var e="normal"===this.props.user.user.user_type;this.setState({user:this.props.user.user,isNormalUser:e})}if(this.props.headerInfo){var t={};t=this.props.headerInfo.header_icon?{header_icon:this.props.headerInfo.header_icon}:{header_icon:H.a},t=this.props.headerInfo.header_text?Object(i.a)({},t,{header_text:this.props.headerInfo.header_text}):Object(i.a)({},t,{header_text:P.a}),this.setState({headerInfo:Object(i.a)({},t,{style:{color:"#fff"}}),changeHeaderOpen:!1})}}},{key:"componentWillReceiveProps",value:function(e){if(e.user&&e.user.user&&e.user.user!==this.state.user){var t="normal"===e.user.user.user_type;this.setState({user:e.user.user,isNormalUser:t})}if(e.headerInfo&&e.headerInfo!==this.state.headerInfo){var a={};a=e.headerInfo.header_icon?{header_icon:e.headerInfo.header_icon}:{header_icon:H.a},a=e.headerInfo.header_text?Object(i.a)({},a,{header_text:e.headerInfo.header_text}):Object(i.a)({},a,{header_text:P.a}),this.setState({headerInfo:Object(i.a)({},a,{style:{color:"#fff"}}),changeHeaderOpen:!1})}}},{key:"handleChangeHeaderDialogOpen",value:function(){this.setState({changeHeaderOpen:!this.state.changeHeaderOpen})}},{key:"selectIcon",value:function(e){var t=this;fetch(e).then(function(e){return e.blob()}).then(function(a){a.name="icon",a.lastModified=new Date,a.lastModifiedDate=new Date,a.webkitRelativePath=e,t.setState({imgBlob:a,headerInfo:Object(i.a)({},t.state.headerInfo,{header_icon:e})})})}},{key:"saveChanges",value:function(e){var t=this,a=this.state.headerInfo,n=(a.header_icon,a.header_text),r=[{key:"icon",file:this.state.imgBlob},{key:"header_text",file:n}];this.setState({loading:!0}),T.a.AdminPage.uploadHeaderInfo(r).then(function(e){if(t.props.user){var a={username:t.props.user.user.username};t.props.getHeaderInfo(a),setTimeout(function(){t.setState({loading:!1,changeHeaderOpen:!1})},1e3)}}).catch(function(e){console.log(e),k.c.error("an error occured in updating the header !!!"),e.response&&console.log(e.response)})}},{key:"onCustomIconSelect",value:function(){var e=Object(o.a)(s.a.mark(function e(t){var a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.target.files&&t.target.files.length>0)){e.next=6;break}return a=t.target.files[0],e.next=4,A(a);case 4:n=e.sent,this.setState({imgBlob:a,headerInfo:Object(i.a)({},this.state.headerInfo,{header_icon:n})});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.headerInfo,r=t.isNormalUser;return m.a.createElement("div",{className:"w-100 h-100"},m.a.createElement("button",{type:"button",className:"side-drawer-link relative",onClick:function(){return e.handleChangeHeaderDialogOpen()}},m.a.createElement(E.a,null),"Change Branding",r?m.a.createElement(w.a,{message:""}):null),m.a.createElement(b.a,{open:this.state.changeHeaderOpen,TransitionComponent:D,keepMounted:!0,onClose:this.handleChangeHeaderDialogOpen,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},m.a.createElement(_.a,{id:"alert-dialog-slide-title"},"Choose Your header."),m.a.createElement(v.a,{style:{flexWrap:"wrap",position:"relative"}},m.a.createElement("div",{className:"logo-img-div center ",style:a.style},m.a.createElement("img",{src:a.header_icon,alt:""}),m.a.createElement("p",{className:"black"},"".concat(a.header_text))),m.a.createElement("div",{className:"flex justify-between bt bb pt2 pb2 "},m.a.createElement("div",Object(n.a)({className:"center"},"className","select-img-icon btn ba self-center "),m.a.createElement("input",{type:"file",id:"avatar",name:"avatar",accept:"image/png, image/jpeg",onChange:this.onCustomIconSelect}),"Choose custom Icon"),m.a.createElement("div",{className:"header-text-input  self-center flex items-center"},m.a.createElement("input",{type:"text",name:"header-name",className:"inp",value:a.header_text,onChange:function(t){return e.setState({headerInfo:Object(i.a)({},a,{header_text:t.target.value})})}}),m.a.createElement(x.a,null)))),m.a.createElement(I.a,null,m.a.createElement("button",{onClick:function(){return e.saveChanges(H.a)},color:"primary",className:"color-btn ma1 ",style:{width:"40%"}},"Save Changes"),m.a.createElement("button",{onClick:function(){return e.selectIcon(H.a)},color:"primary",className:"btn ba "},"Choose Default Icon"),m.a.createElement("button",{onClick:this.handleChangeHeaderDialogOpen,color:"primary",className:"btn ba "},"Cancel")),this.state.loading?m.a.createElement(N.a,null):null,r?m.a.createElement(w.a,{message:"Purchase a Pro pack to unlock this feature"}):null))}}]),t}(f.Component);function A(e){return new Promise(function(t){var a=new FileReader;a.addEventListener("load",function(){return t(a.result)},!1),a.readAsDataURL(e)})}t.a=Object(g.c)(function(e){return{user:e.AuthReducer.user,headerInfo:e.AdminPageReducers.headerInfo}},function(e){return{getHeaderInfo:function(t){return e({type:S.l,payload:T.a.AdminPage.getHeaderInfo(t)})}}})(R)}}]);
//# sourceMappingURL=2.a7824abb.chunk.js.map