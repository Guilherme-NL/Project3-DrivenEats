function selectPrato(element) {
  const selectedPrato = document.querySelector(".prato-selected");
  if (selectedPrato !== null) {
    selectedPrato.classList.remove("prato-selected");
  } else {
    element.classList.add("prato-selected");
  }
  order();
}
function selectBebida(element) {
  const selectedBebida = document.querySelector(".bebida-selected");
  if (selectedBebida !== null) {
    selectedBebida.classList.remove("bebida-selected");
  } else {
    element.classList.add("bebida-selected");
  }
  order();
}
function selectSobremesa(element) {
  const selectedSobremesa = document.querySelector(".sobremesa-selected");
  if (selectedSobremesa !== null) {
    selectedSobremesa.classList.remove("sobremesa-selected");
  } else {
    element.classList.add("sobremesa-selected");
  }
  order();
}
function order() {
  const selectedSobremesa = document.querySelector(".sobremesa-selected");
  const selectedBebida = document.querySelector(".bebida-selected");
  const selectedPrato = document.querySelector(".prato-selected");
  if (
    selectedSobremesa !== null &&
    selectedBebida !== null &&
    selectedPrato !== null
  ) {
    const closeOrder = document.querySelector(".close-order-off");
    closeOrder.innerHTML = "Fechar pedido";
    closeOrder.classList.add("close-order-on");
  } else {
    const closeOrder = document.querySelector(".close-order-off");
    closeOrder.innerHTML = "Selecione os 3 itens para fchar o pedido";
    closeOrder.classList.remove("close-order-on");
  }
}
