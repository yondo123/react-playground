# React Suspense를 활용하여 우아하게 비동기 통신 하기

`React Suspense`를 활용해서 비동기 책임을 명확하게 위임시키는 예제입니다. `msw`을 사용해 비동기 통신을 가정 하였으며, `react-query`를 통해 Suspense를 발생시킬 수 있도록 구성하였습니다.

## [React Suspense](https://react.dev/reference/react/Suspense)

`React 18`에서 공식적으로 릴리즈된 기능으로, 컴포넌트 로드 상태에 따라 우선적으로 fallback 컴포넌트를 렌더링해주는 기능입니다.

## 실행하기

```bash
npm install
npx msw init public/ --save
npm run build
npm run start
```
