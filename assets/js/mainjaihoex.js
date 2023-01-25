//////////////////////////////////////////////
// DROPDOWN-X

//////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function loadStart(){
	onWinLoadDropdownX();
});

//////////////////////////////////////////////
function onWinLoadDropdownX(){
	
	bindDropdownJAx();
	bindDropdownItemJAx();
	preCodeEditorAx();
	
}
//////////////////////////////////////////////

function checkDropToggleFx(thisButton){
	
	let retDropToggle = false;
	try{
		if(thisButton.hasAttribute("data-toggle")){
			if(thisButton.getAttribute("data-toggle") === "dropdown"){
				thisButton.setAttribute("data-toggle","collapse");
				retDropToggle = true;
			}
			else if(thisButton.getAttribute("data-toggle") === "collapse"){
				thisButton.setAttribute("data-toggle","dropdown");
			}
			else{
				thisButton.setAttribute("data-toggle","collapse");
			}

		}
		else{
			thisButton.setAttribute("data-toggle","collapse");
		}
	}
	catch(err){
		thisButton.setAttribute("data-toggle","collapse");
	}
	
	return retDropToggle;
	
}

function bindDropdownJAx(){
	
	
	let exampleBTNAx = document.querySelector("#dropExamplesBTN");
	let exampleListAx = document.querySelector("#dropExamplesList");
		exampleBTNAx.addEventListener("click", function(){
			
			if(!checkDropToggleFx(exampleBTNAx)){
				exampleListAx.style.display = "block";
			}
			else{
				exampleListAx.style.display = "none";
			}
			
		});
		
	let codetBTNAx = document.querySelector("#dropCodeEditorBTN");
	let codetListAx = document.querySelector("#dropCodeEditorList");
		codetBTNAx.addEventListener("click", function(){
			
			if(!checkDropToggleFx(codetBTNAx)){
				codetListAx.style.display = "block";
			}
			else{
				codetListAx.style.display = "none";
			}
			
		});
	
	
}

function preClickJAx(elementAx){
	try{
		elementAx.click();
	}
	catch(err){}
}

function returnArrValueJAx(arrKey,arrSet){
	
	let retArrVal = "";
	try{
		retArrVal = arrSet[arrKey];
		if(retArrVal == null){
			throw "value is null";
		}
	}
	catch(err){
		retArrVal = "";
	}
	
	return retArrVal;
	
}

function bindDropdownItemJAx(){
	
	let exampleBTNAx = document.querySelector("#dropExamplesBTN");
	let exampleListGx = document.querySelectorAll("#dropExamplesList > a");
	let exampleListLx = exampleListGx.length;
	
	let exampleNameGx = ["","Bouncing DVD","Breakout Game","Fireworks","Repeling Button","Random Blob Download"];
	let exampleValueGx = ["","bouncingdvd","breakoutgame","fireworksdisp","replingbtn","randblobdl"];
	
	if(exampleListLx > 0){
		for(let x = 0;x < exampleListLx; x++){
			let curElem = exampleListGx[x];
			
			curElem.addEventListener("click", function(){
				preClickJAx(exampleBTNAx);
				let arrCName = returnArrValueJAx(x,exampleNameGx);
				let arrCValue = returnArrValueJAx(x,exampleValueGx);
				
					if(arrCName === ""){ arrCName = "View Some Examples"; }
					if(arrCValue === ""){ arrCValue = ""; }
					
					exampleBTNAx.innerHTML = arrCName;
					exampleBTNAx.setAttribute("data-value",arrCValue);
				
			});
			
		}
	}
	
	
	let codetBTNAx = document.querySelector("#dropCodeEditorBTN");
	let codetListGx = document.querySelectorAll("#dropCodeEditorList > a");
	let codetListLx = codetListGx.length;
	
	let codeListURLGx = ["","https://codepen.io/","http://jsfiddle.net/","https://stackblitz.com/","https://codesandbox.io/"];
	
	if(codetListGx.length > 0){
		for(let x = 0;x < codetListLx; x++){
			let curElem = codetListGx[x];
			
			curElem.addEventListener("click", function(){
				preClickJAx(codetBTNAx);
				
				let arrCURL = returnArrValueJAx(x,codeListURLGx);
					if(arrCURL !== ""){
						
						console.log(arrCURL);
						
					}
					
				
			});
			
		}
	}
	
	
	
	
}

var editorHTMLAx;
var editorJaihoeAx;
var editorCSSAx;

function codeEditorLAx(){
	
	 editorHTMLAx = CodeMirror.fromTextArea(document.getElementById("htmlCodeTextJAx"), {
		lineNumbers: true,
		mode: "text/html",
		theme: "monokai"
		
	});
	editorHTMLAx.refresh();
	editorHTMLAx.setValue(`<p id="greetings"></p>`);
	 
	 editorHTMLAx.on("keyup", function (auto, event) {
        if(notKeyNavJAx(event.keyCode)){
			updateJHOuputJAx();
		}
     });

	 editorJaihoeAx = CodeMirror.fromTextArea(document.getElementById("jaihoeCodeTextJAx"), {
		lineNumbers: true,
		mode: "text/html",
		theme: "monokai"
		
	});
	editorJaihoeAx.refresh(); 
	editorJaihoeAx.setValue(`<j-write element="'#greetings'" data-write-block>
 <j-value data="'Hello World!'" data-value>
   </j-value>
</j-write>`);

	editorJaihoeAx.on("keyup", function (auto, event) {
		if(notKeyNavJAx(event.keyCode)){
			updateJHOuputJAx();
		}
     });

	editorCSSAx = CodeMirror.fromTextArea(document.getElementById("cssCodeTextJAx"), {
		lineNumbers: true,
		mode: "text/css",
		theme: "monokai"
		
	});
	editorCSSAx.refresh(); 
	editorCSSAx.setValue(`#greetings{
 color: red;
}`);

	editorCSSAx.on("keyup", function (auto, event) {
		if(notKeyNavJAx(event.keyCode)){
			updateJHOuputJAx();
		}
     });
	



}

function notKeyNavJAx(keyVar){
	let keyPassJAx = true;
	//console.log(keyVar);
	
	if(keyVar >= 37 && keyVar <= 40){
		keyPassJAx = false;
	}
	if(keyVar == 27 || keyVar == 113 || keyVar == 115 || keyVar == 119 
	   || keyVar == 120 || keyVar == 121 || keyVar == 122 || keyVar == 123
	   || keyVar == 113 || keyVar == 19 || keyVar == 36 || keyVar == 33
	   || keyVar == 34 || keyVar == 35 || keyVar == 20 || keyVar == 16
	   || keyVar == 17 || keyVar == 91 || keyVar == 113 || keyVar == 18
	   || keyVar == 93){
		keyPassJAx = false;
	}
	
	return keyPassJAx;
}

function preEditorFocusAFx(){
	
	try{
		let getElemFocusAx = document.querySelector("#tabHolderJAx");
		let getElemFocusValueAx = getElemFocusAx.getAttribute("data-active");
		
		if(getElemFocusValueAx === "html"){
			editorHTMLAx.focus();
		}
		else if(getElemFocusValueAx === "jaihoe"){
			editorJaihoeAx.focus();
		}
		else if(getElemFocusValueAx === "css"){
			editorCSSAx.focus();
		}
		
	}
	catch(err){}
	
}

function preLaunchLoadCEAx(){
	

	document.querySelector(".htmlTabfx").classList.add("active");
	
	codeEditorLAx();
	
	document.querySelector("#jaihoeCodeBoxJAx").style.display = "none";
	document.querySelector("#cssCodeBoxJAx").style.display = "none";
	
	document.querySelector("#tabHolderJAx").setAttribute("data-active","html");
	updateJHOuputJAx();
	
	preLaunchLoadCEAx = function(){};
	
}

function preCodeEditorAx(){
	
	let launchJMEditor = document.querySelector("#launchJME");
		launchJMEditor.addEventListener("click", function(){

			try{
				document.querySelector("#dispimgcodet").style.display = "none";
				document.querySelector("#dispcodet").style.display = "block";
			}
			catch(err){}

			try{
				document.querySelector(".preCEditorJAx").style.display = "none";
				document.querySelector(".codeCEditorJAx").style.display = "block";

				preLaunchLoadCEAx();
				preEditorFocusAFx();
				
			}
			catch(err){}
			
		});
		
	let closeJMEditor = document.querySelector(".closetabx");
		closeJMEditor.addEventListener("click", function(){

			try{
				document.querySelector("#dispimgcodet").style.display = "block";
				document.querySelector("#dispcodet").style.display = "none";
				
			}
			catch(err){}

			try{
				document.querySelector(".preCEditorJAx").style.display = "block";
				document.querySelector(".codeCEditorJAx").style.display = "none";
			}
			catch(err){}
			
		});	
		
	/* TABS */

	let htmlTabJAx = document.querySelector(".htmlTabfx");
		htmlTabJAx.addEventListener("click", function(){

			try{
				document.querySelector(".htmlTabfx").classList.add("active");
				document.querySelector(".jaihoeTabfx").classList.remove("active");
				document.querySelector(".cssTabfx").classList.remove("active");
			}
			catch(err){}

			try{
				document.querySelector("#htmlCodeBoxJAx").style.display = "block";
				document.querySelector("#jaihoeCodeBoxJAx").style.display = "none";
				document.querySelector("#cssCodeBoxJAx").style.display = "none";
				document.querySelector("#tabHolderJAx").setAttribute("data-active","html");
				preEditorFocusAFx();
				
			}
			catch(err){}
			
		});		
		
	let jaihoeTabJAx = document.querySelector(".jaihoeTabfx");
		jaihoeTabJAx.addEventListener("click", function(){

			try{
				document.querySelector(".htmlTabfx").classList.remove("active");
				document.querySelector(".jaihoeTabfx").classList.add("active");
				document.querySelector(".cssTabfx").classList.remove("active");
			}
			catch(err){}

			try{
				document.querySelector("#htmlCodeBoxJAx").style.display = "none";
				document.querySelector("#jaihoeCodeBoxJAx").style.display = "block";
				document.querySelector("#cssCodeBoxJAx").style.display = "none";
				document.querySelector("#tabHolderJAx").setAttribute("data-active","jaihoe");
				preEditorFocusAFx();
				
			}
			catch(err){}

		});		
	
	let cssTabJAx = document.querySelector(".cssTabfx");
		cssTabJAx.addEventListener("click", function(){

			try{
				document.querySelector(".htmlTabfx").classList.remove("active");
				document.querySelector(".jaihoeTabfx").classList.remove("active");
				document.querySelector(".cssTabfx").classList.add("active");
			}
			catch(err){}

			try{
				document.querySelector("#htmlCodeBoxJAx").style.display = "none";
				document.querySelector("#jaihoeCodeBoxJAx").style.display = "none";
				document.querySelector("#cssCodeBoxJAx").style.display = "block";
				document.querySelector("#tabHolderJAx").setAttribute("data-active","css");
				preEditorFocusAFx();
				
			}
			catch(err){}
			
		});		
		
	
}

function updateJHOuputJAx(){
	
	let getHTMLCodeGx = editorHTMLAx.getValue();
	let preJHCodeGx = editorJaihoeAx.getValue();
	
	let getJHCodeGx = `<script src="assets/js/jaihoe.js"></script>
	<jh-script>
 ${preJHCodeGx}
</jh-script>`;

	let preCSSCodeGx = editorCSSAx.getValue();
	
	let getCSSCodeGx = `<style>
 ${preCSSCodeGx}
</style>`;
	
	//console.log("key: "+evt);
	
	//console.log("HTML: "+getHTMLCodeGx);
	//console.log("Jaihoe: "+getJHCodeGx);
	//console.log("CSS: "+getCSSCodeGx);
	
	let previewFrameJAx = document.querySelector("#previewJaihoeWx");
		previewFrameJAx.srcdoc = getHTMLCodeGx+getJHCodeGx+getCSSCodeGx;
	
	
}