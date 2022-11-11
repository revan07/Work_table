
// declaro una variable constante con el name video despues la inicializamos
// la inicializamos con el valor de un document.createElement y le pasamos el elemento html que crearemos 'video'
const video = document.createElement('video');


// Aqui llamamo la variable video y le pasamos un atributo .src donde pondremo el link o directorio local de nuestro nuestro video o archivo
video.src = "";

// Aqui llamamo nuevamente la variable y le pasamos otro atributo que sera .poster que es para obtener una imagen y ponerla de poster en el
// video donde estara el video elemento
video.poster = "";


video.autoplay = false;
video.controls = true;
video.muted = false;
video.width = 300;
video.height = 150;
// des pues en mi constante video le paso las propiedades para configurar la reproduccion y ramaño del video
/* video.autoplay = false; Es para evitar que el video se autoReprodusca solo*/
/* video.controls = true; Es para poder interactuar con las opcione del video*/
/* video.muted = false; Es para que el video no inicie mutado */
/* video.width = 300; y video.height = 150; Es la anchura y altura del video */


/* creamos una constante llamada box donde la inicializamos aacediendo al DOM html
y le pasamos el video como erencia con appendChild(video) */
const box = document.getElementById('Batmanmp4')

box.appendChild(video)