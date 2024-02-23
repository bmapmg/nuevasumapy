const formSuma = document.getElementById('form-suma');
const resultado = document.getElementById('resultado');

formSuma.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener los datos del formulario
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;

  // Enviar una solicitud al servidor
  fetch('/sumar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      num1,
      num2,
    }),
  })
  .then(response => response.json())
  .then(data => {
    // Mostrar el resultado
    resultado.innerHTML = `La suma es: ${data.resultado}`;
  });
});
