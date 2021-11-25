import React from "react";
// import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Header = () => {
  // const history = useHistory();

  // const logoutHandler = (event) => {
  //   event.preventDefault();
  //   auth.logout();
  //   history.push('/');
  // };

  return (
    <header>
      {/* <nav>
        <div>
          <Link to={'/'}>
            <img alt="Logo" />
          </Link>

          <Link to="/sign-in">
            <span className="nav-link">sign in</span>
          </Link>

          <Link to="/sign-up">
            <span className="nav-link">sign-up</span>
          </Link> */}

      {/* <Link to='/' onClick={logoutHandler}>
                  <span className='nav-link'>Выйти</span>
                </Link> */}
      {/* </div>
      </nav> */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Bookstore
            </Typography>

            <IconButton color="inherit">
              <FavoriteIcon />
            </IconButton>

            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>

            <Button color="inherit">Sign in</Button>

            <Button color="inherit">Sign up</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default Header;
