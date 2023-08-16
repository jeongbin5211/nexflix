import React, { useEffect, useState } from 'react'

//! 웹 페이지 배너 구현
// : 배너에 표시되는 영화 정보를 불러오는 기능 담당
// : 사용자가 'Play' 버튼 클릭 시 배너가 영화의 YouTube 트레일러로 대체됩니다.

//^ movie의 상세 정보를 포함하는 타입 정의
type MovieDetail = {
  title: string;
  name: string;
  original_name: string;
  overview: string;
  backdrop_path: string;
  videos: {
    results: {
      key: string;
    }[];
  }
}

export default function Banner() {

  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>Banner</div>
  )
}
