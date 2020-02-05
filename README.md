# Todo-list
## 사용개념
    1. styled-components를 이용한 스타일링
    2. Context API를 사용한 전역 상태관리
    3. 배열 상태 다루기
   
### 01. 만들 컴포넌트 
    1. TodoTemplate : 투두리스트의 레이아웃 설정 컴포넌트 
    2. TodoHead : 오늘의 날짜와 요일을 보여주고 앞으로 해야할 일 몇개 남았는지 보여준다.
    3. TodoList : 할 일에 대한 정보가 들어있는 todos 배열의 내장함수 map을 사용하여 Todoitem 렌더링
    4. TodoItem : 각 할일에 대한 정보를 렌더링 해주는 컴포넌트
        - 좌측 원을 누르면 할 일의 완료 여부를 Toggle 한다.
        - 할 일 완료되었을 때, 좌측에 체크표시 텍스트색상 옅어짐.
        - 마우스호버 휴지통 아이콘, 클릭시 항목 삭제
    5. TodoCreate : 새로운 할일을 등록 할 수 있게 하는 컴포넌트 

### 02. 글로벌 설정하기 ex) body background
    1. 글로벌 스타일 : import { createGlobalStyle } from 'styled-components';
    2. creageGlobalStyle 함수를 사용하여 컴포넌트 생성후 렌더링 
        - const GlobalStyle = createGlobalStyle` css 코드  넣어준다 `;
    3. App.js <GlobalStyle></GlobalStyle> 렌더링

### 03. TodoTemplate 컴포넌트 만들기
    1. src / components 폴더 아래 TodoTemplate 컴포넌트 생성
    2. import styled from 'styled-components'; 
    3. const TodoTemplateBlock = styled.div` css 코드 넣어준다 `;
    4. TodoTemplateBlock  스타일 완성
    5. TodoTeplate {children} props가져와서 TodoTemplateBlock 내부에다 {children} 렌더링
    6. App.js 에 TodoTemplate 렌더링


### 04. TodoHead 컴포넌트 만들기
    1. src / components 폴더 아래 TodoHead 컴포넌트 생성
    2. TodoHeadBlock styled.div로 css 설정후 연도, 요일 현재 날짜로 넣기
    3. App.js 렌더링

### 05. TodoList 컴포넌트 만들기
    1. 폴더 경로 같음 
    2. 년도, 요일, 남은 할일 수 밑으로 공간 모두 선택 
        - flex :1 (자신이 차지할 수 있는 모든 영역 차지)

### 06. TodoItem 컴포넌트 만들기
    1. component - TodoItem.js
    2. 사용할 아이콘 불러오기 / import { MdDone, MdDelete } from 'react-icons/md';
    3. 휴지통(Remove), 체크박스(CheckCircle), 항목(Text), 전체 항목공통(TodoItemBlock)
    4. Component Selector : &:hover { ${선택자 { 호버시 변경될 CSS }}})
   
### 07. TodoCreate 컴포넌트 만들기
    1. component - TodoCreate.js
    2. react-icons의 MdAdd 사용 +
    3. MdAdd 버튼 translate(-50%, 50%)로 해당 버튼크기의 반만큼 움직여 정가운데 놓음





















  
    4. Context API 활용한 상태관리 
        - props에서 필요한 함수와 구조를 내려주면 App 컴포넌트에서 모든상태지니고 다 내려받는 형태
        - 리듀서 만들기 {useReducer} - 상태관리 배열상태로
        - create, toggle, remove 액션 3가지
        - context 따로따로 만드는게 편하다다 (규모가 커졌을때 대비)
        - custom Hook
        - Context API를 사용하여 필요한 값만 꺼내사용 할 수 있도록 한다 
        - 업데이트 Dispatch
        - Provider : Context에서 사용할 값을 설정할때 사용하는 컴포넌트 -->