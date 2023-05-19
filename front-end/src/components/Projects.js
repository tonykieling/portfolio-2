import { useEffect } from "react";
import { goTop } from "../helpers/goTop";

import ClockinJS from "../graphics/clockinjs.png";
import HomeSeeker from "../graphics/home-seeker.png";
import Crud from "../graphics/crud.png";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const mobileScreen = window.innerWidth > 790 ? false : true;

export default function Projects({ cardPosition }) {
    useEffect(() => { 
        goTop();
    }, []);


  return(

    <div className="card" style = {{ top: cardPosition }}>
        <Tabs selectedTabClassName="selected-tab">
            <TabList >
                <Tab className={"react-tabs__tab tab-extra"}>Intro</Tab>
                <Tab className={"react-tabs__tab tab-extra"}>Clockin.js</Tab>
                <Tab className={"react-tabs__tab tab-extra"}>Home Seeker</Tab>
                <Tab className={"react-tabs__tab tab-extra"}>CRUD</Tab>
                <Tab className={"react-tabs__tab tab-extra"}>My website</Tab>

                {/* <Tab>ClockinJs</Tab>
                <Tab>Home Seeker</Tab>
                <Tab>CRUD</Tab>
                <Tab>My website</Tab> */}
            </TabList>

            <TabPanel>
                <div className="card-sub-projects">
                    <p style={{marginTop: "2rem"}}><a href="https://github.com/tonykieling" target="_blank" rel="noreferrer">GitHub</a> is an awesome tool and the place where I repo my projects and codes.</p>
                    <p>I wanted to mention and share some of them.</p> 
                    <p>Feel free to check out any of my dev writings and reach out.</p>
                </div>
            </TabPanel>

            <TabPanel>
                <div className="card-sub-projects">
                    <h3>ClockinJS</h3>
                    <p>A system that allows one to have all their clients data, their clockins and invoices, in one place. It is easy to manage and track their work with them. And it is a free tool. 🤑</p>
                    <p><a href="https://clockin.tkwebdev.ca/" target="_blank" rel="noreferrer">https://clockinjs.tkwebdev.ca</a></p>

                    <div className="bice">
                        <img
                        src       = { ClockinJS }
                        className = "bice-settings"
                        alt       = "This is me" 
                        width     = { mobileScreen ? "100%" : "50%" }
                        />
                    </div>
                </div>
            </TabPanel>

            <TabPanel>
                <div className="card-sub-projects">
                    <h3>Home Seeker</h3>
                    <p>An automated system to web scrap info on Craigslist about rentals availability. I have built it to help my wife and I to find our new place to live and receive messages automatically to shortcut our searchings.</p> 
                    <p>Mission accomplished and happy new homers! 🏠😊</p>
                    <p><a href="https://home-seeker.tkwebdev.ca" target="_blank" rel="noreferrer">https://home-seeker.tkwebdev.ca</a></p>

                    {/* <div className="bice">
                        <img
                        src       = { HomeSeeker }
                        className = "bice-settings"
                        alt       = "This is me" 
                        width     = { mobileScreen ? "100%" : "50%" }
                        />
                    </div> */}
                </div>
            </TabPanel>

            <TabPanel>
                <div className="card-sub-projects">
                    <h3>CRUD</h3>

                    <p>It is also a full-stack application with the purpose to demonstrate a basic functioning of a computer program.</p>
                    <p><b>CRUD</b> stands for <b>C</b>reate, <b>R</b>ead, <b>U</b>pdate, and <b>D</b>elete. They are the 4 basic ways to proceed with data.</p>
                    <p><a href="https://crud.tkwebdev.ca" target="_blank" rel="noreferrer">https://crud.tkwebdev.ca</a></p>

                    <div className="bice">
                        <img
                        src       = { Crud }
                        className = "bice-settings"
                        alt       = "This is me" 
                        width     = { mobileScreen ? "100%" : "50%" }
                        />
                    </div>
                </div>
            </TabPanel>

            <TabPanel>
                <div className="card-sub-projects">
                    <h3>My website</h3>
                    <p>This home page you are reading right now is all developed by myself from scratch.</p>
                    <p>Some of the tools used here and in other projects include React, Bootstrap, Sass, NodeJs, Axios, ExpressJs, Moongoose, PostgreSQL, Node-mailer, and Google reCaptcha.</p>
                    <p><a href="https://tkwebdev.ca" target="_blank" rel="noreferrer">https://tkwebdev.ca</a></p>
                </div>
            </TabPanel>

        </Tabs>
    </div>
    
  );
}