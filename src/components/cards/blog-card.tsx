import React from "react";

import { Badge, Box, LazyImage, Stack, clsx } from "@nature-ui/core";
import Link from "next/link";

import { getNChars } from "utils/get-n-chars";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BottomVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1 } },
};

export const BlogCard = ({ className = "", post, ...rest }) => {
  const {
    slug,
    tags,
    title,
    description,
    imageUrl,
    readTimeMinutes: readTime,
  } = post;

  let fallbackSrc: any = imageUrl.split(".");

  if (fallbackSrc[fallbackSrc.length - 1] === "gif") {
    fallbackSrc = fallbackSrc.join(".").replace(/\/c_scale.*?\//gis, "/w_50/");
  } else {
    fallbackSrc = imageUrl.replace(/\/c_scale.*?\//gis, "/c_scale,w_0.01/");
  }
  const [ref, inView] = useInView();
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.article
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={BottomVariants}
      className={clsx(
        className,
        "p-6 rounded-2xl bg-glass-card cursor-pointer hover:opacity-80 group"
      )}
      {...rest}
    >
      <Link href={slug}>
        <Box className="md:grid grid-cols-2 gap-4 items-center">
          <Box className="h-full">
            <LazyImage
              loading="lazy"
              src={imageUrl}
              fallbackSrc={fallbackSrc}
              alt={title}
              className="rounded-2xl object-cover w-full h-full"
            />
          </Box>
          <Box>
            <h3 className="font-semibold mt-2 md:mt-0 group-hover:underline ">
              {title}
            </h3>
            {tags && (
              <Stack row spacing="2" className="mt-4">
                {tags.map((tag, i) => (
                  <Badge color="primary-500" variant="solid" key={tag + i}>
                    {tag}
                  </Badge>
                ))}
              </Stack>
            )}
            <p className="mt-4">{getNChars(description, 400)}</p>
            <Badge className="lowercase" variant="outline" color="dark-500">
              {readTime} min read
            </Badge>
          </Box>
        </Box>
      </Link>
    </motion.article>
  );
};
