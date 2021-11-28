import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <header>
      <nav>
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
                <Link
                  to={"/"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  My Bookstore
                </Link>
              </Typography>

              <IconButton color="inherit">
                <Link
                  to={"/wishlist"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <FavoriteIcon />
                </Link>
              </IconButton>

              <IconButton color="inherit">
                <Link
                  to={"/orders"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <ShoppingCartIcon />
                </Link>
              </IconButton>

              <Button color="inherit">
                <Link
                  to="/sign-in"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Sign in
                </Link>
              </Button>

              <Button color="inherit">
                <Link
                  to="/sign-up"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Sign up
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
    </header>
  );
};

export default Header;
