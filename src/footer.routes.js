// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import favicon from "assets/images/descartes-favicon.png";
import { LinkedIn } from "@mui/icons-material";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Personal website",
    image: favicon,
    route: "/",
  },
  socials: [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/jurij-božič-2a6919225//",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/jurij-bozic",
    }
  ]
};
