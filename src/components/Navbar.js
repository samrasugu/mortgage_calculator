import { AppBar } from "@mui/material";
import {Toolbar} from "@mui/material";
import {Typography} from "@mui/material";
import {Container} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5">Bank of React</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;