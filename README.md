# 프로젝트 소개

원티드 프리온보딩 1주차

영화 검색 기능 서비스 팀프로젝트 입니다.

# 와이어프레임

Figma : https://www.figma.com/file/xuNG7O0WGr30z7zg8vqZha/pre-onboarding-week1-1?node-id=2%3A3

# 배포

https://wonfilx.herokuapp.com/

# 팀원

| 이름 | 팀 구성 | 기능 구현 및 역할 |
| --- | --- | --- |
| 김수빈 | 팀원 </br> Frontend | - json-server를 이용한 api </br> - 정렬 select box 추가 <br> - server.js 작성 + 서버 배포 <br> - 영화 목록 UI 작업 |
| 김민주 | 팀원 </br> Frontend | - 준비 중 |
| 이상지 | 팀장 </br> Frontend | - Wire frame제작, 초기세팅 |
| 이혜림 | 팀원 </br> Frontend | - Throtling, debouncing |
| 홍승연 | 팀원 </br> Frontend | - Movie Card 제작 |

## src

```text
📦src
 ┣ 📂api
 ┃ ┣ 📜config.js
 ┃ ┣ 📜useGetMovie.js
 ┃ ┣ 📜useSearch.js
 ┃ ┣ 📜useSortMovie.js
 ┃ ┗ 📜useUpdateFavorite.js
 ┣ 📂assets
 ┃ ┗ 📂svgs
 ┃ ┃ ┣ 📜check.svg
 ┃ ┃ ┣ 📜close.svg
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┣ 📜move_to_top.svg
 ┃ ┃ ┣ 📜search.svg
 ┃ ┃ ┣ 📜search_bold.svg
 ┃ ┃ ┣ 📜star_empty.svg
 ┃ ┃ ┗ 📜star_filled.svg
 ┣ 📂components
 ┃ ┣ 📂Favorites
 ┃ ┃ ┗ 📜Favorites.jsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📂SearchForm
 ┃ ┃ ┃ ┣ 📜SearchForm.jsx
 ┃ ┃ ┃ ┗ 📜searchForm.scss
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜TopButton.jsx
 ┃ ┃ ┣ 📜header.scss
 ┃ ┃ ┗ 📜topButton.scss
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜modal.scss
 ┃ ┣ 📂Movies
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┣ 📜Card.jsx
 ┃ ┃ ┃ ┗ 📜card.scss
 ┃ ┃ ┣ 📂ModalContent
 ┃ ┃ ┃ ┣ 📜ModalContent.jsx
 ┃ ┃ ┃ ┗ 📜modalContent.scss
 ┃ ┃ ┣ 📂MovieSort
 ┃ ┃ ┃ ┣ 📜MovieSort.jsx
 ┃ ┃ ┃ ┗ 📜movieSort.scss
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜movies.scss
 ┃ ┣ 📂Search
 ┃ ┃ ┣ 📂Dropdown
 ┃ ┃ ┃ ┣ 📜Dropdown.jsx
 ┃ ┃ ┃ ┣ 📜DropdownItems.jsx
 ┃ ┃ ┃ ┣ 📜SearchLog.jsx
 ┃ ┃ ┃ ┗ 📜dropdown.scss
 ┃ ┃ ┣ 📂SearchForm
 ┃ ┃ ┃ ┣ 📜SearchForm.jsx
 ┃ ┃ ┃ ┗ 📜searchForm.scss
 ┃ ┃ ┣ 📜Search.jsx
 ┃ ┃ ┗ 📜search.scss
 ┃ ┗ 📜Portal.jsx
 ┣ 📂data
 ┃ ┗ 📜movies.json
 ┣ 📂hooks
 ┃ ┣ 📜useDebounce.js
 ┃ ┣ 📜useHandleScroll.js
 ┃ ┣ 📜useInfiniteData.js
 ┃ ┣ 📜useObserver.js
 ┃ ┗ 📜useThrottle.js
 ┣ 📂routes
 ┃ ┣ 📂Favorites
 ┃ ┃ ┣ 📜Favorites.jsx
 ┃ ┃ ┗ 📜favorites.scss
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┗ 📜home.scss
 ┃ ┣ 📂Layout
 ┃ ┃ ┗ 📜Layout.jsx
 ┃ ┣ 📂NotFound404
 ┃ ┃ ┣ 📜NotFound.jsx
 ┃ ┃ ┗ 📜notFound404.scss
 ┃ ┣ 📜Routes.module.scss
 ┃ ┗ 📜index.jsx
 ┣ 📂store
 ┃ ┣ 📜modal.js
 ┃ ┣ 📜movies.js
 ┃ ┗ 📜search.js
 ┣ 📂styles
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📜_fonts.scss
 ┃ ┃ ┣ 📜_more.scss
 ┃ ┃ ┗ 📜_reset.scss
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜_colors.scss
 ┃ ┃ ┗ 📜_sizes.scss
 ┃ ┣ 📂mixins
 ┃ ┃ ┣ 📜_animation.scss
 ┃ ┃ ┗ 📜_responsive.scss
 ┃ ┣ 📜index.js
 ┃ ┗ 📜index.scss
 ┣ 📂util
 ┃ ┗ 📜replaceItemAtIndex.js
 ┣ 📜App.jsx
 ┣ 📜App.scss
 ┣ 📜index.js
 ┗ 📜server.js
```

# 상세 구현 사항

## 수빈

#### json-server api

- json-server 기초 세팅 data/movies.json이 port 8000에서 나오도록 개발환경 세팅
- api 폴더 안에 훅을 사용하여 데이터를 get, patch(수정) 할 수 있도록 하였습니다.

#### 정렬 select box

\_sort=year, \_sort=rating / \_order=DESC 내림차순정렬된 데이터를 받아올 수 있도록 하였습니다.

![sort](https://user-images.githubusercontent.com/90506668/178542599-1f2ba4a8-d3a9-40eb-96ea-6332eb927413.gif)

#### 서버 배포

server.js를 생성하고 json-server을 이용하여 node로 서버 실행이 가능하도록 작업했습니다. 배포는 heroku로 하였습니다.

**url 변경**

<img width="484" alt="url" src="https://user-images.githubusercontent.com/90506668/178626082-4f1ba2ae-780b-47e9-84f5-f8f238b3861c.png">

**배포 package.json** heroku-postbuild 추가 하고 node src/server.js로 실행하도록 수정

<img width="550" alt="서버배포" src="https://user-images.githubusercontent.com/90506668/178540543-74917942-2cec-4af5-a50f-042dab55b036.png">

</br>
</br>

## 민주

#### -

</br>
</br>

## 상지

#### -

## 혜림

#### Debounce & Throttle

- 검색어에 Custom Hook으로 Debounce를 구현하고 헤더와 toTop버튼에 사용자의 스크롤 동작을 Throttle 적용된 형태로 감지하여 down일때는 디스플레이를 숨기는 인터랙션을 구현했습니다.

#### Infinite Scroll

- Intersection Observer를 사용하여 무한스크롤을 구현하고 서버로부터 search, sort 시에도 페이징 처리했습니다.
- custom hook으로 분리하여 가독성을 높였습니다.

#### json-server api

- json-server 기초 세팅 data/movies.json이 port 8000에서 나오도록 개발환경 세팅
- api 폴더 안에 훅을 사용하여 데이터를 get, patch(수정) 할 수 있도록 하였습니다.

### Responsive view

- User Experience 향상을 위해 반응형 웹을 구현하였습니다.
- 모바일에서는 toTop버튼이 스크롤시 사라지고, 그 이상 스크린에서는 보입니다.
- 모바일에서는 toTop버튼의 마진이 적용되지 않아 화면 끝으로 갑니다.
- 카드는 한줄 당 갤럭시폴드에서는 1개, 나머지 모바일에서는 2개, 타블렛(세로)에서는 3개, 타블렛(가로)와 그 이상 스크린에서는 4개가 표시됩니다.
-

</br>
</br>

## 승연

### -
