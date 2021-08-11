const postsDB = [
  {
    id: '50d01a97-5631-41f8-8949-aed8fb487b98',
    user_id: "e2f1cfbd-6c29-477d-b4eb-dbb69081dfd1",
    typePost: "Offer",
    title: "Se ofrecen servicios de albañileria y relacionados",
    description: "Venenatis phasellus quis vel enim sociosqu congue quam.",
    image: "",
    priceRange: ["1000"],
    timeRange: ["mañana", "tarde"],
    category_id: 101,
    specialty_id: 1000,
    paymentMethods: ["Efectivo", "MercadoPago", "Transferencia", "Crédito", "Débito"],
    workingArea: ["CABA", "GBA Zona Sur"],
    isActive: true,
    acceptsQuestions: true
  },
  {
    id: "d6a4d061-39b9-4862-b871-3a21c551bd18",
    user_id: "c58ef3a8-1ad7-4ce4-ab20-5c36ad327f9b",
    typePost: "Offer",
    title: "Electricista a domicilio",
    description: "Venenatis phasellus quis vel enim sociosqu congue quam.",
    image: "",
    priceRange: ["800"],
    timeRange: ["mañana", "tarde"],
    category_id: 101,
    specialty_id: 1037,
    paymentMethods: ["Efectivo", "MercadoPago"],
    workingArea: ["CABA", "GBA Zona Sur", "GBA Zona Norte"],
    isActive: true,
    acceptsQuestions: true
  },
  {
    id: "0db120ed-c457-463d-9ae2-6565f26cbbe5",
    user_id: "880fb38e-b686-49d7-8002-a3542d106d36",
    typePost: "Offer",
    title: "Cuidado de niños a domicilio / en hogar",
    description: "Venenatis phasellus quis vel enim sociosqu congue quam.",
    image: "",
    priceRange: ["500"],
    timeRange: ["mañana", "tarde", "noche"],
    category_id: 105,
    specialty_id: 5008,
    paymentMethods: ["Efectivo"],
    workingArea: ["CABA"],
    isActive: true,
    acceptsQuestions: true
  },
  {
    id: "4c9da85f-ef26-4639-8803-dc0cb443f01e",
    user_id: "e3275235-8ea1-42a4-968d-d98255f75435",
    typePost: "Offer",
    title: "Costurera: La mejor de Bernal",
    description: "Venenatis phasellus quis vel enim sociosqu congue quam.",
    image: "",
    priceRange: ["1500"],
    timeRange: ["mañana", "tarde"],
    category_id: 101,
    specialty_id: 1028,
    paymentMethods: ["Efectivo", "MercadoPago"],
    workingArea: ["CABA"],
    isActive: true,
    acceptsQuestions: true
  },
  {
    id: "d671dc74-8c73-43db-b562-227367698c35",
    user_id: "befba476-a405-4b2d-b0b2-bbd7fa45fe5a",
    typePost: "Offer",
    title: "Carpintero: 50 años de experiencia",
    description: "Ultrices eleifend dis porttitor auctor condimentum vehicula habitasse, facilisis duis.",
    image: "",
    priceRange: ["700"],
    timeRange: ["mañana", "tarde"],
    category_id: 101,
    specialty_id: 1017,
    paymentMethods: ["Mercado Pago"],
    workingArea: ["CABA", "GBA Zona Norte"],
    isActive: true,
    acceptsQuestions: true
  },
  {
    id: "b1c4f80b-0e40-4232-b5c7-332b38d6cd73",
    user_id: "3210fa1e-9e2f-4b07-9ff7-3f58425ac564",
    typePost: "Petition",
    title: "Profesor de programación. Preparo alumnos para checkpoints de Henry",
    description: "sollicitudin magna euismod aenean quisque eu. Ullamcorper tempor habitasse sociis inceptos ultrices ornare integer.",
    image: "",
    priceRange: ["200"],
    timeRange: ["mañana", "tarde"],
    category_id: 107,
    specialty_id: 7001,
    paymentMethods: ["MercadoPago"],
    workingArea: ["CABA"],
    isActive: true,
    acceptsQuestions: true
  },
  {
    id: "c6b034d9-fcf8-4b2e-95be-783537126588",
    user_id: "c294a8ef-3bc1-4210-be26-615dc0d3c3b6",
    typePost: "Offer",
    title: "Zapatero Zona Sur",
    description: "habitasse sociis inceptos ultrices ornare integer, nostra a nunc ultricies gravida facilis integer.",
    image: "",
    priceRange: ["200"],
    timeRange: ["mañana", "tarde"],
    category_id: 101,
    specialty_id: 1115,
    paymentMethods: ["MercadoPago"],
    workingArea: ["GBA Zona Sur"],
    isActive: false,
    acceptsQuestions: true
  },
  {
    id: "09a6e911-ede3-44bf-a002-6dbf3acd491b",
    user_id: "d99f4ab1-c88e-49d3-b912-62057cb4a227",
    typePost: "Petition",
    title: "Volantero para evento social",
    description: "habitasse sociis inceptos ultrices ornare integer, nostra a nunc ultricies gravida facilis integer.",
    image: "",
    priceRange: ["800"],
    timeRange: ["mañana", "tarde"],
    category_id: 101,
    specialty_id: 1113,
    paymentMethods: ["Efectivo", "MercadoPago"],
    workingArea: ["GBA Zona Norte", "CABA", "GBA Zona Sur"],
    isActive: false,
    acceptsQuestions: false
  },
  {
    id: "2bf5ee8b-4e6a-48f3-a030-30d3cdc0d697",
    user_id: "416541a4-7724-4fbb-a5ff-ea9f5b1b27bb",
    typePost: "Offer",
    title: "Gasista matriculado Precios imbatibles",
    description: "habitasse sociis inceptos ultrices ornare integer, nostra a nunc ultricies gravida facilis integer.",
    image: "",
    priceRange: ["2500"],
    timeRange: ["mañana", "tarde"],
    category_id: 101,
    specialty_id: 1116,
    paymentMethods: ["Transferencia", "Efectivo", "MercadoPago"],
    workingArea: ["GBA Zona Sur"],
    isActive: true,
    acceptsQuestions: false
  },
  {
    id: "eca2c312-b2ee-47e1-9f28-398c854f3fec",
    user_id: "e03a184d-7485-4708-9cc2-205c81f06e3e",
    typePost: "Offer",
    title: "Chofer a domicilio",
    description: "habitasse sociis inceptos ultrices ornare integer, nostra a nunc ultricies gravida facilis integer.",
    image: "",
    priceRange: ["800"],
    timeRange: ["mañana", "tarde"],
    category_id: 103,
    specialty_id: 3001,
    paymentMethods: ["MercadoPago"],
    workingArea: ["CABA"],
    isActive: false,
    acceptsQuestions: false
  },
];

module.exports = postsDB;
