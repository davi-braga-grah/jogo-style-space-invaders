document.querySelector(".Comecar").addEventListener("click", () => {
    window.open("jogo/games.html")
})
document.querySelector(".Opções").addEventListener("click", () => {
    window.open("jogo/Opções.html")
})        

document.addEventListener("click", () => {
     // Cria o elemento audio
  const musica = new Audio('Musica de fundo para o jogo.mp3');
  musica.loop = true;

  // Tenta tocar a música automaticamente
  musica.play().then(() => {
    console.log('Música tocando automaticamente!');
  }).catch((error) => {
    console.log('Autoplay bloqueado, mostrando botão para o usuário.');
    // Se o autoplay falhar, mostra o botão
    const btn = document.getElementById('btnTocar');
    btn.style.display = 'inline-block';

    btn.addEventListener('click', () => {
      musica.play();
      btn.style.display = 'none';
    });
  });
})