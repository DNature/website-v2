import { Box, Container, LazyImage } from "@nature-ui/core";
import Link from "next/link";

import MainLayout from "layouts/main";

const About = ({}) => {
  let imageUrl =
    "https://res.cloudinary.com/digmzlfsa/image/upload/c_scale/v1677801514/profile_mswttt.png";

  let fallbackSrc: any = imageUrl.split(".");

  if (fallbackSrc[fallbackSrc.length - 1] === "gif") {
    fallbackSrc = fallbackSrc.join(".").replace(/\/c_scale.*?\//gis, "/w_50/");
  } else {
    fallbackSrc = imageUrl.replace(/\/c_scale.*?\//gis, "/c_scale,w_0.01/");
  }

  return (
    <MainLayout title="About me">
      <Container id="about" size="lg" centered className="relative z-20 my-12">
        <Box className="grid mx-4 md:mx-0">
          <LazyImage
            src={imageUrl}
            fallbackSrc={fallbackSrc}
            alt={"Divine Hycenth"}
            className="w-2/5 h-full object-cover mx-auto md:mx-0 z-0 px-4 md:py-0"
          />
        </Box>
        <Box className="mt-12 md:-mt-40 md:ml-80 xl:ml-92 mx-4 md:mx-0 bg-white p-4 md:p-16 relative z-10">
          <h1 className="font-bold">Hello there 👋, I’m Divine Hycenth.</h1>
          <p>
            <Link
              href="/divine-cv-blockchain.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              View Resume
            </Link>
          </p>
          <p>
            I’m a Full stack developer with approximately 6 years of
            professional experience, and I&apos;ve also jumped into
            web3/blockchain recently.
          </p>
          <p>
            Over the course of my career in the computer world, I have worn
            multiple hats. I started off as a graphic designer in a small town
            in my country at the age of 16 therefore be rest assured that when I
            say it looks fantastic, then it really is.
          </p>

          <p>
            I spend most of my free time improving{" "}
            <Link
              href="https://nature-ui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nature UI
            </Link>{" "}
            and creating fitness content on{" "}
            <Link href="https://instagram.com/deeevine__" target="_blank">
              Instagram.
            </Link>
          </p>

          <p>
            Occasionally, I write articles related to web development here on my
            blog and also on{" "}
            <Link
              href="https://dev.to/dnature"
              target="_blank"
              rel="noopener noreferrer"
            >
              DEV
            </Link>{" "}
            and Hashnode{" "}
            <Link
              href="https://hashnode.com/@DNature"
              target="_blank"
              rel="noopener noreferrer"
            ></Link>
            . I enjoy building software solutions for both organizations and
            open-source.
          </p>
          <p>
            I wanted an adds free platform that I can share my approach to
            solving some technical problems, the tools I use to stay productive,
            and a place to reflect on the things I&apos;ve done in the past so I
            created this website.
          </p>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default About;
