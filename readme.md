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

 ## Open graph tag

 ▤ Title, type, Image URL 등 페이지에 대한 정보를 조회할 수 있다.<br>
 ▤ `npm install react-native-opengraph-kit ` -> 설치 <br>
 ▤ Open GraphTagUtils.js 에서 OpenGraphParser를 이용해서 url의 결과물을 도출한다. <br>
 ▤ SingleLineInput에서 엔터를 누르면 값을 반환 -> 이미지 미리보기 <br>

 ## 클립보드 (복사와 붙여넣기)
 
 ▤ `npx expo install expo-clipboard `<br>
 





