import{s as yt,d as kt,n as pt,r as jt,e as _t}from"../chunks/scheduler.-QYja3iY.js";import{S as Dt,i as It,e as r,s as D,b as c,j as b,d,f as I,g as J,h as y,o as lt,a as st,k as e,p as mt,q as et,r as gt,t as z,c as Y,l as $,u as wt}from"../chunks/index.Dg2knHX7.js";function at(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}async function Mt({fetch:n}){const t=await n("https://dummyjson.com/products"),{products:a}=await t.json();return{products:a}}const Ot=Object.freeze(Object.defineProperty({__proto__:null,load:Mt},Symbol.toStringTag,{value:"Module"}));function bt(n,t,a){const h=n.slice();return h[11]=t[a],h}function Ct(n,t,a){const h=n.slice();return h[14]=t[a],h}function Tt(n){let t,a=n[14]+"",h,i;return{c(){t=r("option"),h=z(a),this.h()},l(v){t=c(v,"OPTION",{});var o=b(t);h=Y(o,a),o.forEach(d),this.h()},h(){t.__value=i=n[14],lt(t,t.__value)},m(v,o){st(v,t,o),e(t,h)},p(v,o){o&4&&a!==(a=v[14]+"")&&$(h,a),o&4&&i!==(i=v[14])&&(t.__value=i,lt(t,t.__value))},d(v){v&&d(t)}}}function Et(n){let t,a,h='<label><input type="checkbox" class="checkbox"/></label>',i,v,o,p,F,w,j,x,M,T,C=n[11].title+"",_,S,E,O=n[11].category+"",R,U,k,A=n[11].description+"",N,K,G,Q,H,f=n[11].warrantyInformation+"",B,m,s,u,l=n[11].price+"",L,Z,W,P,tt='<button class="btn"><svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#0000FF" stroke-width="1.5"></path><path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#0000FF" stroke-width="1.5"></path><path d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7" stroke="#0000FF" stroke-width="1.5" stroke-linecap="round"></path></svg></button>',q;return{c(){t=r("tr"),a=r("th"),a.innerHTML=h,i=D(),v=r("td"),o=r("div"),p=r("div"),F=r("div"),w=r("img"),x=D(),M=r("div"),T=r("div"),_=z(C),S=D(),E=r("div"),R=z(O),U=D(),k=r("td"),N=z(A),K=D(),G=r("br"),Q=D(),H=r("span"),B=z(f),m=D(),s=r("td"),u=r("strong"),L=z(l),Z=z(" $"),W=D(),P=r("th"),P.innerHTML=tt,q=D(),this.h()},l(V){t=c(V,"TR",{});var g=b(t);a=c(g,"TH",{"data-svelte-h":!0}),J(a)!=="svelte-1v5h1vo"&&(a.innerHTML=h),i=I(g),v=c(g,"TD",{});var ct=b(v);o=c(ct,"DIV",{class:!0});var nt=b(o);p=c(nt,"DIV",{class:!0});var it=b(p);F=c(it,"DIV",{class:!0});var ht=b(F);w=c(ht,"IMG",{src:!0,alt:!0}),ht.forEach(d),it.forEach(d),x=I(nt),M=c(nt,"DIV",{});var ot=b(M);T=c(ot,"DIV",{class:!0});var ut=b(T);_=Y(ut,C),ut.forEach(d),S=I(ot),E=c(ot,"DIV",{class:!0});var dt=b(E);R=Y(dt,O),dt.forEach(d),ot.forEach(d),nt.forEach(d),ct.forEach(d),U=I(g),k=c(g,"TD",{});var X=b(k);N=Y(X,A),K=I(X),G=c(X,"BR",{}),Q=I(X),H=c(X,"SPAN",{class:!0});var ft=b(H);B=Y(ft,f),ft.forEach(d),X.forEach(d),m=I(g),s=c(g,"TD",{});var vt=b(s);u=c(vt,"STRONG",{});var rt=b(u);L=Y(rt,l),Z=Y(rt," $"),rt.forEach(d),vt.forEach(d),W=I(g),P=c(g,"TH",{"data-svelte-h":!0}),J(P)!=="svelte-1rc88bg"&&(P.innerHTML=tt),q=I(g),g.forEach(d),this.h()},h(){_t(w.src,j=n[11].thumbnail)||y(w,"src",j),y(w,"alt","Avatar Tailwind CSS Component"),y(F,"class","mask mask-squircle h-12 w-12"),y(p,"class","avatar"),y(T,"class","font-bold"),y(E,"class","text-sm opacity-50"),y(o,"class","flex items-center gap-3"),y(H,"class","badge badge-ghost badge-sm")},m(V,g){st(V,t,g),e(t,a),e(t,i),e(t,v),e(v,o),e(o,p),e(p,F),e(F,w),e(o,x),e(o,M),e(M,T),e(T,_),e(M,S),e(M,E),e(E,R),e(t,U),e(t,k),e(k,N),e(k,K),e(k,G),e(k,Q),e(k,H),e(H,B),e(t,m),e(t,s),e(s,u),e(u,L),e(u,Z),e(t,W),e(t,P),e(t,q)},p(V,g){g&1&&!_t(w.src,j=V[11].thumbnail)&&y(w,"src",j),g&1&&C!==(C=V[11].title+"")&&$(_,C),g&1&&O!==(O=V[11].category+"")&&$(R,O),g&1&&A!==(A=V[11].description+"")&&$(N,A),g&1&&f!==(f=V[11].warrantyInformation+"")&&$(B,f),g&1&&l!==(l=V[11].price+"")&&$(L,l)},d(V){V&&d(t)}}}function Ht(n){let t,a,h,i,v,o,p,F="Category",w,j,x="Search",M,T,C="Clear filters",_,S,E,O,R='<tr><th><label><input type="checkbox" class="checkbox"/></label></th> <th>Product</th> <th>Description</th> <th>Price</th> <th></th></tr>',U,k,A,N,K="<tr><th></th> <th>Product</th> <th>Description</th> <th>Price</th> <th></th></tr>",G,Q,H=at(n[2]),f=[];for(let s=0;s<H.length;s+=1)f[s]=Tt(Ct(n,H,s));let B=at(n[0].products),m=[];for(let s=0;s<B.length;s+=1)m[s]=Et(bt(n,B,s));return{c(){t=r("div"),a=r("div"),h=r("div"),i=r("input"),v=D(),o=r("select"),p=r("option"),p.textContent=F;for(let s=0;s<f.length;s+=1)f[s].c();w=D(),j=r("button"),j.textContent=x,M=D(),T=r("button"),T.textContent=C,_=D(),S=r("div"),E=r("table"),O=r("thead"),O.innerHTML=R,U=D(),k=r("tbody");for(let s=0;s<m.length;s+=1)m[s].c();A=D(),N=r("tfoot"),N.innerHTML=K,this.h()},l(s){t=c(s,"DIV",{class:!0});var u=b(t);a=c(u,"DIV",{});var l=b(a);h=c(l,"DIV",{});var L=b(h);i=c(L,"INPUT",{class:!0,placeholder:!0}),L.forEach(d),l.forEach(d),v=I(u),o=c(u,"SELECT",{class:!0});var Z=b(o);p=c(Z,"OPTION",{"data-svelte-h":!0}),J(p)!=="svelte-g106q7"&&(p.textContent=F);for(let q=0;q<f.length;q+=1)f[q].l(Z);Z.forEach(d),w=I(u),j=c(u,"BUTTON",{class:!0,"data-svelte-h":!0}),J(j)!=="svelte-tlkhtf"&&(j.textContent=x),M=I(u),T=c(u,"BUTTON",{class:!0,"data-svelte-h":!0}),J(T)!=="svelte-320ugt"&&(T.textContent=C),u.forEach(d),_=I(s),S=c(s,"DIV",{class:!0});var W=b(S);E=c(W,"TABLE",{class:!0});var P=b(E);O=c(P,"THEAD",{"data-svelte-h":!0}),J(O)!=="svelte-dsht7m"&&(O.innerHTML=R),U=I(P),k=c(P,"TBODY",{});var tt=b(k);for(let q=0;q<m.length;q+=1)m[q].l(tt);tt.forEach(d),A=I(P),N=c(P,"TFOOT",{"data-svelte-h":!0}),J(N)!=="svelte-b54eci"&&(N.innerHTML=K),P.forEach(d),W.forEach(d),this.h()},h(){y(i,"class","input input-bordered join-item"),y(i,"placeholder","Search"),p.disabled=!0,p.selected=!0,p.__value="Category",lt(p,p.__value),y(o,"class","select select-bordered join-item"),n[3]===void 0&&kt(()=>n[8].call(o)),y(j,"class","btn join-item"),y(T,"class","btn btn-info join-item"),y(t,"class","join flex justify-center"),y(E,"class","table"),y(S,"class","overflow-x-auto")},m(s,u){st(s,t,u),e(t,a),e(a,h),e(h,i),lt(i,n[1]),e(t,v),e(t,o),e(o,p);for(let l=0;l<f.length;l+=1)f[l]&&f[l].m(o,null);mt(o,n[3],!0),e(t,w),e(t,j),e(t,M),e(t,T),st(s,_,u),st(s,S,u),e(S,E),e(E,O),e(E,U),e(E,k);for(let l=0;l<m.length;l+=1)m[l]&&m[l].m(k,null);e(E,A),e(E,N),G||(Q=[et(i,"input",n[7]),et(i,"keypress",n[5]),et(o,"change",n[8]),et(j,"click",n[4]),et(T,"click",n[6])],G=!0)},p(s,[u]){if(u&2&&i.value!==s[1]&&lt(i,s[1]),u&4){H=at(s[2]);let l;for(l=0;l<H.length;l+=1){const L=Ct(s,H,l);f[l]?f[l].p(L,u):(f[l]=Tt(L),f[l].c(),f[l].m(o,null))}for(;l<f.length;l+=1)f[l].d(1);f.length=H.length}if(u&12&&mt(o,s[3]),u&1){B=at(s[0].products);let l;for(l=0;l<B.length;l+=1){const L=bt(s,B,l);m[l]?m[l].p(L,u):(m[l]=Et(L),m[l].c(),m[l].m(k,null))}for(;l<m.length;l+=1)m[l].d(1);m.length=B.length}},i:pt,o:pt,d(s){s&&(d(t),d(_),d(S)),gt(f,s),gt(m,s),G=!1,jt(Q)}}}function Lt(n,t,a){let{data:h}=t,i="",v=[],o;function p(C){fetch(C).then(_=>_.json()).then(_=>{a(0,h.products=_.products,h)})}function F(){console.log("IFFF",o),i?p(`https://dummyjson.com/products/search?q=${i}`):j(o)}function w(C){C.key==="Enter"&&F()}(function(){fetch("https://dummyjson.com/products/category-list").then(_=>_.json()).then(function(_){a(2,v=_)})})();function j(C){fetch(`https://dummyjson.com/products/category/${C}`).then(_=>_.json()).then(_=>{a(0,h.products=_.products,h)})}function x(){a(1,i=""),a(3,o="Category"),p("https://dummyjson.com/products")}function M(){i=this.value,a(1,i)}function T(){o=wt(this),a(3,o),a(2,v)}return n.$$set=C=>{"data"in C&&a(0,h=C.data)},n.$$.update=()=>{n.$$.dirty&2&&i===""&&p("https://dummyjson.com/products")},[h,i,v,o,F,w,x,M,T]}class Vt extends Dt{constructor(t){super(),It(this,t,Lt,Ht,yt,{data:0})}}export{Vt as component,Ot as universal};