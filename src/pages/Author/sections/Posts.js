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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/react-img.jpg";
import post2 from "assets/images/angular-img.png";
import post3 from "assets/images/java-img.png";
import post4 from "assets/images/blockchain-img.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fa } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            <h2>About me</h2>
          </MKTypography>
          I am a professionally trained formal linguist, an adherent of the 'Chomskyan school' of thought. 
            However, these days I am mostly occupied by programming, particulary web development. 
            I have 2.5+ years of professional developer experience. 
            <br /><br />
            My main interests revolve around 
            Front-End development in the JavaScript domain, most notably React.js. I also have experience 
            working on the Back-End in PHP and Java:
            <br /> <br / >
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="React"
              description=""
              action={{
                type: "internal",
                route: "/",
                color: "info",
                // label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Angular"
              description=""
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                // label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Java"
              description=""
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                // label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <a href="/#/pages/lexicon">
            <BackgroundBlogCard
              image={post4}
              title="Blockchain Expressions"
              description="Check out my Translation Lexicon of Blockchain expression in Slovenian"
              action={{
                type: "internal",
                route: "/pages/lexicon",
                label: "here",
              }}
            />
            </a>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
