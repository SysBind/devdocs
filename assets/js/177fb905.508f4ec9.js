(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[64384],{88698:function(e,t,n){"use strict";var o=n(75963);t.Z=void 0;var a=o(n(64938)),i=n(85893),r=(0,a.default)((0,i.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");t.Z=r},45745:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),r=n(13904),l=n(50793),s=["components"],d={title:"PHP CodeSniffer",tags:["coding style","policies","tools"]},c=void 0,u={unversionedId:"development/tools/phpcs",id:"development/tools/phpcs",title:"PHP CodeSniffer",description:"Overview",source:"@site/general/development/tools/phpcs.md",sourceDirName:"development/tools",slug:"/development/tools/phpcs",permalink:"/devdocs/general/development/tools/phpcs",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/tools/phpcs.md",tags:[{label:"coding style",permalink:"/devdocs/general/tags/coding-style"},{label:"policies",permalink:"/devdocs/general/tags/policies"},{label:"tools",permalink:"/devdocs/general/tags/tools"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653898853,formattedLastUpdatedAt:"30/05/2022",frontMatter:{title:"PHP CodeSniffer",tags:["coding style","policies","tools"]},sidebar:"coding",previous:{title:"Moodle Development Kit",permalink:"/devdocs/general/development/tools/mdk"},next:{title:"NodeJS and Grunt",permalink:"/devdocs/general/development/tools/nodejs"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Community plugins, and older Moodle versions",id:"community-plugins-and-older-moodle-versions",level:4},{value:"System-side default standard",id:"system-side-default-standard",level:4},{value:"Moodle plugin",id:"moodle-plugin",level:2},{value:"Editor integrations",id:"editor-integrations",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Ignoring warnings",id:"ignoring-warnings",level:3},{value:"Recursive analysis",id:"recursive-analysis",level:3},{value:"Other report formats",id:"other-report-formats",level:3},{value:"See also",id:"see-also",level:2}],h={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,(0,o.Z)({frontMatter:d},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This document describes the various code sniffing tools that Moodle recommends, their purpose, and their usage."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/squizlabs/PHP_CodeSniffer"},"PHPCodeSniffer")," is a tool used to analyse PHP code using a set of rules. In many cases these rules can be used to automatically fix the errors they identify."),(0,i.kt)("p",null,"Moodle has published a ruleset intended to meet the ",(0,i.kt)("a",{parentName:"p",href:"/general/development/policies/codingstyle"},"Moodle Coding Style"),", and identify any parts of the code do not conform to this style."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"It is recommend that both the phpcs scripts, and the Moodle ruleset, are installed globally using Composer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"composer global require moodlehq/moodle-cs\n")),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)(l.U6,{versions:["4.1.0","4.0.1","3.11.7"],issueNumber:"MDL-74511",mdxType:"Since"}),(0,i.kt)("p",null,"A PHPCS configuration is included in the Moodle codebase and ensures that the correct phpcs ruleset is always used for the Moodle codebase."),(0,i.kt)("p",null,"This can be further extended by generating an additional configuration to ignore all third-party libraries using the ",(0,i.kt)("inlineCode",{parentName:"p"},"grunt ignorefiles")," command. See ",(0,i.kt)("a",{parentName:"p",href:"/general/development/tools/nodejs#grunt"},"grunt")," for further information on using Grunt."),(0,i.kt)("h4",{id:"community-plugins-and-older-moodle-versions"},"Community plugins, and older Moodle versions"),(0,i.kt)("p",null,"If you are developing your own plugin outside of the main Moodle directory, or you are working with an older version of Moodle, the easiest way to configure phpcs to use the Moodle ruleset is by creating a local ",(0,i.kt)("inlineCode",{parentName:"p"},"phpcs.xml.dist")," configuration at the root directory of your repository with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<ruleset name="MoodleCore">\n  <rule ref="moodle"/>\n</ruleset>\n')),(0,i.kt)("p",null,"If you do not wish to include this file in your repository, or you are using an older version of Moodle, then you should add this to your local gitignore files. On a Unix-like system this can be achieved with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"echo phpcs.xml.dist >> .git/info/exclude\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},".git/info/exclude")," file is a per-repository version of the ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file. Whilst ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," is tracked within the Moodle codebase and a version is shipped with Moodle, the ",(0,i.kt)("inlineCode",{parentName:"p"},".git/info/exclude")," file is local to your git clone."),(0,i.kt)("p",{parentName:"div"},"See the ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore"},"gitignore")," documentation for more information on the gitignore feature."))),(0,i.kt)("h4",{id:"system-side-default-standard"},"System-side default standard"),(0,i.kt)("p",null,"Although not recommended, you can configure the Moodle ruleset as the system-wide default for phpcs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"phpcs --config-set default_standard moodle\n")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Not recommended")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This approach is ",(0,i.kt)("strong",{parentName:"p"},"not recommended")," and is only preserved for reference."))),(0,i.kt)("h2",{id:"moodle-plugin"},"Moodle plugin"),(0,i.kt)("p",null,"Moodle includes a copy of the PHPCodeSniffer package, and the Moodle ruleset, as part of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-local_codechecker"},(0,i.kt)("inlineCode",{parentName:"a"},"moodle-local_codechecker"))," Moodle plugin. This makes the code checker available via a web-based interface for checking the syntax of a given file or folder."),(0,i.kt)("p",null,"One way to install this plugin is using ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"git clone git://github.com/moodlehq/moodle-local_codechecker.git local/codechecker\n")),(0,i.kt)("p",null,"It is recommended that you add the plugin to your ",(0,i.kt)("em",{parentName:"p"},"local")," git ignore:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"echo local/codechecker >> .git/info/exclude\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},".git/info/exclude")," file is a per-repository version of the ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file. Whilst ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," is tracked within the Moodle codebase and a version is shipped with Moodle, the ",(0,i.kt)("inlineCode",{parentName:"p"},".git/info/exclude")," file is local to your git clone."),(0,i.kt)("p",{parentName:"div"},"See the ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore"},"gitignore")," documentation for more information on the gitignore feature."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are not installing the moodle ruleset globally, and are instead using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-local_codechecker"},(0,i.kt)("inlineCode",{parentName:"a"},"local_codechecker"))," plugin, then you ",(0,i.kt)("em",{parentName:"p"},"must")," also use the version of phpcs distributed in the plugin."),(0,i.kt)("p",{parentName:"div"},"This is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"local/codechecker/phpcs/bin/phpcs"),"."))),(0,i.kt)("p",null,"Once installed a new codechecker option will appear in the Site administration -> Development page."),(0,i.kt)("p",null,"This page allows for the code in a specified directory to be checked, for example if you wanted to check the code for the ",(0,i.kt)("inlineCode",{parentName:"p"},"shortanswer")," question type you would enter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/question/type/shortanswer\n")),(0,i.kt)("p",null,"You would then be presented with a list of the count of files processed and any warnings or errors."),(0,i.kt)("h2",{id:"editor-integrations"},"Editor integrations"),(0,i.kt)("p",null,"Many modern editors and IDEs will natively integrate with PHPCodeSniffer, and since Moodle versions 3.11.7, 4.0.1, and 4.1.0, no additional configuration is required."),(0,i.kt)("p",null,"For older versions many editors will allow you to manually configure the PHPCodeSniffer standard to use, for example, the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=obliviousharmony.vscode-php-codesniffer"},"VS Code PHPCodeSniffer extension")," can be configured in this way."),(0,i.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,i.kt)("h3",{id:"ignoring-warnings"},"Ignoring warnings"),(0,i.kt)("p",null,"You can run the CodeSniffer with the -n flag to ignore warnings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"phpcs -n index.php\n--------------------------------------------------------------------------------\nFOUND 139 ERROR(S) AFFECTING 125 LINE(S)\n--------------------------------------------------------------------------------\n  28 | ERROR | line indented incorrectly; expected 0 spaces, found 4\n  50 | ERROR | line indented incorrectly; expected 0 spaces, found 4\n...\n")),(0,i.kt)("h3",{id:"recursive-analysis"},"Recursive analysis"),(0,i.kt)("p",null,"If you give the name of a folder instead of a file, it will search, analyse and report on all PHP files found in this folder and all its subfolders. This will produce a full report for each PHP file. Since this is likely to be too much information, you may want to print only a summary report, by using the following syntax (search the files/ folder as an example):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"phpcs --report=summary blocks/html\nPHP CODE SNIFFER REPORT SUMMARY\n-----------------------------------------------------------------------------------------------------------------------\nFILE                                                                                                   ERRORS  WARNINGS\n-----------------------------------------------------------------------------------------------------------------------\n/var/www/html/moodle/blocks/html/block_html.php                                       24      0\n/var/www/html/moodle/blocks/html/edit_form.php                                        16      0\n/var/www/html/moodle/blocks/html/lib.php                                              11      0\n/var/www/html/moodle/blocks/html/settings.php                                         6       0\n/var/www/html/moodle/blocks/html/backup/moodle2/backup_html_block_task.class.php      2       0\n/var/www/html/moodle/blocks/html/backup/moodle2/restore_html_block_task.class.php     3       0\n/var/www/html/moodle/blocks/html/classes/privacy/provider.php                         13      0\n/var/www/html/moodle/blocks/html/classes/search/content.php                           6       0\n/var/www/html/moodle/blocks/html/tests/search_content_test.php                        6       0\n-----------------------------------------------------------------------------------------------------------------------\nA TOTAL OF 87 ERRORS AND 0 WARNINGS WERE FOUND IN 9 FILES\n-----------------------------------------------------------------------------------------------------------------------\nPHPCBF CAN FIX 75 OF THESE SNIFF VIOLATIONS AUTOMATICALLY\n-----------------------------------------------------------------------------------------------------------------------\n\nTime: 626ms; Memory: 16MB\n")),(0,i.kt)("h3",{id:"other-report-formats"},"Other report formats"),(0,i.kt)("p",null,"CodeSniffer can export its reports in the following formats:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"full"),": default, shown first above"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"summary"),": also shown above"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"xml"),": Simple XML format"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"csv"),": Comma-separated list"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"checkstyle"),": XML format intended for use with CruiseControl")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Coding"},"Coding")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/general/development/policies/codingstyle"},"Coding style"))))}v.isMDXComponent=!0},85162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(67294),a=n(86010),i="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,r),hidden:n},t)}},65488:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var o=n(83117),a=n(67294),i=n(86010),r=n(72389),l=n(67392),s=n(7094),d=n(12466),c="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,n,r=e.lazy,p=e.block,m=e.defaultValue,h=e.values,v=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.U)(),N=b.tabGroupChoices,M=b.setTabGroupChoices,E=(0,a.useState)(w),C=E[0],P=E[1],x=[],S=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var Z=N[v];null!=Z&&Z!==C&&k.some((function(e){return e.value===Z}))&&P(Z)}var I=function(e){var t=e.currentTarget,n=x.indexOf(t),o=k[n].value;o!==C&&(S(t),P(o),null!=v&&M(v,String(o)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,a=x.indexOf(e.currentTarget)+1;n=null!=(o=x[a])?o:x[0];break;case"ArrowLeft":var i,r=x.indexOf(e.currentTarget)-1;n=null!=(i=x[r])?i:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},g)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:A,onFocus:I,onClick:I},r,{className:(0,i.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),r?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,r.Z)();return a.createElement(p,(0,o.Z)({key:String(t)},e))}},32798:function(e){e.exports={siteHome:"https://moodle.academy/",courses:{setup:{id:29,name:"Set up your Moodle Development Environment",summary:"Learn about the Moodle developer community and setting up a development environment",description:"This course is designed for PHP developers who want to start developing Moodle plugins. You will learn about the Moodle developer community and set up a Moodle development environment. This is the first course in the Developer Pathway. Subsequent courses in the the Developer Pathway will build on the knowledge gained in this course.",tags:["development","basics","setup"],archived:!1,series:[]},securityEssentials:{id:53,name:"Moodle Access and Security Essentials",summary:"A short course looking at access control and security aspects of plugins.",description:"In this course we look at access control and security aspects of a plugin. Through a set of tutorials, you will learn how to control access to your plugin using Moodle's Access API. You will learn how to define capabilities in your plugin and how to determine if the user has the permission to access a page. This course also covers common security threats that developers need to be aware of.\n\nThis is the fourth course in the Moodle Developer Basics program.",tags:["development","basic","essentials","security","api"],archived:!1,series:["basics"]},outputEssentials:{id:49,name:"Web Output Essentials",summary:"Learn how to use Moodle's Page and Output APIs to display content in a local plugin.",description:"This course builds on the knowledge gained in the Moodle development environment course. In this course, we learn how to use Moodle's Page and Output APIs to display content in a local plugin. An introduction to localisation using language strings is also covered in this course. This is the second course in the Moodle developer pathway.",tags:["development","basics","essentials","output","api"],archived:!1,series:["basics"]},architecture:{id:51,name:"Moodle's Modular Architecture and APIs",summary:"Take a deeper look at Moodle's architecture, exploring common APIs including Navigations, Forms, Database, Upgrade, Strings, and Output.",description:"In this course we take a deeper look at Moodle's modular architecture and explore the use of common Moodle APIs. Some of the APIs covered in this course include: Navigation, Forms, Database access, Upgrade, Strings and Output APIs. Learners get hands-on practise on using these APIs in the form of developing a local plugin.\n\nThis is the third course in the Moodle Developer Basics program.",tags:["development","api","architecture"],archived:!1,series:["basics"]},pluginBasics:{id:10,name:"Moodle Plugin Development Basics",summary:"Learn about the essential concepts in Moodle's moduel architecture.",description:"This course teaches you essential concepts related to Moodle's modular architecture, enabling you to develop a simple demo plugin.\n\nPlease note, this course is being migrated to form a new program of short courses on Moodle Academy (called 'Moodle Developer Basics'), which will all be available at the end of April 2022. For now you may still complete the course on Learn Moodle, or you might like to start the Moodle Academy developer short courses that are being released over the coming weeks and will form this new beginner level program.",tags:["development","basics","essentials","api","plugins","architecture"],archived:!1,series:["basics"]}}}},50793:function(e,t,n){"use strict";n.d(t,{dn:function(){return C.Z},vL:function(){return E},U6:function(){return b},E2:function(){return P.Z},mQ:function(){return x.Z},Zh:function(){return M}});n(86134);var o=n(67294),a=n(87918),i=n(80102),r=n(83117),l=n(95408),s=n(98700),d=n(39707),c=n(59766),u=n(69348),p=n(54502),m=n(85893);const h=["component","direction","spacing","divider","children"];function v(e,t){const n=o.Children.toArray(e).filter(Boolean);return n.reduce(((e,a,i)=>(e.push(a),i<n.length-1&&e.push(o.cloneElement(t,{key:`separator-${i}`})),e)),[])}const g=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,r.Z)({display:"flex"},(0,l.k9)({theme:t},(0,l.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,s.hB)(t),a=Object.keys(t.breakpoints.values).reduce(((t,n)=>(null==e.spacing[n]&&null==e.direction[n]||(t[n]=!0),t)),{}),i=(0,l.P$)({values:e.direction,base:a}),r=(0,l.P$)({values:e.spacing,base:a}),d=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${a=n?i[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]}`]:(0,s.NA)(o,t)}};var a};n=(0,c.Z)(n,(0,l.k9)({theme:t},r,d))}return n})),f=o.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiStack"}),o=(0,d.Z)(n),{component:a="div",direction:l="column",spacing:s=0,divider:c,children:u}=o,f=(0,i.Z)(o,h),k={direction:l,spacing:s};return(0,m.jsx)(g,(0,r.Z)({as:a,ownerState:k,ref:t},f,{children:c?v(u,c):u}))}));var k=f,y=n(39960);function w(e,t,n){var i=function(e){return"number"==typeof e&&Number.isInteger(e)?e.toFixed(1):e}(t),r=o.createElement("span",null,function(e){if("since"===e)return"Since";if("deprecated"===e)return"Deprecated";throw new Error("Unknown <Since> type: '"+e+"'")}(e)," ",i),l=o.createElement(a.Z,{key:"chip-"+e+i,label:r,clickable:!!n});return n?o.createElement(y.Z,{to:"https://tracker.moodle.org/browse/"+n,key:"link-"+e+i},l):l}function b(e){var t,n,a,i,r,l,s,d,c,u=(n=(t=e).issueNumber,a=void 0===n?null:n,i=t.type,r=void 0===i?"since":i,l=t.versions,s=void 0===l?[]:l,d=t.version,(c=void 0===d?null:d)?w(r,c,a):s.map((function(e){return w(r,e,a)})));return o.createElement(k,{direction:"row",justifyContent:"flex-end",spacing:2},u)}var N=n(86010);function M(e){return o.createElement("div",{className:(0,N.Z)(" alert alert--success margin-bottom--lg ")},o.createElement("span",{className:(0,N.Z)(" badge badge--success ")},"An example of correct behaviour"),e.children)}function E(e){return o.createElement("div",{className:(0,N.Z)(" alert alert--danger margin-bottom--lg ")},o.createElement("span",{className:(0,N.Z)(" badge badge--danger ")},"An example of incorrect behaviour"),e.children)}n(80069);var C=n(46975),P=n(85162),x=n(65488)},86134:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(67294),a=n(69119),i=n(39960),r=n(88698),l=n(32798),s=n.n(l),d=n(80684);function c(e){var t=e.courseName;if(!s().courses[t])throw Error("Unknown course "+t);var n=s().courses[t];return o.createElement(a.Z,{type:"info",icon:o.createElement(r.Z,{fontSize:"inherit"}),title:"Learn more on Moodle Academy"},"You can learn more about"," ",o.createElement("strong",null,e.subject)," ","from the"," ",o.createElement(d.Z,{title:n.summary},o.createElement(i.Z,{to:s().siteHome+"course/view.php?id="+n.id},n.name))," ","on Moodle Academy.")}},80069:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(67294),a=n(87918),i=n(80684),r=n(86886),l=n(34673),s=n(3905),d=function(e,t,n){return void 0===n&&(n="info"),o.createElement(r.ZP,{item:!0,key:e},o.createElement(i.Z,{title:t},o.createElement(a.Z,{label:e,color:n})))};function c(e){var t=e.filepath,n=e.summary,a=function(e){var t=e.required,n=void 0!==t&&t,o=e.legacy,a=void 0!==o&&o,i=e.deprecated,r=void 0!==i&&i,l=e.refreshedDuringUpgrade,s=void 0!==l&&l,c=e.refreshedDuringPurge,u=void 0!==c&&c,p=[];return s&&p.push(d("Upgradable","Changes to this file or directory will be re-applied during a Moodle upgrade. If you make any changes to it, you can simply increment the version number and perform a Moodle upgrade.","info")),u&&p.push(d("Refreshed on cache purge","The contents of this file or directory are cached. To see your changes you can simply purge Moodle's caches and refresh the page.","info")),n&&p.push(d("Required","This file must be present","success")),a&&p.push(d("Legacy","Use of this file is being phased out. It is still supported for older installations but will be removed..","warning")),r&&p.push(d("Deprecated","Use of this file is deprecated and not recommended.It may still be provided for older versions of Moodle but is no longer used.","error")),p}(e),i=e.description?o.createElement(r.ZP,{item:!0,xs:12},e.description):null;return o.createElement(s.Zo,null,o.createElement(r.ZP,{container:!0,spacing:2},o.createElement(r.ZP,{item:!0,xs:6},o.createElement("h4",null,n)),o.createElement(r.ZP,{item:!0,xs:6},o.createElement(r.ZP,{container:!0,spacing:2,justifyContent:"flex-end"},a)),o.createElement(r.ZP,{item:!0,xs:12},o.createElement("h5",null,"File path:"," ",t)),i,function(e){var t=e.example,n=e.open,a=void 0!==n&&n;return t?o.createElement(r.ZP,{item:!0,xs:12},o.createElement(l.Z,{summary:o.createElement("summary",null,"View example"),open:a},t)):null}(e)))}}}]);