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

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import bitcoinImg from "assets/images/bitcoin-img.jpg";
import dictionaryImg from "assets/images/dictionary2-img.jpg";

import Lexicon from "../../../lexicon.json";

function Team(props) {
  const getLexiconData = Lexicon.lexicon;

  return (
    <span id="lexicon-entry">
      <MKBox
        component="section"
        variant="gradient"
        bgColor="dark"
        position="relative"
        py={6}
        px={{ xs: 2, lg: 0 }}
        mx={-2}
        marginBottom={0}
        style={{ border: '10px solid #7d7d96', marginBottom: '20px' }}
      >
        <Container>
          {(!props.active ? 
                <Grid container spacing={3} style={{ opacity: '0.3' }}>
                  <Grid container>
                    <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                      <MKTypography variant="h3" color="white" style={{ padding: '20px' }}>
                        Lexicon Entry
                      </MKTypography>
                      {/* <MKTypography variant="body2" color="white" opacity={0.8} style={{ padding: '20px', marginTop: '5px' }}>
                        There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
                        at. That&apos;s my skill.
                      </MKTypography> */}
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <MKBox mb={6}>
                      <HorizontalTeamCard
                        image={bitcoinImg}
                        name=""
                        position={{ color: "info", label: "ENG entry" }}
                        description=""
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <MKBox mb={1}>
                      <HorizontalTeamCard
                        image={dictionaryImg}
                        name=""
                        position={{ color: "info", label: "SLO translation" }}
                        description=""
                      />
                    </MKBox>
                  </Grid>
                </Grid>
                :
                <Grid container spacing={3} style={{ opacity: '1' }}>
                  <Grid container>
                    <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                      <MKTypography variant="h3" color="white" style={{ padding: '20px' }}>
                        Lexicon Entry
                      </MKTypography>
                      {/* <MKTypography variant="body2" color="white" opacity={0.8} style={{ padding: '20px', marginTop: '5px' }}>
                        There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
                        at. That&apos;s my skill.
                      </MKTypography> */}
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <MKBox mb={6}>
                      <HorizontalTeamCard
                        image={bitcoinImg}
                        name={getLexiconData.map(item => {
                          if (item.entry == props.entry) {
                            return '"' + item.entry + '"';
                          }
                        })}
                        position={{ color: "info", label: "ENG entry" }}
                        description={getLexiconData.map(item => {
                          if (item.entry == props.entry) {
                            return item.entry_notes;
                          }
                        })}
                      />
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <MKBox mb={1}>
                      <HorizontalTeamCard
                        image={dictionaryImg}
                        name={getLexiconData.map(item => {
                          if (item.entry == props.entry) {
                            return '"' + item.translation + '"';
                          }
                        })}
                        position={{ color: "info", label: "SLO translation" }}
                        description={getLexiconData.map(item => {
                          if (item.entry == props.entry) {
                            return item.translation_notes;
                          }
                        })}
                      />
                    </MKBox>
                  </Grid>
                </Grid>)}
        </Container>
      </MKBox>
    </span>
  );
}

export default Team;
