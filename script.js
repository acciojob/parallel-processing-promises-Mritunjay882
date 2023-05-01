//your JS code here. If required.
const images = [
  {
    url: "https://picsum.photos/id/237/200/300",
    alt: "Image 1",
  },
  {
    url: "https://picsum.photos/id/238/200/300",
    alt: "Image 2",
  },
  {
    url: "https://picsum.photos/id/239/200/300",
    alt: "Image 3",
  }
//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImages(images) {
  const promises = images.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image.url;
      img.alt = image.alt;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject(`Failed to load image's URL: ${image.url}`);
      };
    });
  });

  Promise.all(promises)
    .then(imgs => {
      const output = document.getElementById('output');
		output.innerHTML = null;
      imgs.forEach(img => {
        output.appendChild(img);
      });
    })
    .catch(error => {
      console.error(error);
    });
}
document.getElementById('download-images-button').addEventListener('click',(event)=>{

	let promises = images.map((url)=>{ //creating promise for each of the image url
		return new Promise((resolve,reject) => {
			let img = new Image();//getting image 

			img.onload = () => resolve(img); //upon laoding the image the promise is resolved
			img.onerror = () => reject(`Failed to load image's URL: ${url}`); //if error give the statement
			img.src = url; //save the image source
	});
	});

const button = document.getElementById('download-images-button');
button.addEventListener('click', () => {
  downloadImages(images);
});
	Promise.all(promises).then(images => {
		images.forEach((image) => {
			document.getElementById('output').appendChild(image); //append the image tag as and when the promise is resolved
		});
	}).catch(error => {
		console.log(error);
	});
});
