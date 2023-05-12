"use strict";
window.addEventListener("DOMContentLoaded", () => {
	document.querySelector('#elipse').addEventListener('click',()=>{
		location.href="https://wa.me/message/PH4VH5HYRZXAP1";
	})
	getOffset();
});

//Footer margin from top
window.addEventListener(
	`resize`,
	() => {
		getOffset();
	},
	false
);


function getOffset() {
	let form_position = document.querySelector(".company-partners").getBoundingClientRect().bottom;
	const promo_position = document.querySelector(".promo").getBoundingClientRect().bottom;
	if(document.querySelector(".section-home").classList.contains('disabled')){
		document.querySelector(".info_block").style.cssText = `position:static;margin-top: 50px;`;
		document.querySelector("footer").style.marginTop = 100 + "px";
	}else{
		document.querySelector(".info_block").style.cssText = `position:relative;margin-top: 0;`;
		document.querySelector(".info_block").style.top = form_position - promo_position + 35 + "px";
		document.querySelector("footer").style.marginTop = form_position - promo_position + 35 + 200 + "px";
	}

	
}

document.querySelector('.modal_feedback_close').addEventListener("click", function (e) {
    location.reload();
});