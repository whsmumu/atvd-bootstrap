const botaoMenu = document.querySelector('#menu-botao');
const menu = document.querySelector('#menu');

botaoMenu.addEventListener('click', () => {
  const aberto = botaoMenu.getAttribute('aria-expanded') === 'true';
  menu.classList.toggle('hidden', aberto);
  menu.classList.toggle('flex', !aberto);
  botaoMenu.setAttribute('aria-expanded', String(!aberto));
});

const slides = document.querySelectorAll('[data-slide]');
const indicadores = document.querySelectorAll('[data-indicador]');
let slideAtual = 0;

function mostrarSlide(indice) {
  slideAtual = (indice + slides.length) % slides.length;
  slides.forEach((slide, posicao) => {
    const ativo = posicao === slideAtual;
    slide.classList.toggle('opacity-100', ativo);
    slide.classList.toggle('opacity-0', !ativo);
    slide.setAttribute('aria-hidden', String(!ativo));
    slide.inert = !ativo;
  });
  indicadores.forEach((indicador, posicao) => {
    const ativo = posicao === slideAtual;
    if (ativo) {
      indicador.setAttribute('aria-current', 'true');
    } else {
      indicador.removeAttribute('aria-current');
    }
    indicador.firstElementChild.classList.toggle('bg-white', ativo);
    indicador.firstElementChild.classList.toggle('bg-white/40', !ativo);
  });
}

document.querySelector('#anterior').addEventListener('click', () => mostrarSlide(slideAtual - 1));
document.querySelector('#proximo').addEventListener('click', () => mostrarSlide(slideAtual + 1));
indicadores.forEach((indicador, indice) => indicador.addEventListener('click', () => mostrarSlide(indice)));

document.querySelector('#interesse').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#resultado').textContent = 'Demonstração concluída. Nenhum dado foi enviado.';
});

document.querySelector('#abrir-modal').addEventListener('click', () => {
  document.querySelector('#sobre').showModal();
});
