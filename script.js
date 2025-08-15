function upDate(previewPic) {
  console.log('upDate triggered');
  console.log('alt:', previewPic.alt);
  console.log('src:', previewPic.src);

  const image = document.getElementById('image');
  image.textContent = previewPic.alt || '...';
  image.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  console.log('undo triggered');

  const image = document.getElementById('image');
  image.style.backgroundImage = "url('')";
  image.textContent = "Hover over an image below to display here.";
}

function initGallery() {
  console.log('initGallery triggered - adding tabindex');

  const previews = document.querySelectorAll('.preview');

  // Thêm tabindex cho từng ảnh
  for (let i = 0; i < previews.length; i++) {
    previews[i].setAttribute('tabindex', '0'); // cho phép focus bằng Tab

    // Mouse events
    previews[i].addEventListener('mouseover', () => upDate(previews[i]));
    previews[i].addEventListener('mouseout', undo);

    // Keyboard focus events
    previews[i].addEventListener('focus', () => upDate(previews[i]));
    previews[i].addEventListener('blur', undo);
  }
}
