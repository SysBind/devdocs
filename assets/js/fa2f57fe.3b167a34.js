"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[107],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1518:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={title:"Unauthenticated access",sidebar_position:1,tags:["Coding guidelines","Policies","Security"]},l=void 0,u={unversionedId:"development/policies/security/unauthenticated-access",id:"development/policies/security/unauthenticated-access",title:"Unauthenticated access",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/unauthenticated-access.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/unauthenticated-access",permalink:"/devdocs/general/development/policies/security/unauthenticated-access",editUrl:"https://github.com/andrewnicols/devdocs/edit/main/general/development/policies/security/unauthenticated-access.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1652339309,formattedLastUpdatedAt:"12/05/2022",sidebarPosition:1,frontMatter:{title:"Unauthenticated access",sidebar_position:1,tags:["Coding guidelines","Policies","Security"]},sidebar:"policies",previous:{title:"Security",permalink:"/devdocs/general/development/policies/security/"},next:{title:"Unauthorised access",permalink:"/devdocs/general/development/policies/security/unauthorised-access"}},c={},d=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],p={toc:d};function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page forms part of the ",(0,o.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,o.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,o.kt)("p",null,"Moodle runs on a web server somewhere. A user sits at their computer somewhere else. Before we let that user enrol in a course, post to a forum, or submit an assignment, we would like to be sure who that user is."),(0,o.kt)("p",null,"If you don't know who the user is, you cannot correctly determine which actions they should be allowed to perform within Moodle."),(0,o.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,o.kt)("p",null,"This is a common problem to all web applications, and a common solution it to require users to log in with a user name and a password."),(0,o.kt)("p",null,"In fact, Moodle can have different ",(0,o.kt)("strong",{parentName:"p"},"authentication plugins")," that authenticate the user in different ways, but most of the standard authentication plugins are based on a user name and password system."),(0,o.kt)("p",null,"Another example of authentication is when you let users create their own accounts using Email-based self-registration. They must enter an email address. Moodle then sends an email to that address, and they must click on the link in that email to complete their registration. That authenticates that the user has access to that email address. A similar case is when you don't allow self-registration, but instead, manually create an account for each user, and give the user their user name and password in person, while verifying their identity in another way."),(0,o.kt)("p",null,"Yet another example is a ",(0,o.kt)("strong",{parentName:"p"},"captcha"),". This is some task that humans are able to do, like typing in the letters in a blurry image, but computers cannot. It authenticates that the thing filling in a form is a human, not an automated script."),(0,o.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Most authentication issues are taken care of by the Moodle system and the authentication plugins."),(0,o.kt)("li",{parentName:"ul"},"In every Moodle script you create, add a call to ",(0,o.kt)("inlineCode",{parentName:"li"},"require_login")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"require_course_login")," as near the start as possible. That is, as soon as you have the ",(0,o.kt)("inlineCode",{parentName:"li"},"$course")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"$cm")," parameters that you need to pass (if applicable).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The only exception to this is a few pages like the front page, which should be available to everyone."))),(0,o.kt)("li",{parentName:"ul"},"If you are writing a new authentication plugin, make sure you know what you are doing.")),(0,o.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Think carefully about which authentication method is appropriate for your site.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Be very cautious about allowing users to self-register.")))),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Coding"},"Coding"))))}h.isMDXComponent=!0}}]);