(function(){
  var d=document.documentElement,k="tasirs-lang",l;
  try{l=localStorage.getItem(k)}catch(e){}
  if(l!=="tr"&&l!=="en")l=(navigator.language||"en").toLowerCase().indexOf("tr")===0?"tr":"en";
  function set(v){d.setAttribute("data-lang",v);d.lang=v;try{localStorage.setItem(k,v)}catch(e){}}
  set(l);
  document.addEventListener("click",function(e){var b=e.target.closest("[data-set]");if(b)set(b.getAttribute("data-set"))});
})();
