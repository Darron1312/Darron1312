import{k as a,b as o}from"./vendor.1d56efb5.js";const s={removeItem(e){return o.storage.local.remove(e)},setItem(e,t){return o.storage.local.set({[e]:t})},async getItem(e){return(await o.storage.local.get(e))[e]}},g=(e,t,r)=>a(e,t,s,r),m=g("webext-demo","Storage Demo",{listenToStorageChanges:!0});export{m as s};