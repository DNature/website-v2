const baseUrl = "https://github.com/nature-ui/nature-ui";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Divine Hycenth. All`,
  author: {
    name: "Divine Hycenth",
    github: "https://github.com/dnature",
    // twitter: "https://twitter.com/built_divine",
    linkedin: "https://linkedin.com/in/dnature",
    email: "contact@divinehycenth.com",
    website: "https://divinehycenth.com",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/develop/website`,
    blogUrl: `${baseUrl}/blog/develop`,
  },
  discord: {
    url: "https://discord.gg/ZA7NgwkeQ4",
  },
  seo: {
    title: "Divine Hycenth - Portfolio",
    titleTemplate: "%s - Divine",
    description:
      "Hi 👋, I’m a full-stack engineer that wears many hats 🎩🪄. I build blockchain apps (Smart Contracts, Solidity, Dapps, Web3), and Web apps using React, Typescript, & Nodejs, and I have a great eye for design due to my background in graphic design. I've been working professionally in various company sizes for 5+ years and I'm currently located in the Netherlands",
    siteUrl: "https://blog.builtdivine.com",
    twitter: {
      handle: "",
      site: "",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://blog.builtdivine.com",
      title: "Divine Hycenth - Portfolio",
      description:
        "Hi 👋, I’m a full-stack engineer that wears many hats 🎩🪄. I build blockchain apps (Smart Contracts, Solidity, Dapps, Web3), and Web apps using React, Typescript, & Nodejs, and I have a great eye for design due to my background in graphic design. I've been working professionally in various company sizes for 5+ years and I'm currently located in the Netherlands",
      site_name: "Divine Hycenth - Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1240,
          height: 480,
          alt: "Divine Hycenth - Portfolio",
        },
        {
          url: "/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt: "Divine Hycenth - Portfolio",
        },
      ],
    },
  },
};

export default siteConfig;
