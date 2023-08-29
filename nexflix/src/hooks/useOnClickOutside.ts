import React, { RefObject, useEffect } from 'react'

// ref: 어떤 요소의 참조, handler: 이벤트를 처리하는 함수
export default function useOnClickOutside(ref: RefObject<HTMLElement>, handler: (event: any) => void) {
  
  useEffect(() => {
    const listener = (event: any) => {
      // ref가 현재 DOM 요소를 참조하지 않거나, 클릭된 요소가 ref가 참조하는 요소 내부에 있다면 함수를 종료
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event); // 그렇지 않다면 handler 함수 실행
    };
    // 마우스 클릭 & 터치 이벤트에 대한 listener 함수 등록
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      // 컴포넌트가 언마운트되거나, ref & handler가 변경되기 전에 이벤트 리스너를 제거
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  },
  [ref, handler] // ref나 handler가 변경될때마다 업데이트
  )
}
