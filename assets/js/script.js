const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const links = document.querySelectorAll("li>a");
const gradients = [
	"linear-gradient(to right top, #f46b45, #eea849)",
	"linear-gradient(to right top, #005c97, #363795)",
	"linear-gradient(to right top, #e53935, #e35d5b)",
];

const options = {
	threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
	entries.forEach((entry) => {
		const className = entry.target.className;
		const activeAnchor = document.querySelector(`[data-page=${className}]`);
		const gradientIndex = entry.target.getAttribute("data-index");
		const coords = activeAnchor.getBoundingClientRect();
		const link = links[gradientIndex];
		const directions = {
			height: coords.height,
			width: coords.width,
			top: coords.top,
			left: coords.left,
		};
		if (entry.isIntersecting) {
			bubble.style.setProperty("left", `${directions.left}px`);
			bubble.style.setProperty("bottom", `${directions.top}px`);
			bubble.style.setProperty("width", `${directions.width}px`);
			// bubble.style.setProperty("height", `${directions.height}px`);
			bubble.style.setProperty("height", "3px");
			bubble.style.background = gradients[gradientIndex];
			links.forEach((link) => {
				link.style.color = "black";
			});
			link.style.color = "#565656";
		}
	});
}

sections.forEach((section) => {
	observer.observe(section);
});
