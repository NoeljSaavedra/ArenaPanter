import { Grid, Typography } from "@mui/material";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import { blue, blueGrey } from "@mui/material/colors";

// ProductList will be passed an Array of Products as Props
interface Props {
  products: Product[];
  productsR: Product[];
  productsE: Product[];
  productsH: Product[];
  productsHD: Product[];
  productsP: Product[];
  productsTF: Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <>
      <div
        className="entradas"
        style={{ backgroundImage: "url(/imagen/Menu1.jpg)" }}
      >
        <Typography
          style={{
            textAlign: "center",
            color: "white",
          }}
          variant="h1"
          gutterBottom
        >
          Nuestro Menu
        </Typography>

        <Typography
          style={{
            textAlign: "center",
            color: "white",
          }}
          variant="h2"
          gutterBottom
        >
          Entradas
        </Typography>
        <br />

        <Grid
          style={{
            color: "white",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 20,
          }}
          container
          spacing={4}
        >
          {/* Listing All Product Cards */}
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export const ProductListR = ({ productsR }: Props) => {
  return (
    <>
      <div
        className="entradas"
        style={{ backgroundImage: "url(/imagen/Menu2.jpg)" }}
      >
        <Typography
          style={{
            textAlign: "center",
          }}
          variant="h2"
          gutterBottom
        >
          <br />
          Ramenes
        </Typography>
        <br />
        <Grid
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 20,
          }}
          container
          spacing={4}
        >
          {/* Listing All Product Cards */}
          {productsR.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export const ProductListE = ({ productsE }: Props) => {
  return (
    <>
      <div
        className="ensaladas"
        style={{ backgroundImage: "url(/imagen/Menu1.jpg)" }}
      >
        <Typography
          style={{
            textAlign: "center",
            color: "white",
          }}
          variant="h2"
          gutterBottom
        >
          <br />
          Ensaladas
        </Typography>
        <br />
        <Grid
          style={{
            color: "white",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 20,
          }}
          container
          spacing={4}
        >
          {/* Listing All Product Cards */}
          {productsE.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export const ProductListH = ({ productsH }: Props) => {
  return (
    <>
      <div
        className="hamburguesas"
        style={{ backgroundImage: "url(/imagen/Menu2.jpg)" }}
      >
        <Typography
          style={{
            textAlign: "center",
          }}
          variant="h2"
          gutterBottom
        >
          <br />
          Hamburguesas
        </Typography>
        <br />
        <Grid
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 20,
          }}
          container
          spacing={4}
        >
          {/* Listing All Product Cards */}
          {productsH.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export const ProductListHD = ({ productsHD }: Props) => {
  return (
    <>
      <div
        className="Hotdogs"
        style={{ backgroundImage: "url(/imagen/Menu1.jpg)" }}
      >
        <Typography
          style={{
            textAlign: "center",
            color: "white",
          }}
          variant="h2"
          gutterBottom
        >
          <br />
          Hot Dogs
        </Typography>
        <br />
        <Grid
          style={{
            color: "white",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 20,
          }}
          container
          spacing={4}
        >
          {/* Listing All Product Cards */}
          {productsHD.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export const ProductListP = ({ productsP }: Props) => {
  return (
    <>
      <div
        className="patacon"
        style={{ backgroundImage: "url(/imagen/Menu2.jpg)" }}
      >
        <Typography
          style={{
            textAlign: "center",
          }}
          variant="h2"
          gutterBottom
        >
          <br />
          Patacon
        </Typography>
        <br />
        <Grid
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 20,
          }}
          container
          spacing={4}
        >
          {/* Listing All Product Cards */}
          {productsP.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export const ProductListTF = ({ productsTF }: Props) => {
  return (
    <>
      <div
        className="tablas"
        style={{ backgroundImage: "url(/imagen/Menu1.jpg)" }}
      >
        <Typography
          style={{
            textAlign: "center",
            color: "white",
          }}
          variant="h2"
          gutterBottom
        >
          <br />
          Tablas Familiares
        </Typography>
        <br />
        <Grid
          style={{
            color: "white",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            paddingBottom: 20,
          }}
          container
          spacing={4}
        >
          {/* Listing All Product Cards */}
          {productsTF.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
