import React from 'react';
import { useDispatch } from 'react-redux';
import { set_cart_item } from '../actions';

const Card = ({ disable_btn = false, ...props }) => {
  const { id, alt, title, author, category, link } = props;

  const dispatch = useDispatch();

  return (
    <article className='card'>
      <img
        src={`https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE73tVHYWzw5u13tOvmnSuQWmq5SQqPtsYZQ7uDhaJtjBZ-PC7-TKhz2faWey4SLWojL-KWMmelb4Bnog7CBFPnV4qNKjTYjeVVnMteiwTItl7O_O23RBFq98plUd4_3RW-Ct5e6r&source=gbs_api%22,`}
        alt={alt}
      />
      <div className='content'>
        <div className='content-flex'>
          <span className='badge title'>title</span>
          <p>{title}</p>
        </div>
        <div className='content-flex'>
          <span className='badge author'>author</span>
          <p>{author}</p>
        </div>
        <div className='content-flex'>
          <span className='badge category'>category</span>
          <p>{category}</p>
        </div>
        <div className='button-container'>
          <a
            href={link}
            className='button'
            data-btntxt='Visit in Store'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit in Store
          </a>
          {!disable_btn && (
            <button
              onClick={() => dispatch(set_cart_item(props))}
              className='button'
              data-btntxt='Add To Cart'
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
