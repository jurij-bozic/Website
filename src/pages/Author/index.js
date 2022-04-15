/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "pages/Author/sections/Profile";
import Posts from "pages/Author/sections/Posts";
import Contact from "pages/Author/sections/Contact";
import Footer from "pages/Author/sections/Footer";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/background_08.jpg";
import bgImage2 from "assets/images/background_011.jpg";

function Author() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/lexicon",
          label: "Blockchain Lexicon",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="AliceBlue">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.2),
                rgba(gradients.dark.state, 0.2)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.000001),
            backdropFilter: "saturate(200%) blur(50px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            // backgroundImage: `url(${bgImage2})`,
          }}
        >
          <Profile />
          <Posts />
        </Card>
        <Contact />
        <Footer />
      </MKBox>
    </>
  );
}

export default Author;
