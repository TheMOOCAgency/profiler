(this.webpackJsonpprofiler=this.webpackJsonpprofiler||[]).push([[0],{250:function(e,t,a){e.exports=a(444)},258:function(e,t,a){},444:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),o=a.n(l),c=a(44),i=a(18),m=a(202),u=(a(258),a(47)),s=a(487),d=a(493),f=a(499),b=a(494),p=a(489),E=a(3),y=a(445),g=a(496),v=function(e){var t=e.children,a=e.value,n=e.index,l=Object(E.a)(e,["children","value","index"]);return r.a.createElement(y.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},l),r.a.createElement(g.a,{p:3},t))},h=a(137),x=a.n(h),j=a(203),w=a(498),k=a(497),O=a(491),S=a(502),C=a(500),F=a(490),T=a(446),q=a(6),N=a(488),I=Object(s.a)((function(e){return{root:{margin:"10px 0 50px 0",backgroundColor:"#353535",width:"300px",color:"white",border:"none","&:hover":{backgroundColor:"#b71b53"}}}})),B=function(e){var t=e.children,a=I();return r.a.createElement(N.a,{variant:"outlined",className:a.root,type:"submit"},t)},K=a(23),_=function(e){var t=e.data;return r.a.createElement(p.a,{container:!0,mt:5,justify:"center"},r.a.createElement(K.d,{width:"100%",height:500},r.a.createElement(K.b,{data:t,layout:"vertical",style:{fontSize:"12px"}},r.a.createElement(K.e,{type:"number"}),r.a.createElement(K.f,{dataKey:"name",reversed:!0,type:"category"}),r.a.createElement(K.a,{dataKey:"testTotal",name:"Test driver",fill:"#353535"}),r.a.createElement(K.a,{dataKey:"selfTotal",name:"Autopositionnement",fill:"#b71b60"}),r.a.createElement(K.a,{dataKey:"othersTotal",name:"Evaluation par les pairs",fill:"#949b9f"}),r.a.createElement(K.c,null))))},z=function(e){var t=e.data;return r.a.createElement(p.a,{container:!0,mt:5,justify:"center"},r.a.createElement(K.d,{width:"100%",height:200},r.a.createElement(K.b,{data:t,layout:"vertical",style:{fontSize:"12px"}},r.a.createElement(K.e,{type:"number"}),r.a.createElement(K.f,{dataKey:"name",reversed:!0,type:"category"}),r.a.createElement(K.a,{dataKey:"mark",stackId:"a",name:"Mon score",fill:"#b71b60"}),r.a.createElement(K.a,{dataKey:"rest",stackId:"a",name:"Autopositionnement",fill:"#949b9f"}))))},A=Object(q.a)({root:{color:"#b71b53","&$checked":{color:"#b71b53"},margin:"0 auto"},checked:{}})((function(e){return r.a.createElement(C.a,Object.assign({color:"default"},e))})),M=Object(s.a)((function(e){return{questionLine:{borderBottom:"1px solid rgba(75,75,75,0.2)",padding:"20px 0"}}})),L=[],X=function(e){var t=e.answers,a=(e.salut,e.input),n=Object(E.a)(e,["answers","salut","input"]);return r.a.createElement(S.a,null,r.a.createElement(F.a,Object.assign({},a,n,{row:!0}),t.map((function(e){return r.a.createElement(O.a,{style:{opacity:"".concat(.5+e.value/15),width:"100px",display:"flex",margin:"0 auto",justifyContent:"space-around"},key:e.value,value:e.value.toString(),control:r.a.createElement(A,null)})}))))},D=Object(k.a)({form:"",validate:function(e,t){var a={};return t.test.questions.map((function(e){return-1===L.indexOf(e.id)&&L.push(e.id),L})),L.forEach((function(t){e[t]||(a[t]="Required")})),a}})((function(e){var t=e.handleSubmit,a=e.pristine,l=e.submitting,o=e.test,i=o.questions,m=o.answers,s=o.button,d=o.wording,f=o.topic,b=o.type,E=o.result,y=o.name,g=o.drivers,v=Object(n.useState)(!1),h=Object(u.a)(v,2),k=h[0],O=h[1],S=Object(n.useState)({}),C=Object(u.a)(S,2),F=C[0],q=C[1],N=Object(n.useState)([]),I=Object(u.a)(N,2),K=I[0],A=I[1],L=Object(c.c)((function(e){return{results:e.form[y].values}})).results,D=M();Object(n.useEffect)((function(){"likert"===b?q({questions:5,blank:1,answers:6}):"true-or-false"===b&&q({questions:7,blank:1,answers:4})}),[b]);var J=function(){var e={},t=[];"true-or-false"===b?(e={name:o.topic,mark:0,rest:100},L&&i.map((function(t){return console.log(t[L[t.id]]),e.mark+=10*t[L[t.id]],e.rest-=10*t[L[t.id]],e})),console.log(e),t.push(e),A(t)):"likert"===b&&(L&&i.map((function(t){return e[t.driver]?e[t.driver].testTotal+=Number(L[t.id]):e[t.driver]={name:g[t.driver],testTotal:Number(L[t.id]),selfTotal:15,othersTotal:18}})),t=Object.values(e),A(t))},P=function(){var e=Object(j.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:return O(!0),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(n.Fragment,null,r.a.createElement(n.Fragment,null,f||d&&r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,f),r.a.createElement(p.a,{item:!0,md:7,sm:12,style:{textAlign:"justify",marginBottom:"30px",fontStyle:"italic",fontSize:"14px"}},d)))),r.a.createElement("form",{onSubmit:t(P)},r.a.createElement(T.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(p.a,{container:!0,direction:"row",justify:"flex-end"},r.a.createElement(p.a,{item:!0,md:F.questions,sm:!1}),r.a.createElement(p.a,{item:!0,md:F.blank,sm:!1}),r.a.createElement(p.a,{item:!0,md:F.answers,sm:12,style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(p.a,{container:!0,direction:"row"},m&&m.map((function(e){return r.a.createElement("div",{key:e.value,style:{width:"100px",fontSize:"14px",textAlign:"center"}},e.name)})))))),r.a.createElement(n.Fragment,null,i&&i.map((function(e,t){return r.a.createElement(p.a,{key:e.id,container:!0,direction:"row",alignItems:"center",justify:"space-between",className:D.questionLine},r.a.createElement(p.a,{item:!0,md:F.questions,sm:12,style:{fontSize:"14px"}},t+1+". "+e.text),r.a.createElement(p.a,{item:!0,md:F.blank,sm:!1}),r.a.createElement(p.a,{item:!0,md:F.answers,sm:12},r.a.createElement(w.a,{name:e.id,answers:m,component:X})))}))),r.a.createElement(n.Fragment,null,r.a.createElement(B,{disabled:a||l},r.a.createElement(n.Fragment,null,s))))),r.a.createElement(n.Fragment,null,"histogram"===E?r.a.createElement(n.Fragment,null,k&&r.a.createElement(_,{test:o,data:K})):"stackedBarChart"===E?r.a.createElement(n.Fragment,null,k&&r.a.createElement(z,{test:o,data:K})):void 0))})),J=a(495),P=Object(q.a)({root:{marginBottom:"10px",width:"100%","& label.Mui-focused":{color:"#b71b60"},"& .MuiInput-underline:after":{borderBottomColor:"#b71b60"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#b71b60"},"&:hover fieldset":{borderColor:"#353535"},"&.Mui-focused fieldset":{borderColor:"#b71b60"}}}})(J.a),R=Object(k.a)({form:"",validate:function(e,t){return{}}})((function(e){var t=e.test,a=e.handleSubmit,l=e.pristine,o=e.submitting,c=t.questions,i=t.button,m=function(e){return r.a.createElement(P,Object.assign({id:"outlined-multiline-static",multiline:!0,rows:"6",variant:"outlined",autoComplete:"off"},e.input))};return r.a.createElement("form",{onSubmit:a((function(e){var a={name:t.name,values:e};console.log(a)}))},r.a.createElement(T.a,null,r.a.createElement(n.Fragment,null,c.map((function(e,t){return r.a.createElement(p.a,{container:!0,key:e.id},r.a.createElement("div",{style:{marginBottom:"10px"}},t+1+". "+e.text),r.a.createElement(w.a,{name:e.id,component:m}),r.a.createElement(B,{disabled:l||o},r.a.createElement(n.Fragment,null,i)))})))))})),U=a(492),V=function(e){var t=e.skills,a=e.skill,l=t[e.parentIndex],o=l.topic,c=l.wording;return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,o),r.a.createElement(p.a,{item:!0,md:7,sm:12,style:{textAlign:"justify",marginBottom:"30px",fontStyle:"italic",fontSize:"14px"}},c),r.a.createElement(n.Fragment,null,a.tests.map((function(e,t){return"likert"===e.type?r.a.createElement(U.a,{key:t},(function(){return r.a.createElement(D,{test:e,form:e.name})})):"true-or-false"===e.type?r.a.createElement(U.a,{key:t},(function(){return r.a.createElement(D,{test:e,form:e.name})})):"free-field"===e.type?r.a.createElement(U.a,{key:t},(function(){return r.a.createElement(R,{test:e,form:e.name})})):null}))))},$=Object(s.a)((function(e){return{root:{width:"100%",backgroundColor:"white"},tab:{"&:last-child":{color:"#b71b53"}},paper:{margin:"0",width:"100%",overflowX:"auto",padding:"20px 0"}}})),G=function(){var e=window.props.fr.skills,t=$(),a=Object(n.useState)(0),l=Object(u.a)(a,2),o=l[0],c=l[1],i=function(e,t){c(t)};return r.a.createElement(p.a,{container:!0,className:t.root,justify:"center"},r.a.createElement(p.a,{item:!0},r.a.createElement(d.a,{position:"fixed",color:"default"},r.a.createElement(f.a,{value:o,onChange:i,variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",TabIndicatorProps:{style:{backgroundColor:"#b71b53"}}},e.map((function(e,a){return r.a.createElement(b.a,Object.assign({key:a,label:e.name},function(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}(a),{className:t.tab}))}))))),r.a.createElement(p.a,{item:!0,lg:8,md:12,sm:12,xs:12},e.map((function(a,n){return r.a.createElement(v,{value:o,index:n,key:n},r.a.createElement(p.a,{style:{paddingTop:"40px"}},r.a.createElement(p.a,{className:t.paper},r.a.createElement(V,{skill:a,skills:e,parentIndex:n}))))}))))},H=function(){return r.a.createElement("div",{className:"App",style:{display:"flex",justifyContent:"center",width:"100vw"}},r.a.createElement(G,null))},Q=a(501),W=Object(i.c)({form:Q.a}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,Z=Object(i.e)(W,Y(Object(i.a)(m.a)));o.a.render(r.a.createElement(c.a,{store:Z},r.a.createElement(H,null)),document.querySelector("#root"))}},[[250,1,2]]]);
//# sourceMappingURL=main.b18ecb8a.chunk.js.map