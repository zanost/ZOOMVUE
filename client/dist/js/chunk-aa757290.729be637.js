(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa757290"],{"1dde":function(e,t,n){var r=n("d039"),c=n("b622"),o=n("2d00"),s=c("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2532:function(e,t,n){"use strict";var r=n("23e7"),c=n("5a34"),o=n("1d80"),s=n("ab13");r({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~String(o(this)).indexOf(c(e),arguments.length>1?arguments[1]:void 0)}})},"293a":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=n("cf05"),o=n.n(c),s={class:"navbar navbar-expand-lg navbar-expand-md navbar-light"},a={class:"container-fluid"},i=Object(r["g"])("img",{src:o.a,class:"img-fluid",width:"100",alt:"LOGO"},null,-1),l=Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"fas fa-bars"})],-1),u={class:"collapse navbar-collapse",id:"navbarText"},b={class:"navbar-nav me-auto mb-2 mb-lg-0"},d={class:"nav-item"},f=Object(r["f"])(" Home "),g={class:"nav-item"},m=Object(r["f"])(" About "),O={class:"nav-item"},p=Object(r["f"])(" Chat "),v={key:0,class:"nav-item"},j=Object(r["f"])(" Private chat "),h={class:"nav-item"},y=Object(r["f"])(" Conference "),S={class:"mb-2 mb-lg-0"},k={key:0},w=Object(r["f"])(" Login "),x=Object(r["f"])(" Register "),C={key:1},A=Object(r["g"])("button",{class:"btn btn-dark m-1",type:"submit"},"Logout",-1),I={class:"container py-5"},E={key:0,class:"row"},M=Object(r["g"])("div",{class:"col-md-2 col-lg-2"},null,-1),W={class:"col col-md-8 col-lg-8"},L=Object(r["g"])("div",{class:"col-md-2 col-lg-2"},null,-1),R={key:1},$=Object(r["g"])("div",{class:"row"},[Object(r["g"])("div",{class:"col"},[Object(r["g"])("h3",null,"Please enter Room ID to enter chat")])],-1),T={class:"row"},_=Object(r["g"])("div",{class:"col-md-4 col-lg-4"},null,-1),N={class:"col col-md-4 col-lg-4"},P={class:"form-outline my-4"},J=Object(r["g"])("label",{class:"form-label",for:"roomId"},"Room ID",-1),D=Object(r["g"])("button",{type:"submit",class:"btn btn-green btn-block"},"Login",-1),F=Object(r["g"])("div",{class:"col-md-4 col-lg-4"},null,-1),q=Object(r["g"])("div",null,[Object(r["g"])("footer",{class:"align-items-center"},[Object(r["g"])("div",{class:"text-center"}," © 2020 Copyright: HOGS Saloon ")])],-1);function G(e,t,n,c,o,G){var H=Object(r["w"])("router-link"),U=Object(r["w"])("chatWin");return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])("div",null,[Object(r["g"])("nav",s,[Object(r["g"])("div",a,[Object(r["g"])(H,{class:"navbar-brand",id:"logo",to:"/"},{default:Object(r["C"])((function(){return[i]})),_:1}),l,Object(r["g"])("div",u,[Object(r["g"])("ul",b,[Object(r["g"])("li",d,[Object(r["g"])(H,{class:"nav-item btn btn-smoke m-1",to:"/"},{default:Object(r["C"])((function(){return[f]})),_:1})]),Object(r["g"])("li",g,[Object(r["g"])(H,{class:"nav-item btn btn-smoke m-1",to:"/about"},{default:Object(r["C"])((function(){return[m]})),_:1})]),Object(r["g"])("li",O,[Object(r["g"])(H,{class:"nav-item btn btn-smoke m-1",to:"/chat"},{default:Object(r["C"])((function(){return[p]})),_:1})]),!0===G.logedStatus?(Object(r["p"])(),Object(r["d"])("li",v,[Object(r["g"])(H,{class:"nav-item btn btn-smoke m-1",to:"/private"},{default:Object(r["C"])((function(){return[j]})),_:1})])):Object(r["e"])("",!0),Object(r["g"])("li",h,[Object(r["g"])(H,{class:"nav-item btn btn-smoke m-1",to:"/conference"},{default:Object(r["C"])((function(){return[y]})),_:1})])]),Object(r["g"])("div",S,[!1===G.logedStatus?(Object(r["p"])(),Object(r["d"])("div",k,[Object(r["g"])(H,{class:"btn btn-smoke m-1",to:"/login"},{default:Object(r["C"])((function(){return[w]})),_:1}),Object(r["g"])(H,{class:"btn btn-smoke m-1",to:"/register"},{default:Object(r["C"])((function(){return[x]})),_:1})])):(Object(r["p"])(),Object(r["d"])("div",C,[Object(r["g"])("form",{onSubmit:t[1]||(t[1]=Object(r["E"])((function(){return G.logout&&G.logout.apply(G,arguments)}),["prevent"]))},[A],32)]))])])])])]),Object(r["g"])("div",I,[null!==e.wsSocket&&e.query?(Object(r["p"])(),Object(r["d"])("div",E,[M,Object(r["g"])("div",W,[Object(r["g"])(U,{username:G.logedName,"in-conference":!1},null,8,["username"])]),L])):(Object(r["p"])(),Object(r["d"])("div",R,[$,Object(r["g"])("div",T,[_,Object(r["g"])("div",N,[Object(r["g"])("form",{onSubmit:t[5]||(t[5]=Object(r["E"])((function(){return G.roomSelect&&G.roomSelect.apply(G,arguments)}),["prevent"])),class:"form-row"},[Object(r["g"])("div",P,[Object(r["D"])(Object(r["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.room=t}),class:"form-control form-control-lg border-start border-bottom border-end",onFocusin:t[3]||(t[3]=function(e){e.target.closest("input").classList.add("border-primary")}),onFocusout:t[4]||(t[4]=function(e){e.target.closest("input").classList.remove("border-primary")}),type:"text",id:"roomId"},null,544),[[r["A"],e.room]]),J]),D],32)]),F])]))]),q])}n("c740"),n("a434");var H=n("52bc"),U=-1,z={name:"chat",data:function(){return{room:"",users:[],wsSocket:null,query:""}},components:{chatWin:H["a"]},mounted:function(){var e=this;this.getPAram(),this.wsSocket=new WebSocket("wss://hogs-salooon.herokuapp.com/chat/"),this.wsSocket.addEventListener("open",(function(){console.log("Websocket opened from chat!!!")})),this.wsSocket.addEventListener("message",(function(t){var n=JSON.parse(t.data);if(n&&n.username&&n.frame){var r=e.users.findIndex((function(e){return e.username===n.username}));n.frame===U&&-1!==r?e.users.splice(r,1):-1===r?e.users.push(n):console.log(n)}}))},computed:{logedStatus:function(){return!!localStorage.getItem("user")},logedName:function(){if(localStorage.getItem("user"))return localStorage.getItem("user");var e="Random user "+Math.floor(100*Math.random());return e}},methods:{roomSelect:function(){console.log("yes"),this.$router.push({name:"ChatId",params:{id:this.room}}),this.$forceUpdate()},getPAram:function(){this.query=this.$route.params.id},logout:function(){localStorage.removeItem("user"),this.$router.push("/login")}},watch:{$route:"getPAram"}};z.render=G;t["default"]=z},"44e7":function(e,t,n){var r=n("861d"),c=n("c6b6"),o=n("b622"),s=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==c(e))}},"52bc":function(e,t,n){"use strict";var r=n("7a23"),c={class:"card"},o={key:0,class:"active-users"},s={class:"card-body"},a=Object(r["g"])("div",{class:"card-title"},[Object(r["g"])("h3",null,"Active users:")],-1),i={class:"list-group-item"},l={class:"font-weight-bold"},u={class:"card-body p-0"},b=Object(r["g"])("div",{class:"card-title"},[Object(r["g"])("h3",null,"Chat Group"),Object(r["g"])("hr")],-1),d={class:"card-body overflow-auto",id:"message-list"},f={class:"list-group list-group-flush"},g={key:0,class:"float-end font-weight-bold text-break text-right text-end"},m={key:1,class:"float-start text-justify text-break text-left text-start"},O={class:"font-weight-bold"},p={class:"card-footer"},v={class:"form-outline pb-3"},j=Object(r["g"])("label",{class:"form-label",for:"message"},"Message",-1);function h(e,t,n,h,y,S){return Object(r["p"])(),Object(r["d"])("div",c,[n.inConference?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("div",o,[Object(r["g"])("div",s,[a,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.users,(function(e,t){return Object(r["p"])(),Object(r["d"])("ul",{ref:"usersDiv",key:t,class:"list-group list-group-flush"},[Object(r["g"])("li",i,[Object(r["g"])("span",l,Object(r["y"])(e===n.username?e+" (You)":e),1)])],512)})),128))])])),Object(r["g"])("div",u,[b,Object(r["g"])("div",d,[Object(r["g"])("ul",f,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.messages,(function(e,t){return Object(r["p"])(),Object(r["d"])("li",{class:"list-group-item",key:t},[n.username===e.username?(Object(r["p"])(),Object(r["d"])("div",g,Object(r["y"])(e.message),1)):(Object(r["p"])(),Object(r["d"])("div",m,[Object(r["g"])("span",O,Object(r["y"])(e.username)+": ",1),Object(r["f"])(" "+Object(r["y"])(e.message),1)]))])})),128))])])]),Object(r["g"])("div",p,[Object(r["g"])("form",{onSubmit:t[4]||(t[4]=Object(r["E"])((function(){}),["prevent"])),class:"pb-3"},[Object(r["g"])("div",v,[Object(r["g"])("input",{ref:"newMessage",type:"text",class:"form-control border-start border-bottom border-end",onFocusin:t[1]||(t[1]=function(e){e.target.closest("input").classList.add("border-primary")}),onFocusout:t[2]||(t[2]=function(e){e.target.closest("input").classList.remove("border-primary")}),id:"message"},null,544),j]),Object(r["g"])("button",{onClick:t[3]||(t[3]=function(){return S.send&&S.send.apply(S,arguments)}),type:"submit",class:"btn btn-green btn-block"},"Send")],32)])])}n("caad"),n("a434"),n("2532");var y={name:"TextWindow",props:["username","inConference"],data:function(){return{WebSocket:new WebSocket("wss://hogs-salooon.herokuapp.com/chat/"),messages:[],users:[]}},mounted:function(){var e=this;this.WebSocket.onopen=function(t){console.log("Open "),e.users.push(e.username)},this.WebSocket.onmessage=function(t){var n=JSON.parse(t.data);if(console.log(n,"data"),n.disconected){console.log("Izbriše");for(var r=0;r<e.users.length;r+=1)e.users[r]===n.username&&e.users.splice(r,1)}else e.users.includes(n.username)||e.users.push(n.username),e.messages.push(n);console.log(e.users)},this.WebSocket.addEventListener("close",(function(){console.log("WebSocket is closed!!!")}))},methods:{send:function(e){if(""!==this.$refs.newMessage.value){var t=JSON.stringify({username:this.username,message:this.$refs.newMessage.value,group:this.$route.params.id});this.$refs.newMessage.value="",this.WebSocket.send(t)}}},computed:{logedStatus:function(){return!!localStorage.getItem("user")},logedName:function(){if(localStorage.getItem("user"))return localStorage.getItem("user");var e="Random user"+Math.floor(100*Math.random());return e}}};n("fbf5");y.render=h;t["a"]=y},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"65f0":function(e,t,n){var r=n("861d"),c=n("e8b5"),o=n("b622"),s=o("species");e.exports=function(e,t){var n;return c(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},8418:function(e,t,n){"use strict";var r=n("c04e"),c=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?c.f(e,s,o(0,n)):e[s]=n}},a434:function(e,t,n){"use strict";var r=n("23e7"),c=n("23cb"),o=n("a691"),s=n("50c4"),a=n("7b0b"),i=n("65f0"),l=n("8418"),u=n("1dde"),b=n("ae40"),d=u("splice"),f=b("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,m=Math.min,O=9007199254740991,p="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!f},{splice:function(e,t){var n,r,u,b,d,f,v=a(this),j=s(v.length),h=c(e,j),y=arguments.length;if(0===y?n=r=0:1===y?(n=0,r=j-h):(n=y-2,r=m(g(o(t),0),j-h)),j+n-r>O)throw TypeError(p);for(u=i(v,r),b=0;b<r;b++)d=h+b,d in v&&l(u,b,v[d]);if(u.length=r,n<r){for(b=h;b<j-r;b++)d=b+r,f=b+n,d in v?v[f]=v[d]:delete v[f];for(b=j;b>j-r+n;b--)delete v[b-1]}else if(n>r)for(b=j-r;b>h;b--)d=b+r-1,f=b+n-1,d in v?v[f]=v[d]:delete v[f];for(b=0;b<n;b++)v[b+h]=arguments[b+2];return v.length=j-r+n,u}})},a6d3:function(e,t,n){},ab13:function(e,t,n){var r=n("b622"),c=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[c]=!1,"/./"[e](t)}catch(r){}}return!1}},ae40:function(e,t,n){var r=n("83ab"),c=n("d039"),o=n("5135"),s=Object.defineProperty,a={},i=function(e){throw e};e.exports=function(e,t){if(o(a,e))return a[e];t||(t={});var n=[][e],l=!!o(t,"ACCESSORS")&&t.ACCESSORS,u=o(t,0)?t[0]:i,b=o(t,1)?t[1]:void 0;return a[e]=!!n&&!c((function(){if(l&&!r)return!0;var e={length:-1};l?s(e,1,{enumerable:!0,get:i}):e[1]=1,n.call(e,u,b)}))}},b727:function(e,t,n){var r=n("0366"),c=n("44ad"),o=n("7b0b"),s=n("50c4"),a=n("65f0"),i=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,b=6==e,d=7==e,f=5==e||b;return function(g,m,O,p){for(var v,j,h=o(g),y=c(h),S=r(m,O,3),k=s(y.length),w=0,x=p||a,C=t?x(g,k):n||d?x(g,0):void 0;k>w;w++)if((f||w in y)&&(v=y[w],j=S(v,w,h),e))if(t)C[w]=j;else if(j)switch(e){case 3:return!0;case 5:return v;case 6:return w;case 2:i.call(C,v)}else switch(e){case 4:return!1;case 7:i.call(C,v)}return b?-1:l||u?u:C}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},c740:function(e,t,n){"use strict";var r=n("23e7"),c=n("b727").findIndex,o=n("44d2"),s=n("ae40"),a="findIndex",i=!0,l=s(a);a in[]&&Array(1)[a]((function(){i=!1})),r({target:"Array",proto:!0,forced:i||!l},{findIndex:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},caad:function(e,t,n){"use strict";var r=n("23e7"),c=n("4d64").includes,o=n("44d2"),s=n("ae40"),a=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!a},{includes:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},fbf5:function(e,t,n){"use strict";n("a6d3")}}]);
//# sourceMappingURL=chunk-aa757290.729be637.js.map