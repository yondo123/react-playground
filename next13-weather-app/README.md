## Next13 App Router

Next13 부터는 모든 React 컴포넌트를 서버사이드로 취급합니다. Next12에서는 `/pages` 폴더에 파일을 위치하면 하나의 경로로 취급되었습니다. 하지만 Next 13에서는 `/app` 경로에서 여러 경로를 위치할 수 있는 디렉토리를 설정할 수 있습니다. 이러한 구조는 `Hydration`을 페이지 단위가 아닌 컴포넌트 단위로 수행할 수 있게 해줍니다.

### Server Component (RSC)

React 18에서 도입된 기능이며, Next 13에서는 기본 컴포넌트 방식을 서버 컴포넌트로 취급합니다. 서버 컴포넌트를 사용하면 데이터 페칭, 보안, 캐싱에서 이점을 가져올 수 있으며 빌드시 JavaScript 번들 크기도 감소되는 장점도 있습니다. (서버 영역에서 미리 렌더링을 완료한 컴포넌트까지 제공해주기 때문에 별도의 `Hydration`에 필요한 JavaScript 파일이 줄어들게 됩니다.)

### Client Component

`use client` 를 스코프 상위에 명시하면 클라이언트 컴포넌트로 동작합니다.

```tsx
'use client';
```

- 클라이언트 컴포넌트에서는 서버 컴포넌트를 불러올 수 없습니다.
- 클라이언트 컴포넌트에서 서버 컴포넌트를 사용하려면 `props`로 전달받아야 합니다.

```tsx
//Client Component
'use client';

import { useState } from 'react';

interface Props {
  children: React.ReactNode; //서버 컴포넌트를 자식 요소(Props)로 전달 가능
}

export default function ExampleClientComponent({ children }: Props) {
  const [count, setCount] = seState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {children}
    </>
  );
}
```

### 클라이언트 컴포넌트는 클라이언트에서만 동작하지는 않는다.

기존 Next 12 방식과 마찬가지로 `Pre-Rendering` 방식으로 동작할 수 있습니다. 사전 렌더링(Pre Rendering)은 사전에 렌더링된 HTML 파일을 받아와서 먼저 출력하고 JavaScript 파일을 연결짓는 `hydration` 과정으로 렌더링되는 방식을 의미합니다.

### 서버 컴포넌트를 사용하지 못하는 상황

- React Hook, Browser API (event, storage)를 사용하려면 클라이언트 컴포넌트를 사용합니다.
- Next.js에서는 클라이언트 컴포넌트를 트리의 끝 영역으로 위치하라고 가이드하고 있습니다.
