(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){e.exports=a(382)},219:function(e,t,a){},246:function(e,t,a){},379:function(e,t,a){},382:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),c=(a(219),a(20)),u=a(21),i=a(23),s=a(22),m=a(24),h=a(383),d=a(385),p=a(386),E=a(30),f=a(56),v=a(28),g=a.n(v),y=a(51),O=a.n(y),b=a(53),j=a.n(b),k=a(54),w=a.n(k),C=(a(246),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={userdata:{username:{value:"tenant1",elementType:"input",elementConfig:{type:"input"}},password:{value:"tenant1",elementType:"input",elementConfig:{type:"password"}}}},a.onUserDataChange=function(e,t){var n=Object(E.a)({},a.state.userdata),r=Object(E.a)({},n[e]);r.value=t.target.value,n[e]=r,a.setState({userdata:n})},a.formSubmitHandler=function(e){e.preventDefault(),console.log(a.state)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.userdata)t.push({id:a,config:this.state.userdata[a]});var n=null;n=this.props.loading?r.a.createElement("h1",null,"Loading..."):r.a.createElement("form",{onSubmit:this.formSubmitHandler},r.a.createElement("div",null,r.a.createElement(g.a,{name:"username",label:"username",value:this.state.userdata.username.value,onChange:function(t){return e.onUserDataChange("username",t)},margin:"normal"})),r.a.createElement("div",null,r.a.createElement(g.a,{name:"password",label:"password",value:this.state.userdata.password.value,onChange:function(t){return e.onUserDataChange("password",t)},margin:"normal"})),r.a.createElement(O.a,{color:"primary",variant:"contained",onClick:function(){return e.props.login(e.state.userdata.username.value,e.state.userdata.password.value)}},"sdsd"));var o=null;return this.props.user&&(o=r.a.createElement("div",null,r.a.createElement("textarea",{style:{margin:"25px 0"},readOnly:!0,rows:"20",cols:"64",value:JSON.stringify(this.props.user)}))),r.a.createElement("div",{className:"Auth",style:{width:"50%",margin:"10px"}},n,o,r.a.createElement("div",null,this.props.error))}}]),t}(n.Component)),S=Object(f.b)(function(e){return{loading:e.auth.loading,user:e.auth.user,error:e.auth.error}},function(e){return{login:function(t,a){return e(function(e,t){return function(a){a({type:"AUTHORIZE_STARTED"}),j()({method:"post",url:"/auth/token",data:{username:e,password:t},config:{headers:{"Content-Type":"application/json"}}}).then(function(e){localStorage.authToken=e.data.access_token,a(function(e){return{type:"AUTHORIZE_SUCCESS",authData:e}}(w()(e.data.access_token)))}).catch(function(e){a({type:"AUTHORIZE_FAILED",error:e.response.status})})}}(t,a))}}})(C),T=a(37),A=a.n(T),D=a(38),_=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(A.a,null,"Exercises"),r.a.createElement(A.a,null,"asfdsf",r.a.createElement(D.b,null,[{id:1,title:"11111"},{id:1,title:"11111"},{id:1,title:"11111"},{id:1,title:"11111"}].map(function(t){var a=t.id,n=t.title;return r.a.createElement(D.c,{key:a},r.a.createElement(D.e,{primary:n}),r.a.createElement(D.d,null,r.a.createElement(D.a,{color:"primary",onClick:function(){return e.handleDelete(a)}})))}))),r.a.createElement(g.a,{style:{padding:24},id:"searchInput",placeholder:"Search for Courses",margin:"normal",onChange:this.onSearchInputChange}))}}]),t}(n.Component),I=a(132),U=a.n(I),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={keycloak:null,authenticated:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=U()("/keycloak.json");t.init({onLoad:"login-required"}).then(function(a){e.setState({keycloak:t,authenticated:a})})}},{key:"render",value:function(){return this.state.keycloak?this.state.authenticated?r.a.createElement("div",null,r.a.createElement("p",null,"This is a Keycloak-secured component of your application. You shouldn't be able to see this unless you've authenticated with Keycloak.")):r.a.createElement("div",null,"Unable to authenticate!"):r.a.createElement("div",null,"Initializing Keycloak...")}}]),t}(n.Component),R=function(){var e=j.a.create({method:"get",headers:{"Content-Type":"application/json"}});return e.interceptors.request.use(function(e){var t=localStorage.getItem("authToken");return e.headers.Authorization=t?"Bearer ".concat(t):"",e}),e}(),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={time:null},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;R.get("/api/now").then(function(t){console.log("response",t.data),e.setState({time:t.data}),console.log("end")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return this.state.time?r.a.createElement("h1",null,"time: ",this.state.time):r.a.createElement("h2",null,"no data")}}]),t}(n.Component),L=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Not found!"))},N=(a(379),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(h.a,{to:"/auth"},"Login")),r.a.createElement("li",null,r.a.createElement(h.a,{to:"/get-time"},"Get Time")))),r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(p.a,{path:"/auth",component:S}),r.a.createElement(p.a,{path:"/get-time",component:x}),r.a.createElement(p.a,{path:"/secured",component:H}),r.a.createElement(p.a,{path:"/test",component:_}),r.a.createElement(p.a,{path:"/",exact:!0,render:function(){return r.a.createElement("h1",null,"Hello")}}),r.a.createElement(p.a,{component:L}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z,B=a(384),J=a(29),K=a(134),M={user:(Z=localStorage.authToken)?w()(Z):null,loading:!1,error:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;return"AUTHORIZE_STARTED"===t.type?Object(E.a)({},e,{loading:!0}):"AUTHORIZE_SUCCESS"===t.type?Object(E.a)({},e,{loading:!1,error:null,user:t.authData}):"AUTHORIZE_FAILED"===t.type?Object(E.a)({},e,{loading:!1,error:t.error}):e},z=Object(J.c)({auth:q}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,W=Object(J.e)(z,F(Object(J.a)(K.a))),X=r.a.createElement(f.a,{store:W},r.a.createElement(B.a,null,r.a.createElement(N,null)));l.a.render(X,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[214,2,1]]]);
//# sourceMappingURL=main.c86b2546.chunk.js.map