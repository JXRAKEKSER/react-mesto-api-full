(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(19),i=n.n(c),s=(n(30),n(24)),r=n(2),l=n(4),u=n.p+"static/media/mesto_logo.3b886bd4.svg",d=n(9),p=Object(a.createContext)(),j=n(0);var h=function(e){var t=e.emailNav,n=e.location,o=Object(a.useContext)(p),c=function(){localStorage.removeItem("jwt"),o.handleQuit()};return Object(j.jsxs)("header",{className:"header page__header",children:[Object(j.jsx)("img",{className:"header__logo",src:u,alt:"\u041b\u043e\u0433\u043e"}),"/"===n?Object(j.jsxs)("p",{className:"header__menu",children:["".concat(t)," ",Object(j.jsx)(d.b,{onClick:c,className:"header__menu-link",to:"/sign-in",children:"\u0412\u044b\u0439\u0442\u0438"})]}):"/sign-up"===n?Object(j.jsx)(d.b,{className:"header__menu-link",to:"../sign-in",children:"\u0412\u043e\u0439\u0442\u0438"}):Object(j.jsx)(d.b,{className:"header__menu-link",to:"../sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})},b=Object(a.createContext)();var m=function(e){var t=e.onCardClick,n=e.onCardLike,o=e.onCardDelete,c=e.card,i=Object(a.useContext)(b),s=c.owner._id===i._id,r=c.likes.some((function(e){return e._id===i._id})),l="element__like ".concat(r?"element__like_active":"");return Object(j.jsxs)("article",{className:"element",children:[s&&Object(j.jsx)("button",{className:"element__trash",type:"button",onClick:function(){o(c)}}),Object(j.jsx)("img",{className:"element__photo",src:c.link,alt:"\u0424\u043e\u0442\u043e ".concat(c.name),onClick:function(){t({link:c.link,name:c.name})}}),Object(j.jsxs)("div",{className:"element__container",children:[Object(j.jsx)("h2",{className:"element__title",children:c.name}),Object(j.jsxs)("div",{className:"element__like-container",children:[Object(j.jsx)("button",{className:l,type:"button",onClick:function(){n(c)}}),Object(j.jsx)("p",{className:"element__like-counter",children:c.likes.length})]})]})]})},f=n(3);var O=function(e){var t=e.onEditProfile,n=e.onAddPlace,o=e.onEditAvatar,c=e.onCardClick,i=e.cards,s=e.onCardLike,r=e.onCardDelete,l=e.onLocation,u=Object(a.useContext)(b),d=Object(f.h)().path;return Object(a.useEffect)((function(){l(d)}),[]),Object(j.jsxs)("main",{className:"content",children:[Object(j.jsxs)("section",{className:"profile page__profile",children:[Object(j.jsxs)("div",{className:"profile__avatar-container",children:[Object(j.jsx)("img",{className:"profile__avatar",src:u.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(j.jsx)("button",{className:"profile__avatar-edit-overlay",onClick:o})]}),Object(j.jsxs)("div",{className:"profile-info profile__profile-info",children:[Object(j.jsxs)("div",{className:"profile-info__container",children:[Object(j.jsx)("h1",{className:"profile-info__name",children:u.name}),Object(j.jsx)("button",{className:"profile-info__button-edit",type:"button",onClick:t})]}),Object(j.jsx)("p",{className:"profile-info__role",children:u.about})]}),Object(j.jsx)("button",{className:"profile__button-add",type:"button",onClick:n})]}),Object(j.jsx)("section",{className:"elements page__elements",children:i.map((function(e){return Object(j.jsx)(m,{onCardClick:c,onCardLike:s,onCardDelete:r,card:e},e._id)}))})]})};var _=function(){return Object(j.jsx)("footer",{className:"footer page__footer",children:Object(j.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var g=function(e){var t=e.name,n=e.title,a=e.isOpen,o=e.onClose,c=e.onSubmit,i=e.children,s=e.isLoading;return Object(j.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(a&&"popup_opened"),children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("button",{className:"popup__button-close",onClick:o,type:"button"}),Object(j.jsxs)("form",{className:"popup__form",name:t,onSubmit:c,children:[Object(j.jsx)("h2",{className:"popup__title",children:n}),i,Object(j.jsx)("input",{className:"popup__button-save",type:"submit",value:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})};var v=function(e){var t=e.card,n=e.onClose;return Object(j.jsx)("div",{className:"popup popup_opacity popup_type_picture ".concat(t.name&&"popup_opened"),children:Object(j.jsxs)("div",{className:"popup__container-photo",children:[Object(j.jsx)("button",{className:"popup__button-close",type:"button",onClick:n}),Object(j.jsx)("img",{className:"popup__photo",src:t.link,alt:t.name}),Object(j.jsx)("p",{className:"popup__photo-name",children:t.name})]})})};function x(e,t,n){e.then((function(e){t(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e))})).finally((function(){"#"!==n&&n()}))}var C=n(22),k=n(23),N=new(function(){function e(t){Object(C.a)(this,e),this._baseURL=t.baseURL,this._headers=t.headers,this._checkResponse=this._checkResponse.bind(this)}return Object(k.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status," and ").concat(e.url))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseURL,"users/me"),{method:"GET",headers:{authorization:this._headers.authorization,"Content-type":"application/json"}}).then(this._checkResponse)}},{key:"getPreloadsCards",value:function(){return fetch("".concat(this._baseURL,"cards/"),{method:"GET",headers:{authorization:this._headers.authorization,"Content-type":"application/json"}}).then(this._checkResponse)}},{key:"updateUserInfo",value:function(e){var t=e.fio,n=e.aboutYourself;return fetch("".concat(this._baseURL,"users/me"),{method:"PATCH",headers:{authorization:this._headers.authorization,"Content-type":"application/json"},body:JSON.stringify({name:"".concat(t),about:"".concat(n)})}).then(this._checkResponse)}},{key:"postCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseURL,"cards"),{method:"POST",headers:{authorization:this._headers.authorization,"Content-type":"application/json"},body:JSON.stringify({name:"".concat(t),link:"".concat(n)})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseURL,"cards/").concat(e),{method:"DELETE",headers:{authorization:this._headers.authorization,"Content-type":"application/json"}}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseURL,"cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._headers.authorization,"Content-type":"application/json"}}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseURL,"cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._headers.authorization,"Content-type":"application/json"}}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._baseURL,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._headers.authorization,"Content-type":"application/json"},body:JSON.stringify({avatar:"".concat(t)})}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.addLike(e):this.deleteLike(e)}}]),e}())({baseURL:"http://api.mesto.photocard.nomoredomains.work/",headers:{authorization:"ea8d3eb3-1ee8-45d9-8e72-76d5b1d1c389","Content-Type":"application/json"}}),L="http://api.mesto.photocard.nomoredomains.work",y=function(e){return e.ok?e.json():Promise.reject(e.status)},S=n(10),R=function(e){var t=e.maxLength,n=e.minLength,a=e.placeholder,o=e.onChangeHandler,c=e.value,i=e.name,s=e.id,r=e.type,l=e.styleModifier;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{className:"popup__input ".concat(l||""),value:c,placeholder:a,required:!0,name:i,id:s,maxLength:t,minLength:n,onChange:function(e){o(e)},type:r}),Object(j.jsx)("span",{className:"popup__input-error-info profile-name-error"})]})},E=function(e){var t=e.isOpen,n=e.onClose,o=e.onUserUpdate,c=e.isLoading,i=Object(a.useContext)(b),s=Object(a.useState)({fio:"",aboutYourself:""}),u=Object(l.a)(s,2),d=u[0],p=u[1];Object(a.useEffect)((function(){p({fio:i.name,aboutYourself:i.about})}),[i,t]);var h=function(e){var t=e.target,n=t.name,a=t.value;p(Object(r.a)(Object(r.a)({},d),{},Object(S.a)({},n,a)))};return Object(j.jsxs)(g,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:d.fio,about:d.aboutYourself})},isLoading:c,children:[Object(j.jsx)(R,{maxLength:"40",minLength:"2",onChangeHandler:h,value:d.fio,placeholder:"\u0418\u043c\u044f",name:"fio",id:"profile-name"}),Object(j.jsx)(R,{maxLength:"200",minLength:"2",onChangeHandler:h,value:d.aboutYourself,placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"aboutYourself",id:"profile-about"})]})},U=function(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateAvatar,c=e.isLoading,i=Object(a.useRef)();Object(a.useEffect)((function(){i.current.value=""}),[t]);return Object(j.jsxs)(g,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({avatar:i.current.value})},isLoading:c,children:[Object(j.jsx)("input",{className:"popup__input",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e",required:!0,name:"avatar",id:"profile-avatar",type:"url",ref:i}),Object(j.jsx)("span",{className:"popup__input-error-info profile-avatar-error"})]})},w=function(e){var t=e.isOpen,n=e.onClose,o=e.onAddCard,c=e.isLoading,i=Object(a.useState)({mestoName:"",mestoURL:""}),s=Object(l.a)(i,2),u=s[0],d=s[1];Object(a.useEffect)((function(){d({mestoName:"",mestoURL:""})}),[t]);var p=function(e){var t=e.target,n=t.name,a=t.value;d(Object(r.a)(Object(r.a)({},u),{},Object(S.a)({},n,a)))};return Object(j.jsxs)(g,{name:"card-add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:u.mestoName,link:u.mestoURL})},isLoading:c,children:[Object(j.jsx)(R,{value:u.mestoName,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"mesto-name",name:"mestoName",onChangeHandler:p}),Object(j.jsx)(R,{value:u.mestoURL,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"mesto-url",name:"mestoURL",onChangeHandler:p,type:"url"})]})},z=n(25),P=["component"],I=function(e){var t=e.component,n=Object(z.a)(e,P),o=Object(a.useContext)(p);return Object(j.jsx)(f.b,{children:function(){return o.isLoggedIn?Object(j.jsx)(t,Object(r.a)({},n)):Object(j.jsx)(f.a,{to:"./sign-in"})}})},A=function(e){var t=e.value;return Object(j.jsx)("input",{className:"sign-button",type:"submit",value:t})},T=function(e){var t=e.onSuccessfullReg,n=e.onErrorReg,o=e.onLocation,c=Object(a.useState)({email:"",password:""}),i=Object(l.a)(c,2),s=i[0],u=i[1],p=Object(f.h)().path;Object(a.useEffect)((function(){o(p)}),[]);var h=function(e){var t=e.target,n=t.name,a=t.value;u(Object(r.a)(Object(r.a)({},s),{},Object(S.a)({},n,a)))};return Object(j.jsx)("main",{className:"content",children:Object(j.jsxs)("section",{className:"register page__register",children:[Object(j.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault(),function(e){var t=e.password,n=e.email;return fetch("".concat(L,"/signup"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(y).then((function(e){return e}))}(s).then((function(e){t()})).catch((function(){n()}))},children:[Object(j.jsx)(R,{value:s.email,name:"email",id:"register-email",maxLength:"100",minLength:"6",onChangeHandler:h,type:"text",styleModifier:"register__input",placeholder:"Email"}),Object(j.jsx)(R,{value:s.password,id:"register-password",name:"password",maxLength:"24",minLength:"6",onChangeHandler:h,type:"password",styleModifier:"register__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)(A,{value:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(j.jsxs)("p",{className:"register__sign-in-caption",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(j.jsx)(d.b,{to:"../sign-in",className:"register__sign-in-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},D=function(e){var t=e.onErrorLoggedIn,n=e.onEmail,o=e.onLocation,c=Object(a.useContext)(p),i=Object(f.g)(),s=Object(a.useState)({email:"",password:""}),u=Object(l.a)(s,2),d=u[0],h=u[1],b=Object(f.h)().path;Object(a.useEffect)((function(){o(b)}),[]);var m=function(e){var t=e.target,n=t.value,a=t.name;h(Object(r.a)(Object(r.a)({},d),{},Object(S.a)({},a,n)))};return Object(j.jsx)("main",{className:"content",children:Object(j.jsxs)("section",{className:"login page__login",children:[Object(j.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),function(e){var t=e.password,n=e.email;return fetch("".concat(L,"/signin"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(y).then((function(e){return e.token?(localStorage.setItem("jwt",e.token),e):void 0}))}(d).then((function(e){e.token&&(c.handleLogin(),i.push("/"),n(d.email))})).catch((function(){t()}))},children:[Object(j.jsx)(R,{value:d.email,id:"login-email",name:"email",maxLength:"24",minLength:"6",onChangeHandler:m,type:"text",styleModifier:"login__input",placeholder:"Email"}),Object(j.jsx)(R,{value:d.password,id:"login-password",name:"password",maxLength:"24",minLength:"6",onChangeHandler:m,type:"password",styleModifier:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)(A,{value:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},H=function(e){var t=e.name,n=e.isOpen,a=e.onClose,o=e.icon,c=e.title,i=e.alt;return Object(j.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(n&&"popup_opened"),children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("button",{className:"popup__button-close",onClick:a,type:"button"}),Object(j.jsx)("img",{className:"popup__reg-icon",src:o,alt:i}),Object(j.jsx)("h2",{className:"popup__title popup__title_color_black popup__title_type_notification",children:c})]})})},J=n.p+"static/media/success-icon.1b6082f8.svg",M=n.p+"static/media/error-icon.df8eddf6.svg";var Y=function(){var e=Object(a.useState)({about:"",avatar:"",cohort:"",name:"",_id:"",email:""}),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(f.g)(),i=Object(a.useState)(c.location.pathname),u=Object(l.a)(i,2),d=u[0],m=u[1],C=function(e){m(e)},k=Object(a.useState)(!1),S=Object(l.a)(k,2),R=S[0],z=S[1],P=Object(a.useState)(!1),A=Object(l.a)(P,2),Y=A[0],G=A[1],q=Object(a.useState)(!1),B=Object(l.a)(q,2),Q=B[0],F=B[1],V=Object(a.useState)(!1),K=Object(l.a)(V,2),W=K[0],X=K[1],Z=Object(a.useState)(!1),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)({}),ae=Object(l.a)(ne,2),oe=ae[0],ce=ae[1],ie=Object(a.useState)(!1),se=Object(l.a)(ie,2),re=se[0],le=se[1],ue=Object(a.useState)(""),de=Object(l.a)(ue,2),pe=de[0],je=de[1];function he(){le(!1)}var be=Object(a.useState)([]),me=Object(l.a)(be,2),fe=me[0],Oe=me[1];Object(a.useEffect)((function(){(x(N.getPreloadsCards(),(function(e){Oe(e)}),"#"),x(N.getUserInfo(),(function(e){o(Object(r.a)(Object(r.a)({},n),{},{about:e.about,avatar:e.avatar,cohort:e.cohort,name:e.name,_id:e._id}))}),"#"),localStorage.getItem("jwt"))&&function(e){return fetch("".concat(L,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(y).then((function(e){return e.data}))}(localStorage.getItem("jwt")).then((function(e){var t=e.email;e._id;_e(),ge(t),c.push("/")}))}),[]);var _e=function(){ke(Object(r.a)(Object(r.a)({},Ce),{},{isLoggedIn:!0}))},ge=function(e){je(e)},ve=Object(a.useState)({isLoggedIn:!1,handleLogin:_e,handleQuit:function(){ke(Object(r.a)(Object(r.a)({},Ce),{},{isLoggedIn:!1}))},handleEmailNav:ge}),xe=Object(l.a)(ve,2),Ce=xe[0],ke=xe[1],Ne=function(){te(!0)},Le=function(){z(!1),F(!1),G(!1),X(!1),te(!1),ce({})};return Object(j.jsx)(p.Provider,{value:Ce,children:Object(j.jsxs)(b.Provider,{value:n,children:[Object(j.jsx)(h,{emailNav:pe,location:d}),Object(j.jsxs)(f.d,{children:[Object(j.jsx)(I,{component:O,path:"/",emailNav:pe,onLocation:C,exact:!0,onEditProfile:function(){z(!0)},onAddPlace:function(){F(!0)},onEditAvatar:function(){G(!0)},onCardClick:function(e){ce(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));x(N.changeLikeCardStatus(e._id,!t),(function(t){Oe((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))}),he)},onCardDelete:function(e){x(N.deleteCard(e._id),(function(){Oe((function(t){return t.filter((function(t){return t._id!==e._id}))}))}),he)},cards:fe}),Object(j.jsx)(f.b,{path:"/sign-up",children:Object(j.jsx)(T,{onSuccessfullReg:function(){X(!0)},onErrorReg:Ne,onLocation:C})}),Object(j.jsx)(f.b,{path:"/sign-in",children:Object(j.jsx)(D,{onErrorLoggedIn:Ne,onEmail:ge,onLocation:C})})]}),Object(j.jsx)(_,{}),Object(j.jsx)(E,{isOpen:R,onClose:Le,onUserUpdate:function(e){var t=e.name,a=e.about;le(!0),x(N.updateUserInfo({fio:t,aboutYourself:a}),(function(e){o(Object(r.a)(Object(r.a)({},n),{},{name:e.name,about:e.about})),Le()}),he)},isLoading:re}),Object(j.jsx)(U,{isOpen:Y,onClose:Le,onUpdateAvatar:function(e){var t=e.avatar;le(!0),x(N.updateAvatar({avatar:t}),(function(e){o(Object(r.a)(Object(r.a)({},n),{},{avatar:e.avatar})),Le()}),he)},isLoading:re}),Object(j.jsx)(w,{isOpen:Q,onClose:Le,onAddCard:function(e){var t=e.name,n=e.link;le(!0),x(N.postCard({name:t,link:n}),(function(e){Oe([e].concat(Object(s.a)(fe))),Le()}),he)},isLoading:re}),Object(j.jsx)(g,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(j.jsx)(v,{card:oe,onClose:Le}),Object(j.jsx)(H,{name:"success-register",isOpen:W,onClose:Le,icon:J,title:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(j.jsx)(H,{name:"error-register",isOpen:ee,onClose:Le,icon:M,title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"})]})})};i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(d.a,{children:Object(j.jsx)(Y,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.1627842c.chunk.js.map