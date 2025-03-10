import React from "react";

import "./Team.css";

import radu from "../images/RaduProfile.jpg";
import ibi from "../images/IbiProfile.jpg";
import julius from "../images/JuliusProfile.jpg";
import denitsa from "../images/DenitsaProfile.jpg";
import PastCommittee from "../pages/PastCommittee";

import adam from "../images/AdamProfile.jpg";
import iona from "../images/IonaProfile.jpg";
import divisha from "../images/DivishaProfile.jpg";
import benedetta from "../images/BenedettaProfile.jpg";
import miro from "../images/MiroProfile.jpg";
import roman from "../images/RomanProfile.jpg";
import andras from "../images/AndrasProfile.jpg";
import tomas from "../images/TomasProfile.jpg";
import benedek from "../images/BenedekProfile.jpg";
import Parth from "../images/ParthProfile.jpg";
import Jenna from "../images/JennaProfile.jpg";
import Elizabete from "../images/ElizabeteProfile.jpg";
import Alice from "../images/AliceProfile.jpg";
import Grace from "../images/GraceProfile.jpg";





const Team = () => {
  return (
    <section className="team">
      <div className="team-wrapper">
        <h4>Meet the team</h4>
        {/* Main Team */}
        <div className="main-team">
          <div className="card">
            <img className="small-img" src={Benedetta} alt="" />
            <h5 className="small-name">Benedetta Harris</h5>
            <p className="small-description">President</p>
          </div>

          <div className="card">
            <img className="small-img" src={Elizabete} alt="" />
            <h5 className="small-name">Elizabete Jeremejeva</h5>
            <p className="small-description">Vice President</p>
          </div>

          <div className="card">
            <img className="small-img" src={Grace} alt="" />
            <h5 className="small-name">Grace Hollister</h5>
            <p className="small-description">Head of Finance</p>
          </div>

          <div className="card">
            <img className="small-img" src={Alice} alt="" />
            <h5 className="small-name">Alice Godi</h5>
            <p className="small-description">Head of Events</p>
          </div>

          <div className="card">
            <img className="small-img" src={Parth} alt="" />
            <h5 className="small-name">Parth Chutani</h5>
            <p className="small-description">Head of Technology</p>
          </div>

          <div className="card">
            <img className="small-img" src={Jenna} alt="" />
            <h5 className="small-name">Jenna Lee</h5>
            <p className="small-description">Head of Marketing</p>
          </div>

        //   <div className="card">
        //     <img className="small-img" src={divisha} alt="" />
        //     <h5 className="small-name">Divisha Ramlochu</h5>
        //     <p className="small-description"> Text Editor</p>
        //   </div>

        //   <div className="card">
        //     <img className="small-img" src={tomas} alt="" />
        //     <h5 className="small-name">Tomas Kopunec</h5>
        //     <p className="small-description"> Tech Lead</p>
        //   </div>
        // </div>

        // <div className="main-team-two"></div>
        // {/* Events Coordinator */}
        // <p className="subteam-heading">Events team</p>
        // <div className="main-team">
        //   <div className="card">
        //     <img className="small-img" src={benedek} alt="" />
        //     <h5 className="small-name">Benedek Safar</h5>
        //     <p className="small-description"> Head of Events</p>
        //   </div>

        //   <div className="card">
        //     <img className="small-img" src={andras} alt="" />
        //     <h5 className="small-name">Andras Vekassy</h5>
        //     <p className="small-description"> Events Manager</p>
        //   </div>

        //   <div className="card">
        //     <img className="small-img" src={iona} alt="" />
        //     <h5 className="small-name">Iona Bateman</h5>
        //     <p className="small-description"> Events</p>
        //   </div>

        //   <div className="card">
        //     <img className="small-img" src={roman} alt="" />
        //     <h5 className="small-name">Roman Kim</h5>
        //     <p className="small-description"> Events</p>
        //   </div>

        //   <div className="card">
        //     <img className="small-img" src={miro} alt="" />
        //     <h5 className="small-name">Miro Nikolic</h5>
        //     <p className="small-description">Social Events</p>
        //   </div>
        // </div>

        <a href="past-committee" rel="noreferrer">
          <button>Past Committee</button>
        </a>
      </div>
    </section>
  );
};

export default Team;
