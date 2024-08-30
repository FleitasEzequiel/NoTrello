export function router($app, path) {
  if (path === "/") $app.appendChild(pagTareas());
}
