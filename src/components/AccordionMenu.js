import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';
import moment from 'moment';

const Checkbox = ({ handleChecked, s_name, id, checked }) => (
  <div className='check_wrap'>
    <input
      id={id}
      type='checkbox'
      className='check_input'
      onChange={handleChecked}
      checked={checked}
    />
    <label htmlFor={id} className='check_label'>
      {s_name}
    </label>
  </div>
);

const AccordionMenu = () => {
  const dispatch = useDispatch();
  const { phases, checked } = useSelector((state) => state.phase);

  const accordion = (e) => {
    e.stopPropagation();
    if (e.target.parentElement.classList.contains('active')) {
      e.target.parentElement.classList.remove('active');
    } else {
      e.target.parentElement.classList.add('active');
    }
  };

  const handleToggle = (phase_id) => (e) => {
    let mutated_Arr = [...checked];
    if (e.target.checked)
      mutated_Arr.push({ id: phase_id, date: moment().toDate() });
    else {
      let index;
      mutated_Arr.map((o, i) => o.id === phase_id && (index = i));
      mutated_Arr.splice(mutated_Arr.indexOf(index), 1);
    }
    dispatch(actions.set_stage(mutated_Arr));
  };

  return (
    <div className='acc_menu'>
      <div className='acc_list'>
        <span onClick={accordion}>Test</span>
        <ul className='acc_items'>
          {phases.map((p) => (
            <li className='acc_li_items' key={p.id}>
              <Checkbox
                id={p.id}
                handleChecked={(e) => {
                  handleToggle(p.id)(e);
                }}
                s_name={p.stage}
                checked={checked.map((c) => c.id).includes(p.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccordionMenu;
