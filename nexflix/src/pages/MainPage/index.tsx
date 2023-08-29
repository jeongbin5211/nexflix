import React from 'react'
import Banner from '../../components/Banner'
import requests from '../../api/requests'
import Row from '../../components/Row'

// Row 컴포넌트는 아래 속성을 가져야 한다.
// interface RowProps { 
//?   // 큰 이미지를 사용할지 결정하는 선택적 prop
//   isLargeRow?: boolean;
//?   // 각 row의 제목
//   title: string;
//?   // 각 row를 구분하기 위한 ID
//   id: string;
//   fetchUrl: string;
// }

const MainPage = () => {
  return (
    <div>
      <Banner />
      <Row
        title='NEXFLIX ORIGINALS' 
        id="NO"
        fetchUrl={requests.fetchNexflixOriginals}
        isLargeRow
      />
      <Row
        title='Trending Now' 
        id="TN"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title='Top Rated' 
        id="TR"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title='Action Movies' 
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title='Comedy Movies' 
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  )
}

export default MainPage
