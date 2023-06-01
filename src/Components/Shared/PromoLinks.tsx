import ImageLink from "./ImageLink";
import { Stack, SxProps, Theme } from "@mui/material";

type Props = {
  sx?: SxProps<Theme>;
};

const PromoLinks = ({ sx }: Props) => {
  return (
    <Stack direction="row" spacing={1} height={40} sx={[...(Array.isArray(sx) ? sx : [sx])]}>
      <ImageLink link="https://www.nexusmods.com/sunhaven/users/31196780?tab=user+files" imageSrc="nexuslogo.png" alt="NexusMods" />
      <ImageLink link="https://ko-fi.com/KryziK" imageSrc="kofilogo.png" alt="Ko-fi" />
      <ImageLink link="https://thunderstore.io/c/sun-haven/p/KryziK" imageSrc="https://avatars.githubusercontent.com/u/78955138?s=200&v=4" alt="Thunderstore" />
    </Stack>
  );
};

export default PromoLinks;