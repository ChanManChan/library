import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/index';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const Checkout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const { phases } = useSelector((state) => state.phase);

  const [
    { f_name, l_name, street, city, state, zip },
    setFields,
  ] = React.useState({
    f_name: '',
    l_name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      actions.record_checkout({
        name: {
          f_name,
          l_name,
        },
        address: {
          street,
          city,
          state,
          zip,
        },
        items: cartItems,
        order_number: Math.random() * 10,
      })
    );
    dispatch(
      actions.set_stage([{ id: phases[0].id, date: moment().toDate() }])
    );
    history.push('/order');
  };

  const handleChange = (e) => {
    e.persist();
    setFields((cs) => ({ ...cs, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className='checkout-form'>
      <h1>
        <i className='fas fa-shipping-fast'></i>
        Shipping Details
      </h1>
      <div className='name'>
        <div className='input_group'>
          <label htmlFor='f_name'>First Name</label>
          <input type='text' name='f_name' onChange={handleChange} />
        </div>
        <div className='input_group'>
          <label htmlFor='l_name'>Last Name</label>
          <input type='text' name='l_name' onChange={handleChange} />
        </div>
      </div>
      <div className='address-info'>
        <div className='input_group'>
          <label htmlFor='street'>Street</label>
          <input type='text' name='street' onChange={handleChange} />
        </div>
        <div className='input_group'>
          <label htmlFor='city'>City</label>
          <input type='text' name='city' onChange={handleChange} />
        </div>
        <div className='input_group'>
          <label htmlFor='state'>State</label>
          <input type='text' name='state' onChange={handleChange} />
        </div>
        <div className='input_group'>
          <label htmlFor='zip'>Zip</label>
          <input type='text' name='zip' onChange={handleChange} />
        </div>
      </div>
      <h1>
        <i className='far fa-credit-card'></i> Payment Information
      </h1>
      <div className='cc-info'>
        <div className='input_group'>
          <label htmlFor='card-num'>Credit Card No.</label>
          <input type='text' name='card-num' onChange={handleChange} />
        </div>
        <div className='input_group'>
          <label htmlFor='expire'>Exp</label>
          <input type='text' name='expire' onChange={handleChange} />
        </div>
        <div className='input_group'>
          <label htmlFor='security'>CCV</label>
          <input type='text' name='security' onChange={handleChange} />
        </div>
      </div>
      <div className='btns'>
        <button type='submit' className='form_btn'>
          Purchase
        </button>
        <Link to='/'>
          <button className='form_btn'>Back to Home</button>
        </Link>
      </div>
    </form>
  );
};

export default Checkout;
