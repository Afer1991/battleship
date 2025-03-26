const fadeTransition = (element, effect) => {
  const affectedElement = document.getElementById(element);

  setTimeout(() => {
    affectedElement.classList.toggle(effect);
  }, 50);
};

export default fadeTransition;