"use strict";(self.webpackChunkswbook=self.webpackChunkswbook||[]).push([[683],{7357:(l,n,e)=>{e.r(n),e.d(n,{data:()=>s});const s={key:"v-727c3922",path:"/about/about-docs-back-up.html",title:"关于 - 文档的备份与托管",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"创建代码仓库",slug:"创建代码仓库",children:[]},{level:2,title:"配置 SSH 连接",slug:"配置-ssh-连接",children:[]},{level:2,title:"首次提交",slug:"首次提交",children:[]},{level:2,title:"后续提交",slug:"后续提交",children:[]}],filePathRelative:"about/about-docs-back-up.md",git:{updatedTime:1628868905e3}}},2070:(l,n,e)=>{e.r(n),e.d(n,{default:()=>D});var s=e(6252),t=e(8182);const a=(0,s._)("h1",{id:"关于-文档的备份与托管",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#关于-文档的备份与托管","aria-hidden":"true"},"#"),(0,s.Uk)(" 关于 - 文档的备份与托管")],-1),i=(0,s._)("div",{class:"custom-container tip"},[(0,s._)("p",{class:"custom-container-title"},"为什么要托管 ？"),(0,s._)("p",null,"本地编写好文章后，为了方便备份以及后续自动化部署，需要将本地整个博客网站内容托管至 Github")],-1),u=(0,s._)("h2",{id:"创建代码仓库",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#创建代码仓库","aria-hidden":"true"},"#"),(0,s.Uk)(" 创建代码仓库")],-1),o=(0,s.Uk)("登录 "),c={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},r=(0,s.Uk)("Github"),_=(0,s.Uk)("，创建一个仓库"),d=(0,s._)("code",null,"swbook",-1),p=(0,s.Uk)("，如果为了隐私，可以初始化为私库，即 private。"),k=(0,s._)("blockquote",null,[(0,s._)("p",null,"因为我这已经创建swbook 仓库，所以图中使用 swbooks 演示，仓库名可随意自定义，无需与项目名相同，但是建议保持一致")],-1),h=(0,s._)("p",null,[(0,s._)("img",{src:t,alt:"image-20210810152517498"})],-1),b=(0,s._)("p",null,"创建成功后，目前是一个空的仓库：",-1),m={id:"配置-ssh-连接",tabindex:"-1"},g=(0,s._)("a",{class:"header-anchor",href:"#配置-ssh-连接","aria-hidden":"true"},"#",-1),U=(0,s.Uk)(" 配置 SSH 连接 "),f=(0,s._)("blockquote",null,[(0,s._)("p",null,"如果本地以配置 SSH 连接可跳过此步骤")],-1),v=(0,s._)("details",{class:"custom-container details"},[(0,s._)("summary",null,"Tips 为什么要采用 SSH 来连接？"),(0,s._)("p",null,"在使用 HTTPS 协议连接 Github 时，使用 git pull、git push 等命令时需要输入密码，频繁拉取和提交时，屡次输入账号密码很不方便，所以使用 SSH 协议实现免密连接，一劳永逸")],-1),x=(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("p",null,"生成公钥和私钥")]),(0,s._)("li",null,[(0,s._)("p",null,"上传公钥到 Github")]),(0,s._)("li",null,[(0,s._)("p",null,"测试连接")])],-1),S=(0,s._)("h2",{id:"首次提交",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#首次提交","aria-hidden":"true"},"#"),(0,s.Uk)(" 首次提交")],-1),w=(0,s._)("p",null,[(0,s.Uk)("由于是首次提交，需要初始化提交，先进入项目根目录"),(0,s._)("code",null,"swbook"),(0,s.Uk)("后执行以下 git 命令")],-1),G=(0,s._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s._)("span",{class:"token comment"},"# 进入项目根目录"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token builtin class-name"},"cd"),(0,s.Uk)(" swbook\n"),(0,s._)("span",{class:"token comment"},"# 连接私库，将本地的代码添加、提交、推送到远程私库的 master 分支"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token function"},"git"),(0,s.Uk)(" remote "),(0,s._)("span",{class:"token function"},"add"),(0,s.Uk)(" origin git@github.com:silentims/swbook.git "),(0,s._)("span",{class:"token operator"},"&&"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"git"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"add"),(0,s.Uk)(),(0,s._)("span",{class:"token builtin class-name"},"."),(0,s.Uk)(),(0,s._)("span",{class:"token operator"},"&&"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"git"),(0,s.Uk)(" commit -m "),(0,s._)("span",{class:"token string"},"'init'"),(0,s.Uk)(),(0,s._)("span",{class:"token operator"},"&&"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"git"),(0,s.Uk)(" push -u origin master\n")])]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br")])],-1),H=(0,s._)("details",{class:"custom-container details"},[(0,s._)("summary",null,"Git 命令名词解释"),(0,s._)("p",null,[(0,s._)("code",null,"git remote add origin xxx.git"),(0,s.Uk)("：创建和添加一个远程仓库连接")]),(0,s._)("p",null,[(0,s._)("code",null,"git add ."),(0,s.Uk)("：将本地项目中所有文件添加到版本控制")]),(0,s._)("p",null,[(0,s._)("code",null,"git commit -m 'init'"),(0,s.Uk)("：将本地版本控制的文件添加到本地仓库，并备注信息为 init")]),(0,s._)("p",null,[(0,s._)("code",null,"git push -u origin master"),(0,s.Uk)("：将本地仓库中文件推送至远程仓库")])],-1),y=(0,s._)("h2",{id:"后续提交",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#后续提交","aria-hidden":"true"},"#"),(0,s.Uk)(" 后续提交")],-1),T=(0,s._)("p",null,"不同于首次提交，每当新增或者修改文章后，需要托管到 Github 时，除了git 命令执行，亦可以直接通过 VScode 客户端进行操作，具体操作步骤如下：",-1),C=(0,s._)("p",null,"1.拉取",-1),q=(0,s._)("p",null,[(0,s.Uk)("如果是跨平台使用，每次提交前先拉取，等同于"),(0,s._)("code",null,"git pull"),(0,s.Uk)("命令")],-1),P=(0,s._)("p",null,"2.提交",-1),W=(0,s._)("p",null,[(0,s.Uk)("如果修改了文件，在源代码管理菜单中，在②处输入提交的备注信息，然后打勾，等同于"),(0,s._)("code",null,"git commit"),(0,s.Uk)("命令，将代码提交至本地仓库")],-1),z=(0,s._)("p",null,"2.推送",-1),B=(0,s._)("p",null,[(0,s.Uk)("将本地仓库的内容提交至Github 远程仓库对应的分支中，等同于"),(0,s._)("code",null,"git push"),(0,s.Uk)("命令")],-1),D={render:function(l,n){const e=(0,s.up)("OutboundLink"),t=(0,s.up)("Badge");return(0,s.wg)(),(0,s.iD)(s.HY,null,[a,i,u,(0,s._)("p",null,[o,(0,s._)("a",c,[r,(0,s.Wm)(e)]),_,d,p]),k,h,b,(0,s._)("h2",m,[g,U,(0,s.Wm)(t,{type:"danger",text:"待完善",vertical:"top"})]),f,v,x,S,w,G,H,y,T,C,q,P,W,z,B],64)}}},8182:(l,n,e)=>{l.exports=e.p+"assets/img/20210810152527.40a36f1d.png"}}]);