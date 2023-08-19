import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

//? 스크롤 위치에 따라 변하는 로직
//? 검색 입력창
//? 검색어를 입력하면 해당 검색어로 검색 결과 페이지로 이동하는 로직

const Nav: React.FC = () => {
  // 스크롤 위치에 따라 네비게이션 바의 스타일을 변경
  const [show, setShow] = useState<boolean>(false);
  // 검색 입력창의 값을 저장
  const [searchValue, setSearchValue] = useState<string>('');

  const navigate = useNavigate()

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    const handleScroll = (): void => {
      if (window.screenY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트 될 때 스크롤 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div>Nav</div>
  )
}

export default Nav