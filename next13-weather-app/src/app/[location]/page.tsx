import { getForecast } from '../../domain/weather/services/getForecast';
import { HomeButton } from '../../layout/components/HomeButton';
import { AddWeatherInfoButton } from '../../layout/components/AddWeatherInfoButton';
import type { Country } from '@/domain/weather/types';

interface LocationDetailProps {
  params: {
    location: string;
  };
}
const Page = async ({ params }: LocationDetailProps) => {
  const { forecast } = await getForecast(params.location as Country);
  return (
    <section>
      <h1>{params.location}의 예보</h1>
      <ul>
        {forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}도
          </li>
        ))}
      </ul>
      <HomeButton />
      <AddWeatherInfoButton forecast={forecast} />
    </section>
  );
};

export default Page;
