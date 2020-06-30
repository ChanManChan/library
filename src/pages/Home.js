import React from 'react';
import Card from '../components/Card';
import { set_books } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const search = useSelector((state) => state.search);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let _isMounted = true;

    setLoading(true);

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API}`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (_isMounted) {
          setLoading(false);
          dispatch(set_books(data.items));
        }
      })
      .catch((err) => {
        console.error(err);
        if (_isMounted) {
          setLoading(false);
        }
      });

    return () => {
      _isMounted = false;
    };
  }, [search, dispatch]);

  return (
    <>
      <h1>Home</h1>
      <div className='flex-wrapper'>
        {loading ? (
          <div className='spinner' />
        ) : (
          books.map((b) => (
            <Card
              key={b.id}
              id={b.id}
              alt={b.volumeInfo.publishedDate}
              title={b.volumeInfo.title}
              author={b.volumeInfo.authors ? b.volumeInfo.authors[0] : ''}
              category={
                b.volumeInfo.categories ? b.volumeInfo.categories[0] : ''
              }
              link={b.volumeInfo.previewLink}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
