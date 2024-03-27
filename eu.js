function addClass(element, className) {
  element.classList.add(className);
}

const transactionElement = document.getElementById("transaction");
addClass(transactionElement, "transaction");
