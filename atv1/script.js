 const form = document.getElementById('mediaForm');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const num1 = parseFloat(form.num1.value);
      const num2 = parseFloat(form.num2.value);
      const num3 = parseFloat(form.num3.value);
      const num4 = parseFloat(form.num4.value);

      const media = ((num1 + num2 + num3 + num4) / 4).toFixed(2);

      resultado.innerHTML = `A média dos números é: <span style="color: blue;">${media}</span>`;
    });