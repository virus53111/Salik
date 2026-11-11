/* CenaRadar: lightweight orthographic 3D renderer, no external libraries. */
(function(){"use strict";
const $=id=>document.getElementById(id),cv=$("house-canvas");if(!cv)return;
const ctx=cv.getContext("2d");if(!ctx)return;
let model=null,valid=false,mode="exterior",yaw=35,elev=32,zoom=100,drag=null,pending=false;
const rad=Math.PI/180,clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const colors={concrete:"#a8b4b9",gravel:"#777d78",soil:"#695748",wood:"#c7a574",insulation:"#dbc66d",wall:"#e8d7b7",glass:"#527e8b",trim:"#31474b",floor:"#d6b17b",roof:"#45545c",metal:"#829297",brick:"#a96d50"};
function shade(hex,f){let n=parseInt(hex.slice(1),16);return "rgb("+[n>>16&255,n>>8&255,n&255].map(v=>clamp(Math.round(v*f),0,255)).join(",")+")";}
function scene(m){const L=m.length,D=m.width,H=m.height,N=m.floors,T=H*N,oh=m.overhang,pitch=m.pitch*rad,rise=(D/2+oh)*Math.tan(pitch),faces=[],explode=mode==="layers",cut=mode==="cut",gap=explode?Math.max(.5,Math.min(L,D)*.14):0,th=clamp(m.walls==="frame"?.25:m.thickness,.08,Math.min(L,D)*.2),wall=m.walls==="brick"?colors.brick:m.walls==="frame"?"#d2b58b":colors.wall,roof=m.roof==="tile"?"#a15d48":m.roof==="bitumen"?"#636264":colors.roof;
 const face=(p,col,edge=true)=>faces.push({p,col,edge});
 function box(x,y,z,w,h,d,col){if(w<=0||h<=0||d<=0)return;let a=[x,y,z],b=[x+w,y,z],c=[x+w,y,z+d],e=[x,y,z+d],A=[x,y+h,z],B=[x+w,y+h,z],C=[x+w,y+h,z+d],E=[x,y+h,z+d];face([a,e,c,b],col);face([A,B,C,E],col);face([a,b,B,A],col);face([b,c,C,B],col);face([c,e,E,C],col);face([e,a,A,E],col);}
 // Display base as a cut-out soil plinth, gravel and selected foundation.
 const ground=Math.max(.15,Math.min(L,D)*.055),baseY=-ground-.35;
 box(-L/2-.55,baseY-.22,-D/2-.55,L+1.1,.22,D+1.1,colors.soil);
 box(-L/2-.42,baseY,-D/2-.42,L+.84,.18,D+.84,colors.gravel);
 let fy=baseY+.18;
 if(m.foundation==="pile"){let count=clamp(Math.round(Math.sqrt(m.piles||12)),2,7);for(let a=0;a<count;a++)for(let b=0;b<count;b++)box(-L/2+(L-.35)*a/(count-1),fy-.36,-D/2+(D-.35)*b/(count-1),.35,.55,.35,colors.concrete);}
 else if(m.foundation==="strip"){let q=clamp(m.stripWidth,.12,Math.min(L,D)*.3),f=clamp(m.stripHeight*.5,.15,.65);box(-L/2,fy,-D/2,L,f,q,colors.concrete);box(-L/2,fy,D/2-q,L,f,q,colors.concrete);box(-L/2,fy,-D/2+q,q,f,D-2*q,colors.concrete);box(L/2-q,fy,-D/2+q,q,f,D-2*q,colors.concrete);}
 else box(-L/2,fy,-D/2,L,.25,D,colors.concrete);
 box(-L/2-.08,-.16,-D/2-.08,L+.16,.16,D+.16,colors.concrete);
 // Floor slabs and finishes; offset floors in exploded mode.
 for(let f=0;f<N;f++){let y=f*(H+gap)+(explode?gap:0);box(-L/2,y,-D/2,L,.12,D,colors.concrete);box(-L/2+.08,y+.12,-D/2+.08,L-.16,.06,D-.16,colors.floor);
 if(cut||explode){for(let i=1;i<9;i++){let z=-D/2+D*i/9;face([[-L/2+.1,y+.183,z],[L/2-.1,y+.183,z],[L/2-.1,y+.183,z+.012],[-L/2+.1,y+.183,z+.012]],"#b48d5c",false);}}
 // four walls; remove near/front wall in cutaway. Openings are schematic framed inserts.
 function wallSide(axis,side){let span=axis==="x"?D:L,depth=axis==="x"?L:D,start=-span/2,center=side*(depth/2-th/2),bottom=y+.18,wh=Math.max(.07,H-.18);
 const panel=(a,b,yy,hh,color=wall)=>{if(axis==="x")box(center-th/2,yy,a,th,hh,b-a,color);else box(a,yy,center-th/2,b-a,hh,th,color);};
 const window=(a,b,low,high)=>{let z=side*(depth/2+.012),frame=side*(depth/2+.028);let rect=(aa,bb,lo,hi,col,at)=>face(axis==="x"?[[at,lo,aa],[at,lo,bb],[at,hi,bb],[at,hi,aa]]:[[aa,lo,at],[bb,lo,at],[bb,hi,at],[aa,hi,at]],col,false);
 rect(a,b,low,high,colors.trim,z);const k=Math.min(.055,(b-a)/8,(high-low)/8);rect(a+k,b-k,low+k,high-k,colors.glass,frame);rect((a+b)/2-k/2,(a+b)/2+k/2,low+k,high-k,colors.trim,frame+side*.004);rect(a+k,b-k,(low+high)/2-k/2,(low+high)/2+k/2,colors.trim,frame+side*.004);};
 if(cut&&axis==="z"&&side===1){ // exposed ends of wall layers
 let e=Math.min(.23,span*.12);panel(start,start+e,bottom,wh,colors.wood);panel(start+e,start+e*1.6,bottom,wh,colors.insulation);panel(span/2-e,span/2,bottom,wh,colors.wood);return;}
 panel(start,span/2,bottom,wh);
 if(m.windows>0&&m.openings>0){let n=span>6?2:1,ww=Math.min(span/(n*2.6),1.7),low=bottom+wh*.29,high=bottom+wh*.77;for(let i=0;i<n;i++){let pos=start+span*(i+1)/(n+1);window(pos-ww/2,pos+ww/2,low,high);}}
 if(axis==="z"&&side===1&&f===0){let w=Math.min(1,span*.16),low=bottom,hi=bottom+wh*.84,at=side*(depth/2+.055);face([[-w/2,low,at],[w/2,low,at],[w/2,hi,at],[-w/2,hi,at]],"#594b3b");face([[-w/2+.07,low+.04,at+.005],[w/2-.07,low+.04,at+.005],[w/2-.07,hi-.07,at+.005],[-w/2+.07,hi-.07,at+.005]],"#a88b63");}
 }
 wallSide("x",-1);wallSide("x",1);wallSide("z",-1);wallSide("z",1);
 // Exposed internal partition & modest furniture for cutaway orientation.
 if(cut&&f===0&&L>3&&D>3){box(-L/2+.4,y+.18,-D/2+.45,Math.min(2.4,L*.32),.65,.75,"#9ba88e");box(-L/2+.4,y+.83,-D/2+.45,Math.min(2.4,L*.32),.35,.2,"#85977e");box(-L*.08,y+.18,-D*.08,Math.min(1.1,L*.2),.4,Math.min(.65,D*.16),colors.wood);}
 }
 let ry=T+(explode?N*gap+gap:0),X=L/2+oh,Z=D/2+oh,top=ry+rise;
 const roofSlope=(side,col,offset=0)=>{face([[-X,ry+offset,side*Z],[X,ry+offset,side*Z],[X,top+offset,0],[-X,top+offset,0]],col);};
 // Gables, rafters, roof deck. Cutaway keeps rear roof slope and exposes front rafters.
 if(!cut){for(let s of [-1,1])face([[s*L/2,ry,-D/2],[s*L/2,ry,D/2],[s*L/2,ry+rise*D/(D+2*oh),0]],wall);}
 for(let i=0;i<Math.min(18,Math.max(5,Math.ceil(L/.75)));i++){let x=-X+2*X*i/(Math.min(18,Math.max(5,Math.ceil(L/.75)))-1),bw=Math.min(.12,L*.02);for(let side of [-1,1]){face([[x-bw,ry,side*Z],[x+bw,ry,side*Z],[x+bw,top,0],[x-bw,top,0]],colors.wood);face([[x+bw,ry-.13,side*Z],[x+bw,ry,side*Z],[x+bw,top,0],[x+bw,top-.13,0]],colors.wood);}}
 if(explode){roofSlope(-1,colors.insulation,gap*.38);roofSlope(1,colors.insulation,gap*.38);roofSlope(-1,colors.wood,gap*.74);roofSlope(1,colors.wood,gap*.74);}
 let offset=explode?gap*1.15:.06;
 for(let side of [-1,1]){if(cut&&side===1)continue;roofSlope(side,roof,offset); // seam lines on roof
 let n=m.roof==="metal"?12:8;for(let i=1;i<n;i++){let a=i/n,z=side*Z*a,yy=top-rise*a+offset+.008;face([[-X,yy,z],[X,yy,z],[X,yy-.012,z+side*.025],[-X,yy-.012,z+side*.025]],shadeHex(roof,.72),false);}
 }
 return faces;
}
function shadeHex(h,f){let n=parseInt(h.slice(1),16);return "#"+[n>>16&255,n>>8&255,n&255].map(v=>clamp(Math.round(v*f),0,255).toString(16).padStart(2,"0")).join("");}
function draw(){pending=false;let rect=cv.getBoundingClientRect();if(rect.width<2||rect.height<2||!model)return;let ratio=Math.min(2,window.devicePixelRatio||1),W=Math.round(rect.width*ratio),H=Math.round(rect.height*ratio);if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}ctx.clearRect(0,0,W,H);let grad=ctx.createRadialGradient(W*.5,H*.4,0,W*.5,H*.5,W*.75);grad.addColorStop(0,"#30483d");grad.addColorStop(1,"#101e1a");ctx.fillStyle=grad;ctx.fillRect(0,0,W,H);
 const a=yaw*rad,e=elev*rad,ca=Math.cos(a),sa=Math.sin(a),ce=Math.cos(e),se=Math.sin(e);
 const project=p=>{let x=p[0]*ca-p[2]*sa,z=p[0]*sa+p[2]*ca;return [x,-p[1]*ce+z*se,p[1]*se+z*ce];};
 let fs=scene(model),pts=fs.flatMap(f=>f.p.map(project)),minX=Math.min(...pts.map(p=>p[0])),maxX=Math.max(...pts.map(p=>p[0])),minY=Math.min(...pts.map(p=>p[1])),maxY=Math.max(...pts.map(p=>p[1])),scale=Math.min(W*.85/Math.max(.1,maxX-minX),H*.76/Math.max(.1,maxY-minY))*zoom/100,cx=(minX+maxX)/2,cy=(minY+maxY)/2,screen=p=>[W/2+(p[0]-cx)*scale,H*.50+(p[1]-cy)*scale];
 // subtle ground grid in view
 ctx.strokeStyle="#9bb6a01a";ctx.lineWidth=ratio*.65;let grid=Math.max(model.length,model.width)*.7+1;for(let i=-5;i<=5;i++){for(let k=0;k<2;k++){let t=i*grid/5,aa=screen(project(k?[t,-1.1,-grid]:[-grid,-1.1,t])),bb=screen(project(k?[t,-1.1,grid]:[grid,-1.1,t]));ctx.beginPath();ctx.moveTo(...aa);ctx.lineTo(...bb);ctx.stroke();}}
 // Painter's algorithm with true 3D projection, normal-based lighting, back-face culling for solid box faces.
 const rendered=fs.map(f=>{let p=f.p.map(project),depth=p.reduce((s,v)=>s+v[2],0)/p.length;let v=f.p[0],q=f.p[1],r=f.p[2],u=q.map((n,i)=>n-v[i]),w=r.map((n,i)=>n-v[i]),normal=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...normal)||1,light=Math.abs((normal[0]*-.42+normal[1]*.82+normal[2]*.38)/len);return {f,p,depth,light};}).sort((a,b)=>a.depth-b.depth);
 for(let {f,p,light} of rendered){let s=p.map(screen);ctx.beginPath();ctx.moveTo(...s[0]);for(let i=1;i<s.length;i++)ctx.lineTo(...s[i]);ctx.closePath();ctx.fillStyle=shade(f.col,.68+light*.39);ctx.fill();if(f.edge){ctx.strokeStyle="#101c19a0";ctx.lineWidth=ratio*.55;ctx.stroke();}}
 $("visual-compass").style.transform="rotate("+yaw+"deg)";cv.dataset.mode=mode;cv.dataset.yaw=String(yaw);cv.dataset.floors=String(model.floors);cv.dataset.pitch=String(model.pitch);
}
function schedule(){if(!pending){pending=true;requestAnimationFrame(draw);}}
function sync(){ $("visual-yaw").value=yaw;$("visual-elev").value=elev;$("visual-zoom").value=zoom;schedule();}
function setMode(m){mode=m;document.querySelectorAll("[data-visual-mode]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.visualMode===m)));schedule();}
function update(x,p){valid=!!p;$("visual-invalid").classList.toggle("hidden",valid);if(valid){model=Object.assign({},x);$("visual-dimensions").textContent=x.length+" × "+x.width+" m · "+x.floors+"F · "+x.pitch+"°";}cv.setAttribute("aria-label",document.documentElement.lang==="ru"?"Интерактивная модель дома":"Interaktīvs mājas modelis");schedule();}
window.CenaHouse3D={update};
function boot(){const val=k=>Number($("house-"+k).value),x={};["length","width","height","floors","thickness","pitch","overhang","stripWidth","stripHeight","piles","windows","openings"].forEach(k=>x[k]=val(k));["foundation","walls","roof"].forEach(k=>x[k]=$("house-"+k).value);update(x,!$("house-error").classList.contains("hidden")?null:true);
 document.querySelectorAll("[data-visual-mode]").forEach(b=>b.addEventListener("click",()=>setMode(b.dataset.visualMode)));
 for(let [id,fn] of [["yaw",v=>yaw=v],["elev",v=>elev=v],["zoom",v=>zoom=v]])$("visual-"+id).addEventListener("input",e=>{fn(Number(e.target.value));schedule();});
 $("visual-reset").addEventListener("click",()=>{yaw=35;elev=32;zoom=100;setMode("exterior");sync();});
 $("visual-save").addEventListener("click",()=>{draw();cv.toBlob(blob=>{if(!blob)return;let url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="cenaradar-house.png";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);},"image/png");});
 cv.addEventListener("pointerdown",e=>{if(e.button!==0&&e.pointerType==="mouse")return;drag={x:e.clientX,y:e.clientY,yaw,elev,id:e.pointerId};cv.setPointerCapture(e.pointerId);cv.classList.add("dragging");});
 cv.addEventListener("pointermove",e=>{if(!drag||e.pointerId!==drag.id)return;yaw=(drag.yaw+(e.clientX-drag.x)*.65+3600)%360;elev=clamp(drag.elev+(e.clientY-drag.y)*.28,12,75);sync();});
 const stop=e=>{if(drag&&e.pointerId===drag.id){drag=null;cv.classList.remove("dragging");}};cv.addEventListener("pointerup",stop);cv.addEventListener("pointercancel",stop);cv.addEventListener("lostpointercapture",stop);
 cv.addEventListener("keydown",e=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","+","-"].includes(e.key))return;e.preventDefault();if(e.key==="ArrowLeft")yaw=(yaw+350)%360;if(e.key==="ArrowRight")yaw=(yaw+10)%360;if(e.key==="ArrowUp")elev=clamp(elev+5,12,75);if(e.key==="ArrowDown")elev=clamp(elev-5,12,75);if(e.key==="+")zoom=clamp(zoom+5,65,175);if(e.key==="-")zoom=clamp(zoom-5,65,175);sync();});
 if(window.ResizeObserver)new ResizeObserver(schedule).observe(cv);else window.addEventListener("resize",schedule);$("house-tool").addEventListener("toggle",schedule);sync();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
})();