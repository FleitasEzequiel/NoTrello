export const pintarTarea = (info) => {
  const $tarea = document.createElement("div");
  $tarea.classList.add("h-60", "rounded-lg", "bg-gray-200", "m-5");
  //Título
  const $titulo = document.createElement("h1");
  $titulo.classList.add("bg-gray-400", "text-center", "rounded-lg", "m-2");
  $titulo.innerText = `${info.title}`;
  //Descripción
  const $desc = document.createElement("input");
  $desc.setAttribute("readonly", "true");
  $desc.setAttribute("disabled", "true");
  $desc.classList.add("text-center");
  $desc.addEventListener("select", () => {
    $desc.removeAttribute("readonly");
    $desc.removeAttribute("disabled");
  });
  $desc.value = `${info.description}`;
  //Unión
  $tarea.appendChild($titulo);
  $tarea.appendChild($desc);
  return $tarea;
};
