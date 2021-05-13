import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // const history = useHistory();

  // const logoutHandler = (event) => {
  //   event.preventDefault();
  //   auth.logout();
  //   history.push('/');
  // };

  return (
    <header>
      <nav>
        <div>
          <Link to={'/'}>
            <img alt="Logo" />
          </Link>

          <Link to="/sign-in">
            <span className="nav-link">sign in</span>
          </Link>

          <Link to="/sign-up">
            <span className="nav-link">sign-up</span>
          </Link>

          {/* <Link to='/' onClick={logoutHandler}>
                  <span className='nav-link'>Выйти</span>
                </Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
