// Underline the current 
window.onload = (event) => {
	let location = window.location;
	let current_page = location.href.split("/").find(e => e.includes(".html"));	
	console.log(current_page);

	setActiveNavItem(current_page);
}

function setActiveNavItem(page) {
	document.getElementById

}
