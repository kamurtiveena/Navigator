!function(e){e.fn.fitVids=function(t){var r={customSelector:null},i=document.createElement("div"),a=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return i.className="fit-vids-style",i.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed,         .fluid-width-video-wrapper video {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",a.parentNode.insertBefore(i,a),t&&e.extend(r,t),this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']","object","embed"];r.customSelector&&t.push(r.customSelector);var i=e(this).find(t.join(","));i.each(function(){var t=e(this);if(!("embed"==this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){var r="object"==this.tagName.toLowerCase()?t.attr("height"):t.height(),i=r/t.width();if(!t.attr("id")){var a="fitvid"+Math.floor(999999*Math.random());t.attr("id",a)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*i+"%"),t.removeAttr("height").removeAttr("width")}})})}}(jQuery),function(e,t,r){function i(e){var t={},i=/^jQuery\d+$/;return r.each(e.attributes,function(e,r){r.specified&&!i.test(r.name)&&(t[r.name]=r.value)}),t}function a(e,i){var a=this,n=r(a);if(a.value==n.attr("placeholder")&&n.hasClass("placeholder"))if(n.data("placeholder-password")){if(n=n.hide().next().show().attr("id",n.removeAttr("id").data("placeholder-id")),e===!0)return n[0].value=i;n.focus()}else a.value="",n.removeClass("placeholder"),a==t.activeElement&&a.select()}function n(){var e,t=this,n=r(t),o=n,s=this.id;if(""==t.value){if("password"==t.type){if(!n.data("placeholder-textinput")){try{e=n.clone().attr({type:"text"})}catch(l){e=r("<input>").attr(r.extend(i(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":s}).bind("focus.placeholder",a),n.data({"placeholder-textinput":e,"placeholder-id":s}).before(e)}n=n.removeAttr("id").hide().prev().attr("id",s).show()}n.addClass("placeholder"),n[0].value=n.attr("placeholder")}else n.removeClass("placeholder")}var o="placeholder"in t.createElement("input"),s="placeholder"in t.createElement("textarea"),l=r.fn,c=r.valHooks,p,d;o&&s?(d=l.placeholder=function(){return this},d.input=d.textarea=!0):(d=l.placeholder=function(){var e=this;return e.filter((o?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":a,"blur.placeholder":n}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},d.input=o,d.textarea=s,p={get:function(e){var t=r(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,i){var o=r(e);return o.data("placeholder-enabled")?(""==i?(e.value=i,e!=t.activeElement&&n.call(e)):o.hasClass("placeholder")?a.call(e,!0,i)||(e.value=i):e.value=i,o):e.value=i}},o||(c.input=p),s||(c.textarea=p),r(function(){r(t).delegate("form","submit.placeholder",function(){var e=r(".placeholder",this).each(a);setTimeout(function(){e.each(n)},10)})}),r(e).bind("beforeunload.placeholder",function(){r(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),$("pre.lang-html, pre[rel=HTML]").find("code").addClass("language-markup"),$("code.html, code.lang-html").removeClass().addClass("language-markup").parent().attr("rel","HTML"),$("code.javascript").removeClass().addClass("language-javascript").attr("rel","JavaScript"),$("pre[rel=JavaScript], pre.lang-js, pre.JavaScript").attr("rel","JavaScript").find("code").removeClass().addClass("language-javascript"),$("pre[rel=jQuery]").find("code").removeClass().addClass("language-javascript"),$("pre[rel='CSS'], pre[rel='LESS'], pre[rel='Sass'], pre[rel='SASS'], pre[rel='SCSS']").find("code").removeClass().addClass("language-css"),$("code.css, code.lang-css").removeClass().addClass("language-css").parent().attr("rel","CSS"),$("pre[rel=PHP]").attr("rel","PHP").find("code").removeClass().addClass("language-javascript"),$("code.php").removeClass().addClass("language-javascript").parent().attr("rel","PHP"),function($){$.fn.markItUp=function(settings,extraSettings){var method,params,options,ctrlKey,shiftKey,altKey;return ctrlKey=shiftKey=altKey=!1,"string"==typeof settings&&(method=settings,params=extraSettings),options={id:"",nameSpace:"",root:"",previewHandler:!1,previewInWindow:"",previewInElement:"",previewAutoRefresh:!0,previewPosition:"after",previewTemplatePath:"~/templates/preview.html",previewParser:!1,previewParserPath:"",previewParserVar:"data",resizeHandle:!0,beforeInsert:"",afterInsert:"",onEnter:{},onShiftEnter:{},onCtrlEnter:{},onTab:{},markupSet:[{}]},$.extend(options,settings,extraSettings),options.root||$("script").each(function(e,t){miuScript=$(t).get(0).src.match(/(.*)jquery\.markitup(\.pack)?\.js$/),null!==miuScript&&(options.root=miuScript[1])}),this.each(function(){function localize(e,t){return t?e.replace(/("|')~\//g,"$1"+options.root):e.replace(/^~\//,options.root)}function init(){id="",nameSpace="",options.id?id='id="'+options.id+'"':$$.attr("id")&&(id='id="markItUp'+$$.attr("id").substr(0,1).toUpperCase()+$$.attr("id").substr(1)+'"'),options.nameSpace&&(nameSpace='class="'+options.nameSpace+'"'),$$.wrap("<div "+nameSpace+"></div>"),$$.wrap("<div "+id+' class="markItUp"></div>'),$$.wrap('<div class="markItUpContainer"></div>'),$$.addClass("markItUpEditor"),header=$('<div class="markItUpHeader"></div>').insertBefore($$),$(dropMenus(options.markupSet)).appendTo(header),footer=$('<div class="markItUpFooter"></div>').insertAfter($$),options.resizeHandle===!0&&$.browser.safari!==!0&&(resizeHandle=$('<div class="markItUpResizeHandle"></div>').insertAfter($$).bind("mousedown.markItUp",function(e){var t=$$.height(),r=e.clientY,i,a;i=function(e){return $$.css("height",Math.max(20,e.clientY+t-r)+"px"),!1},a=function(e){return $("html").unbind("mousemove.markItUp",i).unbind("mouseup.markItUp",a),!1},$("html").bind("mousemove.markItUp",i).bind("mouseup.markItUp",a)}),footer.append(resizeHandle)),$$.bind("keydown.markItUp",keyPressed).bind("keyup",keyPressed),$$.bind("insertion.markItUp",function(e,t){t.target!==!1&&get(),textarea===$.markItUp.focused&&markup(t)}),$$.bind("focus.markItUp",function(){$.markItUp.focused=this}),options.previewInElement&&refreshPreview()}function dropMenus(markupSet){var ul=$("<ul></ul>"),i=0;return $("li:hover > ul",ul).css("display","block"),$.each(markupSet,function(){var button=this,t="",title,li,j;if(title=button.key?(button.name||"")+" [Ctrl+"+button.key+"]":button.name||"",key=button.key?'accesskey="'+button.key+'"':"",button.separator)li=$('<li class="markItUpSeparator">'+(button.separator||"")+"</li>").appendTo(ul);else{for(i++,j=levels.length-1;j>=0;j--)t+=levels[j]+"-";li=$('<li class="markItUpButton markItUpButton'+t+i+" "+(button.className||"")+'"><a href="" '+key+' title="'+title+'">'+(button.name||"")+"</a></li>").bind("contextmenu.markItUp",function(){return!1}).bind("click.markItUp",function(){return!1}).bind("focusin.markItUp",function(){$$.focus()}).bind("mouseup",function(){return button.call&&eval(button.call)(),setTimeout(function(){markup(button)},1),!1}).bind("mouseenter.markItUp",function(){$("> ul",this).show(),$(document).one("click",function(){$("ul ul",header).hide()})}).bind("mouseleave.markItUp",function(){$("> ul",this).hide()}).appendTo(ul),button.dropMenu&&(levels.push(i),$(li).addClass("markItUpDropMenu").append(dropMenus(button.dropMenu)))}}),levels.pop(),ul}function magicMarkups(e){return e?(e=e.toString(),e=e.replace(/\(\!\(([\s\S]*?)\)\!\)/g,function(e,t){var r=t.split("|!|");return altKey===!0?void 0!==r[1]?r[1]:r[0]:void 0===r[1]?"":r[0]}),e=e.replace(/\[\!\[([\s\S]*?)\]\!\]/g,function(e,t){var r=t.split(":!:");return abort===!0?!1:(value=prompt(r[0],r[1]?r[1]:""),null===value&&(abort=!0),value)})):""}function prepare(e){return $.isFunction(e)&&(e=e(hash)),magicMarkups(e)}function build(e){var t=prepare(clicked.openWith),r=prepare(clicked.placeHolder),i=prepare(clicked.replaceWith),a=prepare(clicked.closeWith),n=prepare(clicked.openBlockWith),o=prepare(clicked.closeBlockWith),s=clicked.multiline;if(""!==i)block=t+i+a;else if(""===selection&&""!==r)block=t+r+a;else{e=e||selection;var l=[e],c=[];s===!0&&(l=e.split(/\r?\n/));for(var p=0;p<l.length;p++){line=l[p];var d;c.push((d=line.match(/ *$/))?t+line.replace(/ *$/g,"")+a+d:t+line+a)}block=c.join("\n")}return block=n+block+o,{block:block,openWith:t,replaceWith:i,placeHolder:r,closeWith:a}}function markup(e){var t,r,i,a;if(hash=clicked=e,get(),$.extend(hash,{line:"",root:options.root,textarea:textarea,selection:selection||"",caretPosition:caretPosition,ctrlKey:ctrlKey,shiftKey:shiftKey,altKey:altKey}),prepare(options.beforeInsert),prepare(clicked.beforeInsert),(ctrlKey===!0&&shiftKey===!0||e.multiline===!0)&&prepare(clicked.beforeMultiInsert),$.extend(hash,{line:1}),ctrlKey===!0&&shiftKey===!0){for(lines=selection.split(/\r?\n/),r=0,i=lines.length,a=0;i>a;a++)""!==$.trim(lines[a])?($.extend(hash,{line:++r,selection:lines[a]}),lines[a]=build(lines[a]).block):lines[a]="";string={block:lines.join("\n")},start=caretPosition,t=string.block.length+($.browser.opera?i-1:0)}else ctrlKey===!0?(string=build(selection),start=caretPosition+string.openWith.length,t=string.block.length-string.openWith.length-string.closeWith.length,t-=string.block.match(/ $/)?1:0,t-=fixIeBug(string.block)):shiftKey===!0?(string=build(selection),start=caretPosition,t=string.block.length,t-=fixIeBug(string.block)):(string=build(selection),start=caretPosition+string.block.length,t=0,start-=fixIeBug(string.block));""===selection&&""===string.replaceWith&&(caretOffset+=fixOperaBug(string.block),start=caretPosition+string.openWith.length,t=string.block.length-string.openWith.length-string.closeWith.length,caretOffset=$$.val().substring(caretPosition,$$.val().length).length,caretOffset-=fixOperaBug($$.val().substring(0,caretPosition))),$.extend(hash,{caretPosition:caretPosition,scrollPosition:scrollPosition}),string.block!==selection&&abort===!1?(insert(string.block),set(start,t)):caretOffset=-1,get(),$.extend(hash,{line:"",selection:selection}),(ctrlKey===!0&&shiftKey===!0||e.multiline===!0)&&prepare(clicked.afterMultiInsert),prepare(clicked.afterInsert),prepare(options.afterInsert),previewWindow&&options.previewAutoRefresh&&refreshPreview(),shiftKey=altKey=ctrlKey=abort=!1}function fixOperaBug(e){return $.browser.opera?e.length-e.replace(/\n*/g,"").length:0}function fixIeBug(e){return $.browser.msie?e.length-e.replace(/\r*/g,"").length:0}function insert(e){if(document.selection){var t=document.selection.createRange();t.text=e}else textarea.value=textarea.value.substring(0,caretPosition)+e+textarea.value.substring(caretPosition+selection.length,textarea.value.length)}function set(e,t){if(textarea.createTextRange){if($.browser.opera&&$.browser.version>=9.5&&0==t)return!1;range=textarea.createTextRange(),range.collapse(!0),range.moveStart("character",e),range.moveEnd("character",t),range.select()}else textarea.setSelectionRange&&textarea.setSelectionRange(e,e+t);textarea.scrollTop=scrollPosition,textarea.focus()}function get(){if(textarea.focus(),scrollPosition=textarea.scrollTop,document.selection)if(selection=document.selection.createRange().text,$.browser.msie){var e=document.selection.createRange(),t=e.duplicate();for(t.moveToElementText(textarea),caretPosition=-1;t.inRange(e);)t.moveStart("character"),caretPosition++}else caretPosition=textarea.selectionStart;else caretPosition=textarea.selectionStart,selection=textarea.value.substring(caretPosition,textarea.selectionEnd);return selection}function preview(){"function"==typeof options.previewHandler?previewWindow=!0:options.previewInElement?previewWindow=$(options.previewInElement):!previewWindow||previewWindow.closed?options.previewInWindow?(previewWindow=window.open("","preview",options.previewInWindow),$(window).unload(function(){previewWindow.close()})):(iFrame=$('<iframe class="markItUpPreviewFrame"></iframe>'),"after"==options.previewPosition?iFrame.insertAfter(footer):iFrame.insertBefore(header),previewWindow=iFrame[iFrame.length-1].contentWindow||frame[iFrame.length-1]):altKey===!0&&(iFrame?iFrame.remove():previewWindow.close(),previewWindow=iFrame=!1),options.previewAutoRefresh||refreshPreview(),options.previewInWindow&&previewWindow.focus()}function refreshPreview(){renderPreview()}function renderPreview(){var e;if(options.previewHandler&&"function"==typeof options.previewHandler)options.previewHandler($$.val());else if(options.previewParser&&"function"==typeof options.previewParser){var t=options.previewParser($$.val());writeInPreview(localize(t,1))}else""!==options.previewParserPath?$.ajax({type:"POST",dataType:"text",global:!1,url:options.previewParserPath,data:options.previewParserVar+"="+encodeURIComponent($$.val()),success:function(e){writeInPreview(localize(e,1))}}):template||$.ajax({url:options.previewTemplatePath,dataType:"text",global:!1,success:function(e){writeInPreview(localize(e,1).replace(/<!-- content -->/g,$$.val()))}});return!1}function writeInPreview(e){if(options.previewInElement)$(options.previewInElement).html(e);else if(previewWindow&&previewWindow.document){try{sp=previewWindow.document.documentElement.scrollTop}catch(t){sp=0}previewWindow.document.open(),previewWindow.document.write(e),previewWindow.document.close(),previewWindow.document.documentElement.scrollTop=sp}}function keyPressed(e){if(shiftKey=e.shiftKey,altKey=e.altKey,ctrlKey=e.altKey&&e.ctrlKey?!1:e.ctrlKey||e.metaKey,"keydown"===e.type){if(ctrlKey===!0&&(li=$('a[accesskey="'+(13==e.keyCode?"\\n":String.fromCharCode(e.keyCode))+'"]',header).parent("li"),0!==li.length))return ctrlKey=!1,setTimeout(function(){li.triggerHandler("mouseup")},1),!1;if(13===e.keyCode||10===e.keyCode)return ctrlKey===!0?(ctrlKey=!1,markup(options.onCtrlEnter),options.onCtrlEnter.keepDefault):shiftKey===!0?(shiftKey=!1,markup(options.onShiftEnter),options.onShiftEnter.keepDefault):(markup(options.onEnter),options.onEnter.keepDefault);if(9===e.keyCode)return 1==shiftKey||1==ctrlKey||1==altKey?!1:-1!==caretOffset?(get(),caretOffset=$$.val().length-caretOffset,set(caretOffset,0),caretOffset=-1,!1):(markup(options.onTab),options.onTab.keepDefault)}}function remove(){$$.unbind(".markItUp").removeClass("markItUpEditor"),$$.parent("div").parent("div.markItUp").parent("div").replaceWith($$),$$.data("markItUp",null)}var $$,textarea,levels,scrollPosition,caretPosition,caretOffset,clicked,hash,header,footer,previewWindow,template,iFrame,abort;if($$=$(this),textarea=this,levels=[],abort=!1,scrollPosition=caretPosition=0,caretOffset=-1,options.previewParserPath=localize(options.previewParserPath),options.previewTemplatePath=localize(options.previewTemplatePath),method)switch(method){case"remove":remove();break;case"insert":markup(params);break;default:$.error("Method "+method+" does not exist on jQuery.markItUp")}else init()})},$.fn.markItUpRemove=function(){return this.each(function(){$(this).markItUp("remove")})},$.markItUp=function(e){var t={target:!1};return $.extend(t,e),t.target?$(t.target).each(function(){$(this).focus(),$(this).trigger("insertion",[t])}):void $("textarea").trigger("insertion",[t])}}(jQuery);var csstricks={el:{body:$("body"),allInputs:$("input, textarea"),videoWrappers:$("article, .photo-grid, .single-video-wrapper, .gallery-grid .grid-5-6"),readArticleButtons:$(".read-article")},timer:0,init:function(){csstricks.bindUIActions(),csstricks.makeVideosFluidWidth(),csstricks.polyfillPlaceholders(),csstricks.expireDownloadLinks(),csstricks.insertMarkdownButtons(),$(window).width()>1e3&&$.getScript(__templatePath+"/js/min/mega-mustard-ck.js")},bindUIActions:function(){$("#comments").on("click",".comment.buried",csstricks.revealComment),csstricks.el.readArticleButtons.on("mouseenter",csstricks.addReadState),csstricks.el.readArticleButtons.on("mouseleave",csstricks.removeReadState)},makeVideosFluidWidth:function(){csstricks.el.videoWrappers.fitVids({customSelector:"video"})},polyfillPlaceholders:function(){csstricks.el.allInputs.placeholder()},revealComment:function(e){$(e.target).removeClass("buried")},revealCommentsArea:function(e){e.preventDefault(),csstricks.el.commentsArea.show(),csstricks.el.viewCommentsButton.hide()},expireDownloadLinks:function(){setTimeout(function(){$(".expire-message").html("<p>Link(s) expired. Refresh the page to renew.</p>")},18e4)},insertMarkdownButtons:function(){var e={previewParserPath:"",onShiftEnter:{keepDefault:!1,openWith:"\n\n"},markupSet:[{name:"Bold",key:"B",openWith:"**",closeWith:"**"},{name:"Italic",key:"I",openWith:"_",closeWith:"_"},{name:"Link",key:"L",openWith:"[",closeWith:']([![Url:!:http://]!] "[![Title]!]")',placeHolder:"Your text to link here..."},{name:"Quote",openWith:"> "},{name:"Inline Code",key:"",openWith:"`",closeWith:"`"},{name:"Block Code",replaceWith:function(e){var t=e.selection,r=t.split("\n"),i="	"+r.join("\n	");return i}}]};miu={markdownTitle:function(e,t){for(heading="",n=$.trim(e.selection||e.placeHolder).length,i=0;n>i;i++)heading+=t;return"\n"+heading}},$("#comment, #bbp_reply_content, #bbp_topic_content").markItUp(e)},addReadState:function(e){$(e.target).closest("article").addClass("gonna-read")},removeReadState:function(e){$(e.target).closest("article").removeClass("gonna-read")}};csstricks.init(),function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={languages:{insertBefore:function(e,r,i,a){a=a||t.languages;var n=a[e],o={};for(var s in n)if(n.hasOwnProperty(s)){if(s==r)for(var l in i)i.hasOwnProperty(l)&&(o[l]=i[l]);o[s]=n[s]}return a[e]=o},DFS:function(e,r){for(var i in e)r.call(e,i,e[i]),"[object Object]"===Object.prototype.toString.call(e)&&t.languages.DFS(e[i],r)}},highlightAll:function(e,r){for(var i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),a=0,n;n=i[a++];)t.highlightElement(n,e===!0,r)},highlightElement:function(i,a,n){for(var o,s,l=i;l&&!e.test(l.className);)l=l.parentNode;if(l&&(o=(l.className.match(e)||[,""])[1],s=t.languages[o]),s){i.className=i.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=i.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c=i.textContent.trim();if(c){c=c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00a0/g," ");var p={element:i,language:o,grammar:s,code:c};if(t.hooks.run("before-highlight",p),a&&self.Worker){var d=new Worker(t.filename);d.onmessage=function(e){p.highlightedCode=r.stringify(JSON.parse(e.data)),p.element.innerHTML=p.highlightedCode,n&&n.call(p.element),t.hooks.run("after-highlight",p)},d.postMessage(JSON.stringify({language:p.language,code:p.code}))}else p.highlightedCode=t.highlight(p.code,p.grammar),p.element.innerHTML=p.highlightedCode,n&&n.call(i),t.hooks.run("after-highlight",p)}}},highlight:function(e,i){return r.stringify(t.tokenize(e,i))},tokenize:function(e,r){var i=t.Token,a=[e],n=r.rest;if(n){for(var o in n)r[o]=n[o];delete r.rest}e:for(var o in r)if(r.hasOwnProperty(o)&&r[o]){var s=r[o],l=s.inside,c=!!s.lookbehind||0;s=s.pattern||s;for(var p=0;p<a.length;p++){var d=a[p];if(a.length>e.length)break e;if(!(d instanceof i)){s.lastIndex=0;var u=s.exec(d);if(u){c&&(c=u[1].length);var g=u.index-1+c,u=u[0].slice(c),h=u.length,m=g+h,f=d.slice(0,g+1),v=d.slice(m+1),w=[p,1];f&&w.push(f);var k=new i(o,l?t.tokenize(u,l):u);w.push(k),v&&w.push(v),Array.prototype.splice.apply(a,w)}}}}return a},hooks:{all:{},add:function(e,r){var i=t.hooks.all;i[e]=i[e]||[],i[e].push(r)},run:function(e,r){var i=t.hooks.all[e];if(i&&i.length)for(var a=0,n;n=i[a++];)n(r)}}},r=t.Token=function(e,t){this.type=e,this.content=t};if(r.stringify=function(e){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e)){for(var i=0;i<e.length;i++)e[i]=r.stringify(e[i]);return e.join("")}var a={type:e.type,content:r.stringify(e.content),tag:"span",classes:["token",e.type],attributes:{}};"comment"==a.type&&(a.attributes.spellcheck="true"),t.hooks.run("wrap",a);var n="";for(var o in a.attributes)n+=o+'="'+(a.attributes[o]||"")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'" '+n+">"+a.content+"</"+a.tag+">"},!self.document)return void self.addEventListener("message",function(e){var r=JSON.parse(e.data),i=r.language,a=r.code;self.postMessage(JSON.stringify(t.tokenize(a,t.languages[i]))),self.close()},!1);var i=document.getElementsByTagName("script");i=i[i.length-1],i&&(t.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll))}(),Prism.languages.markup={comment:/&lt;!--[\w\W]*?--(&gt;|&gt;)/g,prolog:/&lt;\?.+?\?&gt;/,doctype:/&lt;!DOCTYPE.+?&gt;/,cdata:/&lt;!\[CDATA\[[\w\W]+?]]&gt;/i,tag:{pattern:/&lt;\/?[\w:-]+\s*[\w\W]*?&gt;/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(('|")[\w\W]*?(\2)|[^\s>]+)/gi,inside:{punctuation:/=/g}},punctuation:/\/?&gt;/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:/@[\w-]+?(\s+.+)?(?=\s*{|\s*;)/gi,url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\}]*(?=\s*\{)/g,property:/(\b|\B)[a-z-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.javascript={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0},keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,number:/\b-?(0x)?\d*\.?\d+\b/g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}});