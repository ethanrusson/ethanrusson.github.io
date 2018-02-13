function loadPlaceholderImage(placeholder) {
	if (placeholder.getAttribute('data-src')) {
 		var placeholder_img = new Image();
 		placeholder_img.src = placeholder.getAttribute('data-src');	
 		var width = placeholder.getAttribute('width');
 		var height = placeholder.getAttribute('height');
 		var ctx = placeholder.getContext('2d');
 		placeholder_img.addEventListener('load', function() {		
 			ctx.drawImage(
 				placeholder_img,
 				0,
 				0,
 				width,
				height);
 			}, false);
	}
}
 
function loadPlaceholderImages() {
	var placeholders = document.querySelectorAll('canvas[data-src]');
 	// Progressively load placeholder images on page load
 	[].forEach.call(placeholders, loadPlaceholderImage);
}
 
// We want to load the placeholder images as soon as possible.
loadPlaceholderImages();

function loadDeferredImages() {
	var imgDefer = document.querySelectorAll('img[data-src]');
 	for (var i = 0; i < imgDefer.length; i++) {
 		loadDeferredImage(imgDefer[i]);
 	}
}
 
function loadDeferredImage(img_element) {
	if (img_element.getAttribute('data-src')) {
		img_element.setAttribute('src', img_element.getAttribute('data-src'));
		img_element.removeAttribute('data-src');
		img_element.addEventListener('load', function() {
			img_element.style.opacity = 1;
 
			// hide the placeholder image
			var placeholder_elm = img_element.previousElementSibling;
			if (placeholder_elm && placeholder_elm.classList.contains('qtext_image_placeholder')) {
				// Without timeout, we would see a flash of white before the image loads in.
				setTimeout(function() {
 					placeholder_elm.style.visibility = 'hidden';
 				}, 1000);
			}
 		});
 	}
}

window.onload = loadDeferredImages;