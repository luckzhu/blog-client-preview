webpackJsonp([3],{UZMF:function(e,t){},xJsL:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Dd8w"),r=s.n(n),a=s("NYxO"),o={data:function(){return{username:"",password:""}},computed:r()({},Object(a.c)(["user","isLogin"])),methods:r()({},Object(a.b)(["login"]),{onLogin:function(){var e=this;this.login({username:this.username,password:this.password}).then(function(t){e.$router.push({path:e.$route.query.redirect||"/"})})}})},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{attrs:{id:"login"}},[s("div",{staticClass:"username"},[s("h4",[e._v("用户名")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),s("div",{staticClass:"passworde"},[s("h4",[e._v("密码")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),s("el-button",{staticClass:"loginButton",attrs:{type:"primary"},on:{click:e.onLogin}},[e._v("立即登陆")]),e._v(" "),s("div",{staticClass:"notice"},[e._v("\n      没有账号？\n      "),s("router-link",{attrs:{to:"/register"}},[e._v("注册新用户")])],1)],1)])},staticRenderFns:[]};var u=s("VU/8")(o,i,!1,function(e){s("UZMF")},"data-v-7d8bed99",null);t.default=u.exports}});
//# sourceMappingURL=3.7291561b2faef107405d.js.map