// DOM elements to listen on
// Bruger dugme
const showBtn = document.getElementById('popupShow');
// X dugme
const hideBtn = document.getElementById('popupHide');
// Popup meni
const menu = document.getElementById('popup');
// Event listeners
// Dodajemo event listener na burger dugme
showBtn.addEventListener('click', (event)=>{
	// Sprecavamo default ponasanje dugmeta (# u url)
	event.preventDefault();
	// Dodajemo show klasu popupu
	menu.classList.add('show');
});
// Za X dugme, slusamo klik
hideBtn.addEventListener('click',(event)=>{
	// Spreciti default ponasanje
	event.preventDefault();
	// Skinuti show klasu koja omogucava prikaz popupa
	menu.classList.remove('show');
});