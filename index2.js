// Crear las cartas para cada barco
const barcos = [
    {
      nombre: "Seashark",
      imagen: "https://staticg.sportskeeda.com/editor/2023/05/2bcdc-16836188218257-1920.jpg?w=640",
      precio: "$50,000",
      vendedor: "Moyano",
      contacto: "leonelmoyano@gmail.com"
    },
    {
      nombre: "Tropic",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVE_fGLerBu-6Ho3c8MFeyv1iqe9KhMgeiK-fIAcK_dPWSgc0VCU7QnIoh_feKh9z308&usqp=CAU",
      precio: "$45,000",
      vendedor: "Moyano",
      contacto: "leonelmoyano@gmail.com"
    },
    {
      nombre: "Dinghy",
      imagen: "https://gtacars.net/images/0106a70bfb24aa21faba433a1d9efd32",
      precio: "$30,000",
      vendedor: "Moyano",
      contacto: "leonelmoyano@gmail.com"
    },
    {
      nombre: "Suntrap",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbTUznlggQHgWqns5qghXlwwUI_-wokKmdTj_kREBgSIvUDOyDwGD3G2ZqPqYcJZcUxuU&usqp=CAU",
      precio: "$40,000",
      vendedor: "Moyano",
      contacto: "leonelmoyano@gmail.com"
    },
    {
      nombre: "Squalo",
      imagen: "https://staticg.sportskeeda.com/editor/2023/05/195a0-16837875144881-1920.jpg?w=640",
      precio: "$60,000",
      vendedor: "Moyano",
      contacto: "leonelmoyano@gmail.com"
    },
    {
      nombre: "Marquis",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPV4xO2BkE0QcS20w-ihfwykqOMv47FmyBhkSHbw8zHU6zmRaVxLnxRW2WiylAP7gd3sY&usqp=CAU",
      precio: "$90,000",
      vendedor: "Moyano",
      contacto: "leonelmoyano@gmail.com"
    },
    {
      nombre: "Galaxy Super Yacht",
      imagen: "https://preview.redd.it/ii7oaxi95zmc1.jpeg?width=640&crop=smart&auto=webp&s=d280c009eff5559b4ed674e3f8ec04abf9141e69",
      precio: "$500,000",
      vendedor: "Moyano",
      contacto: "leonelmoyano@gmail.com"
    }
  ];
  
  // Función para crear una carta y añadirla al contenedor
  const contenedor = document.getElementById('card-container');
  barcos.forEach(barco => {
    // Crear la carta
    const carta = document.createElement('div');
    carta.classList.add('card');
  
    // Crear la imagen
    const img = document.createElement('img');
    img.src = barco.imagen;
    img.alt = barco.nombre;
    
    // Crear el título (nombre del barco)
    const h2 = document.createElement('h2');
    h2.textContent = barco.nombre;
    
    // Crear el precio
    const pPrecio = document.createElement('p');
    pPrecio.classList.add('price');
    pPrecio.textContent = barco.precio;
    
    // Crear el vendedor
    const pVendedor = document.createElement('p');
    pVendedor.classList.add('seller');
    pVendedor.textContent = `Vendedor: ${barco.vendedor}`;
    
    const pContacto = document.createElement('p');
    pContacto.classList.add('contact');
    pContacto.textContent = `Contacto: ${barco.contacto}`;

    // Añadir todo a la carta
    carta.appendChild(img);
    carta.appendChild(h2);
    carta.appendChild(pPrecio);
    carta.appendChild(pVendedor);
    carta.appendChild(pContacto);
  
    // Añadir la carta al contenedor
    contenedor.appendChild(carta);
  });
  
  