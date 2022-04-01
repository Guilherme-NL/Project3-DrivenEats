function selectPrato(element) {
  const selectedPrato = document.querySelector(".prato-selected");
  if (selectedPrato !== null) {
    selectedPrato.classList.remove("prato-selected");
  } else {
    element.classList.add("prato-selected");
  }
}
function selectBebida(element) {
  const selectedBebida = document.querySelector(".bebida-selected");
  if (selectedBebida !== null) {
    selectedBebida.classList.remove("bebida-selected");
  } else {
    element.classList.add("bebida-selected");
  }
}
function selectSobremesa(element) {
  const selectedSobremesa = document.querySelector(".sobremesa-selected");
  if (selectedSobremesa !== null) {
    selectedSobremesa.classList.remove("sobremesa-selected");
  } else {
    element.classList.add("sobremesa-selected");
  }
}
