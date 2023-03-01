import { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Alert } from '@mui/material';
import { useQuery, useQueryClient } from 'react-query';

import { searchPhotos } from '../api';
import { Gallery, Search } from '../components';

export const Photos = () => {
  const [page, setPage] = useState(1);
  const [text, setText] = useState('');
  const queryClient = useQueryClient();

  const { queryKey, getData } = searchPhotos;

  const { status, data, error, isFetching, refetch } = useQuery(
    [queryKey, page, text],
    () => getData(page, text),
    { enabled: false, keepPreviousData: true, staleTime: Infinity }
  );

  const isError = error || (data && data.stat === 'fail');

  useEffect(() => {
    if (data && data.photos?.page !== page) {
      refetch();
    }
    if (page < data?.photos?.pages && data?.photos.page === page) {
      queryClient.prefetchQuery([queryKey, page + 1, text], () =>
        getData(page + 1, text)
      );
    }
  }, [data, page, getData, queryClient, queryKey, refetch]);

  const handlePageChange = useCallback(
    (_event, value) => {
      setPage(value);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    [setPage]
  );

  const handleSearchChange = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const handleSubmitSearch = useCallback(
    (event) => {
      event.preventDefault();
      refetch();
    },
    [refetch]
  );

  return (
    <Box marginTop={5}>
      <Typography variant="h3" gutterBottom>
        Photos from FlickrAPI
      </Typography>
      <Search
        value={text}
        onChange={handleSearchChange}
        onSubmit={handleSubmitSearch}
      />
      {isError ? (
        <Alert severity="error">
          {(error && error.message) || (data && data.message)}
        </Alert>
      ) : (
        <Gallery
          status={status}
          isFetching={isFetching}
          data={data}
          page={page}
          onPageChange={handlePageChange}
        />
      )}
    </Box>
  );
};
