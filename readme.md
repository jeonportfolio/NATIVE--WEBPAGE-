## 프로젝트 생성 

▤`npx expo init NATIVE-WEBPAGE` <br>

## 부가기능 설치 

▤`npm install @react-navigation/native react-native-safe-area-context react-native-screens`<br>
▤`npm install @react-navigation/native-stack`<br>

## 네비게이션 설정 

▤ Stack네비게이션의 card형태로 좌우 모션 설정 containedModal 형태의 위아래 모션 설정<br>
▤ 버튼 컴포넌트 추가후 useNavigation을 사용하여 screen을 이동<br>


## 검색창과 add 버튼의 추가 

▤ + 버튼을 누르면 onPressAddButton을 통해 addLink 페이지로 넘어가게 됨 <br>
▤ SingleLineInput.js를 통해 검색창을 컴포넌트 화 -> 포커스시 강조효과 <br>

## 상태관리 및 저장 기능 

▤ `npm install @react-native-async-storage/async-storage recoil` 설치 <br>
▤ states폴더에 atomLinkList로 atom을 정의 <br>
▤ LinkListScreen에서 검색한 항목들을 FlatList형식으로 보여준다.<br>
▤ LinkList에서 항목들을 누르면 선택한 항목의 LinkDetail 화면으로 넘어가게 된다.<br>
▤ utils 폴더안에 AsyncStorageUtils.js 생성 => setItem과 getItem을 통해 값을 받아 생성<br>
▤ atomLinkList에서 atomImpact를 통해 atom의 변환값을 보여준다.<br>

## LinkDetail (웹을 보여주는 화면)

 ▤  ` npx expo install react-native-webview` -> 웹뷰설치<br>
 ▤  Route를 활용한다. <br>

