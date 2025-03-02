const ui = () => {
  const header = document.createElement("header");
  header.classList.add("header");
  document.body.appendChild(header);
  
  const headerLogo = document.createElement("h1");
  headerLogo.innerText = "Battleship";
  header.appendChild(headerLogo);

  const main = document.createElement("main");
  main.classList.add("main");
  document.body.appendChild(main);

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = `
    <a href="https://github.com/Afer1991" target="_blank">
      <i class="fa-brands fa-github"></i>
    </a>`;

  document.body.appendChild(footer);
};

export default ui;