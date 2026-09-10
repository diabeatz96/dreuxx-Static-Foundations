const typeButtons = document.querySelectorAll('.type-button');
const typeDescription = document.querySelector('#type-description');

const descriptions = {
	mRNA: 'Lleva la información genética desde el DNA hasta los ribosomas.',
	tRNA: 'Transporta aminoácidos y ayuda a construir proteínas en el ribosoma.',
	rRNA: 'Forma parte del ribosoma y participa en la fabricación de proteínas.'
};

// Cada boton actualiza el texto y mantiene visible la opcion seleccionada.
typeButtons.forEach((button) => {
	button.addEventListener('click', () => {
		typeButtons.forEach((item) => item.classList.remove('is-active'));
		button.classList.add('is-active');
		typeDescription.textContent = descriptions[button.textContent];
	});
});

