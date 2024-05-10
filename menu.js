fetch('menu.json')
//Que hace? esta linea inicia la carga del archivo menu.json. fetch es una funcion de javaScript que facilita la realizacion de solicitudes de red, como obtener datos de un archivo o un endpointde API
//Como funciona? fetch devuelve una promesa que, cuando se resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, si no un objeto de respuesta que incluye varios detalles de la respuesta misma.
.then(response => response.json())
//Que hace? esta linea toma el objeto de respuesta obtenido del Fetch y utiliza el metodo .json() para convertir el cuerpo de la respuesta en un objeto JavaScript (esto asume que el cuerpo de la respuesta esta en formato JSON).
//Como funciona? el metodo .json tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo en formato JSON
then(data=>{
    const menuContainer = document.getElementById 
    ('menu-container');
    //Que hace? aqui se procesan los datos JSON ya convertidos. Se obtiene una referencia al contenido del menu en HTML mediante getElementByid ('menu-container'), y luego se itera sobre los elementos (categorias) del menu .
    data.items.forEach(category => {
        const categoryTitle = document.createElement('h2');
        //Que hace? aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido de texto, y luego se añade este tituloal contenedor del menu/.
        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);
const table = document.createElement('table');
//Que hace? se crea un elemento table para cada categoria. ademas, se prepara el encabezado (tableHead) con las columnas pertinentes. table body se inicializa vacio y se llenara con los elementos de la categoria.
const tableHead = <tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>;
let tableBody = '';
//Como funciona? por cada categoria en los datos, se realizan varios pasos: crear un titulo para la categoria (se crea un elemento <2> para el titulo de la categoria, se establece su contenido del texto al nombre de la categoria (category.category), luego se agrega al contenedor del menu).
//Crear una tabla para los elementos de esas categorias: se genera una tabla por cada categoria (primero se define el encabezado de la tabla <th>Foto</th><th>Descripcion</th><th>Precio</th>).
category.items.forEach(item => {
    tableBody += `<tr>
        <td>img src="${item.image} alt="${item.name}"</td>
        <td>{item.name}-"${item.description}"</td>
        <td>${item.price}</td>
    </tr>`
    });
    table.innerHTML = tableHead + tableBody;
    menuContainer.appendChild(table); 
});
});