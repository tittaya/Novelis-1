import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
//import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";

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

export default function ProfilePage(props) {
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
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Chapters",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <Card>
                            <CardHeader>
                              <Link to={"/chapter"} className={classes.link}>
                                <Button simple color="primary" size="lg">
                                  Chapter1
                                </Button>
                              </Link>
                            </CardHeader>
                          </Card>
                          <Card>
                            <CardHeader>
                              <Link to={""} className={classes.link}>
                                <Button simple color="primary" size="lg">
                                  Chapter2
                                </Button>
                              </Link>
                            </CardHeader>
                          </Card>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Characters",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <Card>
                            <CardHeader>
                              <Link to={"/character"} className={classes.link}>
                                <Button simple color="primary" size="lg">
                                  Characters1
                                </Button>
                              </Link>
                            </CardHeader>
                          </Card>
                          <Card>
                            <CardHeader>
                              <Link to={""} className={classes.link}>
                                <Button simple color="primary" size="lg">
                                  Characters1
                                </Button>
                              </Link>
                            </CardHeader>
                          </Card>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Timelines",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <Card>
                            <CardHeader>
                              <Link to={"/timeline"} className={classes.link}>
                                <Button simple color="primary" size="lg">
                                  Timelines1
                                </Button>
                              </Link>
                            </CardHeader>
                          </Card>
                          <Card>
                            <CardHeader>
                              <Link to={""} className={classes.link}>
                                <Button simple color="primary" size="lg">
                                  Timelines2
                                </Button>
                              </Link>
                            </CardHeader>
                          </Card>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Mapping",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <Card>
                            <CardHeader>
                              <Link to={"/mapping"} className={classes.link}>
                                <Button simple color="primary" size="lg">
                                  Mapping1
                                </Button>
                              </Link>
                            </CardHeader>
                          </Card>
                          <Card>
                            <CardHeader>
                              <Link to={""} className={classes.link}>
                                <Button simple color="primary" size="lg">
                                  Mapping2
                                </Button>
                              </Link>
                            </CardHeader>
                          </Card>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
