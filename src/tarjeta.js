export const tarjeta = (info) => {
  const $tarjeta = document.createElement("div");
  $tarjeta.setAttribute("draggable", "true");
  $tarjeta.classList.add("rounded-sl", "bg-blue-300");
  const $title = document.createElement("h1");
  const $desc = document.createElement("p");
  $desc.innerText = `${info.title}`;
  $title.innerText = `${info.title}`;
  $tarjeta.appendChild($title);
  $tarjeta.appendChild($desc);
  return $tarjeta;
};
