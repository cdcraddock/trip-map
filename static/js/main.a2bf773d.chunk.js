(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),r=n(19),o=n.n(r),s=(n(100),n(21)),l=n(22),c=n(24),d=n(23),p=n(25),u=n(36),h=n(92),m=n.n(h),f=n(93),g=n.n(f),w=n(81),v=n.n(w),y=n(37),b=n(83),k=n.n(b),O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.latitude,n=e.longitude,a=e.offsetLeft,r=e.offsetTop,o=e.pinHeight,s=e.name,l=e.markdownPath,c=e.onClick;return i.a.createElement(y.a,{latitude:t,longitude:n,offsetLeft:a,offsetTop:r},i.a.createElement("div",{style:{fontSize:"12px"}},s),i.a.createElement("img",{src:k.a,style:{height:o},alt:"Map Pin",onClick:function(){return c(l,s)}}))}}]),t}(a.Component),j=n(30),E=n.n(j),x=n(84),C=n.n(x),S=[{name:"Day 1",latitude:53.428594,longitude:-9.319193,markdownPath:E.a},{name:"Day 2",latitude:53.455881,longitude:-9.540736,markdownPath:C.a},{name:"Day 3",latitude:53.520828,longitude:-9.74239,markdownPath:E.a},{name:"Day 4",latitude:53.595843,longitude:-9.694259,markdownPath:E.a},{name:"Day 5",latitude:53.696062,longitude:-9.616408,markdownPath:E.a},{name:"Day 6",latitude:53.801132,longitude:-9.522257,markdownPath:E.a}],D={position:"absolute",top:36,left:0,padding:"10px"},P=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={viewport:{height:"100%",width:"100%",latitude:53.428594,longitude:-9.319193,zoom:8}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.viewport.zoom,n=(2*t).toString()+"px",a=-parseInt(n)/2,r=-parseInt(n)-12,o=i.a.createElement("div",null);return t>6&&(o=S.map(function(t,o){return i.a.createElement(O,{key:o,latitude:t.latitude,longitude:t.longitude,offsetLeft:a,offsetTop:r,pinHeight:n,name:t.name,markdownPath:t.markdownPath,onClick:e.props.onClick})})),i.a.createElement("div",{style:{height:"100%",width:"100%",textAlign:"left"}},i.a.createElement(y.c,Object.assign({height:"100%",width:"100%"},this.state.viewport,{onViewportChange:function(t){return e.setState({viewport:t})},mapOptions:{style:"mapbox://styles/mapbox/outdoors-v10"},mapboxApiAccessToken:"pk.eyJ1Ijoic2ZvcnRzb24iLCJhIjoiY2pvZzJwMnp6MGFyczN2cGphbjBrNGV3NCJ9.X6EVSy5ipogfXTf9DxxjmQ",responsive:!0}),o,i.a.createElement("div",{className:"nav",style:D},i.a.createElement(y.b,{onViewportChange:function(t){return e.setState({viewport:t})}}))))}}]),t}(a.Component),T=n(94),I=n(85),L=n.n(I),z=n(91),B=n.n(z),N=n(87),J=n.n(N),M=n(89),H=n.n(M),A=n(88),G=n.n(A),V=n(90),R=n.n(V),_=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.theme;return i.a.createElement(L.a,{className:t.drawer,variant:"persistent",anchor:"right",open:this.props.open,elevation:1e3,classes:{paper:t.drawerPaper}},i.a.createElement("div",{className:t.drawerHeader},i.a.createElement(J.a,{onClick:this.props.handleDrawerClose},"ltr"===n.direction?i.a.createElement(G.a,null):i.a.createElement(H.a,null)),i.a.createElement(R.a,{style:{textAlign:"center",paddingTop:"8px"},variant:"h4",gutterBottom:!0},this.props.title)),i.a.createElement(B.a,null),i.a.createElement("div",{style:{paddingLeft:"8px",paddingRight:"4px"}},this.props.dayInfo?i.a.createElement("div",{dangerouslySetInnerHTML:this.props.dayInfo}):i.a.createElement("div",null)))}}]),t}(a.Component),W=Object(u.withStyles)(function(e){return{root:{display:"flex",height:"100%"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:"33%",flexShrink:0},drawerPaper:{width:"33%"},drawerHeader:Object(T.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1,padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:"33%"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},{withTheme:!0})(_),X=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this))).handleDrawerOpen=function(e,t){n.setState({open:!0,drawerTitle:t}),n.fetchMarkdown(e)},n.handleDrawerClose=function(){n.setState({open:!1})},n.fetchMarkdown=function(e){fetch(e).then(function(e){return e.text()}).then(function(e){var t=v()(e,{sanitize:!0});n.setState({markdown:{__html:t}})})},n.state={open:!1,markdown:null,drawerTitle:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.root},i.a.createElement(m.a,null),i.a.createElement(g.a,{container:!0},i.a.createElement(W,{handleDrawerClose:this.handleDrawerClose,open:this.state.open,dayInfo:this.state.markdown,title:this.state.drawerTitle}),i.a.createElement(P,{onClick:this.handleDrawerOpen})))}}]),t}(a.Component),Z=Object(u.withStyles)(function(e){return{root:{display:"flex",height:"100%"}}},{withTheme:!0})(X);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(223);o.a.render(i.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},30:function(e,t,n){e.exports=n.p+"static/media/day1.0a0a2dd0.md"},83:function(e,t,n){e.exports=n.p+"static/media/map_pin.a3df306f.png"},84:function(e,t,n){e.exports=n.p+"static/media/day2.55ffb335.md"},95:function(e,t,n){e.exports=n(225)}},[[95,2,1]]]);
//# sourceMappingURL=main.a2bf773d.chunk.js.map