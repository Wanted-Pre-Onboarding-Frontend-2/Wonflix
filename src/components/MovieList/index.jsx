import React from 'react';
import { useModifyModal } from '../../store/modal';

const DUMMY_MOVIES = [
  {
    id: '0001',
    title: '게시물 1',
  },
  {
    id: '0002',
    title: '게시물 2',
  },
  {
    id: '0003',
    title: '게시물 3',
  },
];

const MovieList = () => {
  const { openModal } = useModifyModal();

  const openModalWithData = (data) =>
    openModal({
      children: <p>{data.title}</p>, // TODO: MovieModalContent 생성
      onSubmit: () => console.log('submit'), // TODO: 클라이언트 즐겨찾기 fetch
    });

  // TODO: MovieCard 생성
  return (
    <>
      {DUMMY_MOVIES.map((data) => (
        <p key={data.id} onClick={() => openModalWithData(data)} role='presentation'>
          {data.title}
        </p>
      ))}
    </>
  );
};

export default React.memo(MovieList);
