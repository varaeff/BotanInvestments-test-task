import{d as i,r as l,o as u,a as _,b as p,c as f,g as m,e as n,t as v,f as a,_ as h}from"./index-B0r7zo2k.js";const g={class:"about"},b={key:0,class:"loader"},y={key:1},k=i({__name:"AdminView",setup(I){const s=l(0),c=l(!1);let t=null;u(()=>{r(),t=setInterval(r,1e4)}),_(()=>{t&&clearInterval(t)});async function r(){try{const e=p(f,"onboarding/completed"),o=(await m(e)).val();s.value=(o==null?void 0:o.count)||0,c.value=!0}catch(e){console.error("Error during getting counter: ",e)}}return(e,d)=>(a(),n("div",g,[c.value?(a(),n("h1",y,"The onboarding process completed "+v(s.value)+" times",1)):(a(),n("div",b))]))}}),x=h(k,[["__scopeId","data-v-cafd730a"]]);export{x as default};