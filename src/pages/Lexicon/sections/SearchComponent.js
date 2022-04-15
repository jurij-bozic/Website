/* eslint-disable react/jsx-no-duplicate-props */
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
import { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

import Lexicon from "../../../lexicon.json";

// Images
import magGlass from "assets/images/magnifying-glass-img.jpg";
import searchWallpaper from "assets/images/search-wallpaper-img.jpg"

import {Link} from 'react-scroll'

import './style.css';

function SearchComponent(props) {
  const [searchActive, setSearchActive] = useState(false);
  const [value, setValue] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const [result, setResult] = useState([]);
  const [select, setSelect] = useState('');
  let manualResult = [];
  const getLexiconData = Lexicon.lexicon;

  const searchLexicon = (searchTerm) => {
    let arrayOfWords = searchTerm.split(' ');
    let finalResults = [];

    if (!prevValue && result.length > 0 && result[0].length > 0) {
        result.map(item => {
          manualResult.push(item)
        });
        // debugger;
    }

    arrayOfWords.map(word => {
      getLexiconData.map(item => {
        if (item.entry.includes(word) && !manualResult.includes(item.entry)) {
          finalResults.push(item.entry);
        }
      });
    });

    setResult([...manualResult, ...finalResults]);
    setValue('');
  };

  const handleClick = (item) => {
    props.setEntry(item);
    props.setActive(true);
  };

  useEffect(() => {
    if (select) {
      props.setEntry(select);
      props.setActive(true);
    }
  }, [select]);

  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sx={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Enter expression you want to search</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Results will appear on the sections to the right (or below, depending what type of device you're viewing this on)
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                {/* <MKInput type="email" label="Email Here..." fullWidth /> */}
                  <input 
                    type="text" 
                    name="name" 
                    style={{
                      minWidth: '200px',
                      height: '40px',
                      borderRadius: '10px',
                      padding: '5px',
                      border: '2px solid Lavender',
                      fontSize: '14px'
                    }}
                    value={value}
                    onChange={(ev) => {
                      setValue(ev.target.value);
                      setPrevValue(ev.target.value);
                    }}
                    />
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="info" sx={{ height: "100%" }} onClick={() => {
                  if (value) {
                    setSearchActive(true);
                    setResult([]);
                    manualResult = [];
                    searchLexicon(value);
                  }
                }}>
                  Search
                </MKButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            {
              searchActive ? 
                
                  (result.length > 0 ? 
                    <MKBox position="relative">
                      <div style={{ opacity: '1', position: 'absolute', width: '100%', height: '100%', color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', textAlign: 'left', paddingLeft: '20px', zIndex: 100  }}>
                      <div style={{
                        paddingBottom: '10px',
                        marginTop: '-20px'
                      }}>Select a result to display it below:</div>
                      {result.map(item => {
                        return ( 
                          <Link 
                                activeClass="active" 
                                to="lexicon-entry" 
                                spy={true} 
                                smooth={true}
                                delay={0}>
                            <div className='searchResult' onClick={() => {
                              handleClick(item);
                            }}><b>{item}</b></div> 
                          </Link>
                            );
                        
                      })}
                      </div>
                      <MKBox component="img" src={magGlass} alt="macbook" width="100%" style={{ borderRadius: '10px', opacity: '0.3' }}/>
                    </MKBox>
                    :
                    <MKBox position="relative">
                      <div style={{ opacity: '0.3', position: 'absolute', width: '100%', height: '100%', color: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div><b>no results</b></div>
                      </div>
                      <MKBox component="img" src={magGlass} alt="macbook" width="100%" style={{ borderRadius: '10px', opacity: '0.3' }}/>
                    </MKBox>  
                    )
                
                : 
                
                  <MKBox position="relative">
                    <div style={{ opacity: '0.3', position: 'absolute', width: '100%', height: '100%', color: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <div><b>search results will appear here</b></div>
                    </div>
                  <MKBox component="img" src={magGlass} alt="macbook" width="100%" style={{ borderRadius: '10px', opacity: '0.3' }}/>
                </MKBox>
                
                
            }
    
          </Grid>

          <Grid item sx={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Or browse the list of entries</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Select an entry and it will be displayed in the section below.
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                {/* <MKInput type="email" label="Email Here..." fullWidth /> */}
                <select
                    style={{
                    minWidth: '200px',
                    height: '40px',
                    borderRadius: '10px',
                    padding: '5px',
                    border: '2px solid Lavender',
                    fontSize: '14px'
                }}
                    value={select}
                    onChange={(event) => {
                      setSelect(event.target.value);
                    }}
                  >
                    <option value="default">Select an entry</option>
                    {getLexiconData.map(item => {
                        if (item.entry) {
                          return (
                            <option value={item.entry}>{item.entry}</option>
                          );
                        }
                    })}
                </select>





                  {/* <input 
                    type="text" 
                    name="name" 
                    style={{
                      minWidth: '200px',
                      height: '40px',
                      borderRadius: '10px',
                      padding: '5px',
                      border: '2px solid Lavender',
                      fontSize: '14px'
                    }}
                    value={value}
                    onChange={(ev) => {
                      setValue(ev.target.value);
                      setPrevValue(ev.target.value);
                    }}
                    /> */}
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </MKBox>
  );
}

export default SearchComponent;
