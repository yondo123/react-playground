'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => (
  <section>
    <h2>에러페이지</h2>
    <p>{error.message}</p>
    <button type="button" onClick={reset}>
      초기화
    </button>
  </section>
);

export default ErrorPage;
