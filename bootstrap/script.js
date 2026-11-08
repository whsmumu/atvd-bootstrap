document.querySelector('#interesse').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#resultado').textContent = 'Demonstração concluída. Nenhum dado foi enviado.';
});
