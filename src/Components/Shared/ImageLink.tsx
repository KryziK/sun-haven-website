import { Box, Link } from "@mui/material";

type Props = {
  link: string;
  imageSrc: string;
  alt?: string;
};

const ImageLink = ({ link, imageSrc, alt }: Props) => {
  return (
    <Link href={link} borderRadius="8px">
      <Box component="img" alt={alt} src={imageSrc} height="100%" borderRadius="8px" />
    </Link>
  );
};

export default ImageLink;