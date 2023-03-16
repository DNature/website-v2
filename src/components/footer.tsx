import { Box, Container, Icon, Stack } from "@nature-ui/core";
import siteConfig from "configs/site-config";
import Link from "next/link";
import React from "react";
import {
  IoLogoDiscord,
  IoLogoDribbble,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export const links = [
  {
    icon: IoLogoGithub,
    label: "Github",
    href: "https://github.com/dnature",
  },
  // {
  //   icon: IoLogoTwitter,
  //   label: "Twitter",
  //   href: "https://twitter.com/built_divine",
  // },
  {
    icon: IoLogoDribbble,
    label: "Dribbble",
    href: "https://dribbble.com/DNature",
  },
  {
    icon: IoLogoLinkedin,
    label: "Linkedin",
    href: "https://linkedin.com/in/dnature",
  },
  {
    icon: MdEmail,
    label: "Email",
    href: "mailto:contact@divinehycenth.com",
  },
  {
    icon: IoLogoDiscord,
    label: "Discord",
    href: siteConfig.discord.url,
  },
];

type FooterLinkProps = {
  icon?: React.ElementType;
  href?: string;
  label?: string;
};
const FooterLink: React.FC<FooterLinkProps> = ({
  icon,
  href,
  label,
  ...rest
}) => (
  <Box as="span" {...rest} aria-label={label}>
    <Link target="_blank" aria-label={label} title={label} href={href}>
      <Icon as={icon} size="lg" className="text-gray-400" />
    </Link>
  </Box>
);

const Footer = () => {
  return (
    <Box as="footer" className="relative" css={{ justifySelf: "flex-start" }}>
      <Box className="text-center py-16 relative bg-glass">
        <Container size="xs" centered>
          <p className="text-sm">
            <span>
              Made with 💖 by{" "}
              <Link
                target="_blank"
                className="hover:underline"
                href={"https://linkedin.com/in/dnature"}
              >
                Divine Hycenth
              </Link>
            </span>
          </p>
          <Stack row className="justify-center mt-3">
            {links.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
