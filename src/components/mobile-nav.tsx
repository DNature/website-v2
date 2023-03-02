import {
  Box,
  BoxProps,
  CloseButton,
  IconButton,
  IconButtonProps,
  Stack,
  clsx,
  useUpdateEffect,
} from "@nature-ui/core";
import { AnimatePresence, motion, useElementScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { RemoveScroll } from "react-remove-scroll";

import { useRouteChanged } from "hooks/use-route-change";

import { AiOutlineMenu } from "react-icons/ai";
import { Logo } from "./Logo";

const NavLink = ({ href, children, className = "", ...rest }) => {
  const { pathname } = useRouter();

  const [, group] = href.split("/");
  const isActive = pathname.includes(group);

  return (
    <Link
      href={href}
      className={clsx(
        className,
        "p-2 hover:bg-accent-400 hover:opacity-70 rounded-xl",
        {
          "font-semibold bg-gradient text-white": isActive,
          "text-dark-600": !isActive,
        }
      )}
      css={{
        flex: "1 1 0%",
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

const ScrollView = (props: BoxProps & { onScroll?: any }) => {
  const { onScroll, ...rest } = props;
  const [y, setY] = React.useState(0);
  const elRef = React.useRef<any>();
  const { scrollY } = useElementScroll(elRef);
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  useUpdateEffect(() => {
    onScroll?.(y > 5);
  }, [y]);

  return (
    <Box
      ref={elRef}
      className="overflow-auto px-6 mb-6 flex-1"
      id="routes"
      {...rest}
    />
  );
};

interface MobileNavContentProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const MobileNaveContent = (props: MobileNavContentProps) => {
  const { isOpen, onClose } = props;
  const closeBtnRef = React.useRef<HTMLButtonElement>();
  const { pathname } = useRouter();

  useRouteChanged(onClose);

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus();
      });
    }
  }, [isOpen]);

  const [shadow, setShadow] = React.useState<string>();

  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll forwardProps>
          <motion.nav
            className="h-screen absolute top-0 left-0 w-full pt-3 bg-white z-10 flex flex-col overflow-auto pb-8"
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -500 }}
          >
            <Box className="">
              <Box className="px-4">
                <Stack row className="items-center">
                  <Logo />
                  <CloseButton
                    ref={closeBtnRef}
                    className="ml-auto"
                    onClick={onClose}
                  />
                </Stack>
              </Box>
              <Box className={`px-6 mt-6 pb-4`}>
                <Stack col spacing="3" className="mb-3">
                  <NavLink href="/blog">Blog</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/works">Works</NavLink>
                  <NavLink href="/contact">contact</NavLink>
                </Stack>
              </Box>
            </Box>
          </motion.nav>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
};

export const MobileNavButton = React.forwardRef(
  (props: IconButtonProps, ref: React.Ref<any>) => {
    return (
      <div className="md:hidden justify-end flex items-center">
        <IconButton
          className="md:hidden text-xl  ml-3"
          ref={ref}
          css={{
            paddingLeft: "5px !important",
            paddingRight: "5px !important",
          }}
          aria-label="Open menu"
          text="current"
          variant="ghost"
          icon={<AiOutlineMenu />}
          {...props}
        />
      </div>
    );
  }
);
