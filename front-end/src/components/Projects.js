import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ClockinJS from "../graphics/clockinjs.png";
import HomeSeeker from "../graphics/home-seeker.png";
import Crud from "../graphics/crud.png";
import JSLogo from "../icons/96-js.png";
import CssHtmlLogo from "../icons/96-css-html.png";
import NodeLogo from "../icons/96-nodejs.png";
import ReactLogo from "../icons/96-react.png";
import ExpressLogo from "../icons/96-ExpressJS.png";
import BootstrapLogo from "../icons/96-bootstrap.png";
import ReduxLogo from "../icons/96-redux.png";
import MongoDBLogo from "../icons/96-mongoDB.png";
import PostgreSQLLogo from "../icons/96-postgresql.png";
import NodeMailerLogo from "../icons/96-nodemailer.png";
import RecaptchaLogo from "../icons/96-recaptcha.png";
import GitHubLogo from "../icons/96-github.png";
import { useState } from 'react';

const mobileScreen = window.innerWidth > 790 ? false : true;

export default function Projects() {
  const [tabIndex, setTabIndex] = useState(0);

  return(
    <div className="card" >
        <Tabs 
            selectedTabClassName="selected-tab"
            selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}
            style={{ height: "100%", display: "flex", flexDirection: "column", flex: 1}} 
        >
            <TabList >
                <Tab className={"react-tabs__tab tab-extra"}>Intro</Tab>
                <Tab className={"react-tabs__tab tab-extra"}>Clockin.js</Tab>
                <Tab className={"react-tabs__tab tab-extra"}>Home Seeker</Tab>
                <Tab className={"react-tabs__tab tab-extra"}>CRUD</Tab>
                <Tab className={"react-tabs__tab tab-extra"}>TK website</Tab>
            </TabList>

            <TabPanel style={{overflow: "auto", height: "100%"}} >
                <div className="tab-card d-flex flex-column">
                    <p className="mt-4">Welcome to my project portfolio! I'm excited to show you what I've been working on - a range of projects built with some of the industry's best tools and technologies including:</p> 
                    <div className="proj-items-container">
                        <img src={JSLogo} className="proj-items" title="Javascript" alt=""/>
                        <img src={CssHtmlLogo} className="proj-items" title="Html & CSS" alt=""/>
                        <img src={NodeLogo} className="proj-items" title="Node.js" alt=""/>
                        <img src={ReactLogo} className="proj-items" title="React JS" alt=""/>
                        <img src={ExpressLogo} className="proj-items" title="Express JS" alt=""/>
                        <img src={BootstrapLogo} className="proj-items" title="Bootstrap" alt=""/>
                        <img src={ReduxLogo} className="proj-items" title="Redux" alt=""/>
                        <img src={PostgreSQLLogo} className="proj-items" title="PostgreSQL" alt=""/>
                        <img src={MongoDBLogo} className="proj-items" title="MongoDB Atlas" alt=""/>
                        <img src={RecaptchaLogo} className="proj-items" title="Google Recaptcha" alt=""/>
                        <img src={NodeMailerLogo} className="proj-items" title="Node Mailer" alt=""/>
                        <img src={GitHubLogo} className="proj-items" title="Github" alt=""/>
                    </div>
                    <p className="mb-4">I'm really proud of the skills I've developed and the amazing projects I have completed. Dive right in and explore my portfolio to get a picture of my abilities!</p>
                    {/* <p className="mt-5 mb-5">Some of my projects are being displayed in this section.</p>
                    <p>Some of the tools used here and in other projects include React, Bootstrap, Sass, NodeJs, Axios, ExpressJs, Moongoose, PostgreSQL, Node-mailer, and Google reCaptcha.</p> */}
                    <p><a href="https://github.com/tonykieling" target="_blank" rel="noreferrer">GitHub</a> is an amazing platform where I share my projects and codes.</p>
                    <p>Browse through my code and if you have any questions or comments, please don't hesitate to reach out.</p>
                </div>
            </TabPanel>

            <TabPanel style={{overflow: "hidden", height: "100%"}} >
                <div className="tab-card d-flex about">
                    {/* <p>A system that allows you to have all your clients data, their clockins and invoices, in one place. It is easy to manage and track your work with them.</p>
                    <p>And it is a free tool. 🤑</p> */}
                    <p>Introducing an all in one system that allows you to conveniently manage and track all your clients and their related data, clockins, and invoices.</p>
                    <p>Best of all, it's free and easy to use! 🤑</p>
                    <a href="https://clockin.tkwebdev.ca/" target="_blank" rel="noreferrer">
                        <p className="text-center">
                            https://clockinjs.tkwebdev.ca
                        </p>
                        <div className="bice mt-3">
                            <img
                                src       = { ClockinJS }
                                className = "bice-settings"
                                alt       = "This is me" 
                                width     = { mobileScreen ? "100%" : "50%" }
                            />
                        </div>
                    </a>

                </div>
            </TabPanel>

            <TabPanel style={{overflow: "hidden", height: "100%"}} >
                <div className="tab-card d-flex about">
                    {/* <p>An automated system to web scrap info on Craigslist about rentals availability. I have built it to help my wife and I to find our new place to live and receive messages automatically to shortcut our searchings.</p> 
                    <p>Mission accomplished and happy new homers! 🏠😊</p> */}
                    <p>An automated system to web scrape information from Craigslist about rentals availability. This has helped my wife and I to find our new home, quickly and easily receiving notifications to shortcut our search.</p>
                    <p>Mission accomplished and happy new homers! 🏠😊</p>
                    <a href="https://home-seeker.tkwebdev.ca" target="_blank" rel="noreferrer">
                        <p className="text-center">
                            https://home-seeker.tkwebdev.ca
                        </p>
                        <div className="bice mt-3">
                            <img
                                src       = { HomeSeeker }
                                className = "bice-settings"
                                alt       = "This is me" 
                                width     = { mobileScreen ? "100%" : "50%" }
                            />
                        </div>    
                    </a>
                </div>
            </TabPanel>

            <TabPanel style={{overflow: "auto", height: "100%"}} >
                <div className="tab-card d-flex about">
                    <p>A full-stack application aimed to demonstrate the basic functioning of a computer program regarding Database.</p>
                    <p><b>CRUD</b> stands for <b>C</b>reate, <b>R</b>ead, <b>U</b>pdate, and <b>D</b>elete. They are the 4 basic ways to proceed with data.</p>
                    <a href="https://crud.tkwebdev.ca" target="_blank" rel="noreferrer">
                        <p className="text-center">
                            https://crud.tkwebdev.ca
                        </p>
                        <div className="bice mt-3">
                            <img
                                src       = { Crud }
                                className = "bice-settings"
                                alt       = "This is me" 
                                width     = { mobileScreen ? "100%" : "50%" }
                            />
                        </div>
                    </a>
                </div>
            </TabPanel>

            <TabPanel style={{overflow: "auto", height: "100%"}} >
                <div className="tab-card d-flex flex-column pt-5">
                    <p className="text-center">This home page you are browsing right now is entirely my own work, created from the ground up.</p>
                    <p className="mt-4 text-center">Any additional information, please refer to 
                        <span 
                            onClick={ () => setTabIndex(0)}
                            className="intro-link"
                        > Intro</span>
                    </p>
                </div>
            </TabPanel>

        </Tabs>
    </div>
    
  );
}