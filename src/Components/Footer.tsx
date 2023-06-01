import { Container, Divider, Link, Stack, Typography, TypographyProps } from "@mui/material";

const CenteredText = ({ children, ...props }: TypographyProps) => <Typography {...props} align="center">{children}</Typography>;

const Footer = () => {
  return (
    <Container maxWidth="xl">
      <Stack>
        <Divider flexItem variant="middle" />

        <CenteredText>
          Check out my mods over at <Link color="#D98F40" href="https://www.nexusmods.com/sunhaven/users/31196780?tab=user+files">NexusMods (KryziK)</Link>!
        </CenteredText>

        <CenteredText>
          Has my work been useful to you? Consider buying me a coffee by donating at <Link color="#d98f40" href="https://ko-fi.com/KryziK">Ko-fi (KryziK)</Link>!
        </CenteredText>

        <CenteredText variant="caption" color="text.secondary">
          This website and its contents are neither endorsed nor affiliated with Sun Haven or its creator, Pixel Sprout Studios.<br />
          This is purely a third-party convenience tool and hobby project.
        </CenteredText>

        <CenteredText variant="caption">
          v{import.meta.env.VITE_APP_VERSION}
        </CenteredText>
      </Stack>
    </Container>
  );
};

export default Footer;