import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { moviesData, sortData } from '../../store/movies';
import './movies.scss';
import Card from '../Card/Card';
import MovieSort from './MovieSort/MovieSort';

import { useObserver } from '../../hooks/useObserver';
import { useInfiniteData } from '../../hooks/useInfiniteData';

const Movies = () => {
  const { pageNum, setPageNum, isLoading , isEnd, error, list, getData } = useInfiniteData();
  const [movies, setMovies] = useRecoilState(moviesData);
  const [lastElement, setLastElement] = useState(null);
  const [values, setValues] = useRecoilState(sortData);
  const observer = useObserver(setPageNum);

  useEffect(() => {
    if (!isEnd) {
      getData(values);
    }
  }, [pageNum, getData, list, setMovies, isEnd, values]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement, observer]);

  return (
    <>
      <div className='movie_wrap'>
        <MovieSort />
        <div className='movies'>
          {movies?.length > 0 &&
            movies?.map((movie, i) => {
              return i === movies?.length - 1 && !isLoading && !isEnd ? (
                <div key={movie.imdb_code} ref={setLastElement}>
                  <Card movie={movie} atom={moviesData} role='presentation' />
                </div>
              ) : (
                <Card key={movie.imdb_code} movie={movie} atom={moviesData} role='presentation' />
              );
            })}
        </div>
        {isLoading && <p>loading...</p>}
        {isEnd && <p>여기가 페이지 끝입니다!</p>}
      </div>
    </>
  );
};

export default Movies;
