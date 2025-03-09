const form = () => {
  const main = document.querySelector(".main");

  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  };

  const container = document.createElement("div");
  container.classList.add("container");
  main.appendChild(container);

  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  container.appendChild(formContainer);

  const form = document.createElement("form");
  formContainer.appendChild(form);

  const h2 = document.createElement("h2");
  h2.innerText = "Enter player's name:";
  form.appendChild(h2);

  const inputDiv = document.createElement("div");
  form.appendChild(inputDiv);

  const label = document.createElement("label");
  label.setAttribute("for", "name");
  inputDiv.appendChild(label);

  const input = document.createElement("input");
  input.setAttribute("id", "name");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Name...");
  input.required = true;
  inputDiv.appendChild(input);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");
  form.appendChild(btnContainer);

  const btn = document.createElement("button");
  btn.setAttribute("id", "start-btn");
  btn.setAttribute("type", "submit");
  btn.innerText = "START";
  btnContainer.appendChild(btn);
};

export default form; 