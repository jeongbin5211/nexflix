import React from 'react'

interface RowProps {
  // 큰 이미지를 사용할지 결정하는 선택적 prop
  isLargeRow?: boolean;
  // 각 row의 제목
  title: string;
  // 각 row를 구분하기 위한 ID
  id: string;
  fetchUrl: string;
}

interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  name: string;
  overview: string;
  vote_average: number;
}

const Row = () => {
  return (
    <div>Row</div>
  )
}

export default Row