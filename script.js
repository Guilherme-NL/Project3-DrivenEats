//Global
let nomeBebida = "";
let nomePrato = "";
let nomeSobremesa = "";
let priceFinal = "";

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
function closeOrder() {
  const closeOrderOn = document.querySelector(".close-order-on");
  if (closeOrderOn !== null) {
    document.querySelector(".order").classList.remove("none");
  }
  //order name on confirmation screen
  //prato selected name
  nomePrato = document.querySelector(".prato-selected > h3").innerHTML;
  document.querySelector(".prato > h3").innerHTML = `${nomePrato}`;
  //bebida selected name
  nomeBebida = document.querySelector(".bebida-selected > h3").innerHTML;
  document.querySelector(".bebida > h3").innerHTML = `${nomeBebida}`;
  //sobremesa selected name
  nomeSobremesa = document.querySelector(".sobremesa-selected > h3").innerHTML;
  document.querySelector(".sobremesa > h3").innerHTML = `${nomeSobremesa}`;
  //order price on confirmation screen
  //prato selected price
  let selectedPratoPrice = document.querySelector(
    ".prato-selected > h5"
  ).innerHTML;
  document.querySelector(".prato > h5").innerHTML = `${selectedPratoPrice}`;
  //bebida selected price
  let selectedBebidaPrice = document.querySelector(
    ".bebida-selected > h5"
  ).innerHTML;
  document.querySelector(".bebida > h5").innerHTML = `${selectedBebidaPrice}`;
  //sobremesa selected price
  let selectedSobremesaPrice = document.querySelector(
    ".sobremesa-selected > h5"
  ).innerHTML;
  document.querySelector(
    ".sobremesa > h5"
  ).innerHTML = `${selectedSobremesaPrice}`;
  //TOTAL price
  //calc
  selectedSobremesaPrice = Number(
    selectedSobremesaPrice.replace("R$ ", "").replace(",", ".")
  );
  selectedBebidaPrice = Number(
    selectedBebidaPrice.replace("R$ ", "").replace(",", ".")
  );
  selectedPratoPrice = Number(
    selectedPratoPrice.replace("R$ ", "").replace(",", ".")
  );
  const price =
    selectedSobremesaPrice + selectedBebidaPrice + selectedPratoPrice;
  priceFinal = price.toFixed(2).replace(".", ",");
  //define
  document.querySelector(".total > h5").innerHTML = `R$ ${priceFinal}`;
}
function orderCancel() {
  document.querySelector(".order").classList.add("none");
}
function orderSend() {
  let number = "5513981732399";
  let msg = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${priceFinal}`;
  let target = `https://wa.me/${encodeURIComponent(
    number
  )}?text=${encodeURIComponent(msg)}`;
  document.querySelector("a").href = target;
}
