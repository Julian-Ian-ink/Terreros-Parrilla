
const pedidoForm = document.getElementById("pedidoForm");
const listaPedidos = document.getElementById("listaPedidos");

pedidoForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const cliente = document.getElementById("cliente").value;
  const pedido = document.getElementById("pedido").value;

  const li = document.createElement("li");
  li.textContent = `📌 ${cliente}: ${pedido}`;
  listaPedidos.appendChild(li);

  pedidoForm.reset();
});
