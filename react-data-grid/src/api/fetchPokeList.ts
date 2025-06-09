import axios from 'axios';
import { PokeResult } from '../types';
import { useInfiniteQuery } from '@tanstack/react-query';

export const fetchPokeList = async (page: number) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page}`);
  return response.data;
};

export const usePokeList = () => {
  return useInfiniteQuery({
    queryKey: ['pokeList'],
    queryFn: ({ pageParam = 0 }) => fetchPokeList(pageParam),
    staleTime: 5000,
    getNextPageParam: lastPage => {
      const nextpage = lastPage.next;
      if (!nextpage) return null;
      return Number(new URL(nextpage).searchParams.get('offset'));
    },
    initialPageParam: 0,
    select: data => {
      return data.pages.flatMap(page =>
        page.results.map((result: { name: string; url: string }) => ({
          name: result.name,
          url: result.url,
          debut: ['GameBoy', 'NDS', 'Nintendo Switch'][Math.floor(Math.random() * 3)] as PokeResult['debut'],
          gen: Math.floor(Math.random() * 7) + 1
        }))
      );
    }
  });
};
