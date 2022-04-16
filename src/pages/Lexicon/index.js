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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { useState, useEffect } from "react";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/Lexicon/sections/Information";
import Team from "pages/Lexicon/sections/Team";
import Featuring from "pages/Lexicon/sections/Featuring";
import SearchComponent from "pages/Lexicon/sections/SearchComponent";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/blockchain3-img.jpg";

function Lexicon() {
  const [active, setActive] = useState(false);
  const [entry, setEntry] = useState('');
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/lexicon",
          label: "Blockchain Lexicon",
          color: "default",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="70vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Lexicon of Blockchain Expressions
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              With new technology comes new terminology. This is intended to be a repository of 
              newly coined expressions used in the blockchain domain.
            </MKTypography>
            {/* <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton> */}
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find me on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" flexDirection="row" >
              <MKTypography component="a" variant="body1" color="white" href="https://www.linkedin.com/in/jurij-božič-2a6919225/" mr={3}  style={{ paddingLeft: '20px' }}>
                <i className="fab fa-linkedin"/>
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="https://github.com/jurij-bozic" mr={3} style={{ paddingLeft: '20px' }}>
                <i className="fab fa-github" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
          <Information/>
          <SearchComponent setActive={setActive} setEntry={setEntry}/>
          <Team active={active} entry={entry}/>
        {/* <Featuring /> */}
        {/* <Newsletter /> */}
      </Card>
      <MKBox pt={5} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Lexicon;
