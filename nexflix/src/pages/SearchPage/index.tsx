import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import axios from 'axios';

// 영화 데이터의 인터페이스 정의
interface Movie {
  backdrop_path: string | null; // 영화의 배경 이미지 경로
  id: string; // 영화의 고유 아이디
  media_type: string; // 영화의 매체 타입
}

const SearchPage = () => {
  const navigate = useNavigate();

  // 검색 결과를 저장할 State를 Movie 배열로 설정
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  // 검색어를 파싱하기 위한 함수
  // 파싱: 데이터를 조립해서 특정한 데이터만을 추출한다는 의미
  const useQuery = () => {
    return new URLSearchParams(useLocation().search); // 현재 URL의 쿼리 파라미터를 파싱
  }

  let query = useQuery();
  const searchTerm = query.get('q'); // 'q' 쿼리 파라미터의 값을 가져옵니다.
  // 입력을 마친 후 0.5초 동안 대기하는 Debounce를 적용한 검색어
  // useDebounce는 사용자 함수
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if(debouncedSearchTerm) {
      // Debounce 검색어가 존재하면 해당 검색어로 영화를 검색
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  // 영화를 검색하는 비동기 함수
  const fetchSearchMovie = async (searchTerm: string) => {
    console.log("searchTerm : ", searchTerm);
    try {
      // 영화 데이터 API에서 searchTerm을 이용해 검색
      const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      console.log(request);
      // 검색 결과를 상태에 저장
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error : ", error)
    }
  }

  return 
}

export default SearchPage;