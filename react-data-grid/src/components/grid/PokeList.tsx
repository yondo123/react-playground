import { usePokeList } from '../../api/fetchPokeList';
import DataGrid, { type Column, type SortColumn } from 'react-data-grid';
import type { PokeResult } from '../../types';
import { useEffect, useState, useMemo } from 'react';

const sortMap = {
  ASC: '↑',
  DESC: '↓',
  NONE: ''
};

const columns: Column<PokeResult>[] = [
  {
    key: 'name',
    name: '이름',
    sortable: true,
    renderHeaderCell: ({ column, sortDirection }) => (
      <div className="flex items-center gap-1">
        <span>이름 {sortMap[sortDirection || 'NONE']}</span>
      </div>
    )
  },
  {
    key: 'debut',
    name: '첫 등장',
    sortable: true,
    renderHeaderCell: ({ column, sortDirection }) => (
      <div className="flex items-center gap-1">
        <span>첫 등장 {sortMap[sortDirection || 'NONE']}</span>
      </div>
    )
  },
  {
    key: 'gen',
    name: '세대',
    sortable: true,
    renderHeaderCell: ({ column, sortDirection }) => (
      <div className="flex items-center gap-1">
        <span>세대 {sortMap[sortDirection || 'NONE']}</span>
      </div>
    )
  }
];

const getComparator = (columnKey: keyof PokeResult) => {
  return (a: PokeResult, b: PokeResult) => {
    if (a[columnKey] < b[columnKey]) return -1;
    if (a[columnKey] > b[columnKey]) return 1;
    return 0;
  };
};

export const PokeList = () => {
  const { data: pokeList, isLoading, fetchNextPage, hasNextPage } = usePokeList();
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);

  const sortedRows = useMemo(() => {
    if (sortColumns.length === 0) return pokeList || [];

    return [...(pokeList || [])].sort((a, b) => {
      for (const sort of sortColumns) {
        const comparator = getComparator(sort.columnKey as keyof PokeResult);
        const compResult = comparator(a, b);
        if (compResult !== 0) {
          return sort.direction === 'ASC' ? compResult : -compResult;
        }
      }
      return 0;
    });
  }, [pokeList, sortColumns]);

  useEffect(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage]);

  if (!pokeList || !pokeList.length) {
    return null;
  }

  return (
    <section className="max-h-[640px] h-[640px] border border-solid border-slate-400 rounded-lg">
      <DataGrid
        columns={columns}
        rows={sortedRows}
        style={{ height: '100%' }}
        sortColumns={sortColumns}
        onSortColumnsChange={setSortColumns}
        onScroll={e => {
          const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
          if (scrollHeight - scrollTop - clientHeight < 1) {
            fetchNextPage();
          }
        }}
      />
      {isLoading && <div className="flex justify-center items-center h-full">Loading...</div>}
    </section>
  );
};
