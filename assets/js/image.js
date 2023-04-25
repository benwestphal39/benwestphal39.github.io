const silhouette = document.getElementById('silhouette');
const lightImage = silhouette.getAttribute('data-light');
const darkImage = silhouette.getAttribute('data-dark');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  silhouette.src = darkImage;
} else {
  silhouette.src = lightImage;
}