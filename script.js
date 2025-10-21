// ======== Menu Responsivo ========
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// ======== Filtros de Produtos (opcional) ========
const filterButtons = document.querySelectorAll('.filtros button');
const products = document.querySelectorAll('.produto');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-filter');
    products.forEach(product => {
      if (category === 'all' || product.getAttribute('data-category') === category) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});

// ======== Lightbox da Galeria ========
const galeriaImgs = document.querySelectorAll('.grid-galeria img');

galeriaImgs.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';

    const imgZoom = document.createElement('img');
    imgZoom.src = img.src;
    imgZoom.style.maxWidth = '90%';
    imgZoom.style.borderRadius = '10px';

    overlay.appendChild(imgZoom);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});
