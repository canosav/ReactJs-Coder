export const productos = [
    {
        id: 1 ,
        categoria:"ojos" ,
        nombre:"Mascara de Pestañas ", 
        precio:15000 ,
        imagen:"../assets/images/pestañas.jpg",
        stock: 6
    }, 
    {
        id: 2,
        categoria:"ojos" ,
        nombre: "Delineador", 
        precio: 10000,
        imagen: "../assets/images/delineador.jpg",
        stock: 7 
    }, 
    {
        id: 3,
        categoria:"ojos" ,
        nombre:"Sombras" , 
        precio: 20000 ,
        imagen: "../assets/images/sombras.jpg",
        stock: 3 
    }, 
    {
        id: 4,
        categoria: "labios",
        nombre: "Delineador de Labios", 
        precio: 5000 ,
        imagen: "../assets/images/delineador-labios.jpg",
        stock: 2
    }, 
    {
        id: 5,
        categoria:"labios",
        nombre: "gloss", 
        precio: 8000,
        imagen:"../assets/images/gloss.jpg" ,
        stock: 20
    }, 
    {
        id: 6,
        categoria:"labios",
        nombre: "Labial", 
        precio: 10000,
        imagen: "../assets/images/labial.jpg",
        stock: 8
    }, 
    {
        id:7 ,
        categoria:"rostro" ,
        nombre: "Base", 
        precio: 20000,
        imagen: "../assets/images/base.jpg",
        stock: 5
    }, 
    {
        id:8 ,
        categoria: "rostro",
        nombre: "Corrector", 
        precio: 17000,
        imagen: "../assets/images/corrector.jpg",
        stock: 9
    },
    {
        id: 9,
        categoria: "rostro",
        nombre: "Polvo Compacto", 
        precio: 15000,
        imagen:"../assets/images/polvo.jpg",
        stock: 2
    }, 
    {
        id: 10 ,
        categoria: "rostro",
        nombre: "Rubor", 
        precio: 10000,
        imagen: "../assets/images/rubor.jpg",
        stock: 12
    }, 
    {
        id: 11,
        categoria: "rostro",
        nombre: "Iluminador", 
        precio: 10000,
        imagen: "../assets/images/iluminador.jpg",
        stock: 7
    }, 
    {
        id: 12,
        categoria: "rostro",
        nombre: "Bronzer", 
        precio: 10000,
        imagen:"../assets/images/bronzer.jpg" ,
        stock: 8
    }
];

export const getProducts = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
  };

