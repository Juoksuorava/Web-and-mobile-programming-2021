(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i),o=n(13),d=n.n(o),c=n(14),a=n(15),s=n(17),l=n(16),m=n(0),u=function(e){return Object(m.jsxs)("li",{children:[e.topic," at ",new Date(e.time).toLocaleString()," "," ",Object(m.jsx)("button",{onClick:function(){return e.deleteReminder(e.id)},children:"Delete"})]})},h=function(e){return Object(m.jsx)("ul",{children:e.reminders.map((function(t){return Object(m.jsx)(u,{id:t.id,deleteReminder:e.deleteReminder,topic:t.topic,time:t.time},t.id)}))})},j=function(e){return Object(m.jsxs)("form",{onSubmit:e.addReminder,children:[Object(m.jsxs)("div",{children:["Topic: ",Object(m.jsx)("input",{value:e.state.newReminder,onChange:function(t){return e.handleReminderChange(t)}})]}),Object(m.jsxs)("div",{children:["Time: ",Object(m.jsx)("input",{value:e.state.newTime,onChange:function(t){return e.handleTimeChange(t)}})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"Add"})})]})},f=n(3),b=n.n(f),g=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(c.a)(this,n),console.log("constructed"),(i=t.call(this,e)).addReminder=function(e){e.preventDefault();var t=!0,n={topic:i.state.newReminder,time:i.state.newTime};return i.state.reminders.some((function(e){return e.topic===n.topic}))?alert("Failed to create reminder: reminder already exists"):b.a.post("http://localhost:3001/api/reminders",n).then((function(e){t&&(console.log(e),i.setState({reminders:i.state.reminders.concat(e.data),newReminder:"",newTime:""}))})),function(){return t=!1}},i.deleteReminder=function(e){window.confirm("Do you want to delete this reminder?")&&b.a.delete("http://localhost:3001/api/reminders/".concat(e)).then((function(t){console.log(t),console.log(t.data),i.setState({reminders:i.state.reminders.filter((function(t){return t.id!==e}))})})).catch((function(e){console.log("fail")}))},i.handleReminderChange=function(e){console.log(e.target.value),i.setState({newReminder:e.target.value})},i.handleTimeChange=function(e){console.log(e.target.value),i.setState({newTime:e.target.value})},i.state={reminders:[],newReminder:"",newTime:""},i}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("mounted"),b.a.get("http://localhost:3001/api/reminders").then((function(t){console.log(t),e.setState({reminders:t.data}),console.log("promise resolved")}))}},{key:"render",value:function(){return console.log("render"),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Add a reminder"}),Object(m.jsx)(j,{state:this.state,addReminder:this.addReminder,handleReminderChange:this.handleReminderChange,handleTimeChange:this.handleTimeChange}),Object(m.jsx)("h2",{children:"Reminders:"}),Object(m.jsx)(h,{reminders:this.state.reminders,deleteReminder:this.deleteReminder})]})}}]),n}(r.a.Component);d.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.3159398a.chunk.js.map