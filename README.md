## Todo-list
    1. 컴포넌트 
        - TodoTemplate : 레이아웃
        - TodoHead : 오늘의 날짜와 요일 앞으로 해야할일 남은 갯수
        - TodoList : 할일에 대한 정보 (Todos배열 렌더링)
        - TodoItem : 각할일에 대한 정보 렌더링
        - TodoCreat : 할일입력 할 수 있는 폼 항목추가
    
    2. 글로벌 스타일
        - 설치 : yarn add styled-components react-icons
        - styled-components에서 createGlobalStyle 불러오기 
        - const GlobalStyle : 컴포넌트 만들기 
        - 넣고싶은 css 코드 넣기
        - 렌더링 <GlobalStyle />
  
    3. src / component 폴더생성
   
    4. component 안에 사용할 컴포넌트 파일 만들기
        - TodoTemplate
        - TodoHead ..
  
    5. Context API 활용한 상태관리 
        - props에서 필요한 함수와 구조를 내려주면 App 컴포넌트에서 모든상태지니고 다 내려받는 형태
        - 리듀서 만들기 {useReducer} - 상태관리 배열상태로
        - create, toggle, remove 액션 3가지
        - context 따로따로 만드는게 편하다다 (규모가 커졌을때 대비)
        - custom Hook
        - Context API를 사용하여 필요한 값만 꺼내사용 할 수 있도록 한다 
        - 업데이트 Dispatch
        - Provider : Context에서 사용할 값을 설정할때 사용하는 컴포넌트