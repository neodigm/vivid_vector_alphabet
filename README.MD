[![License: BSD](https://badgen.net/badge/license/BSD/orange)](https://opensource.org/licenses/BSD-3-Clause)
---
<p align="center">
  <a target="_blank" href="https://neodigm.github.io/vivid_vector_alphabet/">
  <img src="https://repository-images.githubusercontent.com/182188356/dc9b1680-2061-11eb-8a11-8833bfbfd6c2" title="Amazing ⚡ Sensational Remarkable Revolutionary Startling Mind Blowing Interactive Type" alt="Vivid Vector">
  </a>
</p>

![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vva.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvb.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvc.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvd.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vve.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvf.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvg.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvh.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvi.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvj.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvk.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvl.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvm.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvn.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvo.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvp.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvq.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvr.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvs.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvt.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvu.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvv.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvw.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvx.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvy.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vvz.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vv0.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vv1.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vv2.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vv3.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vv4.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vv5.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vv6.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vv7.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vv8.svg)
![](https://neodigm.github.io/vivid_vector_alphabet/wasm/vv9.svg)

```javascript
"use strict"; // Vivid Vector Interactive Type Component
let fViv =  ( ( _d, _g, sQ ) => {
	let eSect = _d.querySelector( sQ );
	let aMsg = [], eImg = {}, bRun = true;
	const BASE_URL = "https://neodigm.github.io/vivid_vector_alphabet/wasm/";
	return {
		init: ( sMsg ) => { // your
			aMsg = Array.from( sMsg.toUpperCase() ); // telephone
			for( let _i = 0; _i <= parseInt( aMsg.length / 2 ); _i++ ){ // been
				eImg = _d.createElement( "img" ); // ringin
				eImg.src = "vvspace.svg"; // while you're
				eSect.appendChild( eImg ); // dancin
			} // in the
			setInterval( fViv.tick, 200);  // rain
		},
		tick: () =>{
			if( bRun ){
				[].slice.call( _d.querySelectorAll( sQ + " img" ) ).filter( ( _e, _i ) => {
					let sC = aMsg[ _i ];
					switch( sC ){
						case " ":
							sC = "space";
						break;
						case ".":
							sC = "period";
						break;
						case ",":
							sC = "comma";
						break;
					}
					_e.src = BASE_URL + "vv" + sC.toLowerCase() + ".svg";
				});
				aMsg.push( aMsg.shift() );				
			}
		},
		stopVivid: () =>{
			bRun = false;
		},
		startVivid: () =>{
			bRun = true;
		}
	};
})( document, window, ".alpha-grd");

document.querySelector( ".alpha-grd" ).addEventListener("click", ( ev ) => {
	fViv.stopVivid();
	ev.currentTarget.classList.add("alpha-grd__hide");
});
document.querySelector( ".js-truth-bang" ).addEventListener("click", ( ev ) => {
	fViv.startVivid();
	document.querySelector( ".alpha-grd" ).classList.remove("alpha-grd__hide");
});

fViv.init("I produce interactive apps, websites, and persuasive video.");
console.log("%c Scott C. Krause ⚡ Problem Solver and Visual Storyteller", "background: #000; color: #f4dc5e; font-size: 28px");
```

---
Pin it on Code Pen [Here](https://codepen.io/neodigm24)
---
Read the Blog Post [Here](https://www.theScottKrause.com/)
---
#
[Portfolio Blog](https://www.theScottKrause.com) |
[🦄 Résumé](https://thescottkrause.com/Arcanus_Scott_C_Krause_2020.pdf) |
[NPM](https://www.npmjs.com/~neodigm) |
[Github](https://github.com/neodigm) |
[LinkedIn](https://www.linkedin.com/in/neodigm555/) |
[Gists](https://gist.github.com/neodigm?direction=asc&sort=created) |
[Salesforce](https://trailblazer.me/id/skrause) |
[Code Pen](https://codepen.io/neodigm24) |
[Machvive](https://machvive.com/) |
[Arcanus 55](https://www.arcanus55.com/?trusted55=A55PV2) |
[Repl](https://repl.it/@neodigm) |
[Twitter](https://twitter.com/neodigm24) |
[Keybase](https://keybase.io/neodigm) |
[Medium](https://medium.com/@neo5ive/accessibility-%EF%B8%8F-ecommerce-552d4d35cd66) |
[W3C](https://www.w3.org/users/123844)
#

<p align="center">
  <a target="_blank" href="https://thescottkrause.com/d3_datavis_skills.html">
  <img src="https://repository-images.githubusercontent.com/178555357/2b6ad880-7aa0-11ea-8dde-63e70187e3e9" title="TypeScript D3js Skills with Audio">
  </a>
</p>
