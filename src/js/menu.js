//Manage menu
const menu = document.querySelector(".menu_list"),
	menuItem = document.querySelectorAll(".menu_list_item"),
	hamburger = document.querySelector(".hamburger"),
	menu_close = document.querySelector(".menu_close");

hamburger.addEventListener("click", () => {
	menu.classList.add("menu_list_active");
});
menu_close.addEventListener("click", () => {
	menu.classList.remove("menu_list_active");
});
menuItem.forEach((item) => {
	item.addEventListener("click", () => {
		menu.classList.toggle("menu_list_active");
	});
});

let h_hght = document.querySelector("header"); // header high
let h_mrg = 0; //
function toogleHeaderBackground(){
	let top = window.pageYOffset;
	const elem = document.querySelector("header");
	const nav = document.querySelector(".menu_block");
	if (top + h_mrg < h_hght.offsetHeight && !document.querySelector(".section-home").classList.contains('disabled')) {
		elem.style.top = 35 - top + "px";
		nav.style.cssText = "background:#00000000;";
	} else {
		elem.style.top = "10px";
		nav.style.cssText = "background:linear-gradient(0deg, #2e6bcb, #2e6bcb), #ffffff;";
	}
}


window.addEventListener("scroll", () => {
	toogleHeaderBackground();
});

