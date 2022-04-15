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
import Icon from "@mui/material/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fa } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee, faCode, faBrain, faAtom, faCircleNodes  } from '@fortawesome/free-solid-svg-icons'

// import { faCodeSimple } from '@fortawesome/free-regular-svg-icons';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/jurij-bozic-img.png";

library.add(faCheckSquare, faCoffee, faCode);

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h2">Jurij Božič</MKTypography>
                {/* <MKButton variant="outlined" color="info" size="small"> Follow
                </MKButton> */}
              </MKBox>
              <Grid container spacing={3} mb={3} style={{ paddingTop: 15}}>
                <Grid item style={{ paddingTop: 2}}>
                  <MKTypography component="span" variant="body2" color="text">
                  <FontAwesomeIcon icon={faCode} /> <em>Software engineer</em>
                  </MKTypography>
                </Grid>
                <Grid item style={{ paddingTop: 2}}>
                  <MKTypography component="span" variant="body2" color="text">
                  <FontAwesomeIcon icon={faBrain} /> <em>Formal linguist</em>
                  </MKTypography>
                </Grid>
                <Grid item style={{ paddingTop: 2}}>
                  <MKTypography component="span" variant="body2" color="text">
                  <FontAwesomeIcon icon={faAtom} /> <em>Cartesianist</em>
                  </MKTypography>
                </Grid>
                <Grid item style={{ paddingTop: 2}}>
                  <MKTypography component="span" variant="body2" color="text">
                  <FontAwesomeIcon icon={faCircleNodes} /> <em>Blockchain enthusiast</em>
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
              As a full stack software engineer, I develop web applications. I also have a degree in Formal Linguistics
              and an interest in Blockchain technologies.
              
              
              {/* In addition, I have an interest in 
              developing algorithms that simulate human cognition, the ability to produce language in particular. */}

                 <br />
                 
                <MKTypography
                  component="a"
                  href="/pages/lexicon"
                  action={{
                    type: "internal",
                    route: "/pages/lexicon",
                    label: "Blockchain Lexicon",
                    color: "info",
                  }}
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                Blockchain expressions in Slovenian <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
