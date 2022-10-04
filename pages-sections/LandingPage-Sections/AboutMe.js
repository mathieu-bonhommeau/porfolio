import React, { forwardRef } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { css } from "goober";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

const AboutMe = forwardRef(({isDisplayed}, ref) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section}`} ref={ref}>
      <GridContainer justify="center" className={`${css({marginBottom: '50px'})}`}>
        <GridItem xs={12} sm={12}>
          <h2 className={`${classes.title} ${css(cssTitleAboutMe(isDisplayed))}`}>Welcome ... !</h2>
          <div className={css(cssAboutMeContainer)}>
            <div className={`${classes.description} ${css({justifyContent: 'space-between', width: '47%'})}`}>
              <p>
                This is the paragraph where you can write more details about your
                product. Keep you user engaged by providing meaningful information.
                Remember that by this time, the user is curious, otherwise he wouldn
                {"'"}t scroll to get here. Add a button if you want the user to see
                more.
              </p>
              <p>
                This is the paragraph where you can write more details about your
                  product. Keep you user engaged by providing meaningful information.
                  Remember that by this time, the user is curious, otherwise he wouldn
                  {"'"}t scroll to get here. Add a button if you want the user to see
                  more.
              </p>
            </div>
            <div className={css(cssPhotoProfilContainer)}>
              <img src={'/img/faces/marc.jpg'} alt={'Ma photo de profil'} />
            </div>
          </div>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
})

const cssAboutMeContainer = {
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'center',
  gap: '50px',
  width: '100%',
}

const cssTitleAboutMe = (isDisplayed) => ({
  marginBottom: '50px', 
  marginTop: 0,
  opacity: isDisplayed ? 1 : 0,
  transform: isDisplayed ? 'scale(1)' : 'scale(2.5)',
  transition: isDisplayed ? 'all 1.5s ease-in-out 1.5s' : 'none',
})

const cssTextAboutMe = {
  display: 'flex',
  alignItems: 'center',
}

const cssPhotoProfilContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  'img': {
    width: '50%',
  }
}

export default AboutMe