import { Alert } from '@mui/material';
import { Images } from './Images';
import { Pagination } from './Pagination';
import { Loader } from './Loader';

export const Gallery = ({ status, isFetching, data, page, onPageChange }) => {
  const isSuccessful = status === 'success' || data?.stat === 'ok';

  if (isFetching) return <Loader />;

  return (
    isSuccessful &&
    (!!data.photos.photo.length ? (
      <>
        <Images items={data} />
        <Pagination data={data} page={page} onPageChange={onPageChange} />
      </>
    ) : (
      <Alert severity="info">
        Unfortunately nothing found. Try another query!
      </Alert>
    ))
  );
};
