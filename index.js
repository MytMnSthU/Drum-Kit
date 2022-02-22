const sounds = [
	{ w: './sounds/crash.mp3' },
	{ a: './sounds/kick-bass.mp3' },
	{ s: './sounds/snare.mp3' },
	{ d: './sounds/tom-1.mp3' },
	{ j: './sounds/tom-2.mp3' },
	{ k: './sounds/tom-3.mp3' },
	{ l: './sounds/tom-4.mp3' },
];

const drums = document.querySelectorAll('.drum');

function makeSound(key) {
	sounds.map((s) => {
		if (s.hasOwnProperty(key)) {
			let soundkey = sounds.filter((sound) => sound[`${key}`]);
			let sound = new Audio(`${soundkey[0][key]}`);
			return sound.play();
		}
	});
}
function addEffect(e) {
	document.querySelector(`.${e}`).classList.add('pressed');
	setTimeout(() => {
		document.querySelector(`.${e}`).classList.remove('pressed');
	}, 100);
}

window.addEventListener('keydown', (e) => {
	makeSound(e.key);
	addEffect(e.key);
});

drums.forEach((drum) => {
	drum.addEventListener('click', () => {
		makeSound(drum.textContent);
		addEffect(drum.textContent);
	});
});
