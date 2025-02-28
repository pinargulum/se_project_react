export function showInputError(inputElement) {
  inputElement = document.querySelector(".modal__input");
  const modalSubmit = document.querySelector(".modal__submit");
  if (!inputElement.validity.valid) {
    inputElement.classList.add(".modal__input_error");
  } else {
    inputElement.classList.remove(".modal__input_error");
    modalSubmit.disabled = false;
    modalSubmit.classList.add(".modal__submit:hover");
  }
}
