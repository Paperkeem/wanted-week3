# ๐ ๊ฒ์์ฐฝ ๊ตฌํ, ๊ฒ์ ์ถ์ฒ ๊ธฐ๋ฅ ๊ตฌํ

## [ํ ๋ ํฌ ๋ฐ๋ก๊ฐ๊ธฐ](https://github.com/wanted-onboarding8-6/pre-onboarding-8th-3week-6)

## ๐ ๊ตฌํ

<div align="center">
 <div style="width:480px; overflow-x: hidden;">
  <img width="500px" src="https://user-images.githubusercontent.com/107424974/214624515-5d786d20-e106-4726-a9a5-b17d12f403f5.gif"/>
 </div>

#### ๐ ์ผ์  : 2023.01.10 - 01.13

</div>

</br>

## ๋ชฉ์ฐจ

1. [ํ๋ก์ ํธ ์คํ ๋ฐฉ๋ฒ](#ํ๋ก์ ํธ-์คํ-๋ฐฉ๋ฒ)
2. [๊ตฌํ์ฌํญ](#๊ตฌํ์ฌํญ)

</br>

## ํ๋ก์ ํธ ์คํ ๋ฐฉ๋ฒ

<br>

```bash
# npm ์ค์น
npm install
```

```bash
# Local Server ์คํ
npx json-server ./data.json --port 4000
```

```bash
# ๋ก์ปฌ ์คํ
npm start
```

<br>

## ๊ธฐ์ ์คํ

> React, TypeScript, axios, json-server, tailwind-css

<br>

## ๊ตฌํ์ฌํญ

#### 1. ์งํ๋ช ๊ฒ์์ API ํธ์ถ ํตํด์ ๊ฒ์์ด ์ถ์ฒ ๊ธฐ๋ฅ ๊ตฌํ

https://github.com/Paperkeem/wanted-week3/blob/70f7eba907694622473530f9efe06ed93fa40bc2/src/components/RecoList.tsx#L5-L21

 - split ํจ์๋ฅผ ์ด์ฉํ์ฌ ์ฌ์ฉ์๊ฐ ์๋ ฅํ ํ์คํธ์ ์ผ์นํ๋ ๋ถ๋ถ ๋ณผ๋์ฒ๋ฆฌ
 - ๊ฒ์์ด์ Focus๊ฐ ๊ฐ ์์ ๊ฒ์์ฐฝ์ ์ถ์ฒ ๊ฒ์์ด๊ฐ ๋จ๋๋ก ๊ตฌํ
 - ๊ฒ์์ด๊ฐ ์์ ์ โ๊ฒ์์ด ์์โ ํ์ถ

</br>

#### 2. API ํธ์ถ ์ต์ ํ

https://github.com/Paperkeem/wanted-week3/blob/70f7eba907694622473530f9efe06ed93fa40bc2/src/contexts/DataContext.tsx#L7-L20

 - Data๋ Context Api๋ฅผ ์ด์ฉํด ์ ์ญ์ผ๋ก ๊ด๋ฆฌ
 - (๋ฏธ๊ตฌํ)API ํธ์ถ๋ณ๋ก ๋ก์ปฌ ์บ์ฑ ๊ตฌํ
    - ์บ์ฑ ๊ธฐ๋ฅ์ ์ ๊ณตํ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ฌ์ฉ ๊ธ์ง(React-Query ๋ฑ)
 - (๋ฏธ๊ตฌํ)์๋ ฅ๋ง๋ค API ํธ์ถํ์ง ์๋๋ก API ํธ์ถ ํ์๋ฅผ ์ค์ด๋ ์ ๋ต ์๋ฆฝ ๋ฐ ์คํ

</br>

#### 3. ํค๋ณด๋๋ง์ผ๋ก ์ถ์ฒ ๊ฒ์์ด๋ค๋ก ์ด๋ ๊ฐ๋ฅํ๋๋ก ๊ตฌํ

https://github.com/Paperkeem/wanted-week3/blob/70f7eba907694622473530f9efe06ed93fa40bc2/src/components/Search.tsx#L10-L29
https://github.com/Paperkeem/wanted-week3/blob/70f7eba907694622473530f9efe06ed93fa40bc2/src/components/Recommend.tsx#L19-L33

   - ๊ฒ์ ๋ ๋ฆฌ์คํธ์ ์ด ๊ฐ์ State์ ์ ์ฅํ๊ณ , ํค๋ณด๋์ ์์ง์์ ๋ฐ๋ผ index ๊ฐ์ ๊ฐ๊ฐ
   - ํค๋ณด๋ ์์ง์ index์ ์ถ์ฒ ๊ฒ์์ด li์ index๋ฅผ ๋น๊ตํ์ฌ boolean ๊ฐ์ props๋ก ๋๊ธฐ๊ณ , ํ์ฌ Focusing์ด ๋ ๊ฒ์์ด li์ css ์ฒ๋ฆฌ
   
</br>

## Contributor

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/Paperkeem"><img src="https://user-images.githubusercontent.com/107424974/212338824-fc8fd767-7ed3-4600-9596-7665f823be03.jpeg" width="100px;" alt=""/><br /><sub><b>๊น์ข์ด</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

</br>
