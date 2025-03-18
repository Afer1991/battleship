const typeWriter = (el, text, index) => {
  if (index < text.length) {
    document.getElementById(el).innerHTML += text.charAt(index);
    setTimeout(() => {
      typeWriter(el, text, index + 1);
    }, 50);
  }
};

export default typeWriter;