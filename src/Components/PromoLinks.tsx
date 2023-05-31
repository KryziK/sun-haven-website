import { Box, Link, Stack } from "@mui/material";

const ImageLink = ({ link, imageSrc, alt }: { link: string, imageSrc: string, alt?: string }) => {
  return (
    <Link href={link} borderRadius="8px">
      <Box component="img" alt={alt} src={imageSrc} height="100%" borderRadius="8px" />
    </Link>
  );
};

const PromoLinks = () => {
  return (
    <Stack direction="row" spacing={1} height={48}>
      <ImageLink link="https://www.nexusmods.com/sunhaven/users/31196780?tab=user+files" imageSrc="nexuslogo.png" alt="NexusMods" />
      <ImageLink link="https://ko-fi.com/KryziK" imageSrc="kofilogo.png" alt="Ko-fi" />
      <ImageLink link="https://thunderstore.io/c/sun-haven/p/KryziK" imageSrc="https://avatars.githubusercontent.com/u/78955138?s=200&v=4" alt="Thunderstore" />
    </Stack>
  );
};

export default PromoLinks;