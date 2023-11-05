import Link from 'next/link';
import { getCurrentWeather } from '../domain/weather/services/getWeather';

const Home = async () => {
  const londonWeather = await getCurrentWeather('london');
  const seoulWeather = await getCurrentWeather('seoul');
  const tokyoWeather = await getCurrentWeather('tokyo');
  const side = typeof window === 'undefined' ? 'server' : 'client';
  return (
    <main>
      <h2>Weather {side}</h2>
      <section>
        <ul>
          <li>
            <Link href="/seoul">
              <strong>🇰🇷 Seoul</strong>
            </Link>
            <p>{seoulWeather.current.condition.text}</p>
          </li>
          <li>
            <Link href="/london">
              <strong>🇬🇧 London</strong>
            </Link>
            <p>{londonWeather.current.condition.text}</p>
          </li>
          <li>
            <Link href="/tokyo">
              <strong>🇯🇵 Tokyo</strong>
            </Link>
            <p>{tokyoWeather.current.condition.text}</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
