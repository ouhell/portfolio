import React from "react";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiMailSend,
} from "react-icons/bi";
import { HiMail } from "react-icons/hi";
type Props = {};

const socials = [
  // {
  //   name: "facebook",
  //   link: "https://www.facebook.com/profile.php?id=100006199726661",
  //   icon: BiLogoFacebook,
  // },
  {
    name: "github",
    link: "https://github.com/ouhell",
    icon: BiLogoGithub,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/oussama-islem-hamida-72a418284/",
    icon: BiLogoLinkedin,
  },
  // {
  //   name: "outlook",
  //   link: "hamida.oussama@outlook.com",
  //   icon: HiMail,
  // },
];

const Socials = (props: Props) => {
  return (
    <div className="flex gap-2">
      {socials.map((soc) => (
        <a
          key={soc.name}
          href={soc.link}
          target="_blank"
          className="hover:text-accent"
        >
          <soc.icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;
