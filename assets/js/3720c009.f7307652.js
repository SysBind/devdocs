"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[13751],{9861:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(67294),r=a(86010),l=a(95999);var c=a(1944),s=a(35281),u=a(15754),o=a(13008),i="tag_Nnez";function m(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:i},n.createElement(o.Z,e))}))),n.createElement("hr",null))}function g(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return n.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return n.createElement(m,{key:e.letter,letterEntry:e})})))}var f=a(90197);function E(e){var t=e.tags,a=(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return n.createElement(c.FG,{className:(0,r.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},n.createElement(c.d,{title:a}),n.createElement(f.Z,{tag:"doc_tags_list"}),n.createElement(u.Z,null,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("main",{className:"col col--8 col--offset-2"},n.createElement("h1",null,a),n.createElement(g,{tags:t}))))))}},13008:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),l=a(39960),c="tag_zVej",s="tagRegular_sFm0",u="tagWithCount_h2kH";function o(e){var t=e.permalink,a=e.label,o=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(c,o?u:s)},a,o&&n.createElement("span",null,o))}}}]);