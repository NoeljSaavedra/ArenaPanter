import Head from "next/head";
import {
  ProductList,
  ProductListR,
  ProductListE,
  ProductListH,
  ProductListHD,
  ProductListP,
  ProductListTF,
} from "../components/ProductList";
import { Box } from "@mui/material";

export default function Home() {
  const products = {
    data: [
      {
        id: 1,
        title: "Tequeños Freedom Fighters",
        price: 4.5,
        description: "Tequeños",
        category: "5 unidades con salsa de su preferencia",
        image: "/imagen/tequeños1.JPG",
      },
      {
        id: 2,
        title: "Angry Birds",
        price: 5.99,
        description: "Tenders",
        category:
          "150gr de tenders de pollo, acompañados de papas francesas y ketchup",
        image: "/imagen/tendersdepollo1.JPG",
      },
      {
        id: 3,
        title: "Papas Fall Guys Fries",
        price: 1.99,
        description: "Papas",
        category: "150gr de papas francesas acompañados de ketchup",
        image: "/imagen/papasfritas.JPG",
      },
      {
        id: 4,
        title: "Papas Fall Guys Fries Plus",
        price: 2.99,
        description: "Papas",
        category: "300gr de papas francesas acompañados de ketchup",
        image: "/imagen/papasfritas.JPG",
      },
    ],
    extras: [
      {
        id: 1,
        name: "tomato",
        price: 3.99,
      },
      {
        id: 2,
        name: "droga",
        price: 2.99,
      },
      {
        id: 3,
        name: "perico",
        price: 5.99,
      },
    ],
  };

  const productsR = [
    {
      id: 5,
      title: "Ramen Akira",
      price: 7.99,
      description: "Ramen",
      category:
        "Ramen de lomito grillado acompañado con vegetales salteados y fideos",
      image: "/imagen/ramen.JPG",
    },
    {
      id: 6,
      title: "Ramen Calimero",
      price: 6.99,
      description: "Ramen",
      category:
        "Ramen de pollo grillado acompañado con vegetales salteados y fideos",
      image: "/imagen/ramenp.JPG",
    },
  ];

  const productsE = [
    {
      id: 6,
      title: "Chikorita Salad Clasica",
      price: 6.99,
      description: "Ensalada",
      category:
        "Lechuga fresca con aderezo mostaza miel, queso amarillo, jamon de pierna, frutos secos, maiz y aceitunas negras",
      image: "/imagen/ensalada.JPG",
    },
    {
      id: 7,
      title: "Chikorita Salad de Lomito",
      price: 9.99,
      description: "Ensalada",
      category:
        "Lechuga fresca con aderezo mostaza miel, queso amarillo, jamon de pierna, frutos secos, maiz y aceitunas negras y carne",
      image: "/imagen/ensalada.JPG",
    },
    {
      id: 8,
      title: "Chikorita Salad de Pollo",
      price: 7.99,
      description: "Ensalada",
      category:
        "Lechuga fresca con aderezo mostaza miel, queso amarillo, jamon de pierna, frutos secos, maiz y aceitunas negras y pollo",
      image: "/imagen/ensalada.JPG",
    },
    {
      id: 9,
      title: "Ensalada Jinx",
      price: 7.99,
      description: "Ensalada",
      category:
        "Lechuga fresca con tomate y zanahoria, aderezo mostaza-miel, queso amarillo, queso mozzarella, jamon de pierna, maiz y pollo grill",
      image: "/imagen/ensalada.JPG",
    },
  ];

  const productsH = [
    {
      id: 10,
      title: "Toad Burguer",
      price: 4.5,
      description: "Hamburguesa",
      category:
        "Hamburguesa de 125gr de carne con queso cheddar y bits de tocineta, acompañadas con papas francesas",
      image: "/imagen/hamburguesa.JPG",
    },
    {
      id: 11,
      title: "Luigi Burguer",
      price: 6.99,
      description: "Hamburguesa",
      category:
        "Hamburguesa de 150gr de carne con pepinillos, cebolla caramelizada y queso cheddar, acompañadas con papas francesas",
      image: "/imagen/luigi.JPG",
    },
    {
      id: 12,
      title: "Mario Burguer",
      price: 7.99,
      description: "Hamburguesa",
      category:
        "Hamburguesa de 150gr de pollo crocante tipo nugget acompañadas con vegetales y papas francesas",
      image: "/imagen/Mario.JPG",
    },
    {
      id: 13,
      title: "Gumba Burguer",
      price: 9.99,
      description: "Hamburguesa",
      category:
        "Hamburguesa de 150gr de carne tipo pizza burguer con piña caramelizada y peperoni, acompañadas con papas francesas",
      image: "/imagen/hamburguesa.JPG",
    },
    {
      id: 14,
      title: "Black Panter",
      price: 11.99,
      description: "Hamburguesa",
      category:
        "Hamburguesa de 200gr de carne, con queso mozzarella tempurizado bañada con salsa cheddar de la casa",
      image: "/imagen/blackpanter.JPG",
    },
  ];

  const productsHD = [
    {
      id: 15,
      title: "Hot Dog Sonic",
      price: 2.99,
      description: "HotDog",
      category: "Hot Dog clasico tipo americano",
      image: "/imagen/hotdog.JPG",
    },

    {
      id: 16,
      title: "Master Chief",
      price: 3.99,
      description: "HotDog",
      category:
        "Hot Dog con queso amarillo rallado, tocineta crocante y salsas clasicas",
      image: "/imagen/hotdog.JPG",
    },
  ];

  const productsP = [
    {
      id: 17,
      title: "DK Patakong de Carne Mechada/Pollo",
      price: 8,
      description: "Patacon",
      category:
        "Delicioso patacon maracucho de platano amarillo con vegetales, queso mozzarella, tocineta, salsa de la casa y proteina de su eleccion",
      image: "/imagen/patacon.JPG",
    },
  ];

  const productsTF = [
    {
      id: 18,
      title: "Friendship Para 2 Jugadores",
      price: 15,
      description: "Tablas",
      category:
        "05 tequeños, 150gr de papas francesas, 150gr de chicken tenders, mostaza-miel, cheddar y salsa de la casa",
      image: "/imagen/TF1.JPG",
    },
    {
      id: 19,
      title: "Fatality para 8 jugadores",
      price: 35,
      description: "Tablas",
      category:
        "15 tequeños, 15 pastelitos, 300gr de papas francesas, 300gr de chicken tenders, 200gr de queso pasteurizado en cubos servidos con ketchup, mostaza-miel, cheddar y salsa de la casa",
      image: "/imagen/tf2.JPG",
    },
    {
      id: 20,
      title: "Brutality para 12 jugadores",
      price: 35,
      description: "Tablas",
      category:
        "15 tequeños, 15 pastelitos, 300gr de papas francesas, 300gr de chicken tenders, 8 mini hotdogs, 200gr de queso pasteurizado en cubos servidos con ketchup, mostaza-miel, cheddar y salsa de la casa",
      image: "/imagen/tf3.JPG",
    },
  ];

  return (
    <>
      <Head>
        <title>Product List</title>
        <meta
          name="description"
          content="Discover the best deals and shop for your favorite products at our online store. With a wide range of categories and brands, our eCommerce app makes shopping easy and convenient. Get free shipping on orders over $50 and enjoy hassle-free returns. Download our app now and start shopping!"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Box>
        <ProductList products={products.data} extras={products.extras} />
        <ProductListR productsR={productsR} />
        <ProductListE productsE={productsE} />
        <ProductListH productsH={productsH} />
        <ProductListHD productsHD={productsHD} />
        <ProductListP productsP={productsP} />
        <ProductListTF productsTF={productsTF} />
      </Box>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
