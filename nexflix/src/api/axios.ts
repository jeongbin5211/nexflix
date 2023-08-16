// npm i axios
// axios 라이브러리 설치 및 import
import axios from "axios";

//! axios 인스턴스 생성: API 호출을 단순화

// axios.create 메서드를 사용: 새 axios 인스턴스를 생성
// axios 인스턴스: 기본 URL을 가지고 이 URL은 모든 요청에 사용됩니다.
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // 모든 요청의 공통적으로 사용되는 기본 URL
  // 각 요청에 공통적으로 포함되어야 하는 쿼리 파라미터
  // 인스턴스에서 api_key & 언어 설정이 포함된 기본 파라미터를 가짐.
  params: {
    // The Movie Database의 API 키를 .env 파일에서 가져옵니다.
    api_key: process.env.React_App_MOVIE_DB_API_KEY, // 환경 변수에 저장된 API 키
    language: "ko-KR", // 응답 데이터의 언어를 한국어로 설정
  }
})

// API 요청을 보낼 때 해당 axios 인스턴스를 사용

export default instance;