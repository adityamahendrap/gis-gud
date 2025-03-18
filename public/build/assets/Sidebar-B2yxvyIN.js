import{r as n,j as e,$ as g}from"./app-BcsoSToc.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=(...s)=>s.filter((t,r,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=n.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:a="",children:i,iconNode:h,...x},m)=>n.createElement("svg",{ref:m,...y,width:t,height:t,stroke:s,strokeWidth:o?Number(r)*24/Number(t):r,className:d("lucide",a),...x},[...h.map(([u,p])=>n.createElement(u,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(s,t)=>{const r=n.forwardRef(({className:o,...a},i)=>n.createElement(b,{ref:i,iconNode:t,className:d(`lucide-${f(s)}`,o),...a}));return r.displayName=`${s}`,r};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]],w=l("Badge",j);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],v=l("ChevronDown",k);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],M=l("ChevronsLeftRightEllipsis",N);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],$=l("MapPin",_);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M5 12h14",key:"1ays0h"}]],S=l("Minus",C),A=({title:s,onClick:t,isActive:r,color:o})=>e.jsxs("div",{className:"cursor-pointer flex justify-between items-center py-1 hover:bg-gray-50",onClick:t,children:[e.jsxs("div",{className:" flex items-center gap-2",children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${o??"bg-yellow-300"}`}),e.jsx("h1",{className:"font-bold text-gray-500 text-sm",children:s})]}),r?e.jsx(S,{}):e.jsx(v,{})]}),E=()=>e.jsxs("div",{className:"pb-2",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"GIS"}),e.jsx("p",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Geographic Information System"})]}),c=({name:s,icon:t,href:r,activeMenu:o})=>e.jsxs(g,{href:r,className:`flex flex-col gap-2 p-4 rounded-lg shadow-md  ${o===s?"border-2 border-blue-500 bg-blue-100":"border border-gray-200 bg-gray-200 hover:bg-gray-100"}`,children:[t,e.jsx("p",{className:"font-medium text-lg text-left",children:s})]}),L=({content:s,activeMenu:t})=>{const[r,o]=n.useState(!0),a=()=>{o(!r)};return e.jsx("aside",{id:"default-sidebar",className:"fixed top-0 left-0 z-40 w-64 h-screen px-3 py-4 transition-transform -translate-x-full sm:translate-x-0 overflow-y-scroll","aria-label":"Sidebar",style:{scrollbarWidth:"none"},children:e.jsx("div",{children:e.jsxs("div",{className:"h-full overflow-y-auto bg-white dark:bg-gray-800",children:[e.jsx(E,{}),e.jsx(A,{title:"Menu",onClick:a,isActive:r}),r&&e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsx(c,{name:"Point",icon:e.jsx($,{}),href:"/map/points",activeMenu:t}),e.jsx(c,{name:"Line",icon:e.jsx(M,{}),activeMenu:t}),e.jsx(c,{name:"Polygon",icon:e.jsx(w,{}),activeMenu:t})]}),e.jsx("div",{children:s})]})})})},z=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{A,L as S,z as a,l as c};
