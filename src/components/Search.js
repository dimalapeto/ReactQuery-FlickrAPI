import { Stack, TextField, Button } from '@mui/material';

export const Search = ({ value, onChange, onSubmit }) => {
  return (
    <Stack
      component="form"
      noValidate
      autoComplete="off"
      direction="row"
      alignItems="center"
      marginBottom={3}
      autoFocus
      onSubmit={onSubmit}
    >
      <TextField
        placeholder="Type to search"
        value={value}
        onChange={onChange}
      />
      <Button type="submit" disabled={!value.length}>
        Search
      </Button>
    </Stack>
  );
};
