

function buildHeader() {
	const header = document.createElement('header');
	header.textContent = 'Exercice 3';
	header.classList.add('header');
	return header;
}

function buildFooter() {
	const footer = document.createElement('footer');
	footer.textContent = `All Rights Reserved &copy;`;
	footer.classList.add('footer');
	return footer;
}

function buildMain() {
	const main = document.createElement('main');
	// main.style.border = '2px solid black';
	main.classList.add('main');
	main.appendChild(buildMainLeft())
	main.appendChild(buildMainRight())
	return main;
}

function buildMainLeft() {
	const mainLeft = document.createElement('div');
	mainLeft.textContent = '558 X 460';
	mainLeft.classList.add('mainLeft');
	return mainLeft;
}


function buildDetails(txt) {
	const detail = document.createElement('div');
	detail.classList.add('detail');

	const h3 = document.createElement('h3');
	h3.textContent = txt;

	const p = document.createElement('p');
	p.classList.add('p');
	p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo laboriosam eveniet doloribus animi consequuntur dolor iusto dolorem dignissimos officia fugiat exercitationem facilis neque, illo eum aut sapiente?';

	detail.appendChild(h3);
	detail.appendChild(p);

	return detail;
}

function buildMainRight() {
	const mainRight = document.createElement('div');
	mainRight.classList.add('mainRight');

	mainRight.appendChild(buildDetails('our mision'));
	mainRight.appendChild(buildDetails('our mision'));
	mainRight.appendChild(buildDetails('our mision'));
	return mainRight;
}

function buildDescription() {
	const div = document.createElement('div');
	div.setAttribute('id', 'description');

	const h2 = document.createElement('h2');
	h2.textContent = 'Who we are';

	const p = document.createElement('p');
	p.textContent = 'iwdbhsdbhdsbchdbchudebchdeuhedhcre';

	div.appendChild(h2);
	div.appendChild(p);

	return div;
}

function buildPage() {
	const body = document.querySelector('body');
	body.classList.add('body');

	body.appendChild(buildHeader());
	body.appendChild(buildDescription());
	body.appendChild(buildMain());
	body.appendChild(buildFooter());
}

buildPage();
