//your JS code here. If required.

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImages(){
	const promises = images.map(url => {
		return new promise((resolve,reject) => {
			const image = new Image();
			img.onload = () => resolve(img);
			img.onerror = () => reject('Failed to load image's URL: ${url}');
			img.src = url;
		});
	});
	Promise.all(promises)
	    .then(images => {
			const outputDiv = document.getElementById('output');
			images.forEach(image => {
				outputDiv.appendChild(image);
			});
		})
	.catch(error => {
		console.log(error);
	});
}
document.getElementById('download-images-button').addEventListener
('click',downloadImages);