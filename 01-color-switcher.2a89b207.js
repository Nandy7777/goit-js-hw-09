const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){n.start()})),e.addEventListener("click",(function(t){n.stop()}));const n={intervalId:null,start(){t.disabled=!0,e.disabled=!1,this.intervalId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)},stop(){clearInterval(this.intervalId),t.disabled=!1,e.disabled=!0}};
//# sourceMappingURL=01-color-switcher.2a89b207.js.map