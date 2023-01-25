# 🔍 검색창 구현, 검색 추천 기능 구현

## [팀 레포 바로가기](https://github.com/wanted-onboarding8-6/pre-onboarding-8th-3week-6)

## 📌 구현

<div align="center">
<div style="width:490px; overflow: hidden;">
<img width="500px" src="https://user-images.githubusercontent.com/107424974/214624515-5d786d20-e106-4726-a9a5-b17d12f403f5.gif"/>
</div>
</div>

#### 🗓 일정 : 2023.01.10 - 01.13

</br>

## 목차

1. [프로젝트 실행 방법](#프로젝트-실행-방법)
2. [구현사항](#구현사항)

</br>

## 프로젝트 실행 방법

<br>

```bash
# npm 설치
npm install
```

```bash
# Local Server 실행
npx json-server ./data.json --port 4000
```

```bash
# 로컬 실행
npm start
```

<br>

## 기술스택

> React, TypeScript, axios, json-server, tailwind-css

<br>

## 구현사항

#### 1. 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

https://github.com/Paperkeem/wanted-week3/blob/70f7eba907694622473530f9efe06ed93fa40bc2/src/components/RecoList.tsx#L5-L21

 - split 함수를 이용하여 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
 - 검색어에 Focus가 갈 시에 검색창에 추천 검색어가 뜨도록 구현
 - 검색어가 없을 시 “검색어 없음” 표출

</br>

#### 2. API 호출 최적화

https://github.com/Paperkeem/wanted-week3/blob/70f7eba907694622473530f9efe06ed93fa40bc2/src/contexts/DataContext.tsx#L7-L20

 - Data는 Context Api를 이용해 전역으로 관리
 - (미구현)API 호출별로 로컬 캐싱 구현
    - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
 - (미구현)입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

</br>

#### 3. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

https://github.com/Paperkeem/wanted-week3/blob/70f7eba907694622473530f9efe06ed93fa40bc2/src/components/Search.tsx#L10-L29
https://github.com/Paperkeem/wanted-week3/blob/70f7eba907694622473530f9efe06ed93fa40bc2/src/components/Recommend.tsx#L19-L33

   - 검색 된 리스트의 총 개수 State에 저장하고, 키보드의 움직임에 따라 index 값을 가감
   - 키보드 움직임 index와 추천 검색어 li의 index를 비교하여 boolean 값을 props로 넘기고, 현재 Focusing이 된 검색어 li에 css 처리
   
</br>

## Contributor

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/Paperkeem"><img src="https://user-images.githubusercontent.com/107424974/212338824-fc8fd767-7ed3-4600-9596-7665f823be03.jpeg" width="100px;" alt=""/><br /><sub><b>김종이</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

</br>
