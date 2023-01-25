# 🔍 검색창 구현, 검색 추천 기능 구현

## [팀 레포 바로가기](https://github.com/wanted-onboarding8-6/pre-onboarding-8th-3week-6)

## 📌 구현
<img width="100%" src="https://user-images.githubusercontent.com/107424974/214620477-c2ae5004-8515-43d9-a4a0-6b572dfc9274.gif"/>

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

 - 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
 - 검색어가 없을 시 “검색어 없음” 표출

</br>

#### 2. API 호출 최적화

 - API 호출별로 로컬 캐싱 구현
    - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
 - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
 - API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

</br>

#### 3. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

   - 사용법 README에 기술

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
