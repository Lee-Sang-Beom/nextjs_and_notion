Project - Frontend Guide
======================

## 1. 프로젝트 계획 이유

[**Frontend Guide**](https://nextjs-and-notion-vercel.vercel.app/) : 프론트엔드 개발자를 위한 공부 과정에서, 웹 기초 개념과 현재 프로젝트에서 자주 쓰이는 React, Next.js에 대하여 공부하며, 기초로 한 개념을 정리하기 위해 계획하였습니다. 

### - 제공기능

- 프론트엔드 개발자는 꼭 알고 있어야 할 개념 설명
- React와 Next.js를 사용하는 이유 및 강점에 대한 개념적 설명
- 공유 Notion : https://www.notion.so/Main-Page-b43329e49e8247969e69056688db0b92

****

# 2. Install

 ## 2.1. Next.js 

 - 사전에 node.js가 설치되어 있어야 합니다.
```
npx create-next-app@latest [프로젝트명]
```

 - 설치 확인은 아래의 명령어를 사용하여 확인할 수 있습니다.
```
npm -v
```

 - build
```
npm run build
```

 - run
```
npm run dev
```

 ## 2.2. TypeScript 

 - 타입스크립트를 설치합니다
```
npm install [-g(전역설치)] typescript
```

 - Next.js 프로젝트를 실행해봅니다.
```
npm run dev
```

 - 만약, 터미널에 Typescript 설정 방법이 출력된다면, 안내대로 TypeScript에 필요한 라이브러리를 설치합니다.
```
npm install --save-dev @types/react @types/node
```

 - Next.js 프로젝트를 다시 실행합니다.
```
npm run dev
```

 ## 2.3. Tailwind

1.  먼저, Tailwind를 설치합니다.
```
npm install -D tailwindcss
npx tailwindcss init
```
2. tailwind.config.js의 내용을 변경합니다.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", /*page 내 js,ts 파일을 tailwind css로 적용*/
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. globals.css 내용을 변경합니다.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. postcss.config.js을 root에 생성합니다.
```
module.exports = {
    plugins : {
        tailwindcss : {config : './tailwind.config.js'},
    },
}
```

****

# 3. Use
 ## 3.1. LottieFiles

  1. public/*.json 형식으로 다운로드한 파일을 저장합니다.

  2. lottie-player 설치

  ```
  npm install --save react-lottie-player
  ```

 ## 3.2 Next Theme
  1. next-themes 설치

  ```
  npm install next-themes
  ```

  2. App.js 수정

  ```
  import { ThemeProvider } from 'next-themes'

  function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }

  export default MyApp
  ```