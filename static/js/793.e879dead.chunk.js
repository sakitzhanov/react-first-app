"use strict";(self.webpackChunkfirst_react_app=self.webpackChunkfirst_react_app||[]).push([[793],{6793:function(t,s,e){e.r(s),e.d(s,{default:function(){return A}});var i=e(8683),r=e(5671),o=e(3144),n=e(136),u=e(4104),a=e(2791),p="ProfileInfo_descriptionBlock__5DxV2",l="ProfileInfo_profilePhoto__XXaPD",d=e(706),c=e(2526),f=e(885),h=e(184),x=function(t){var s=(0,a.useState)(!1),e=(0,f.Z)(s,2),i=e[0],r=e[1],o=(0,a.useState)(t.status),n=(0,f.Z)(o,2),u=n[0],p=n[1];(0,a.useEffect)((function(){p(t.status)}),[t.status]);return(0,h.jsx)("div",{children:i?(0,h.jsx)("div",{children:(0,h.jsx)("input",{onBlur:function(){r(!1),t.updateStatus(u)},onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,value:u})}):(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){return r(!0)},children:u})})})},m=function(t){if(!t.profile)return(0,h.jsx)(c.Z,{});return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{alt:"profile-wallpaper",width:"100%",src:"https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE="})}),(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)("img",{alt:"profilePhoto",src:t.profile.photos.large||d,className:l}),t.isOwner&&(0,h.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&t.savePhoto(s.target.files[0])}}),"Full name: ",t.profile.fullName,(0,h.jsx)(x,{status:t.status,updateStatus:t.updateStatus})]})]})},j=e(8687),v=e(6070),P=e(6139),g=e(704),k="MyPosts_postsBlock__A65TP",_="MyPosts_posts__xg55P",S="Post_item__uLJfk",C=function(t){return(0,h.jsxs)("div",{className:S,children:[(0,h.jsx)("img",{width:"50px",src:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"}),"Post \u2116",t.postId,". ",t.message,(0,h.jsxs)("div",{children:[(0,h.jsxs)("button",{children:["Like (",t.likesCount,")"]}),(0,h.jsxs)("button",{children:["Dislike (",t.dislikesCount,")"]})]})]})},b=e(5304),w=e(9086),I=(0,b.D)(10),Z=a.memo((function(t){var s=t.posts.map((function(t){return(0,h.jsx)(C,{postId:t.id,message:t.message,likesCount:t.likesCount,dislikesCount:t.dislikesCount},t.id)}));return(0,h.jsxs)("div",{className:k,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)(y,{onSubmit:function(s){t.addPost(s)}}),(0,h.jsx)("div",{className:_,children:s})]})})),y=(0,g.Z)({form:"post"})((function(t){return(0,h.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(P.Z,{placeholder:"Enter text",name:"text",component:w.gx,validate:[b.C,I]})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Add post"})})]})})),D=Z,N=(0,j.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(s){t((0,v.Wl)(s))}}}))(D),O=function(t){return(0,h.jsxs)("div",{children:[(0,h.jsx)(m,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,savePhoto:t.savePhoto}),(0,h.jsx)(N,{})]})},M=e(6458),T=(e(1548),e(7781)),X=function(t){(0,n.Z)(e,t);var s=(0,u.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,o.Z)(e,[{key:"refreshProfile",value:function(){var t=this.props.router.params.userId;t||(t=this.props.userId)||this.props.router.navigate("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,s){this.props.router.params.userId!==t.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,h.jsx)("div",{children:(0,h.jsx)(O,(0,i.Z)({isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto},this.props))})}}]),e}(a.Component),A=(0,T.qC)((0,j.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,userId:t.auth.userId}}),{getProfile:v.Ai,getStatus:v.lR,updateStatus:v.Nf,savePhoto:v.Ju}),M.Z)(X)}}]);
//# sourceMappingURL=793.e879dead.chunk.js.map