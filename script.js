let musicas = [
  {
    titulo: "6 Shots",
    artista: "NEFFEX",
    src: "Music/6 Shots - NEFFEX.mp3",
    img: "image/gene-brutty-XiQNkiI7bwg-unsplash.jpg",
  },

  {
    titulo: "Bom a Rockstar",
    artista: "NEFFEX",
    src: "Music/Born a Rockstar - NEFFEX.mp3",
    img: "image/ana-grave-gHcWaeldgtQ-unsplash.jpg",
  },

  {
    titulo: "Emotonal Mess",
    artista: "Amy Lyinn & the Honey Men",
    src: "Music/Emotional Mess - Amy Lynn & the Honey Men.mp3",
    img: "image/diane-picchiottino-W_dfi26u2U0-unsplash.jpg",
  },

  {
    titulo: "Ice & Fire",
    artista: "King Canyon",
    src: "Music/Ice & Fire - King Canyon.mp3",
    img: "image/jakayla-toney-v8TzUCgzDFw-unsplash.jpg",
  },

  {
    titulo: "River Blues",
    artista: "TrackTribe",
    src: "Music/River Blues - TrackTribe.mp3",
    img: "image/markus-spiske-E8M4dlfz0Q4-unsplash.jpg",
  },
];

let musica = document.querySelector("audio");
let indexMusica = 0;

let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2 ");
let nomeArtista = document.querySelector(".descricao i");

renderizarMusica(indexMusica);

document.querySelector(".botao-play").addEventListener("click", tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
  indexMusica--;
  if (indexMusica < 0) {
    indexMusica = 2;
  }
  renderizarMusica(indexMusica);
});

document.querySelector(".proxima").addEventListener("click", () => {
  indexMusica++;
  if (indexMusica > 2) {
    indexMusica = 0;
  }
  renderizarMusica(indexMusica);
});

function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src);
  musica.addEventListener("loadeddata", () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    duracaoMusica.textContent = segundosParaMinutos(
      Math.floor(musica.duration)
    );
  });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}

function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";

  let tempoDeCorrido = document.querySelector(".inicio");
  tempoDeCorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }

  return campoMinutos + ":" + campoSegundos;
}
