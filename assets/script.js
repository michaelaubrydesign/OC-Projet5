const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

console.log(slides);


const dotsContainer = document.querySelector('.dots');//Récupérer l'élément html contenant les points
console.log(dotsContainer)

for (let i = 0; i < slides.length; i++) {//Créer boucle for pour chaque élément (image) de la liste
	console.log(`i : ${i}`);

	const dot = document.createElement('div');//Créer élément div
	console.log(`dot :`, dot);

	dot.classList.add('dot');//Ajout de la class CSS 'dot' à l'élément créer
	console.log('dot.classList', dot.classList);

	dotsContainer.appendChild(dot);//Ajout de l'élément créé à l'élément parents 'dots
	console.log('dotsContainer après appendChild(dot)', dotsContainer);
}


	const leftArrow = document.querySelector(".arrow_left");
	const rightArrow = document.querySelector(".arrow_right");

	// console.log(leftArrow)
	// console.log(rightArrow)

	leftArrow.addEventListener("click", function () {
		console.log("test click fleche gauche")
	});

	rightArrow.addEventListener("click", function () {
		console.log("test click fleche droite")
	});


