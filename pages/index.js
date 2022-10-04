import React, { useEffect, useRef, useState } from "react";
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
import Projects from "/pages-sections/LandingPage-Sections/Projects.js";
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
  const [elementsInViewport, setElementsInViewPort] = useState([])
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    const timer = !isDisplayed && setTimeout(() => {
        setIsDisplayed(true)
      }, 300)
      return () => clearTimeout(timer)
  }, [])

  const refAboutMe = useRef('')

  useEffect(() => {
     const observer = new IntersectionObserver((changes, observer) => {
      for (const change of changes) {
        console.log(change.time);               // Timestamp when the change occurred
        console.log(change.rootBounds);         // Unclipped area of root
        console.log(change.boundingClientRect); // target.getBoundingClientRect()
        console.log(change.intersectionRect);   // boundingClientRect, clipped by its containing block ancestors, and intersected with rootBounds
        console.log(change.intersectionRatio);  // Ratio of intersectionRect area to boundingClientRect area
        console.log(change.target);             // the Element target
      }
    })
    observer.observe(refAboutMe.current)
    console.log(refAboutMe.current)
  })

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
              <div className={'button-aboutMe'}>
                <Button
                  color="primary"
                  size="lg"
                  href="#about-me"
                  rel="noopener noreferrer"
                  className={css(cssButtonHeader)}
                >
                  A propos de moi
                </Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <AboutMe isDisplayed={isDisplayed} ref={refAboutMe}/>
          <Projects />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const cssLeftItem = (isDisplayed) => ({
  marginBottom: '200px',
  opacity: isDisplayed ? 1 : 0,
  '& .button-projects': {
    transform: isDisplayed ? 'translateX(0)' : 'translateX(-100vw)',
    transition: isDisplayed ? 'all 1.3s ease-in-out 0.5s' : 'none',
    position: 'relative',
  }
})

const cssRightItem = (isDisplayed) => ({
  position: 'relative',
  marginTop: '200px',
  paddingLeft: '170px',
  opacity: isDisplayed ? 1 : 0,
  '& h1': {
    transform: isDisplayed ? 'translateX(0)' : 'translateY(100vh)',
    transition: isDisplayed ? 'all 0.7s ease-out 1.5s' : 'none',
  },
  '& h4': {
    transform: isDisplayed ? 'translateX(0)' : 'translateY(100vh)',
    transition: isDisplayed ? 'all 0.9s ease-out 1.7s' : 'none',
  },
  '& .button-aboutMe': {
    transform: isDisplayed ? 'translateX(0)' : 'translateY(100vh)',
    transition: isDisplayed ? 'all 1.15s ease-out 1.8s' : 'none',
  }

})

const cssButtonHeader = {
  transition: 'all 0.3s ease-in-out',
  fontFamily: 'Josefin',
  position: 'relative',
  borderRadius: '0',
  '&:hover': {
    transform: 'translateY(-5px) translateX(2px)',
    boxShadow: `-3px 3px 3px ${blackColor}`,
  }
}

const cssTitleHome = (isDisplayed) => ({
  whiteSpace: 'nowrap',
})