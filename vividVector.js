"use strict"; // Vivid Interactive Type Component
let fViv =  ( ( _d, _g, sQ ) => {
	let eSect = _d.querySelector( sQ );
	let aMsg = [], eImg = {}, bRun = true;
	const BASE_URL = "https://neodigm.github.io/vivid_vector_alphabet/";
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

fViv.init("I produce interactive apps, websites, and persuasive video. I sculpt an articulate and indelible branded dialog. That brand is then made vivid and seamlessly integrated into every facet of the digital identity. The Story is told in a sublime blend of dynamic content and immersing imagery. With a passion for assimilating new technology and innovative problem solving, I approach projects with enthusiasm and focus. I listen. I interpret abstract business processes into actionable technical requirements. I excel at translating requirements into concise and well constructed applications. I create high fidelity prototypes allowing the user to interact with the app before it is developed. I can quickly test new designs and identify small flaws before they become big issues. I craft high fidelity prototypes and then build responsive, accessible, and aesthetically delightful interfaces. I produce and advocate for optimized, asynchronous, reactive, functional, testable, and future proof TypeScript and JavaScript. Revered for due diligence and attention to detail. I ignite and deliver enchanted user experiences. I design wireframes, prototypes, personas, microcopy, and user stories that drive team consensus. I am very good at this. Stakeholders trust me to develop a deeper understanding of the end user. I dont design systems that they want, people dont know what they want. I design applications that they need. I build solutions that learn and anticipate problems before they happen. I have a vast array of new emerging technology solutions just waiting for a problem to solve. Ive done incredible things with service workers and web assembly. I can make a web app work offline. I can make a web app behave like a native app. I can run a web app outside of the browser. I can communicate directly from a web app to an attached USB or Bluetooth device. I can run some of the most powerful encryption logic in the browser without JavaScript. I can make a web app fast, very fast.");
console.log("%c Scott C. Krause ⚡ Problem Solver and Visual Storyteller", "background: #000; color: #f4dc5e; font-size: 28px");
