import * as React from "react";
import {
  Grid,
  Typography,
  IconButton,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { CartItem } from "../types";
import { DeleteOutlineOutlined, Add, Remove } from "@mui/icons-material";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

interface Props {
  extras: CartItem;
}

export const CartExtrasView = ({ extras }: Props) => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 1;
  return (
    <Grid
      style={{ display: "flex", justifyContent: "center" }}
      ml={0}
      alignItems="center"
      container
      spacing={0}
    >
      {/* Prooduct Quantity */}

      <Box>{/* Icreasing/Deacreasing Product Quantity Button  */}</Box>

      {/* Removing Product From Cart */}

      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Elige un tipo de salsa</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Salsa de tomate"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Mayonesa"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Mostaza"
          />
        </FormGroup>
        <FormHelperText>Tienes que elegir 1 tipo de salsa</FormHelperText>
      </FormControl>
    </Grid>
  );
};
