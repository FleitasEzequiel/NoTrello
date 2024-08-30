export const pagTareas = () => {
  `
<div class="grid grid-cols-2">
<div class="flex flex-col gap-6" id="listaTareas"></div>
<div class="h-40 bg-gray-400 flex flex-col m-5">
  <h1 class="text-center">Crear Tarea</h1>
  <label class="text-center"
    >Nombre:<input type="text" class="m-5 w-80" placeholder="Estudiar"
  /></label>
  <label class="text-center">
    Descripción
    <input type="text" class="m-5 w-80" name="d" placeholder="Mañana" />
  </label>
</div>
</div>
`;
};
