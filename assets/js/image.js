const silhouette = document.getElementById('silhouette');
const welcome = document.getElementById('welcomeimg');

const lightSilhouette = silhouette.getAttribute('data-light');
const darkSilhouette = silhouette.getAttribute('data-dark');

const lightWelcome = welcome.getAttribute('data-light');
const darkWelcome = welcome.getAttribute('data-dark');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  silhouette.src = darkSilhouette;
  welcome.src = darkWelcome;
} else {
  silhouette.src = lightSilhouette;
  welcome.src = lightWelcome;
}