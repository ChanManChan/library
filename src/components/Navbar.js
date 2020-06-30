import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      <Search />
      <nav className='skew-menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className='item-count' data-count={cartItems.length}>
            <Link to='/cart'>Cart</Link>
          </li>
          <li>
            <Link to='/order'>Order</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
