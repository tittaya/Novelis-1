import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

//import { Link } from "react-router-dom";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
//import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Parallax from "components/Parallax/Parallax.js";
//import Button from "components/CustomButtons/Button.js";

import profile from "assets/img/faces/christian.jpg";

//import studio1 from "assets/img/examples/studio-1.jpg";
//import studio2 from "assets/img/examples/studio-2.jpg";
//import studio3 from "assets/img/examples/studio-3.jpg";
//import studio4 from "assets/img/examples/studio-4.jpg";
//import studio5 from "assets/img/examples/studio-5.jpg";
//import work1 from "assets/img/examples/olu-eletu.jpg";
//import work2 from "assets/img/examples/clem-onojeghuo.jpg";
//import work3 from "assets/img/examples/cynthia-del-rio.jpg";
//import work4 from "assets/img/examples/mariya-georgieva.jpg";
//import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function Chapter(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Title</h3>
                    <h6>genre : </h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>story summary</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
