// JavaScript Document

$('#avatarModal').modal('show');
var globalCanvas;


//initializing a variable - this variable is an OBJECT
//the properties will hold the filename of the image we are going to show
var character={head:"", eyebrow:"", eyes:"", nose:"", lips:"", beard:"", mustache:"", acc:"", headpc:""};

/************************
HEAD COLORS
************************/
var maleHead1Colors = ["#eddcab", "#92603b", "#524242"]
var maleHead2Colors = ["#eddcab", "#92603b", "#524242"]
var maleHead3Colors = ["#eddcab", "#92603b", "#524242"]
var maleHead4Colors = ["#eddcab", "#92603b", "#524242"]
var femaleHead1Colors = ["#eddcab", "#92603b", "#524242"]
var femaleHead2Colors = ["#eddcab", "#92603b", "#524242"]
var femaleHead3Colors = ["#eddcab", "#92603b", "#524242"]
var femaleHead4Colors = ["#eddcab", "#92603b", "#524242"]



/************************
HEART SELECTION INDICATOR
*************************/
var headIndicator = document.getElementById('headIndicator')
var eyeBrowIndicator = document.getElementById('eyeBrowIndicator')
var eyesIndicator = document.getElementById('eyesIndicator')
var noseIndicator = document.getElementById('noseIndicator')
var lipsIndicator = document.getElementById('lipsIndicator')
var mustacheIndicator = document.getElementById('mustacheIndicator')
var beardIndicator = document.getElementById('beardIndicator')
var shadeIndicator = document.getElementById('shadeIndicator')
var headpcIndicator = document.getElementById('headpcIndicator')
var color_options = document.getElementById('color-options')



/************************
HEAD COLOR VARIATIONS
************************/
function generateColors(id){
	// color_options reset
	if(color_options.childNodes.length > 0){ color_options.innerHTML = "" }

	if(id == "malehead1"){
		maleHead1Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div')
			colorDiv.style.width = "32px"
			colorDiv.style.height = "32px"
			colorDiv.style.backgroundColor = color
			colorDiv.style.display = 'inline-block'
			colorDiv.style.margin = '5px'
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "male_head_1.png"
					bodyBuilder()
				}
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "male_head_1.1.png"
					bodyBuilder()
				}	
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "male_head_1.2.png"
					bodyBuilder()
				}				
			}
			color_options.appendChild(colorDiv)
		})

	}else if(id == "malehead2"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div')
			colorDiv.style.width = "32px"
			colorDiv.style.height = "32px"
			colorDiv.style.backgroundColor = color
			colorDiv.style.display = 'inline-block'
			colorDiv.style.margin = '5px'
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "male_head_2.png"
					bodyBuilder()
				}
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "male_head_2.1.png"
					bodyBuilder()
				}		
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "male_head_2.2.png"
					bodyBuilder()
				}				
			}
			color_options.appendChild(colorDiv)
		})
	}else if(id == "malehead3"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div')
			colorDiv.style.width = "32px"
			colorDiv.style.height = "32px"
			colorDiv.style.backgroundColor = color
			colorDiv.style.display = 'inline-block'
			colorDiv.style.margin = '5px'
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "male_head_3.png"
					bodyBuilder()
				}
			
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "male_head_3.1.png"
					bodyBuilder()
				}
				
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "male_head_3.2.png"
					bodyBuilder()
				}				
			}
			color_options.appendChild(colorDiv)
		})
	}else if(id == "malehead4"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div')
			colorDiv.style.width = "32px"
			colorDiv.style.height = "32px"
			colorDiv.style.backgroundColor = color
			colorDiv.style.display = 'inline-block'
			colorDiv.style.margin = '5px'
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "male_head_4.png"
					bodyBuilder()
				}
			
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "male_head_4.1.png"
					bodyBuilder()
				}
				
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "male_head_4.2.png"
					bodyBuilder()
				}				
			}
			color_options.appendChild(colorDiv)
		})
	}else if(id == "femalehead4"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div')
			colorDiv.style.width = "32px"
			colorDiv.style.height = "32px"
			colorDiv.style.backgroundColor = color
			colorDiv.style.display = 'inline-block'
			colorDiv.style.margin = '5px'
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "female_head_4.png"
					bodyBuilder()
				}
			
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "female_head_4.1.png"
					bodyBuilder()
				}
				
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "female_head_4.2.png"
					bodyBuilder()
				}				
			}
			color_options.appendChild(colorDiv)
		})
	}else if(id == "femalehead3"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div')
			colorDiv.style.width = "32px"
			colorDiv.style.height = "32px"
			colorDiv.style.backgroundColor = color
			colorDiv.style.display = 'inline-block'
			colorDiv.style.margin = '5px'
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "female_head_3.png"
					bodyBuilder()
				}
			
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "female_head_3.1.png"
					bodyBuilder()
				}
				
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "female_head_3.2.png"
					bodyBuilder()
				}				
			}
			color_options.appendChild(colorDiv)
		})
	}else if(id == "femalehead2"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div')
			colorDiv.style.width = "32px"
			colorDiv.style.height = "32px"
			colorDiv.style.backgroundColor = color
			colorDiv.style.display = 'inline-block'
			colorDiv.style.margin = '5px'
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "female_head_2.png"
					bodyBuilder()
				}
			
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "female_head_2.1.png"
					bodyBuilder()
				}
				
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "female_head_2.2.png"
					bodyBuilder()
				}				
			}
			color_options.appendChild(colorDiv)
		})
	}else if(id == "femalehead1"){
		maleHead2Colors.forEach((color, index) => {
			let colorDiv = document.createElement('div')
			colorDiv.style.width = "32px"
			colorDiv.style.height = "32px"
			colorDiv.style.backgroundColor = color
			colorDiv.style.display = 'inline-block'
			colorDiv.style.margin = '5px'
			
			//color - #eddcab
			if(index == 0){
				colorDiv.onclick = function() {
					character.head = "female_head_1.png"
					bodyBuilder()
				}
			
			//color - #92603b
			}else if(index == 1){
				colorDiv.onclick = function() {
					character.head = "female_head_1.1.png"
					bodyBuilder()
				}
				
			//color - #524242
			}else if(index == 2){
				colorDiv.onclick = function() {
					character.head = "female_head_1.2.png"
					bodyBuilder()
				}				
			}
			color_options.appendChild(colorDiv)
		})
	}
	
}







//this function will set the face property
function setHead(base, id){
	// add select indication //
	var head = document.getElementById(id)
	generateColors(id)
	// this head already selected ?
	if(head.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.head = ""
		// hide the colors
		color_options.innerHTML = ""
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		head.setAttribute('selected', false)
		// remove the cute heart icon
		headIndicator.style.display = 'none'
		// exit the function immediately.
		// do not further execute the rest of the code
		return
	}

	// not selected? select it ..
	// position the heart indicator icon relative to head x and y + do some adjustments 
	headIndicator.style.top = head.offsetTop - 17 + 'px'
	headIndicator.style.left = head.offsetLeft + 28 + 'px'
	head.setAttribute('selected', true)

	if(headIndicator.style.display == 'none'){
		headIndicator.style.display = 'block'
	}

	character.head=base;

	//run the body builder function
	bodyBuilder();
}

function setEyebrow(eyebrow, id){
	// add select indication //
	var eyebrowImg = document.getElementById(id)

	// this head already selected ?
	if(eyebrowImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.eyebrow = ""
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		eyebrowImg.setAttribute('selected', false)
		// remove the cute heart icon
		eyeBrowIndicator.style.display = 'none'
		// exit the function immediately.
		// do not further execute the rest of the code
		return
	}

	// not selected? select it ..
	// position the heart indicator icon relative to head x and y + do some adjustments 
	eyeBrowIndicator.style.top = eyebrowImg.offsetTop - 25 + 'px'
	eyeBrowIndicator.style.left = eyebrowImg.offsetLeft + 18 + 'px'
	eyebrowImg.setAttribute('selected', true)

	if(eyeBrowIndicator.style.display == 'none'){
		eyeBrowIndicator.style.display = 'block'
	}


	character.eyebrow=eyebrow;
	//run the body builder function
	bodyBuilder();
}

function setEyes(eyes, id){
	// add select indication //
	var eyesImg = document.getElementById(id)

	// this head already selected ?
	if(eyesImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.eyes = ""
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		eyesImg.setAttribute('selected', false)
		// remove the cute heart icon
		eyesIndicator.style.display = 'none'
		// exit the function immediately.
		// do not further execute the rest of the code
		return
	}

	// not selected? select it ..
	// position the heart indicator icon relative to head x and y + do some adjustments 
	eyesIndicator.style.top = eyesImg.offsetTop - 21.3 + 'px'
	eyesIndicator.style.left = eyesImg.offsetLeft + 29 + 'px'
	eyesImg.setAttribute('selected', true)

	if(eyesIndicator.style.display == 'none'){
		eyesIndicator.style.display = 'block'
	}

	character.eyes=eyes;
	//run the body builder function
	bodyBuilder();
}


function setNose(nose, id){
	// add select indication //
	var noseImg = document.getElementById(id)

	// this head already selected ?
	if(noseImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.nose = ""
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		noseImg.setAttribute('selected', false)
		// remove the cute heart icon
		noseIndicator.style.display = 'none'
		// exit the function immediately.
		// do not further execute the rest of the code
		return
	}

	// not selected? select it ..
	// position the heart indicator icon relative to head x and y + do some adjustments 
	noseIndicator.style.top = noseImg.offsetTop - 28 + 'px'
	noseIndicator.style.left = noseImg.offsetLeft - 7 + 'px'

	noseImg.setAttribute('selected', true)

	if(noseIndicator.style.display == 'none'){
		noseIndicator.style.display = 'block'
	}

	character.nose=nose;

	//run the body builder function
	bodyBuilder();
}

function setLips(lips, id){
	// add select indication //
	var lipsImg = document.getElementById(id)

	// this head already selected ?
	if(lipsImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.lips = ""
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		lipsImg.setAttribute('selected', false)
		// remove the cute heart icon
		lipsIndicator.style.display = 'none'
		// exit the function immediately.
		// do not further execute the rest of the code
		return
	}

	// not selected? select it ..
	// position the heart indicator icon relative to head x and y + do some adjustments 
	console.log(lipsIndicator)
	lipsIndicator.style.top = lipsImg.offsetTop - 30 + 'px'
	lipsIndicator.style.left = lipsImg.offsetLeft + 7 + 'px'
	lipsImg.setAttribute('selected', true)
	
	if(lipsIndicator.style.display == 'none'){
		lipsIndicator.style.display = 'block'
	}

	character.lips=lips;
	//run the body builder function
	bodyBuilder();
}

function setBeard(beard, id){
	// add select indication //
	var beardImg = document.getElementById(id)

	// this head already selected ?
	if(beardImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.beard = ""
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		beardImg.setAttribute('selected', false)
		// remove the cute heart icon
		beardIndicator.style.display = 'none'
		// exit the function immediately.
		// do not further execute the rest of the code
		return
	}

	// not selected? select it ..
	// position the heart indicator icon relative to head x and y + do some adjustments 
	beardIndicator.style.top = beardImg.offsetTop - 30 + 'px'
	beardIndicator.style.left = beardImg.offsetLeft - 3 + 'px'
	beardImg.setAttribute('selected', true)
	
	if(beardIndicator.style.display == 'none'){
		beardIndicator.style.display = 'block'
	}	
	character.beard=beard;

	//run the body builder function
	bodyBuilder();
}

function setMust(mustache, id){
	// add select indication //
	var mustImg = document.getElementById(id)

	// this head already selected ?
	if(mustImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.mustache = ""
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		mustImg.setAttribute('selected', false)
		// remove the cute heart icon
		mustacheIndicator.style.display = 'none'
		// exit the function immediately.
		// do not further execute the rest of the code
		return
	}

	// not selected? select it ..
	// position the heart indicator icon relative to head x and y + do some adjustments 
	mustacheIndicator.style.top = mustImg.offsetTop - 30 + 'px'
	mustacheIndicator.style.left = mustImg.offsetLeft + 12 + 'px'
	mustImg.setAttribute('selected', true)
	
	if(mustacheIndicator.style.display == 'none'){
		mustacheIndicator.style.display = 'block'
	}

	character.mustache=mustache;

	//run the body builder function
	bodyBuilder();
}

function setAcc(acc, id){
	// add select indication //
	var shadeImg = document.getElementById(id)

	// this head already selected ?
	if(shadeImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.acc = ""
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		shadeImg.setAttribute('selected', false)
		// remove the cute heart icon
		shadeIndicator.style.display = 'none'
		// exit the function immediately.
		// do not further execute the rest of the code
		return
	}

	// not selected? select it ..
	// position the heart indicator icon relative to head x and y + do some adjustments 
	shadeIndicator.style.top = shadeImg.offsetTop - 15 + 'px'
	shadeIndicator.style.left = shadeImg.offsetLeft + 36 + 'px'
	shadeImg.setAttribute('selected', true)
	
	if(shadeIndicator.style.display == 'none'){
		shadeIndicator.style.display = 'block'
	}

	character.acc=acc;

	//run the body builder function
	bodyBuilder();
}

function setHeadpc(headpc, id){
	// add select indication //
	var headpcImg = document.getElementById(id)

	// this head already selected ?
	if(headpcImg.getAttribute('selected') == 'true'){
		// unselect and remove it from rendering scene
		character.headpc = ""
		// update the bodybuilder
		bodyBuilder();
		// remove the attribute that this head is already selected
		headpcImg.setAttribute('selected', false)
		// headpcImg the cute heart icon
		headpcIndicator.style.display = 'none'
		// exit the function immediately.
		// do not further execute the rest of the code
		return
	}

	// not selected? select it ..
	// position the heart indicator icon relative to head x and y + do some adjustments 
	headpcIndicator.style.top = headpcImg.offsetTop - 25 + 'px'
	headpcIndicator.style.left = headpcImg.offsetLeft + 43 + 'px'
	headpcImg.setAttribute('selected', true)
	
	if(headpcIndicator.style.display == 'none'){
		headpcIndicator.style.display = 'block'
	}

	character.headpc=headpc;
	//run the body builder function
	bodyBuilder();
}


//this function will set the glasses property
function bodyBuilder(){
	
	if(character.head!=""){
		document.getElementById('head').innerHTML="<img class='img-fluid' src='images/avatar/head/"+ character.head +"' alt='head'>";
	}else{
		document.getElementById('head').innerHTML=""
	}
	
	if(character.eyebrow!=""){
		document.getElementById('eyebrow').innerHTML="<img class='img-fluid' src='images/avatar/eyebrow/"+ character.eyebrow +"' alt='eyebrow'>";
	}else{
		document.getElementById('eyebrow').innerHTML=""
	}

	if(character.eyes!=""){
		document.getElementById('eyes').innerHTML="<img class='img-fluid' src='images/avatar/eyes/"+ character.eyes +"' alt='eyes'>";
	}else{
		document.getElementById('eyes').innerHTML=""
	}
	
	if(character.nose!=""){
		document.getElementById('nose').innerHTML="<img class='img-fluid' src='images/avatar/nose/"+ character.nose +"' alt='nose'>";
	}else{
		document.getElementById('nose').innerHTML=""
	}
	
	if(character.lips!=""){
		document.getElementById('lips').innerHTML="<img class='img-fluid' src='images/avatar/lips/"+ character.lips +"' alt='lips'>";
	}else{
		document.getElementById('lips').innerHTML=""
	}
	
	if(character.beard!=""){
		document.getElementById('beard').innerHTML="<img class='img-fluid' src='images/avatar/beard/"+ character.beard +"' alt='beard'>";
	}else{
		document.getElementById('beard').innerHTML=""
	}
	
	if(character.mustache!=""){
		document.getElementById('mustache').innerHTML="<img class='img-fluid' src='images/avatar/mustache/"+ character.mustache +"' alt='mustache'>";
	}else{
		document.getElementById('mustache').innerHTML=""
	}
	
	
	if(character.acc!=""){
		document.getElementById('acc').innerHTML="<img class='img-fluid' src='images/avatar/acc/"+ character.acc +"' alt='acc'>";
	}else{
		document.getElementById('acc').innerHTML=""
	}
	
	
	if(character.headpc!=""){
		document.getElementById('headpc').innerHTML="<img class='img-fluid' src='images/avatar/headpc/"+ character.headpc +"' alt='headpc'>";
	}else{
		document.getElementById('headpc').innerHTML=""
	}
}

function showAvatar(){
		html2canvas(document.querySelector(".result")).then(canvas => {
			//console.log(canvas.toDataURL())
			document.getElementById('showcase').innerHTML = ""
			document.getElementById('showcase').appendChild(canvas)
			//saveAs(canvas.toDataURL(), 'canvas.png');
		});

	$('#showcaseModal').modal('show');
}




/************************
CAROUSEL SELECTION
************************/

$('.eye-vessel-child').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	variableWidth: true,
});

$('.lips-vessel-child').slick({
	slidesToShow: 5,
	slidesToScroll: 5,
	variableWidth: true,
});

$('.shades-vessel-child').slick({
	slidesToShow: 2,
	slidesToScroll: 2,
	variableWidth: true,
});

$('.mustache-vessel-child').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	variableWidth: true,
});

$('.beard-vessel-child').slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	variableWidth: true,
});
