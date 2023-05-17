import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { useCart } from "../CartContext";
import { CartItemView } from "./CartItem";
import { CartExtrasView } from "./ExtrasView";
import { ContactSupport } from "@mui/icons-material";

export const CartView = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <Container>
      <Typography
        style={{
          textAlign: "center",
        }}
        variant="h3"
        mb={10}
      >
        Carrito de compras
      </Typography>
      {cartItems.length === 0 ? (
        <Typography
          style={{
            textAlign: "center",
          }}
          variant="subtitle1"
          gutterBottom
        >
          Tu carrito esta vacio
        </Typography>
      ) : (
        <>
          <Container>
            {/* Listing all items in the cart */}
            {cartItems.map((item: any) => (
              <Box key={item.product.id} mb={6}>
                <CartItemView item={item} />
              </Box>
            ))}

            {cartItems.map((extras: any) => (
              <Box key={extras.product.id} mb={6}>
                <CartExtrasView extras={extras} />
              </Box>
            ))}
          </Container>
          <Divider></Divider>
          <Box mt={2}>
            <Typography variant="h5">
              Costo total: ${cartTotal.toFixed(2)}
            </Typography>
          </Box>
          <Box mt={2} mb={6}>
            <Button href="https://wa.me/+584121205019" variant="outlined">
              Completa tu compra aquí
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};
