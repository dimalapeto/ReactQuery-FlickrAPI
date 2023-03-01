import { Stack, Pagination as MuiPagination } from '@mui/material';

export const Pagination = ({ data, page, onPageChange }) => (
  <Stack>
    <MuiPagination
      count={data?.photos?.pages}
      page={page}
      onChange={onPageChange}
      siblingCount={3}
    />
  </Stack>
);
