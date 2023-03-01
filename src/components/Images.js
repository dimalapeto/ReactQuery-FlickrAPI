import { ImageList, ImageListItem, Box } from '@mui/material';

export const Images = ({ items }) => {
  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={4}>
        {items.photos.photo.map((item) => {
          const url = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;
          return (
            <ImageListItem key={item.id}>
              <img
                src={`${url}?w=248&fit=crop&auto=format`}
                srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
};
