(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{40:function(t,e,a){},41:function(t,e,a){},65:function(t,e,a){"use strict";a.r(e);var c=a(2),s=a(0),r=a.n(s),n=a(17),i=a.n(n),l=(a(40),a(41),a(18));var j=function(){return Object(c.jsx)("header",{children:Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)("h1",{children:"SONGS LYRICS"})})})})},o=a(19),d=a(12),h=a(13),b=a(15),O=a(14);var p=function(t){return console.log(t.data2),Object(c.jsx)(r.a.Fragment,{children:t.data.map((function(t){return Object(c.jsxs)("div",{className:"tracks",children:[Object(c.jsxs)("div",{className:"section",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"fas fa-music"})})," ",Object(c.jsxs)("h2",{children:[" : ",t.track.track_name]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{className:"fas fa-compact-disc"})})," ",Object(c.jsxs)("h3",{children:[" : ",t.track.album_name]})]})]}),Object(c.jsx)(l.b,{to:"lyrics/tracks/".concat(t.track.track_id),children:Object(c.jsx)("button",{className:"footer",children:"view lyrics"})})]},t.track.track_id)}))})},u=function(t){Object(b.a)(a,t);var e=Object(O.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return this.props.data2?Object(c.jsxs)("div",{className:"error-container",children:[Object(c.jsx)("h1",{className:"error",children:"couldn,t find"}),Object(c.jsxs)("section",{className:"tracks-list",children:[Object(c.jsx)("h1",{children:"List of top 10 songs lyrics"}),Object(c.jsx)("div",{className:"track-section",children:Object(c.jsx)(p,{data:this.props.data,data2:this.props.data2})})]})]}):Object(c.jsxs)("section",{className:"tracks-list",children:[Object(c.jsx)("h1",{children:"List of top 10 songs lyrics"}),Object(c.jsx)("div",{className:"track-section",children:Object(c.jsx)(p,{data:this.props.data,data2:this.props.data2})})]})}}]),a}(s.Component),m=a(21),x=a(16),y=a.n(x),k=a(79),f=function(t){Object(b.a)(a,t);var e=Object(O.a)(a);function a(){var t;Object(d.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={track_name:""},t.handler=function(e){t.setState(Object(m.a)({},e.target.name,e.target.value))},t.searchresult=function(e,a){a.preventDefault(),y.a.get("/track.search?q_track=".concat(t.state.track_name,"&page_size=20&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=").concat(t.props.data.apikey)).then((function(a){0!==a.data.message.body.track_list.length?e({type:"SEARCH",payload:a.data.message.body.track_list,notfind:!1}):e({type:"SEARCH",payload:[],notfind:!0}),t.setState({track_name:""})})).catch((function(t){return console.log(t)}))},t}return Object(h.a)(a,[{key:"render",value:function(){var t=this.props.data.dispatch;return Object(c.jsx)("div",{className:"form-handler",children:Object(c.jsxs)("form",{onSubmit:this.searchresult.bind(this,t),children:[Object(c.jsx)("input",{className:"input-box",type:"search",name:"track_name",value:this.state.track_name,onChange:this.handler}),Object(c.jsx)(k.a,{type:"submit",className:"search-button",variant:"contained",color:"primary",children:"Search"})]})})}}]),a}(s.Component),g=function(t){Object(b.a)(a,t);var e=Object(O.a)(a);function a(){var t;Object(d.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={list:[],apikey:"108c892a6c7c7a7aa576edf1ee2bd826",popup:!1},t}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;y.a.get("chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=".concat(this.state.apikey)).then((function(e){t.setState(Object(o.a)(Object(o.a)({},t.state),{},{list:e.data.message.body.track_list,error:!1})),console.log(t.state.list)})).catch((function(e){t.setState(Object(o.a)(Object(o.a)({},t.state),{},{error:!0}))}))}},{key:"render",value:function(){return 0===this.state.list.length?Object(c.jsx)("h3",{className:"loader",children:"Loading... "}):Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)(f,{data:this.state}),Object(c.jsx)(u,{data:this.state.list,data2:this.state.error})]})}}]),a}(s.Component);var v=function(t){return Object(c.jsxs)("div",{className:"lyrics-section",children:[Object(c.jsx)("h1",{className:"lyric",children:"Lyrics"}),Object(c.jsxs)("div",{className:"lyric-container",children:[Object(c.jsx)("div",{className:"details",children:Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Track"}),Object(c.jsx)("td",{children:t.track.track_name})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Album Name"}),Object(c.jsx)("td",{children:t.track.album_name})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Artist"}),Object(c.jsx)("td",{children:t.track.artist_name})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"release"}),Object(c.jsx)("td",{children:t.track.updated_time})]})]})}),Object(c.jsx)("div",{className:"lyrics",children:t.lyric.lyrics_body})]}),Object(c.jsxs)("h3",{children:["@copyright : ",t.lyric.lyrics_copyright]})]})},_=function(t){Object(b.a)(a,t);var e=Object(O.a)(a);function a(){var t;Object(d.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={lyrics:[],track:[],apikey:"108c892a6c7c7a7aa576edf1ee2bd826"},t}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;y.a.get("/track.lyrics.get?track_id=".concat(this.props.match.params.id,"&apikey=").concat(this.state.apikey)).then((function(e){y.a.get("/track.get?track_id=".concat(t.props.match.params.id,"&apikey=").concat(t.state.apikey)).then((function(a){t.setState({lyrics:e.data.message.body.lyrics,track:a.data.message.body.track})}))})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this.state,e=t.lyrics,a=t.track;return 0===e.length&&0===a.length?Object(c.jsx)("h3",{className:"loader",children:"Loading... "}):Object(c.jsx)(r.a.Fragment,{children:Object(c.jsx)(v,{lyric:e,track:a})})}}]),a}(s.Component),N=a(3);var S=function(){return Object(c.jsx)(l.a,{children:Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)(j,{}),Object(c.jsxs)(N.c,{children:[Object(c.jsx)(N.a,{exact:!0,path:"/",component:g}),Object(c.jsx)(N.a,{exact:!0,path:"/lyrics/tracks/:id",component:_})]})]})})},C=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(e){var a=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,n=e.getTTFB;a(t),c(t),s(t),r(t),n(t)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),C()}},[[65,1,2]]]);
//# sourceMappingURL=main.ba04d0c3.chunk.js.map