import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "/pages-sections/LandingPage-Sections/ProductSection.js";
import AboutMe from "/pages-sections/LandingPage-Sections/AboutMe.js";
import WorkSection from "/pages-sections/LandingPage-Sections/WorkSection.js";
import { css } from "goober";
import { blackColor, hoverColor, primaryColor } from "../styles/jss/nextjs-material-kit";
import AnimationText from "../components/AnimationText";
import ClientOnly from "../components/ClientOnly";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const [isDisplayed, setIsDisplayed] = useState(false)
  console.log("🚀 ~ file: index.js ~ line 34 ~ LandingPage ~ isDisplayed, parent", isDisplayed)
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    const timer = !isDisplayed && setTimeout(() => {
        setIsDisplayed(true)
      }, 300)
      return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/header_home.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} className={css(cssLeftItem(isDisplayed))}>
              <div className={`${classes.title} ${css(cssTitleHome(isDisplayed))}`}>
                <ClientOnly>
                  <AnimationText text={'WEB DEVELOPPER'} isDisplayed={isDisplayed} />
                </ClientOnly>
              </div>
              <br />
              <div className='button-projects'>
                <Button
                  color="primary"
                  size="lg"
                  href="/#projects"
                  rel="noopener noreferrer"
                  className={css(cssButtonHeader)}
                >
                Mes réalisations
              </Button>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} className={css(cssRightItem(isDisplayed))}>
              <h1 className={classes.title}>Mathieu Bonhommeau</h1>
              <h4>
                Ici un texte de présentation ... A small description after the big bold
                title.
              </h4>
              <br />
              <Button
                color="primary"
                size="lg"
                href="#about-me"
                rel="noopener noreferrer"
                className={css(cssButtonHeader)}
              >
                A propos de moi
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <AboutMe />
          <ProductSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const cssLeftItem = (isDisplayed) => ({
  position: 'relative',
  marginBottom: '200px',
  opacity: isDisplayed ? 1 : 0,
  '& .button-projects': {
    transform: isDisplayed ? 'translateX(0)' : 'translateX(-100vw)',
    transition: isDisplayed ? 'all 1.3s ease-in-out 0.5s' : 'none',
  }
})

const cssRightItem = (isDisplayed) => ({
  position: 'relative',
  marginTop: '200px',
  paddingLeft: '170px',
  opacity: isDisplayed ? 1 : 0,
  transform: isDisplayed ? 'translateX(0)' : 'translateY(100vh)',
  transition: isDisplayed ? 'all 2s ease-out 1s' : 'none',
})

const cssButtonHeader = {
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  /* '&::before': {
    content: '\'\'',
    position: 'absolute',
    top: 0,
    left: '-5px',
    bottom: '-5px',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    transition: 'all ease 0.3s',
  }, */
  '&:hover': {
    transform: 'translateY(-5px) translateX(2px)',
    backgroundColor: hoverColor,
    color: blackColor,
    '&::before': {
      outlineBorderLeft: '5px solid #fff',
    },

  }
}

const cssTitleHome = (isDisplayed) => ({
  whiteSpace: 'nowrap',
})