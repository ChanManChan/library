import React from 'react';
import { Timeline, Event } from 'react-timeline-scribble';
import { useSelector } from 'react-redux';
import moment from 'moment';
import AccMenu from '../components/AccordionMenu';

const parseDate = (date) => moment.unix(date / 1000).format('DD/MM/YYYY');

const Order_Timeline = () => {
  const checkoutData = useSelector((state) => state.checkout);

  const {
    address: { street = '', city = '', state = '', zip = '' } = {},
  } = checkoutData;
  const { checked, phases } = useSelector((state) => state.phase);
  const length = checked.length;
  return (
    <>
      <h1 style={{ marginBottom: '1rem' }}>Your order</h1>
      {checkoutData.items.length !== 0 ? (
        <>
          <div className='timeline_flex'>
            <div>
              {checked.length === 3 && (
                <h1 style={{ margin: '1rem' }}>
                  Order completed on: {parseDate(checked[2].date)}
                </h1>
              )}
            </div>
            <div>
              <h2>
                Order status:
                {phases.map(
                  (p, i) =>
                    checked[length - 1] &&
                    p.id === checked[length - 1].id &&
                    phases[i].stage
                )}
              </h2>
              <h2>Order number: {checkoutData.order_number}</h2>
            </div>
          </div>
          <div className='timeline_grid'>
            <Timeline>
              {checked.length > 0 &&
                checked.map((c, i) => (
                  <Event
                    key={i}
                    interval={parseDate(c.date)}
                    title={phases.map((p) => p.id === c.id && p.stage)}
                    subtitle={
                      'Delivery Address: ' +
                      street +
                      ', ' +
                      city +
                      ', ' +
                      state +
                      ', ' +
                      zip
                    }
                  >
                    Phase {i + 1}
                  </Event>
                ))}
            </Timeline>
            <div>
              <h1>Admin operation</h1>
              <AccMenu />
            </div>
          </div>
        </>
      ) : (
        <h2>Order list is empty</h2>
      )}
    </>
  );
};

export default Order_Timeline;
