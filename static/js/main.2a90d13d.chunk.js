(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{113:function(e,t,a){e.exports=a(216)},118:function(e,t,a){},124:function(e,t,a){},132:function(e,t){},134:function(e,t){},167:function(e,t){},168:function(e,t){},174:function(e,t){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(45),c=a.n(s),i=(a(118),a(24)),o=a(21),l=a(27),u=a(108),m=a(109),p=a(29),d=a(4),h=a.n(d),f=function(){var e,t,a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=JSON.parse(localStorage.getItem("token")),n.next=3,h.a.awrap(fetch("https://opentdb.com/api.php?amount=5&token=".concat(e)));case 3:return t=n.sent,n.next=6,h.a.awrap(t.json());case 6:return a=n.sent,n.abrupt("return",a.results);case 8:case"end":return n.stop()}}))},b=function(e){return{type:"QUESTIONS_INFO",payload:{response:e}}},g=function(e){return{type:"SCORE_INFO",scoreNum:e}},y={name:"",email:""};var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_INFO":return Object(p.a)({},e,{name:t.payload.user,email:t.payload.email});default:return e}},O={questions:[],isFetching:!0};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUESTIONS_INFO":return Object(p.a)({},e,{},t.payload,{isFetching:!1});case"SET_TIMER":return Object(p.a)({},e,{timer:t.payload.timer});default:return e}},k={score:0};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SCORE_INFO":return Object(p.a)({},e,{score:t.scoreNum});default:return e}},N=Object(l.combineReducers)({user:v,questions:E,score:j}),w=Object(l.createStore)(N,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(m.a)));window.Cypress&&(window.store=w);var S=w,C=a(11),I=a(47),x=a(5),q=a(6),J=a(8),A=a(7),R=a(19),B=a(9),T=a(48),F=a.n(T),U=function(e){return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",localStorage.setItem("token",JSON.stringify(e)));case 1:case"end":return t.stop()}}))},_=function(){var e,t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(fetch("https://opentdb.com/api_token.php?command=request"));case 2:return e=a.sent,a.next=5,h.a.awrap(e.json());case 5:t=a.sent,U(t.token);case 7:case"end":return a.stop()}}))},Q=(a(124),function(e){function t(){var e;return Object(x.a)(this,t),(e=Object(J.a)(this,Object(A.a)(t).call(this))).state={name:"",email:""},e.handleChange=e.handleChange.bind(Object(R.a)(e)),e.handleClick=e.handleClick.bind(Object(R.a)(e)),e}return Object(B.a)(t,e),Object(q.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(I.a)({},n,a))}},{key:"handleClick",value:function(){var e,t,a,n,r,s,c,i,o;return h.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=this.state,t=e.name,a=e.email,n=this.props,r=n.userInfo,s=n.history,c=n.scoreActionInfo,l.next=4,h.a.awrap(_());case 4:return l.next=6,h.a.awrap(r(t,a));case 6:return l.next=8,h.a.awrap(s.push("/game"));case 8:i={player:{name:t,assertions:0,score:0,gravatarEmail:a}},o={ranking:[]},localStorage.state=JSON.stringify(i),localStorage.getItem("ranking")||(localStorage.ranking=JSON.stringify(o)),c(0);case 13:case"end":return l.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email;return r.a.createElement("div",null,r.a.createElement("form",{className:"form-login"},r.a.createElement("img",{src:F.a,alt:"Logo do App Trivia",className:"trivia-logo"}),r.a.createElement("input",{className:"input-login",type:"text","data-testid":"input-player-name",onChange:this.handleChange,name:"name",placeholder:"Nome"}),r.a.createElement("input",{className:"input-login",type:"email","data-testid":"input-gravatar-email",onChange:this.handleChange,name:"email",placeholder:"E-mail"}),r.a.createElement("button",{type:"button",className:t.length<=0||a.length<=0?"btn-login-game":"btn-login",onClick:this.handleClick,"data-testid":"btn-play",disabled:t.length<=0||a.length<=0},"Jogar"),r.a.createElement(i.b,{to:"/settings"},r.a.createElement("button",{className:"btn-login settings","data-testid":"btn-settings",type:"button"},"Configura\xe7\xf5es"))))}}]),t}(n.Component)),D=Object(o.b)(null,(function(e){return{userInfo:function(t,a){return e(function(e,t){return{type:"USER_INFO",payload:{user:e,email:t}}}(t,a))},scoreActionInfo:function(t){return e(g(t))}}}))(Q),M=a(111),L=a.n(M),P=function(e){var t=L()(e).toString();return"https://www.gravatar.com/avatar/".concat(t)},W=function(e){function t(){return Object(x.a)(this,t),Object(J.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.score,n=e.email,s=P(n);return r.a.createElement("div",{className:"header"},r.a.createElement("img",{className:"trivia-logo-header",src:F.a,alt:"Logo do App Trivia"}),r.a.createElement("span",{className:"points"},"Pontos:",r.a.createElement("span",{"data-testid":"header-score"},a)),r.a.createElement("div",{className:"userInfo"},r.a.createElement("div",null,r.a.createElement("img",{src:s,alt:"user","data-testid":"header-profile-picture",className:"profile-picture"})),r.a.createElement("div",{className:"name-player"},"Jogador:",r.a.createElement("span",{"data-testid":"header-player-name",className:"name-player"},t))))}}]),t}(n.Component),H=Object(o.b)((function(e){return{name:e.user.name,email:e.user.email,score:e.score.score}}),null)(W),V=a(112),$=(a(211),function(e){function t(){return Object(x.a)(this,t),Object(J.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this.props,t=e.order,a=e.timer,n=e.handleClickAnswer,s=e.click,c=e.questionResults,i=e.atualQuestion,o=e.handleNextBtn,l=e.scoreUpdate;return r.a.createElement("div",null,r.a.createElement("section",{className:"section-answers"},r.a.createElement("button",{type:"button","data-testid":"correct-answer",style:{order:t},className:0===a||s?"rightanswer":"answer-btn",onClick:l,disabled:0===a||s},c.response[i].correct_answer),c.response[i].incorrect_answers.map((function(e,t){return r.a.createElement("button",{key:t,type:"button",style:{order:t},"data-testid":"wrong-answer-".concat(t),className:0===a||s?"wronganswer":"answer-btn",onClick:n,disabled:0===a||s},e)}))),r.a.createElement("button",{type:"button",onClick:o,"data-testid":"btn-next",className:"continue-btn",style:{visibility:s||0===a?"visible":"hidden"}},"Continue"))}}]),t}(r.a.Component)),z=function(e){function t(){var e;return Object(x.a)(this,t),(e=Object(J.a)(this,Object(A.a)(t).call(this))).state={order:0,atualQuestion:0,click:!1,timer:30,score:0},e.handleNextBtn=e.handleNextBtn.bind(Object(R.a)(e)),e.shuffleButtons=e.shuffleButtons.bind(Object(R.a)(e)),e.handleClickAnswer=e.handleClickAnswer.bind(Object(R.a)(e)),e.scoreUpdate=e.scoreUpdate.bind(Object(R.a)(e)),e.setDifficulty=e.setDifficulty.bind(Object(R.a)(e)),e}return Object(B.a)(t,e),Object(q.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.shuffleButtons(),this.timeOut=setInterval((function(){e.setState((function(e){return{timer:e.timer-1}}))}),1e3)}},{key:"componentDidUpdate",value:function(){var e=this.state.timer,t=this.props.setTimerAction;0===e&&(clearInterval(this.timeOut),t(e))}},{key:"setDifficulty",value:function(){var e=0,t=this.props.questionResults,a=this.state.atualQuestion,n=t.response[a].difficulty;return"easy"===n?e=1:"medium"===n?e=2:"hard"===n&&(e=3),e}},{key:"shuffleButtons",value:function(){var e=Math.floor(4*Math.random());this.setState({order:e})}},{key:"handleHanking",value:function(){var e=JSON.parse(localStorage.getItem("ranking")),t=JSON.parse(localStorage.getItem("state")).player.name,a=JSON.parse(localStorage.getItem("state")).player.score,n=JSON.parse(localStorage.getItem("state")).player.gravatarEmail,r={name:t,score:a,picture:P(n)};e.ranking=[].concat(Object(V.a)(e.ranking),[r]),localStorage.ranking=JSON.stringify(e)}},{key:"historyFeedback",value:function(){}},{key:"handleNextBtn",value:function(){var e=this,t=this.state.atualQuestion,a=this.props.history;4===t&&(this.handleHanking(),a.push("/feedback")),this.shuffleButtons(),this.setState({atualQuestion:t+1,click:!1,timer:30});this.timeOut=setInterval((function(){e.setState((function(e){return{timer:e.timer-1}}))}),1e3)}},{key:"scoreUpdate",value:function(){var e,t,a,n,r,s,c;return h.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:e=this.state,t=e.score,a=e.timer,10,n=this.props.scoreActionInfo,this.handleClickAnswer(),r=this.setDifficulty(),n(t+10+(s=r*a)),this.setState({score:t+10+s}),(c=JSON.parse(localStorage.getItem("state"))).player.score=t+10+s,c.player.assertions+=1,localStorage.state=JSON.stringify(c);case 12:case"end":return i.stop()}}),null,this)}},{key:"handleClickAnswer",value:function(){var e=this.props.setTimerAction,t=this.state.timer;this.setState({click:!0}),clearInterval(this.timeOut),e(t)}},{key:"render",value:function(){var e=this.props,t=e.questionResults,a=e.isFetching,n=this.state,s=n.atualQuestion,c=n.order,i=n.click,o=n.timer;return a?r.a.createElement("p",null,"Loading"):r.a.createElement("div",null,r.a.createElement("section",{className:"question-wrapper"},r.a.createElement("section",{className:"questions"},r.a.createElement("h3",{"data-testid":"question-category"},t.response[s].category),r.a.createElement("p",null,o),r.a.createElement("p",{"data-testid":"question-text"},t.response[s].question)),r.a.createElement("section",{className:"questions"},r.a.createElement($,{order:c,handleClickAnswer:this.handleClickAnswer,scoreUpdate:this.scoreUpdate,click:i,atualQuestion:s,questionResults:t,handleNextBtn:this.handleNextBtn,timer:o}))))}}]),t}(n.Component),G=Object(o.b)((function(e){return{questionResults:e.questions.response,isFetching:e.questions.isFetching}}),(function(e){return{setTimerAction:function(t){return e(function(e){return{type:"SET_TIMER",payload:{timer:e}}}(t))},scoreActionInfo:function(t){return e(g(t))}}}))(z),K=(a(212),function(e){function t(){return Object(x.a)(this,t),Object(J.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(q.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.questionInfo)()}},{key:"render",value:function(){var e=this.props.history;return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement(G,{history:e}))}}]),t}(n.Component)),X=Object(o.b)(null,(function(e){return{questionInfo:function(){return e((function(e){var t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(f());case 2:t=a.sent,e(b({response:t}));case 5:case"end":return a.stop()}}))}))}}}))(K),Y=function(e){function t(){return Object(x.a)(this,t),Object(J.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{"data-testid":"settings-title"},"Tela de Configura\xe7\xf5es"))}}]),t}(n.Component),Z=(a(213),function(e){function t(){return Object(x.a)(this,t),Object(J.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("state")).player,t=e.assertions,a=e.score,n=t>=3?"Mandou bem!":"Podia ser melhor...";return r.a.createElement("section",null,r.a.createElement(H,null),r.a.createElement("div",{className:"feedback"},r.a.createElement("h2",{"data-testid":"feedback-text"},n),r.a.createElement("span",{className:"score"},"Sua pontua\xe7\xe3o:"," ",r.a.createElement("span",{"data-testid":"feedback-total-score",className:"score"},a)),r.a.createElement("span",{className:"assertions"},"N\xfamero de acertos:"," ",r.a.createElement("span",{"data-testid":"feedback-total-question",className:"assertions"},t)),r.a.createElement("div",{className:"buttons-feedback"},r.a.createElement(i.b,{to:"/"},r.a.createElement("button",{className:"btn-feedback",type:"button","data-testid":"btn-play-again"},"Jogar novamente")),r.a.createElement(i.b,{to:"/ranking"},r.a.createElement("button",{type:"button",className:"btn-feedback","data-testid":"btn-ranking"},"Ver Ranking")))))}}]),t}(n.Component)),ee=function(e){function t(){return Object(x.a)(this,t),Object(J.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("ranking")).ranking;return r.a.createElement("ol",null,e.sort((function(e,t){return t.score-e.score})).map((function(e,t){return r.a.createElement("li",{key:t,className:"user-ranking"},r.a.createElement("span",{"data-testid":"player-name-".concat(t),className:"user-name"},e.name),r.a.createElement("span",{className:"user-points"},"- Pontos:"," ",r.a.createElement("span",{"data-testid":"player-score-".concat(t)},e.score)))})))}}]),t}(n.Component),te=(a(214),function(e){function t(){return Object(x.a)(this,t),Object(J.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"ranking"},r.a.createElement("h2",{"data-testid":"ranking-title"},"Ranking"),r.a.createElement(ee,null),r.a.createElement(i.b,{to:"/"},r.a.createElement("button",{type:"button","data-testid":"btn-go-home",className:"initial-btn"},"Voltar ao in\xedcio")))}}]),t}(n.Component));a(215);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,null,r.a.createElement(o.a,{store:S},r.a.createElement((function(){return r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/",component:D}),r.a.createElement(C.a,{path:"/settings",component:Y}),r.a.createElement(C.a,{path:"/game",render:function(e){return r.a.createElement(X,e)}}),r.a.createElement(C.a,{path:"/feedback",render:function(e){return r.a.createElement(Z,e)}}),r.a.createElement(C.a,{path:"/ranking",component:te}))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,t,a){e.exports=a.p+"static/media/trivia.466d153e.png"}},[[113,1,2]]]);
//# sourceMappingURL=main.2a90d13d.chunk.js.map