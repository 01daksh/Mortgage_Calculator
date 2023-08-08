import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5">Bank of React</Typography>{/*here components tag can be changed to p, a, div, etc. and the sx is used to style the componenets' data*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
//in real life projects you are given the figma design values and all the values are combined in one place and so the programmers collect all the values at one place like above and maintain the consistency in the site