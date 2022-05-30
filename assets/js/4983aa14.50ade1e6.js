"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[25533],{84723:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return u},toc:function(){return m}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 3.0.6",tags:["Release notes","Moodle 3.0"],sidebar_position:6,moodleVersion:"3.0.6"},d=void 0,u={unversionedId:"releases/3.0/3.0.6",id:"releases/3.0/3.0.6",title:"Moodle 3.0.6",description:"Release date: 12 September 2016",source:"@site/general/releases/3.0/3.0.6.md",sourceDirName:"releases/3.0",slug:"/releases/3.0/3.0.6",permalink:"/devdocs/general/releases/3.0/3.0.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.0/3.0.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.0",permalink:"/devdocs/general/tags/moodle-3-0"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653898853,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:6,frontMatter:{title:"Moodle 3.0.6",tags:["Release notes","Moodle 3.0"],sidebar_position:6,moodleVersion:"3.0.6"},sidebar:"releaseNotes",previous:{title:"Moodle 3.0.5",permalink:"/devdocs/general/releases/3.0/3.0.5"},next:{title:"Moodle 3.0.7",permalink:"/devdocs/general/releases/3.0/3.0.7"}},p={},m=[{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:m};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 12 September 2016"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.0.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.0.6"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37250"},"MDL-37250")," - Lessons: save students attempts if they timeout"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50586"},"MDL-50586")," - Warn teachers about removing level 0 in rubrics as it leads to unexpected grades."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41174"},"MDL-41174")," - Update the calendar event when inline changing activity name or duplicating activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33741"},"MDL-33741")," - Allow teacher to access course files in hidden categories using Server files repository in filepicker")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=339631"},"MSA-16-0022")," Web service tokens should be invalidated when the user password is changed or forced to be changed")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55312"},"MDL-55312")," - Bugfix: Load timeout for modules: core/first occurs after purge caches"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55292"},"MDL-55292")," - Include tideways profiler along with xhprof for PHP7 profiling"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54892"},"MDL-54892")," - Uninstall scheduled tasks when plugin is uninstalled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-22183"},"MDL-22183")," - Prevent stats from running later and later - use scheduled task time only"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47371"},"MDL-47371"),' - Bugfix: The character & is displayed as " & amp ; " in book module'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52544"},"MDL-52544")," - Resolved problems of Oracle driver in PHP7 environment"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51078"},"MDL-51078"),' - Add "All changes" option to the Action selector in report_log (was present in 2.6 and removed in 2.7+)'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52105"},"MDL-52105")," - Remove CAP_PROHIBIT in manager role for capability 'enrol/self:holdkey'"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54847"},"MDL-54847")," - Allow students to insert HTML audio and video tags"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55273"},"MDL-55273")," - Default setting for cookiesecure should be on")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.0.6"},"Notes de mise \xe0 jour de Moodle 3.0.6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.0.6"},"Notas de Moodle 3.0.6"))))}h.isMDXComponent=!0}}]);