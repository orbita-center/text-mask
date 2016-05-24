!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular2/common"),require("angular2/core")):"function"==typeof define&&define.amd?define(["angular2/common","angular2/core"],t):"object"==typeof exports?exports.textMask=t(require("angular2/common"),require("angular2/core")):e.textMask=t(e.ng.common,e.ng.core)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,i=3>a?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(3>a?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},o=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},a=r(3),i=r(8),u=r(7),c=function(){function e(e,t){this.model=t,this.textMaskConfig={mask:"",guide:!0},this.inputElement=e.nativeElement}return e.prototype.ngOnInit=function(e){var t=(void 0===e?{}:e).mask,r=void 0===t?this.textMaskConfig.mask:t;this.conformedInput="",this.placeholder=a.convertMaskToPlaceholder(r),this.originalPlaceholder=void 0!==this.originalPlaceholder?this.originalPlaceholder:this.placeholder},e.prototype.ngOnChanges=function(e){var t=e.textMaskConfig,r=t.currentValue.mask,n=t.previousValue.mask,o=t.currentValue.guide,a=t.previousValue.guide;r===n&&o===a||(this.ngOnInit({mask:r}),this.model.valueAccessor.writeValue(""))},e.prototype.onInput=function(e){void 0===e&&(e="");var t=this,r=t.textMaskConfig,n=r.mask,o=r.guide,i=t.placeholder,u=t.conformedInput,c=a.conformToMask(e,n,o===!1?{guide:o,previousConformedInput:u}:{}),l=c.output,s=a.adjustCaretPosition({previousConformedInput:u,conformToMaskResults:c,currentCaretPosition:this.inputElement.selectionStart}),f=l===i&&0===s?"":l;this.conformedInput=f,this.model.valueAccessor.writeValue(f),a.safeSetSelection(this.inputElement,s)},e.prototype.updateModel=function(e){this.model.viewToModelUpdate(e)},n([i.Input("textMask"),o("design:type",Object)],e.prototype,"textMaskConfig",void 0),e=n([i.Directive({selector:"input[textMask][ngModel]",host:{"[placeholder]":"originalPlaceholder","(input)":"onInput($event.target.value)","(keyup)":"updateModel($event.target.value)"}}),o("design:paramtypes",[i.ElementRef,u.NgModel])],e)}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=c,t.Directive=c;var l=r(3);t.conformToMask=l.conformToMask,t.convertMaskToPlaceholder=l.convertMaskToPlaceholder,t.adjustCaretPosition=l.adjustCaretPosition},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderCharacter="_"},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return o(e).map(function(e){return-1!==s.maskingCharacters.indexOf(e)?s.placeholderCharacter:e}).join("")}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case s.maskingCharactersEnums.numeric:return u(e);case s.maskingCharactersEnums.uppercase:case s.maskingCharactersEnums.lowercase:case s.maskingCharactersEnums.alphabetic:return c(e);case s.maskingCharactersEnums.alphanumeric:return u(e)||c(e);case s.maskingCharactersEnums.any:return!0;default:return!1}}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case s.maskingCharactersEnums.uppercase:return e.toUpperCase();case s.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function u(e){return!isNaN(e)&&" "!==e}function c(e){return/^[a-zA-Z]+$/.test(e)}function l(e,t){for(var r=e.length>t.length?e.length:t.length,n=0;r>n;n++)if(e[n]!==t[n])return n;return null}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.tokenize=o,t.isAcceptableCharacter=a,t.potentiallyTransformCharacter=i,t.getIndexOfFirstChange=l;var s=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(5);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(o)["default"]}});var a=r(4);Object.defineProperty(t,"adjustCaretPosition",{enumerable:!0,get:function(){return n(a)["default"]}});var i=r(6);Object.defineProperty(t,"safeSetSelection",{enumerable:!0,get:function(){return n(i)["default"]}});var u=r(2);Object.defineProperty(t,"convertMaskToPlaceholder",{enumerable:!0,get:function(){return u.convertMaskToPlaceholder}})},function(e,t,r){"use strict";function n(e){var t=e.previousConformedInput,r=void 0===t?"":t,n=e.conformToMaskResults,i=void 0===n?{}:n,u=e.currentCaretPosition,c=void 0===u?0:u;if(0===c)return 0;var l=i.output,s=void 0===l?"":l,f=i.meta,d=void 0===f?{}:f,h=d.input,p=void 0===h?"":h,m=d.mask,v=void 0===m?"":m,g=(0,o.getIndexOfFirstChange)(r,p),k=g-c>1;if(k)return c;var C=(0,o.convertMaskToPlaceholder)(v),y=!(p.length<r.length),M=Math.abs(r.length-p.length)>1,b=y&&(r===s||s===C),P=""===r&&s===C,j=M?s:C,x=C[g]!==a.placeholderCharacter,O=c;if(M)O=0;else if(b)O--;else if(y)for(var _=c;_<C.length;_++){var T=x&&P===!1;if(C[_]===a.placeholderCharacter){O=_+(T?1:0);break}}if(y){for(var E=O;E<=j.length;E++)if(j[E]===a.placeholderCharacter||E===j.length)return E>s.length?s.length:E}else for(var A=O;A>=0;A--)if(j[A-1]===a.placeholderCharacter||0===A)return A}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var o=r(2),a=r(1)},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=r.guide,i=void 0===n?!0:n,u=r.previousConformedInput,c=(0,o.convertMaskToPlaceholder)(t),l=i===!1&&void 0!==u,s=(0,o.tokenize)(e),f=l&&!(e.length<u.length),d="";e:for(var h=0;h<c.length;h++){var p=c[h];if(p===a.placeholderCharacter){if(s.length>0)for(;s.length>0;){var m=s.shift();if(m===a.placeholderCharacter&&l!==!0){d+=a.placeholderCharacter;continue e}if((0,o.isAcceptableCharacter)(m,t[h])){d+=(0,o.potentiallyTransformCharacter)(m,t[h]);continue e}}l===!1&&(d+=c.substr(h,c.length));break}p===e[h]&&s.shift(),d+=p}if(l&&f===!1){for(var v=null,g=0;g<d.length;g++)c[g]===a.placeholderCharacter&&(v=g);d=null!==v?d.substr(0,v+1):""}return{output:d,meta:{input:e,mask:t,guide:i}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var o=r(2),a=r(1)},function(e,t){"use strict";function r(e,t){document.activeElement===e&&e.setSelectionRange(t,t,"none")}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(t,r){t.exports=e},function(e,r){e.exports=t}])});