   const form = document.getElementById('vendaForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const preco = parseFloat(document.getElementById('preco').value);
      const quantidade = parseFloat(document.getElementById('quantidade').value);
      const desconto = parseFloat(document.getElementById('desconto').value);

      const total = (preco * quantidade - desconto).toFixed(2);

      document.getElementById('resultado').innerHTML =
        `<p>O preço final da venda é: <strong>R$ ${total}</strong></p>`;
    });