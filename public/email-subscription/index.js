!function(){"use strict";function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n(r.key),r)}}function t(e,t,a){return(t=n(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}const a=e=>0===(e=String(e)).length?"":e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"}[e]))),r=(e,...t)=>{if(0===(e=String(e)).length)return"";return((e,t,...n)=>{let a=(e,t)=>(t.forEach(((t,n)=>{e=e.replace("%"+(n+1)+"$",t)})),e);return void 0===window.i18n||void 0===window.i18n.state.locale.values[e]?a(e,n):a(t(window.i18n.state.locale.values[e]),n)})(e,(e=>e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"}[e])))),...t)},o=()=>{let e=new URLSearchParams(window.location.search);return e.get("sid")?e.get("sid"):""},i=e=>{let t=e+"=",n=decodeURIComponent(document.cookie).split(";");for(let e=0;e<n.length;e++){let a=n[e];for(;" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""};i("kenzap_api_key"),i("locale")&&i("locale"),(()=>{let e=localStorage.hasOwnProperty("header")&&localStorage.hasOwnProperty("header-version")?localStorage.getItem("header-version"):0,t=window.location.hostname+"/"+o()+"/"+i("locale");t!=i("check")&&(e=0,console.log("refresh")),((e,t,n)=>{let a="";if(n){let e=new Date;e.setTime(e.getTime()+24*n*60*60*1e3),a=";expires="+e.toUTCString()}document.cookie=e+"="+(escape(t)||"")+a+";path=/;domain=.kenzap.cloud"})("check",t,5)})(),i("kenzap_token"),o();var c,l,s,d=(c=function e(n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t(this,"render",(function(){var e,t,n,i,c,l;document.querySelector("#content").insertAdjacentHTML("beforeend",'\n        <section id="'.concat(a(o.data.id),'" \n            class="kqaUcT ').concat(o.data.c.classes?a(o.data.c.classes):"",'" \n            style="\n            ').concat(o.data.c.section,";\n            ").concat(o.data.bgimage?"background-image:url("+o.data.bgimage.value+");":"","\n            ").concat(o.data.borderstyle.value?"--borderStyle:"+o.data.borderstyle.value+"px;":"","\n            ").concat("--bgcolor:"+o.data.bgcolor.value,";\n            ").concat("--bgcolora:"+(t=o.data.bgcolor.value,n=parseInt(o.data.bgcolorintensity.value)/100,4==t.length?(i=parseInt(t.slice(1,2)+t.slice(1,2),16),c=parseInt(t.slice(2,3)+t.slice(2,3),16),l=parseInt(t.slice(3,4)+t.slice(3,4),16)):(i=parseInt(t.slice(1,3),16),c=parseInt(t.slice(3,5),16),l=parseInt(t.slice(5,7),16)),n?"rgba("+i+", "+c+", "+l+", "+n+")":"rgb("+i+", "+c+", "+l+")"),';\n            ">\n            <div class="container" style="').concat(o.data.c.container,'">\n              <div class="kp-content">\n                ').concat(o.data.header.value,'\n                <div class="kp-form">\n                  <div class="wrapper">\n                    <input type="email" placeholder="').concat(r("Your e-mail address"),'">\n                    <input type="submit" value="').concat(a(o.data.ctatext.value),'">\n                  </div>\n                  <label>\n                    <input type="checkbox" name="condition" value="Yes">').concat((e=o.data.termstext.value,0===(e=String(e)).length?"":e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"}[e])))),"\n                  </label>\n                </div>\n              </div>\n            </div>\n        </section>\n        ")),o.listeners()})),t(this,"listeners",(function(){})),this.data=n,this.render()},l&&e(c.prototype,l),s&&e(c,s),Object.defineProperty(c,"prototype",{writable:!1}),c);window.kqaUcT=d}();
