## 프로젝트 생성 

▤`npx expo init NATIVE-WEBPAGE` <br>

## 부가기능 설치 

▤`npm install @react-navigation/native react-native-safe-area-context react-native-screens`<br>
▤`npm install @react-navigation/native-stack`<br>

## 네비게이션 설정 

▤ Stack네비게이션의 card형태로 좌우 모션 설정 containedModal 형태의 위아래 모션 설정<br>
▤ 버튼 컴포넌트 추가후 useNavigation을 사용하여 screen을 이동<br>


## 검색창과 add 버튼의 추가 

▤ + 버튼을 누르면 onPressAddButton을 통해 addLink 페이지로 넘어가게 됨 
▤ SingleLineInput.js를 통해 검색창을 컴포넌트 화 -> 포커스시 강조효과 