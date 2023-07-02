
  const gallery = document.getElementById("gallery");

fetch("http://localhost:5678/api/works")
  .then(response => response.json())
  .then(data => {
    const imagesData = data;
    imagesData.forEach(image => {
      const figureElement = document.createElement("figure");
      const imgElement = document.createElement("img");
      const figCaptionElement = document.createElement("figcaption");

      imgElement.src = image.imageUrl;
      imgElement.alt = image.title;
      figCaptionElement.textContent = image.title;
      figureElement.appendChild(imgElement);
      figureElement.appendChild(figCaptionElement);
      gallery.appendChild(figureElement)
    });
  })
  .catch(error => {
    console.log(error);
  });
