let productos = [
    {
        id: 1,
        nombre: "Pan Rollo",
        precio: 500,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 2,
        nombre: "Pan Liso",
        precio: 500,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 3,
        nombre: "Pan hojaldrado",
        precio: 500,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 4,
        nombre: "roscon",
        precio: 500,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 5,
        nombre: "groceries",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 6,
        nombre: "home-decoration",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 7,
        nombre: "furniture",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 8,
        nombre: "tops",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 9,
       nombre: "womens-dresses",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 10,
        nombre: "womens-shoes",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 11,
        nombre: "mens-shirts",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 12,
        nombre: "mens-shoes",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 13,
        nombre: "mens-watches",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 14,
        nombre: "womens-watches",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 15,
        nombre: "womens-bags",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 16,
        nombre: "womens-jewellery",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 17,
        nombre: "sunglasses",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 18,
        nombre: "automotive",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 19,
        nombre: "motorcycle",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
    {
        id: 20,
        nombre: "lighting",
        precio: 20.000,
        stock: 200,
        categoria: "Panaderia",
    },
];
function getData(url, headers, method, data) {
    return productos;
}

function getProductosById(id) {
    let result = null;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id.toString() === id.toString()) {
            result = productos[i];
            break;
        }
    }
    return result;
}

export { getData, getProductosById };
