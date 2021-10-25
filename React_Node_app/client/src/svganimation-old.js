import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import logo from './images/celanese_logo.svg';
import bottom_logo from './images/Project_control_tower.svg';
import LM_logo_bg from './images/LM_logo_bg.svg';
import moving_core_bottom from './images/moving-core-bottom.svg'
import squareBg from '../src/images/bg-square.svg';
import { ReactComponent as SquareBackground } from "../src/images/icons/square-bg.svg";
import Vachart from "./VaChart.js";
import Hacii from "./Hacii.js";
import Eo from "./eo.js";
import Egi from "./egi.js";
import Vam from "./Vam.js";
import Meoh from "./Meoh.js";
import Aas from "./Aas";
import Eg1 from './Eg1';
import Eg2 from './Eg2';
import { Config } from './Config';
import axios  from 'axios';
function Svganimation() {

  const scaleAnimate = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,

    }
  };

  const noAnimate = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'keyframes',
        ease: 'linear',
      }

    }
  };

  const moveObject = {
    hidden: { x: '677.2', y: '437', opacity: 0 },
    show: {
      animate: { x: '0', y: '0' },
      opacity: 1,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    }
  }

  const [showfirstcircle, setshowfirstcircle] = useState(false);
  const [showsecondcircle, setshowsecondcircle] = useState(false);
  const [showthirdcircle, setshowthirdcircle] = useState(false);
  const [showfourthcircle, setshowfourthcircle] = useState(false);
  const [showCoreteam, setshowCoreteam] = useState(false);
  const [showfifthobject, setshowfifthobject] = useState(false);
  const [showUniteam, setshowUniteam] = useState(false);
  const [combinecircle, setcombinecircle] = useState(false);
  const [outercircle, setoutercircle] = useState(false);
  const [corpcircle, setcorpcircle] = useState(false);
  const [iscorpClicked, setiscorpClicked] = useState(false);
  const [logoanimation, setlogoanimation] = useState(false);
  const [bottomlogoanimation, setbottomlogoanimation] = useState(false);
  const [isonehsClicked, setisonehsClicked] = useState(false);
  const [moperModel, setmoperModel] = useState(false);
  const [childTogglename, setchildTogglename] = useState({ isActive: false, isActiveunit: false, isActivecoreteam: false, isActivecorpoteam: false, isActivemanufservice: false });
  const [svgToggle, setsvgToggle] = useState({ twentysevenSvg: false, unitteamSvg: false, coreteamSvg: false, manufservicesSvg: false, corporateSvg: false });
  const [productionUnitData,setProductionUnitData] = useState([]);

  const childToggle = (name) => {

    if (name == 'unitteam') {
      let updateStatus = { isActive: false, isActiveunit: !childTogglename.isActiveunit, isActivecoreteam: false, isActivecorpoteam: false, isActivemanufservice: false }
      setchildTogglename(updateStatus);
      let updateSvg = { twentysevenSvg: false, unitteamSvg: !svgToggle.unitteamSvg, coreteamSvg: false, manufservicesSvg: false, corporateSvg: false }
      setsvgToggle(updateSvg)
    }
    else if (name == 'coreteam') {
      let updateStatus = { isActive: false, isActiveunit: false, isActivecoreteam: !childTogglename.isActivecoreteam, isActivecorpoteam: false, isActivemanufservice: false }
      setchildTogglename(updateStatus);
      let updateSvg = { twentysevenSvg: false, unitteamSvg: false, coreteamSvg: !svgToggle.coreteamSvg, manufservicesSvg: false, corporateSvg: false }
      setsvgToggle(updateSvg)
    }
    else if (name == 'corporate') {
      let updateStatus = { isActive: false, isActiveunit: false, isActivecoreteam: false, isActivecorpoteam: !childTogglename.isActivecorpoteam, isActivemanufservice: false }
      setchildTogglename(updateStatus);
      let updateSvg = { twentysevenSvg: false, unitteamSvg: false, coreteamSvg: false, manufservicesSvg: false, corporateSvg: !svgToggle.corporateSvg }
      setsvgToggle(updateSvg)
    }
    else if (name == 'manufactor') {
      let updateStatus = { isActive: false, isActiveunit: false, isActivecoreteam: false, isActivecorpoteam: false, isActivemanufservice: !childTogglename.isActivemanufservice }
      setchildTogglename(updateStatus);
      let updateSvg = { twentysevenSvg: false, unitteamSvg: false, coreteamSvg: false, manufservicesSvg: !svgToggle.manufservicesSvg, corporateSvg: false }
      setsvgToggle(updateSvg)
    }
    else if (name == 'twentyseven') {
      let updateStatus = { isActive: !childTogglename.isActive, isActiveunit: false, isActivecoreteam: false, isActivecorpoteam: false, isActivemanufservice: false }
      setchildTogglename(updateStatus);
      let updateSvg = { twentysevenSvg: !svgToggle.twentysevenSvg, unitteamSvg: false, coreteamSvg: false, manufservicesSvg: false, corporateSvg: false }
      setsvgToggle(updateSvg)
    }


  }

  const ehsSectionOpen = () => {
    setisonehsClicked(true)
  }
  const corpSectionOpen = () => {
    setiscorpClicked(true)
  }

  setTimeout(() => {
    setshowfirstcircle(true)
  }, 1000)

  setTimeout(() => {
    setshowsecondcircle(true)
  }, 1500)

  setTimeout(() => {
    setshowthirdcircle(true)
  }, 2000)

  setTimeout(() => {
    setshowfourthcircle(true)
  }, 2000)

  setTimeout(() => {
    setshowCoreteam(true)
  }, 2500)

  setTimeout(() => {
    setshowfifthobject(true)
  }, 3000)

  setTimeout(() => {
    setshowUniteam(true)
  }, 3000)
  setTimeout(() => {
    setcombinecircle(true)
  }, 4500)
  setTimeout(() => {
    setoutercircle(true)
  }, 5000)
  setTimeout(() => {
    setcorpcircle(true)
  }, 5500)
  setTimeout(() => {
    setlogoanimation(true)
  }, 500)
  setTimeout(() => {
    setbottomlogoanimation(true)
  }, 500)
  setTimeout(() => {
    setmoperModel(true)
  }, 6000)
   const url = `${Config.host}`+"Vam";
  console.log("url-->",url);

  const getChartData = () => {
    axios({
      method: 'GET',
      url: url,
    }).then(function(response) {
     console.log("response data-->",response);
     setProductionUnitData(response.data);
    },function(err){
      console.log(err)
    }
    )
   }
  
  
    useEffect(() => {
      getChartData();
    },[])

  return (
    <div className="landingPage">
     
      {
        logoanimation && <motion.img
          initial={{
            x: -200,
          }}
          animate={{
            x: 0,
            delay: 1,
            duration: 20,
          }}
          src={logo} className="logo_image" />
      }

      <div className="main-div">
        <AnimatePresence>

          <div className="left-side">
            {

              <motion.svg width="346.77" visible={{
                opacity: 1,
                visibility: "visible",
              }}
                hidden={{
                  opacity: 0,
                  transitionEnd: {
                    visibility: "hidden",
                  },
                }}
                height="362.82" viewBox="0 0 346.77 362.82" className="left-side-svg">
                <g id="Title" transform="translate(-46.253 -236.68)">
                  <path id="Path_1227" data-name="Path 1227" d="M-10602.84-5820.121l-26.866,21.922h-57.157v-21.687Z" transform="translate(10736.363 6396.552)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" />
                  <path id="Path_1228" data-name="Path 1228" d="M7,22.02H0L27,0h7Z" transform="translate(113.523 576.98)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" opacity="0.8" />
                  <path id="Path_1229" data-name="Path 1229" d="M7,22.02H0L27,0h7Z" transform="translate(126.523 576.98)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" opacity="0.5" />
                  <path id="Path_1178" data-name="Path 1178" d="M-10686.863-5798.2l26.866-21.921h57.157v21.687Z" transform="translate(10995.363 6057.945)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" />
                  <path id="Path_1230" data-name="Path 1230" d="M7,22.02H0L27,0h7Z" transform="translate(139.523 576.98)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" opacity="0.3" />
                  <path id="Path_1177" data-name="Path 1177" d="M-10620.971-5790.614h-295.7l-47.32,45.968v271.264h296.88l46.047-46.047Z" transform="translate(11013 6050)" fill="#142b34" stroke="#15495e" strokeWidth="1" />
                  <path id="Path_1180" data-name="Path 1180" d="M27,0h7L7,22.019H0Z" transform="translate(294.5 237.18)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" opacity="0.8" />
                  <path id="Path_1181" data-name="Path 1181" d="M27,0h7L7,22.019H0Z" transform="translate(281.5 237.18)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" opacity="0.5" />
                  <path id="Path_1185" data-name="Path 1185" d="M27,0h7L7,22.019H0Z" transform="translate(268.5 237.18)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" opacity="0.3" />
                  <text id="Manufacturing_Operating_Model" data-name="Manufacturing Operating 
Model" transform="translate(82 323)" fill="#1d95c5" fontSize="24" fontWeight="600" fontStyle="italic"><tspan x="0" y="0">Manufacturing Operating </tspan><tspan x="0" y="24">Model</tspan></text>
                  <line id="Line_299" data-name="Line 299" x2="292" transform="translate(76.5 365.5)" fill="none" stroke="#15495e" strokeWidth="1" />
                  <text id="Operating_as_an_inclusive_team_to_deliver_product_flawlessly_with_no_harm_to_the_environment_people_or_communities_in_which_we_live_with_100_quality_and_reliability_on_a_daily_basis." data-name="Operating as an inclusive team to deliver product flawlessly with no harm to the environment, people, or communities in which we live, with 100% quality and reliability on a daily basis." transform="translate(82 386)" fill="#63828f" fontSize="16" fontWeight="500" fontStyle="italic"><tspan x="0" y="15">Operating as an inclusive team to </tspan><tspan x="0" y="39">deliver product flawlessly with no harm </tspan><tspan x="0" y="63">to the environment, people, or </tspan><tspan x="0" y="87">communities in which we live, with 100% </tspan><tspan x="0" y="111">quality and reliability on a daily basis.</tspan></text>
                  <path id="Path_1192" data-name="Path 1192" d="M8.074-5.806,9,0-24.819,34.864h-7.395Z" transform="translate(383 542)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" opacity="0.8" />
                  <path id="Path_1193" data-name="Path 1193" d="M-3.926,6.194-3,12-24.819,34.864h-7.395Z" transform="translate(395 542)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" opacity="0.7" />
                  <path id="Path_1194" data-name="Path 1194" d="M-16.926,19.194-16,25l-8.819,9.864h-7.395Z" transform="translate(408 542)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" opacity="0.5" />
                  <path id="Path_1195" data-name="Path 1195" d="M-31.288,34.864l-.926-5.806L1.605-5.806H9Z" transform="translate(79 266)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" opacity="0.8" />
                  <path id="Path_1196" data-name="Path 1196" d="M-31.288,34.864l-.926-5.806L-10.395,6.194H-3Z" transform="translate(79 254)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" opacity="0.7" />
                  <path id="Path_1197" data-name="Path 1197" d="M-31.288,34.864l-.926-5.806,8.819-9.864H-16Z" transform="translate(79 241)" fill="#1b3b48" stroke="#15495e" strokeWidth="1" opacity="0.5" />
                </g>
              </motion.svg>

            }
          </div>

        </AnimatePresence>

        <div className="middle-circle">
          <svg viewBox="0 0 878 853" className="main-svg">
            <defs>
              <radialGradient id="radial-gradient" cx="133.23" cy="822.56" r="0.5" gradientTransform="matrix(488, 0, 0, -488, -64563, 401838)" gradientUnits="userSpaceOnUse">
                <stop offset="0" />
                <stop offset="1" stopColor="#e75113" stopOpacity="0.05" />
              </radialGradient>
              <radialGradient id="radial-gradient-2" cx="133.1" cy="822.59" r="0.5" gradientTransform="matrix(331, 0, 0, -330, -43604, 271883)" />
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <g id="bgimage">
                  <g id="Backgroung_image" data-name="Backgroung image">
                    <AnimatePresence>
                      {
                        showfifthobject && (
                          <motion.g variants={noAnimate}
                            initial="hidden"
                            animate="visible" data-name="Unit team circle">
                            <g id="Worldmap" className="cls-1">
                              <path id="Path_1133" data-name="Path 1133" className="cls-2" d="M645.64,561.49,627,543.33V509L594.2,443.47V411.19L569,392.53,535.7,400.6l-59-24.71-6.56-57.5,23.2-25.21h49.43l17.65,25.21,48.41,8.07,49.43-16.14" />
                              <path
                                id="Path_1134"
                                data-name="Path 1134"
                                className="cls-3"
                                d="M315.05,388.75l-37.82,36.31v26.23l16.64,32.27,38.83,8.07v83.22l18.16,41.36,22.7,7.06,3.53-37.83,32.78-26.22v-23.7l32.78-32.28,8.07-39.34L419,459.36l-26.23-40.85H337.25Z"
                              />
                              <path id="Path_1135" data-name="Path 1135" className="cls-4" d="M621.4,260.64l-18.62,14.75-66.73-14.75-33,6.21-25.6-9.7,15.9-31.81h35.69L552,209.82" />
                              <path id="Path_1136" data-name="Path 1136" className="cls-4" d="M367.1,203.61l18.63,13.58,46.55,10.09-5.82,20.95-22.89,9.31-26.38,42.28-38.41,24.45-59,10.47-2.32,22.89,14.74,17.07v26.77l-48.5-26.77-13.19-33" />
                            </g>
                            <motion.g initial={{
                              rotate: 0,
                              // x: -100
                            }}
                              animate={{
                                rotate: -360,
                                // x: 100
                              }}
                              transition={{
                                type: 'keyframes',
                                ease: 'linear',
                                repeat: Infinity,
                                repeatType: 'loop',
                                delay: 0,
                                duration: 50,

                              }} id="Unit">
                              <g id="Unit-2" className="cls-5">
                                <circle className="cls-6" cx="452" cy="427" r="244" />
                                <circle className="cls-7" cx="452" cy="427" r="241.5" />
                              </g>
                              <path
                                id="Ellipse_160"
                                data-name="Ellipse 160"
                                className="cls-8"
                                d="M450.5,184h2l-.1,12h-1.9Zm16,.52,2,.14-.88,12-1.89-.13Zm15.92,1.57.91.12h.1l.95.13h0l-1.66,11.89-1.89-.26,1.57-11.9Zm15.78,2.61.73.15h.15l.06,0,1,.21-2.45,11.75-1.86-.38Zm15.58,3.66h0l1.92.52-3.23,11.56-1.83-.5Zm15.3,4.68.1,0,.08,0h0l1.24.44.08,0h0l.35.12L527,209l-1.8-.62ZM544,202.73l.69.3h0l1.15.48-4.74,11-1.75-.74Zm14.53,6.68.82.41,0,0,.05,0,.09,0,0,0,.08,0,0,0,.08,0h0l.1.05h0l.08,0,0,0,.07,0,.06,0,.05,0,.07,0h0l.05,0L554.88,221l-1.7-.86,5.37-10.73ZM572.62,217l.28.17h0l.05,0,.06,0,0,0,.2.12h0l1.08.64-6.16,10.3-1.63-1L572.61,217Zm13.52,8.55h0l.07,0,.06,0h0l1,.65,0,0,0,0,.49.34L581,236.58l-1.57-1.08ZM599.08,235l.38.3,0,0,0,0,.06.05h0l.7.55,0,0,0,0,.07.05h0l.09.07h0l.1.07-7.46,9.4-1.49-1.17Zm12.28,10.25,0,0,0,0,0,0,.07.07,0,0,0,0,0,0,0,0,.07.07,0,0,.05.05,0,0,.05,0h0l.2.18h0l.47.42h0l.17.15,0,0h0l-8.06,8.89-1.42-1.26Zm11.58,11,.07.08,0,0,.05.05.08.09h0l1.15,1.19-8.62,8.34-1.33-1.36Zm10.83,11.78.28.32v0l.05.05.07.08h0l.07.09h0l.81.95-9.16,7.76-1.23-1.45,9.09-7.83Zm10,12.46.22.3h0l.06.08,0,.06h0l.51.68,0,.06,0,0,.28.38-9.65,7.14-1.13-1.53Zm9.18,13.1.2.31h0c.3.45.59.9.88,1.36L644,301.77l-1-1.6Zm8.3,13.68h0l.06.1h0l0,.1v0l.05.08,0,0,0,.06,0,0,.05.09,0,0,0,.06,0,0,0,.06,0,.05,0,.07,0,0,0,.07,0,0,0,.1h0l.06.1h0l.3.54-10.51,5.79-.92-1.66Zm7.37,14.2c.23.47.45.93.67,1.4l0,0,0,0,.15.33-10.87,5.08-.82-1.72,10.83-5.17Zm6.41,14.66.27.7h0c.16.38.31.77.46,1.16l-11.19,4.34-.7-1.77Zm5.41,15.05.09.28h0l0,.09,0,.1h0l.45,1.43-11.45,3.59-.58-1.81,11.43-3.68Zm4.39,15.39c.1.41.21.83.31,1.25v.09l.15.6-11.67,2.8-.45-1.84Zm3.35,15.64,0,.2h0v.16l.24,1.34v0l0,.1v.14l-11.82,2-.33-1.87,11.81-2.12Zm2.3,15.83.12,1.06v.12l0,.25v.13c0,.14,0,.28.05.43l-11.94,1.23-.2-1.89ZM691.75,414c0,.67.06,1.33.08,2l-12,.44-.08-1.9ZM680,429.76l12,.24v.25h0v.23h0v.24h0v1c0,.08,0,.16,0,.24l-12-.34Zm-.81,15.18,12,1v.12h0v.32l0,.25v.3l0,.13h0c0,.29,0,.58-.08.86L679,446.84ZM677.33,460l11.86,1.82,0,.2v.16h0c-.08.54-.17,1.07-.25,1.6L677,461.91ZM674.52,475l11.72,2.61-.3,1.34h0l0,.1h0l0,.11v0l0,.07v.16l0,.1h0l-11.69-2.71Zm-3.8,14.71,11.52,3.39-.39,1.31v0l0,.07v0l0,.05,0,.11v0l0,.07v0l0,.07v0l0,.08-11.48-3.49Zm-4.78,14.42,11.26,4.15c-.15.41-.3.82-.46,1.23v0l0,.06,0,.06v0l-.18.45-11.22-4.24Zm-5.73,14.07,11,4.9-.54,1.18v0l0,.06,0,.1h0l-.21.45-10.91-5Zm-6.66,13.66,10.6,5.62-.11.21v0l0,.07-.45.83v0l0,.07,0,.08v0l-.23.43-10.56-5.7ZM646,545l10.21,6.31h0l0,.06-.79,1.27h0l0,.07,0,0,0,.06,0,.08,0,0-.05.09h0L645,546.63Zm-8.41,12.66,9.76,7,0,0,0,.06,0,0,0,.05,0,0,0,.06,0,.07,0,0,0,.05,0,0c-.28.39-.55.78-.83,1.16l-9.71-7Zm-9.24,12.08,9.29,7.6-1.28,1.54-9.22-7.68Zm-10,11.44,8.76,8.2h0l-.07.08,0,0-.07.07,0,0,0,0-.05.06h0l-1.08,1.14-8.7-8.27ZM607.58,592l8.2,8.75-1.46,1.37-8.13-8.83Zm-11.43,10,7.61,9.27h0l-1.53,1.25h0l-7.54-9.34Zm-12.07,9.25,7,9.76-.75.53,0,0,0,0-.07,0,0,0-.06,0,0,0-.06,0,0,0-.08.06-.05,0,0,0-.34.23-6.9-9.81Zm-12.65,8.43,6.32,10.2-1.37.84,0,0-.06,0-.25.16-6.24-10.25Zm-13.18,7.58,5.63,10.6-1.77.93-5.54-10.64Zm-13.65,6.68,4.92,11-.63.28h0l-.07,0-.09,0h0l-1,.45-4.83-11Zm-14.06,5.76,4.17,11.25-.62.23-.06,0,0,0-.91.33h0l-.07,0-.15.06-4.09-11.29Zm-14.42,4.82,3.42,11.5h-.08l-.07,0h0l-1.76.51L514.3,645Zm-14.7,3.84,2.65,11.7-2,.43-2.54-11.73Zm-14.93,2.85,1.86,11.86-1.05.16h-.19l-.24,0h0l-.12,0h0l-.23,0h-.15l-1.76-11.87Zm-15.09,1.86,1.07,12-.74.07h-.2l-1,.08-1-12Zm-15.19.87.29,12H456l-1.49,0-.19-12Zm-17.12-.21,1.9.08-.49,12-1,0h-.2l-.8,0Zm-15.16-1.24,1.89.21-1.28,11.93-1-.11h-.41l-.58-.07Zm-15-2.24,1.87.34L408.7,662.4l-2-.35ZM394,647l1.84.45L393,659.13H393l-.08,0h0l-1.76-.43Zm-14.6-4.21,1.8.58-3.61,11.44-1.89-.61Zm-14.29-5.17,1.76.7-4.36,11.18-1.39-.55h0l-.08,0,0,0h0l-.29-.12Zm-13.92-6.11,1.72.81-5.1,10.86-.33-.15,0,0,0,0-1.4-.66Zm-13.48-7,1.66.93-5.81,10.5,0,0-.05,0,0,0-1.19-.66h0l-.1-.05-.06,0h0l-.26-.14Zm-13-7.9,1.6,1-6.49,10.09-1.2-.78h0l-.21-.13h0l-.06,0h0l-.15-.1Zm-12.44-8.74,1.52,1.14-7.14,9.64-.8-.59h0l-.08-.07h0l-.09-.06,0,0-.06,0,0,0-.08-.06h0l-.09-.07h0l-.29-.22Zm-11.83-9.55,1.44,1.24-7.76,9.15-.09-.08h0l-.06-.06,0,0h0l-.11-.1h0l-.55-.47h0l-.1-.08,0,0,0,0-.07-.06h0l-.38-.32ZM289.3,588l1.36,1.33L282.32,598l-.09-.09h0l-.08-.08h0l-.08-.08h0l-.07-.07,0,0-.05-.05,0,0-.07-.08,0,0-.06-.06,0,0-.8-.78Zm-10.47-11,1.27,1.42-8.9,8.05-.06-.06v0l-.05,0,0,0-.05-.06,0,0-.08-.09,0,0,0-.05,0,0,0,0-.07-.08,0,0-.06-.07,0,0-.74-.83ZM269.1,565.3l1.17,1.5-9.41,7.45v0l0,0-.09-.11v0l-.05-.06h0l-.61-.78h0l-.15-.19,0,0,0,0-.22-.28ZM260.17,553l1.07,1.57-9.88,6.81-.22-.31h0l-.2-.3v0l-.07-.09h0l-.06-.09,0,0,0-.07,0,0-.05-.07,0,0,0-.05,0,0,0,0-.31-.46Zm-8.1-12.86,1,1.63-10.31,6.14-.28-.47,0-.05,0,0,0-.07v0l-.12-.21h0c-.17-.29-.34-.57-.5-.86Zm-7.23-13.38.86,1.7L235,533.9l-.32-.64h0l0,0,0-.06,0,0-.5-1Zm-6.31-13.82.74,1.75-11,4.71-.19-.46h0l0-.1h0l-.05-.11h0l0-.1v0l0-.1h0l0-.11v0l0-.1h0l-.28-.69Zm-5.38-14.21.62,1.8-11.33,4-.52-1.51,0-.06v0l-.1-.3Zm-4.41-14.54.5,1.83-11.57,3.2-.28-1h0l-.06-.23v-.05l0-.05v-.1l0-.11h0l0-.11h0l-.06-.24Zm-3.43-14.8.37,1.87-11.75,2.41-.27-1.3h0c0-.22-.08-.44-.13-.66Zm-2.44-15,.25,1.89-11.89,1.62-.06-.42h0v-.08c-.06-.49-.13-1-.19-1.46v0Zm-1.43-15.13.12,1.9-12,.83,0-.3v-.18h0c0-.5-.06-1-.1-1.49ZM221,425l-12,1h0v-1.8l12-.72Zm-11.41-17,12,.84-.13,1.89-12-.74,0-.42v-.09c0-.29,0-.57,0-.86h0v-.17l0-.44Zm1.64-15.91,11.89,1.62-.25,1.89L211,394.08c0-.27.07-.54.1-.8v-.19h0c0-.33.1-.66.14-1Zm2.7-15.77,11.75,2.41-.37,1.87-11.78-2.32.05-.25h0l0-.1v0l0-.08,0-.1v0c.09-.46.18-.92.28-1.39Zm3.74-15.56,11.57,3.2-.5,1.84-11.59-3.11c.17-.64.34-1.29.52-1.93Zm4.78-15.26,11.32,4-.62,1.79-11.36-3.86c.08-.22.15-.43.22-.64v0l0-.08h0l.09-.26h0l.24-.7h0l.05-.14v-.05Zm5.78-14.92,11,4.71-.74,1.75-11.08-4.62c.1-.25.2-.49.31-.74h0l.1-.23v0l0-.06v0l.05-.1,0-.05,0-.05,0-.05,0-.05,0-.1h0l0-.11h0ZM235,316.1l10.7,5.44-.85,1.7-10.75-5.36.17-.33h0l0-.08,0-.06h0l.65-1.3Zm7.72-14L253,308.23l-1,1.64-10.37-6.06.11-.18h0l0-.06,0-.07h0l.43-.74,0,0,0,0,.34-.57Zm8.64-13.47,9.88,6.81L260.17,297l-9.94-6.73h0l.06-.09,0,0,0,0,0-.06v0l.14-.2,0,0,0-.06v0l.07-.09,0-.05,0,0,0-.06,0,0c.18-.28.37-.56.56-.83Zm9.5-12.86,9.41,7.44-1.17,1.5-9.47-7.37h0l.06-.08v0l.14-.18h0l.06-.09h0l.08-.1h0l.08-.1h0l.78-1Zm10.34-12.21,8.9,8.05L278.83,273l-9-8C270.31,264.54,270.75,264,271.2,263.55Zm11.12-11.5,8.35,8.62L289.31,262l-8.42-8.55.62-.61h0l.17-.17h0l.07-.08h0l.09-.08h0l.08-.08h0Zm11.85-10.75,7.77,9.15-1.45,1.24-7.84-9.09.38-.32h0l.07-.07,0,0,.08-.06,0,0,0,0,0,0,0,0Zm12.54-9.94,7.14,9.64-1.52,1.14-7.23-9.59.12-.09.07-.05h0l.78-.59h0l.07-.06,0,0,.05,0,.44-.32Zm13.16-9.09,6.49,10.09-1.6,1-6.57-10,.09-.06,0,0,.05,0,.05,0,.05,0,.07,0,0,0,.05,0,.05,0,0,0,.08-.06h0l.08-.05,0,0,.94-.6Zm13.73-8.2,5.81,10.5-1.66.92L331.86,215l.8-.45h0l.07,0h0l.13-.07,0,0,.05,0,0,0,.06,0,.08,0,0,0,.06,0,0,0,.08-.05h0l.1-.06h0l.1-.05Zm14.25-7.28,5.1,10.87-1.71.81-5.19-10.82,1.06-.5,0,0,0,0Zm14.7-6.31,4.37,11.18-1.77.7-4.46-11.14h0l.08,0h0l.21-.09h0l.1,0h0l.23-.09h0l.35-.14h0l.23-.09h0l.08,0,.05,0h0l.4-.16Zm15.09-5.31,3.61,11.44-1.81.58-3.7-11.41h0l1.9-.62Zm15.41-4.3,2.84,11.66L394,203l-2.93-11.64,1-.25h.1Zm15.66-3.27,2.06,11.82-1.88.34L406.74,188l.82-.15h.18l1-.17Zm15.84-2.22,1.27,11.93-1.89.21-1.37-11.92.17,0h.65l.12,0h.24l.25,0h.12l.25,0h.15Zm15.95-1.18.49,12-1.9.08-.58-12,.37,0h1.06Z"
                              />
                            </motion.g>
                          </motion.g>)
                      }
                    </AnimatePresence>



                    <AnimatePresence>
                      {
                        showfourthcircle && (
                          <motion.g variants={noAnimate}
                            initial="hidden"
                            animate="visible">

                            <g id="Coreteam_circle" data-name="Coreteam circle">
                              <g id="Ellipse_97" data-name="Ellipse 97" className="cls-9">
                                <ellipse className="cls-10" cx="451.5" cy="427" rx="165.5" ry="165" />
                                <ellipse className="cls-11" cx="451.5" cy="427" rx="163.5" ry="163" />
                              </g>
                              <motion.path
                                initial={{
                                  rotate: 0,
                                  // x: -100
                                }}
                                animate={{
                                  rotate: 360,
                                  // x: 100
                                }}
                                transition={{
                                  type: 'keyframes',
                                  ease: 'linear',
                                  repeat: Infinity,
                                  repeatType: 'loop',
                                  delay: 0,
                                  duration: 50,

                                }}
                                id="Path_1172"
                                data-name="Path 1172"
                                className="cls-12"
                                d="M452,268h2.2l-.8,59H452Zm17.17.92c.73.07,1.46.16,2.18.25l-7.1,58.57-1.38-.16Zm17,2.75,2.13.48h0l-13.41,57.46-1.34-.3,12.61-57.63Zm16.57,4.59.28.1h0l0,0h.05l1.17.4h.05l.06,0h0l.41.15-19.58,55.65-1.3-.45,18.8-55.92Zm16,6.35.18.09,0,0h0l.05,0h0l1.7.8-25.51,53.2-1.25-.59Zm15.19,8.06.94.57h0l.11.07h0l.1.05,0,0,.1.06h0l.1.06h0l.09.06h0l.1.06h0l.11.07h0l.12.07-31.12,50.13-1.18-.72Zm14.23,9.65,0,0,.06,0,0,0,.07,0,0,0,.07.05,0,0,.08.06,0,0,.09.06v0l.1.07h0l.1.08h0l.1.08h0l.87.68L513.5,348.14l-1.1-.84,35.7-47Zm13.11,11.12.13.12.06.06h0L562.8,313l-41.12,42.31-1-1,40.53-42.87Zm11.84,12.46c.32.38.65.76,1,1.15v0l.07.07,0,0,0,.06.06.07h0l.22.28L529,363.24l-.89-1.06Zm10.43,13.66.19.28,0,0,0,.07,0,.06,0,0,0,.07,0,.05,0,.06.05.06,0,.05,0,.06,0,.05,0,.09,0,0,.06.09h0l.06.09v0l.06.09,0,0,0,.06.05.07,0,0,.06.1h0l.15.23-49.2,32.54-.77-1.15,48.75-33.22Zm8.9,14.71c.11.2.22.4.32.6h0l0,.05h0v0l0,0h0l.36.68h0l0,0,0,0h0l.22.42L541,381.26l-.64-1.23Zm7.26,15.59c.27.68.54,1.36.8,2.05L545.38,391.1l-.5-1.28,54.76-22Zm5.52,16.28.31,1.15v.1h0c.08.29.16.57.23.86h0l-57,15.08-.36-1.33,56.83-15.87Zm3.71,16.79c0,.16.06.32.08.5v.05c.09.54.17,1.08.25,1.62l-58.34,8.8-.21-1.37,58.21-9.6ZM610.75,418v.17h0v.31h0c0,.06,0,.13,0,.2h0v.07h0v.06h0v.42h0v.05h0c0,.3,0,.59,0,.89l-58.95,2.47-.07-1.39Zm-58.88,14.2,58.92,3v.2h0v0c0,.66-.07,1.3-.11,2l-58.88-3.8ZM550.74,443,609,452.31c0,.13,0,.27-.07.4h0v.09h0c0,.33-.11.65-.16,1h0v0l-.12.66-58.13-10.12Zm-2.28,10.53,56.9,15.59c-.11.41-.23.83-.34,1.23v.16h0l0,.06h0v.06h0l0,.06h0l0,.07v.11h0l-.1.35L548.1,454.85Zm-3.41,10.22,54.87,21.68c-.27.68-.54,1.37-.82,2L544.54,465Zm-4.5,9.79L592.75,501c-.35.65-.69,1.3-1,1.94L539.9,474.75ZM535,482.8l48.91,33,0,0,0,.07h0l-.61.9h0l-.07.1v0l-.06.09,0,0,0,.07,0,0,0,.05-.06.09h0l-.19.27-48.46-33.66Zm-6.54,8.65,45.09,38.06-.18.21h0l-.18.2h0l-.08.1h0l-.08.1h0l-.08.1h0l-.08.1h0l-.08.1h0l-.63.72L527.56,492.5Zm-7.43,7.9L561.77,542l-.13.12-.06.06,0,0-1.39,1.31L520,500.3Zm-8.24,7,35.92,46.81h0l-.08.06,0,0-.07.05,0,0-.06.05,0,0-.05,0-.07.05,0,0-.06,0,0,0-.09.06h0l-.09.07h0l-.94.7-35.27-47.3Zm-8.93,6.12,30.67,50.4-1.41.85h0l-.09.05,0,0,0,0-.29.17-30-50.82Zm-9.51,5.1,25,53.43-1.22.56h0l0,0H518l0,0h0l0,0h0l-.53.24L493.09,518.2Zm-10,4,19.08,55.83-1,.33h-.12l0,0h0l-.95.31-18.3-56.09ZM474,524.58l12.89,57.58-2.15.47-12.09-57.75Zm-10.65,1.79L469.94,585l-2.19.23L462,526.51ZM452.6,527l.17,59H451l.23-59Zm-12.36-.68,1.37.15-6,58.69-2-.21-.21,0Zm-10.64-1.83,1.35.3-12.33,57.7-.09,0h0l-.86-.19h-.05l-1.1-.25Zm-10.35-3,1.3.44L402,578l-2.08-.71Zm-10-4.07,1.25.58L386,571.71l-2-.93Zm-9.49-5.15L401,513l-30.18,50.7-1.88-1.14Zm-8.91-6.15,1.1.84-35.46,47.15-.66-.5h0l-.11-.08h0l-1-.76Zm-8.21-7.09,1,.95-40.33,43.07h0l-1-.94h0l-.1-.09h0l-.08-.08,0,0-.06-.07,0,0-.05-.05-.07-.07h0l-.15-.14Zm-7.4-7.94.9,1.06-44.72,38.49,0,0-.05-.06,0,0,0-.06-.06-.07,0,0-.06-.08,0,0c-.32-.37-.65-.75-1-1.14l0,0,0,0L330,529h0Zm-6.5-8.67.78,1.15L321,517.07l-1.18-1.74,0-.05,0,0Zm-5.51-9.3.65,1.22L312,502.4c-.15-.28-.3-.55-.44-.83h0l0,0v0l0,0h0l0,0h0c-.17-.31-.34-.63-.5-1Zm-4.46-9.81.51,1.28-54.66,22.22c-.18-.43-.35-.87-.53-1.31v0l-.27-.69Zm-3.36-10.22.36,1.32L299.05,470.6h0l-.51-1.84-.08-.28Zm-2.24-10.55.22,1.37-58.17,9.88L295,452v-.16h0l0-.2Zm-1.09-10.78.08,1.39-58.9,3.56v-.06h0v-.16h0c0-.32,0-.64-.05-.95h0v-.11c0-.3-.05-.6-.06-.89Zm-58.82-14.44,58.89,3.52-.07,1.39-58.94-2.71c0-.64.06-1.28.1-1.92h0v-.08h0Zm1.94-17.08,58.18,9.84-.22,1.37-58.3-9c0-.18.05-.36.08-.54h0v-.06h0v-.06h0v-.24l.05-.34h0v-.06h0v-.06h0c0-.16.05-.32.08-.48h0v-.28ZM299,383.51l56.76,16.1-.37,1.33-57-15.31.59-2.12Zm5.59-16.26,54.67,22.19-.51,1.28-55-21.42c.27-.68.54-1.36.82-2Zm7.32-15.55,51.94,28-.65,1.22L310.9,353.64l.8-1.52h0l0-.05h0l.19-.35Zm9-14.67,48.62,33.43-.78,1.14-49.08-32.75,0-.05v0l0-.07.06-.08v0l.69-1h0l.07-.11h0Zm10.49-13.63,44.74,38.47-.9,1.05L330,325.08ZM343.27,311l40.35,43-1,1L341.67,312.5l.39-.37,0,0,.08-.07,0,0,.06-.06,0,0,0-.05.09-.08h0c.28-.27.55-.53.84-.79Zm13.15-11.07,35.5,47.13-1.1.84-36.14-46.63.53-.42h0l.08-.06,0,0,.07-.05.07-.05,0,0,.65-.49h0l.08-.06.06,0,0,0,.07-.06h0Zm14.27-9.59L400.91,341l-1.19.72-30.91-50.26Zm15.23-8L410.47,336l-1.26.58-25.29-53.3,1.51-.7Zm16-6.29,18.57,56-1.3.44-19.36-55.73,2.09-.71Zm16.58-4.51,12.37,57.68-1.35.3L416.36,272h.07C417.12,271.84,417.81,271.68,418.5,271.54Zm17-2.69,6.06,58.69-1.38.15-6.86-58.6.14,0h.06Z"
                              />
                              <motion.path
                                initial={{
                                  rotate: 0,
                                  // x: -100
                                }}
                                animate={{
                                  rotate: 360,
                                  // x: 100
                                }}
                                transition={{
                                  type: 'keyframes',
                                  ease: 'linear',
                                  repeat: Infinity,
                                  repeatType: 'loop',
                                  delay: 0,
                                  duration: 50,

                                }}
                                id="Ellipse_161"
                                data-name="Ellipse 161"
                                className="cls-13"
                                d="M461.47,268.79l.48,0h.21l.5,0h.23l.57.06-1.11,9.94-1.87-.2Zm16.82,2.39,2,.41-2.12,9.77L476.3,281Zm16.49,3,1.76.56h.15l-3.09,9.51-1.79-.57,3-9.54Zm16,5.52.61.26h.07l0,0h.11l0,0h.12l0,0h.08l0,0H512l0,0h0l0,0h0l0,0h0l.05,0h0l.44.19-4,9.15-1.72-.75Zm15.38,8h0l1,.57h0l0,0,0,0h0l.05,0h0l.41.23h0l0,0h0l0,0h0L523,297.34l-1.64-.91Zm13.59,8.43c.55.37,1.1.76,1.64,1.14l-5.79,8.16-1.54-1.08Zm14.68,10.74,1.41,1.22h0l0,0,0,0h0l0,0h0l-6.58,7.53L548,314.46l6.49-7.61Zm11.64,11,0,0h0l0,0h0l0,0h0l0,0h0l1.22,1.29-7.3,6.83-1.29-1.36Zm10.47,12.08.23.29,0,0,0,0,0,0h0l.92,1.2-7.95,6.06-1.15-1.48ZM585.76,343c.36.56.71,1.12,1.06,1.7l-8.53,5.23-1-1.59Zm8.84,17.94h0v0l.87,1.77-9,4.34-.83-1.68ZM600,376.59c.24.63.47,1.26.69,1.88l-9.4,3.4-.65-1.76Zm4.85,16.24c.08.28.15.57.22.85h0l0,.05h0v.13h0c.08.3.15.6.23.9l-9.7,2.42-.47-1.81Zm3.27,16.66,0,.2h0v.1c.08.55.17,1.11.25,1.66l-9.9,1.42-.28-1.85,9.88-1.55Zm-8.26,17.44,10,.46-.09,1.82,0,.18-10-.59Zm-1.44,15.91,9.89,1.47,0,.12h0v.2h0c-.08.55-.16,1.1-.25,1.65l-9.88-1.59Zm-1.95,15.68,9.69,2.47c0,.19-.09.37-.14.55h0v.06l0,0h0l-.33,1.27L596,460.33ZM592,473.82l9.39,3.45-.17.45h0l0,0v.1l0,0h0l0,.05h0c-.09.24-.18.49-.28.74h0v0l-.15.38-9.34-3.56Zm-5.87,14.78,9,4.38c-.1.2-.2.4-.29.6h0l0,0h0l0,0v.05l0,0v0l0,0v0l0,0h0l-.3.61-.14.28-8.93-4.5Zm-7.24,14.11,8.5,5.27-.53.84v.05l0,0h0l-.49.77-8.43-5.38ZM569.38,517l7.92,6.1-.27.35h0l0,0,0,0h0l0,0h0l-.86,1.09-7.85-6.2Zm-9.73,11.4,7.26,6.87c-.2.21-.39.42-.6.63h0l0,0h0l0,0,0,0,0,0,0,0h0l0,0v0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l-.08.08h0l-.21.22-7.18-7ZM548.82,538.8l6.54,7.56-1,.89h0l0,0,0,0h0l-.42.36L547.39,540ZM536,549l5.75,8.18-.08.06h0l0,0h0l0,0,0,0h0l0,0h0l0,0h0l-.05,0h0l-1.28.89-5.65-8.26Zm-13.68,8,4.9,8.72-.45.25,0,0h0l-1.26.7-4.79-8.78Zm-14.42,7.67,4,9.17-.26.11h0l0,0h0l-1.5.63-3.87-9.21Zm-15,4.28,3,9.52-1.91.6-2.92-9.56Zm-16.48,3.83,2.06,9.79-2,.4-1.94-9.81Zm-15.8,1.35,1.07,9.94-2,.2-.95-9.95Zm-17.83,1,1.86.19-.91,10-1.49-.14h-.1l-.4,0ZM426,572.87l1.84.37-1.92,9.82h-.43l-1.52-.31Zm-15.49-3.79,1.79.56-2.9,9.57-.2-.06h-.05l0,0h0l-.84-.25,0,0h0l-.72-.22Zm-14-4.24,1.72.73-3.85,9.23-.86-.36h-.06l0,0h0l-.72-.3h0l0,0,0,0h0l-.05,0ZM382,557.21l1.64.9-4.76,8.79-1.25-.69-.5-.27Zm-14.7-8,1.55,1.07-5.63,8.26-.1-.07h0l-.05,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l-.05,0h0l-1.18-.82Zm-12.83-10.19,1.42,1.21-6.42,7.66-.63-.53,0,0,0,0-.85-.73Zm-10.86-10.34,1.3,1.35-7.16,7-.55-.57h0l0,0h0l0,0h0l0,0h0l0,0v0l0,0,0,0,0,0,0,0,0,0,0,0h0l-.51-.54Zm-9.76-13.37,1.16,1.47L327.2,523c-.41-.52-.83-1-1.23-1.57Zm-9.57-13.3,1,1.59-8.42,5.4-1.07-1.69ZM317,489l.83,1.68-8.92,4.52-.05-.11h0l0-.05h0l0,0v0l0,0v0l0,0h0l-.42-.85h0l0,0h0l0,0v-.05l0,0v0l0,0v0l-.17-.33Zm-6.91-15.76.66,1.75-9.33,3.59h0v0c-.1-.27-.21-.54-.31-.82h0l0-.05h0v-.09l0,0h0l0,0h0l-.27-.73Zm-3.47-15.29.48,1.81-9.65,2.62-.51-1.93Zm-2.47-15.58.1,1.87-10,.62c0-.67-.08-1.33-.11-2Zm-11-16.5,10,.51-.08,1.87-10-.39h0v-.18c0-.6.05-1.2.08-1.81Zm1.62-16.92,9.88,1.52-.27,1.85-9.9-1.39c0-.36.1-.73.16-1.09h0v-.05h0v-.26h0C294.77,409.28,294.8,409.1,294.83,408.91Zm2.23-16.66,9.68,2.52-.46,1.81-9.71-2.39h0V394l0,0h0l0-.05h0l.42-1.68ZM301.87,375l9.37,3.49-.64,1.76-9.42-3.37Zm7.34-15.68,9,4.43-.81,1.68-9-4.31.23-.47c.16-.33.32-.67.49-1h0v0l0,0v0Zm7.8-16,8.47,5.31-1,1.59L316,345.05c.2-.32.39-.64.59-.95h0l0-.05v0l0,0v0l0,0,0,0h0l0,0h0l.32-.5Zm9.17-13.1,7.89,6.14-1.14,1.48-8-6,.3-.39h0l0,0h0l0,0,0,0,0,0,0,0v0l.2-.26h0l0,0,0,0,0,0v0l0,0h0l0,0,0,0,0,0,0,0,0,0v0l0,0,0,0,0,0,0,0,0,0v0l0,0v0l0,0h0l.17-.23Zm10.44-12.12,7.24,6.9-1.29,1.36-7.32-6.81.37-.39h0l0,0v0l0,0v0l0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0h0l0,0v0l0,0h0l0,0h0l0,0h0l0,0h0l0,0,.44-.47Zm13.61-12,6.51,7.59L355.32,315l-6.6-7.51,0,0h0l0,0,0,0h0l1.39-1.21Zm12.65-10.79,5.72,8.21-1.53,1.08-5.82-8.14.56-.4h0l.05,0h0l.05,0h0l0,0h0l0,0h0l.05,0h0l.05,0h0l.05,0h0l0,0h0l.05,0h0l.1-.07h0l.1-.07h0l.06,0,.35-.24Zm15.93-8.51,3.95,9.19-1.72.75L377,287.64h0l0,0h0l1.6-.7Zm16-7.56,3,9.54-1.79.57-3.12-9.5Zm15.48-5,3,9.79-1.83.39-3.14-9.77.52-.11H409l1.09-.23h.11Zm16.81-3.43,1,9.94-1.86.2-1.15-9.93h.13Zm18-1.84,0,10-1.87,0-.15-10h2Z"
                              />
                            </g>
                          </motion.g>)
                      }

                    </AnimatePresence>

                    <AnimatePresence>
                      {
                        combinecircle &&
                        (
                          <motion.g variants={noAnimate}
                            initial={{
                              rotate: 0,

                            }}
                            animate={{
                              rotate: 360,

                            }}
                            transition={{
                              type: 'tween',
                              ease: 'linear',
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: 0,
                              duration: 40,

                            }} id="Outer_circle" data-name="Outer circle">
                            <path id="Path_1128" data-name="Path 1128" className="cls-14" d="M160.19,289.86s38.38-101.65,156.45-155.71c.37-.18,8.49,15.31,8.49,15.31s-100.36,42.9-148.33,148C176.8,297.7,160.19,289.86,160.19,289.86Z" />
                            <path id="Path_1129" data-name="Path 1129" className="cls-14" d="M536.19,721.37s108.25-22.28,180.53-126.54c.24-.33-13.61-11-13.61-11S643.39,675.2,531.55,704.17C531.28,704.13,536.19,721.37,536.19,721.37Z" />
                            <g id="Path_1198" data-name="Path 1198" className="cls-15">
                              <path className="cls-16" d="M451.61,102.35c179.09,0,324.27,142.2,324.27,317.61S630.7,737.56,451.61,737.56,127.35,595.37,127.35,420,272.53,102.35,451.61,102.35Z" />
                              <path
                                className="cls-17"
                                d="M451.61,106.35a329.15,329.15,0,0,0-64.56,6.37,321.46,321.46,0,0,0-161.93,85.51A316.85,316.85,0,0,0,186,244.65a311.42,311.42,0,0,0-29.52,53.26,308.14,308.14,0,0,0,0,244.09A311.42,311.42,0,0,0,186,595.26a316.85,316.85,0,0,0,39.1,46.42,321.78,321.78,0,0,0,161.93,85.51,330.39,330.39,0,0,0,129.13,0A321.48,321.48,0,0,0,678.1,641.68a317.54,317.54,0,0,0,39.11-46.42A311.37,311.37,0,0,0,746.72,542a308.14,308.14,0,0,0,0-244.09,311.37,311.37,0,0,0-29.51-53.26,317.54,317.54,0,0,0-39.11-46.42,321.81,321.81,0,0,0-161.92-85.51,329.33,329.33,0,0,0-64.57-6.37m0-4c179.09,0,324.27,142.19,324.27,317.6S630.7,737.56,451.61,737.56,127.35,595.37,127.35,420,272.52,102.35,451.61,102.35Z"
                              />
                            </g>
                          </motion.g>)}
                    </AnimatePresence>


                    <AnimatePresence>
                      {
                        outercircle && (
                          <motion.g variants={noAnimate}
                            initial={{
                              rotate: 0,

                            }}
                            animate={{
                              rotate: 360,

                            }}
                            transition={{
                              type: 'tween',
                              ease: 'linear',
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: 0,
                              duration: 40,

                            }} id="Corporate_circle" data-name="Corporate circle">
                            <g id="Ellipse_116" data-name="Ellipse 116" className="cls-18">
                              <circle className="cls-16" cx="451.5" cy="426.5" r="426.5" />
                              <circle className="cls-19" cx="451.5" cy="426.5" r="425.5" />
                            </g>
                            <path
                              id="Path_1171"
                              data-name="Path 1171"
                              className="cls-20"
                              d="M450.5,5h3l-.2,28H450.5Zm12,.17h0l.75,0h1.13l1.12.07-1,28-2.81-.08Zm12,.5,1.48.08h.29l1.23.07-1.77,28-2.8-.17Zm12,.84.29,0H487l2,.18h.11l.27,0-2.55,27.9-2.79-.25ZM498.4,7.69l1.59.18h.74l.65.08L498,35.83l-2.77-.32L498.4,7.68Zm11.9,1.52.44.06h.14l1.45.21h0l.11,0,.8.12-4.13,27.69-2.77-.4L510.3,9.21Zm11.86,1.85.22,0,1.6.28.12,0h0l.14,0h0l.81.15-4.92,27.56-2.76-.48Zm11.8,2.2,1.1.22h0l.15,0h0l.14,0h0l.17,0h0l.12,0h.07l.11,0h0l.15,0h0l.73.16-5.71,27.41-2.75-.56Zm11.73,2.53,1.73.4h0l.1,0,.12,0h0l.9.21-6.49,27.24-2.73-.64,6.3-27.28Zm11.65,2.87.71.18.1,0,.07,0,.12,0h0l.14,0h0l1.72.45L553,46.47l-2.7-.72Zm11.57,3.2,2.87.85-8,26.82-2.69-.8Zm11.46,3.53.89.28,0,0,.12,0,.06,0,.11,0,.06,0,.12,0,0,0,1.41.46-8.8,26.58L571.76,52Zm11.37,3.85.7.25h0l.13.05,0,0,.12,0,.05,0,.12,0,0,0,.13,0,.06,0,.14,0,.07,0,.09,0,.08,0,.08,0,.09,0,.07,0,.1,0,.05,0,.12,0h0l.5.18L585,56.57l-2.64-1ZM603,33.43l.11,0h0l.13.05,0,0,.12,0,0,0,.11,0,.05,0,.11,0h0l.22.09.07,0,.09,0,.07,0,.09,0,.07,0,.09,0,.08,0,.08,0,.09,0,.07,0,.14.06.06,0,.12.05.05,0,.12,0,0,0,.12,0,0,0,.15,0h0l.17.07-10.31,26-2.61-1Zm11.12,4.5,2.76,1.17L605.81,64.83l-2.58-1.1Zm11,4.82.59.27,0,0,.09,0,.13.06h0l1.86.85h0L616,69.4l-2.54-1.17ZM636,47.88l1.73.86h0l.1,0,.14.07h0l.33.16,0,0,.11,0,.08,0,0,0,.07,0L626.12,74.26,623.61,73,636,47.88Zm10.7,5.44,1.49.79h0l.65.35h0l.16.08h0l.32.17L636.07,79.4l-2.47-1.31Zm10.53,5.74.88.5.07,0,.06,0,1.6.91L645.86,84.84l-2.43-1.39,13.75-24.39Zm10.37,6c.85.52,1.71,1,2.56,1.56L655.5,90.55l-2.39-1.46Zm10.19,6.33.62.4.08,0,0,0,1.77,1.14L665,96.53,662.62,95Zm10,6.62.3.2,0,0,.08.06.08,0,0,0,1.8,1.24.13.09-15.94,23L672,101.19Zm9.81,6.9L700,86.72l-16.59,22.56-2.26-1.65L697.56,85Zm9.62,7.18L709.55,94,692.33,116l-2.22-1.71Zm9.41,7.45,2.32,1.9-17.85,21.58-2.16-1.78Zm9.19,7.71c.76.65,1.51,1.31,2.26,2L709.6,130.33l-2.11-1.83Zm9,8,1.1,1h0l.1.09,1,.92-19,20.54-2.06-1.9Zm8.74,8.22,0,0,.1.1,0,0,.11.11,0,0,.13.12h0l.4.38,0,0,.1.1,0,0,.09.08.05.05.07.07.05,0,.07.06.13.13,0,0,.09.09,0,0,.09.09,0,0,.1.1h0l.35.34-19.61,20-2-2,19.47-20.12ZM752,132l.25.25,0,0,.06.06,1.4,1.45h0l.1.1,0,0,.21.22-20.16,19.43-1.95-2Zm8.26,8.7.7.76.06.05.05.06.07.08,0,.05.08.08,0,0,.09.1,0,0,.1.11v0l.12.13.06.06,0,.05.1.11h0l.43.47-20.71,18.85-1.89-2.06Zm8,8.93.73.85,0,0,.07.08.07.08,0,.05.08.09,0,0,.09.1v0l.3.34h0l.07.09.05,0,0,.06.08.09,0,0,.24.28L749,170.1,747.18,168Zm7.76,9.16,1.9,2.32L756.2,178.7l-1.77-2.17Zm7.5,9.37.31.4h0l.07.09,0,.06,0,.06.07.09,0,.05.09.11,0,0,.22.29,0,0,.09.11,0,.06.06.07.05.08,0,0,.62.81-22.23,17-1.72-2.22Zm7.22,9.57.39.53,0,.06,0,.06.06.09,0,.05.07.1,0,0,.08.1,0,0,.2.28,0,.08,0,.06.07.09,0,0,.08.12h0l.51.7L769.82,196.5l-1.65-2.27,22.59-16.54Zm7,9.79.63.92v0l.08.11,0,.06,0,.06.89,1.3-23.16,15.73-1.58-2.31Zm6.67,10L806,200,782.41,215l-1.51-2.35,23.49-15.24Zm6.38,10.16c.36.58.71,1.16,1.06,1.75l0,0,.06.1.05.08v0l.36.59-24,14.39-1.45-2.4Zm6.1,10.34.18.32h0l.08.14,0,0,.06.12,0,0,.07.12,0,0,.08.15v0l.08.13,0,.06.06.1,0,.05.06.1,0,0,.07.13,0,0c.18.32.36.65.55,1l-24.42,13.7-1.38-2.43Zm5.8,10.5.19.37,0,.07,0,.07.69,1.3,0,.05.05.09,0,.1,0,0,.3.57-24.8,13L798,241.63l24.71-13.18Zm5.5,10.67.9,1.84,0,0,.06.12,0,.05.05.1,0,.06,0,.09.16.34h0l0,.05-25.16,12.28-1.23-2.51Zm5.19,10.82c.42.91.83,1.82,1.24,2.73l-25.5,11.56-1.16-2.55Zm4.87,11c.4.91.79,1.84,1.17,2.76l-25.82,10.82-1.09-2.58ZM842.79,272l.48,1.22v0l0,.12,0,.07,0,.07.27.69v0l0,.11,0,.08,0,.06.13.33-26.12,10.08-1-2.61ZM847,283.22l.09.23,0,.11,0,.05.05.13v0l.81,2.29-26.4,9.33-.94-2.64ZM851,294.57l0,.16,0,0,0,.1,0,.1v0c.22.65.43,1.31.64,2v0l0,.1,0,.08,0,.07,0,.14v0L825.21,306l-.86-2.66ZM854.54,306c.15.5.3,1,.44,1.5v0l0,.12.05.15h0c.1.36.21.72.31,1.08l-26.89,7.8L827.7,314l26.84-8Zm3.26,11.54c.06.24.12.48.19.71v0l0,.1.54,2.06-27.1,7-.71-2.71Zm2.92,11.64.21.9v0l0,.1,0,.1v0c.14.59.27,1.17.4,1.75l-27.3,6.25-.63-2.73Zm2.6,11.72.27,1.34,0,.12v0c.1.48.2,1,.29,1.45l-27.46,5.46-.56-2.75Zm2.25,11.78c.18,1,.35,2,.51,3l-27.6,4.67-.48-2.76Zm1.92,11.85.21,1.47v0l0,.14v.12c.06.4.12.82.17,1.22l-27.73,3.88-.4-2.77Zm1.58,11.89c0,.31.07.62.11.93h0l0,.17v.25l.18,1.63-27.82,3.1-.32-2.78Zm1.24,11.94.09,1V390l.12,1.4-27.9,2.3-.24-2.79,27.88-2.5Zm.9,12,0,.54V401l.06,1.1v.49c0,.25,0,.49,0,.74l-28,1.51-.16-2.8Zm.56,12,.06,1.76v.54c0,.22,0,.48,0,.7l-28,.73-.09-2.81,28-.92Zm.23,12v.54h0v1.63H844v-2ZM843.9,435.7l28,.64c0,.84,0,1.68-.07,2.53v.47l-28-.84Zm-.41,11.2,28,1.43c-.05,1-.1,2-.16,3l-28-1.63Zm-.73,11.19,27.91,2.21c0,.2,0,.42,0,.61v.15c-.06.75-.12,1.49-.19,2.24l-27.9-2.41Zm-1,11.16,27.84,3,0,.18v.16c-.07.66-.15,1.3-.22,2v.14l-.06.54L841.41,472Zm-1.36,11.12,27.75,3.8c-.09.62-.17,1.23-.26,1.85h0l0,.17v0l0,.16v0c0,.25-.07.49-.1.74l-27.72-4Zm-1.67,11.07L866.3,496h0l0,.15v0l-.09.54v0l0,.15v0l0,.16v0l0,.17h0c-.05.31-.1.61-.16.91v0l0,.13v.16l0,.1v0l0,.28L838.2,494.2Zm-2,11,27.48,5.37c-.19,1-.39,2-.59,2.94l-27.44-5.56Zm-2.3,11,27.31,6.15,0,.2L861,522.5l-27.27-6.35Zm-2.62,10.89,27.12,6.93,0,.07,0,.1v0c-.18.71-.37,1.42-.55,2.14l-.15.56L831.05,527Zm-2.93,10.8,26.91,7.71c-.08.31-.17.61-.26.9h0l0,.18h0l-.05.17,0,0,0,.11,0,.09,0,.08,0,.1,0,.06,0,.11v.05l0,.12v0l-.16.56v0l0,.11v.06l0,.05-26.86-7.91Zm-3.24,10.72,26.68,8.48c-.3,1-.6,1.91-.91,2.86l-26.63-8.68ZM822,556.45l26.43,9.24-.3.88-.7,1.95-26.36-9.43ZM818.2,567l26.15,10-.13.35,0,.08,0,.07,0,.14h0l-.06.14h0l0,.14v0l0,.13,0,.06,0,.1-.61,1.56L817.2,569.58Zm-4.15,10.4,25.86,10.75-.1.23v0l0,.11-.72,1.71h0l-.06.15,0,0-.05.12,0,.06,0,.08-.1.25L813,580Zm-4.44,10.28,25.54,11.48,0,.09,0,0,0,.1,0,.06,0,.09,0,.08,0,.07,0,.12,0,0-.08.16v0l-.07.14,0,0,0,.11,0,.06,0,.1,0,.07,0,.09,0,.08,0,0-.51,1.13L808.45,590.2Zm-4.74,10.15L830.07,610l-.35.72c-.32.66-.64,1.32-1,2l-25.11-12.38Zm-5,10,24.84,12.92-1.29,2.49-.09.17-24.75-13.1Zm-5.31,9.86L819,631.29l0,0h0c-.48.86-1,1.73-1.45,2.58l-24.36-13.8Zm-5.59,9.71L813,641.68l-.38.64h0l-.08.15,0,.08,0,.06-.05.09,0,.06-.05.08,0,.08,0,.07-.05.09,0,0-.67,1.12-24-14.49Zm-5.86,9.55,23.65,15-1.62,2.53-23.54-15.16ZM777,646.29,800.16,662l-.14.2,0,0-.07.11,0,0-1.39,2.05,0,0v0l-23.1-15.83Zm-6.4,9.2,22.76,16.31-1.76,2.43-22.64-16.47Zm-6.66,9,22.28,17-.68.89-1.14,1.49-22.16-17.11ZM757,673.33l21.8,17.57-.47.59h0l-.11.13v0l-.1.12,0,0-.23.28h0l-.94,1.16L755.22,675.5ZM749.82,682l21.29,18.19-.31.36,0,.06,0,0-.1.12h0l-.73.85h0l-.1.12,0,0-.09.09,0,.05,0,.06-.43.5L748,684.07Zm-7.4,8.42,20.77,18.78-.87,1,0,0-.09.1-.1.1-.05,0-.08.09,0,0-.08.09,0,0-.08.08,0,.06-.06.06-.49.54-20.63-18.93Zm-7.63,8.2L755,717.93l-.51.53,0,0-.08.08,0,0-.09.09,0,0-1.29,1.34-20.09-19.5Zm-7.87,8,19.67,19.93h0c-.7.71-1.42,1.4-2.13,2.1l-19.53-20.07Zm-8.09,7.76,19.1,20.48,0,0-.09.08,0,0c-.68.64-1.37,1.27-2.06,1.9l-19-20.61Zm-8.3,7.53,18.52,21-2.26,2-18.36-21.13ZM702,729.13l17.91,21.52-.34.29h0l-.1.08-.08.07,0,0-.28.23,0,0-.09.08-.07,0-.06.05-.09.07h0l-1.1.91-17.76-21.65Zm-8.71,7,17.29,22L708.23,760,691.1,737.9ZM684.4,743l16.66,22.5-2.42,1.78-16.5-22.62Zm-9.1,6.54,16,23-2.46,1.7L673,751.11ZM666,755.79l15.36,23.41,0,0-.09.06,0,0-.12.08h0l-.45.3,0,0-.1.07-.07,0-.07,0-.08.06,0,0-.1.06h0l-.37.24,0,0-.1.06-.05,0-.08.05-.09.07,0,0-.46.3-15.19-23.52Zm-9.46,6,14.69,23.84-.22.13-.1.06h0l-.94.58h0l-.15.09,0,0-.11.06,0,0-.09,0-.07,0-.05,0-.17.1-.06,0-.07,0L669,787l0,0-.13.08h0l-.16.1-14.51-24Zm-9.62,5.74,14,24.24-2.6,1.5-13.83-24.35ZM637.16,773l13.3,24.64-.39.21-.08,0,0,0-.11.06-.05,0-.11.06,0,0-.11.06,0,0-.11.06-.09,0-.1.06-.09,0-.05,0-.1.05,0,0-.11,0,0,0-.11.06,0,0-.1.05-.65.34L634.7,774.32Zm-9.93,5.18,12.6,25-.15.07-.13.07h0l-2.4,1.2-12.41-25.1Zm-10.07,4.89L629,808.43l-.06,0-.08,0-.08,0-.08,0-.07,0-.11,0,0,0-.15.07h0l-2,.94-11.69-25.44ZM607,787.67l11.15,25.69-1.19.51-.1,0,0,0-.12.06h0l-1.16.5h0l-.09,0-11-25.77ZM596.62,792,607,818c-.93.37-1.85.74-2.79,1.1L594,793Zm-10.46,4,9.66,26.28-1.76.64,0,0-.11,0-.09,0-.07,0-.1,0,0,0-.11,0h-.05l-.11.05h0l-.28.1L583.54,797Zm-10.56,3.71,8.9,26.55-2.85.94L573,800.59Zm-10.67,3.4,8.13,26.79-.71.22h0l-.16,0h0l-.13,0,0,0-.08,0-.38.11h0l-.14,0h0l-.14,0h0l-.14,0h0l-.61.18h0l-.14,0h0l0,0-7.94-26.86Zm-10.76,3.1,7.36,27-1.62.44h0l-.13,0-.08,0-.08,0-.11,0h0l-.81.22-7.17-27.07ZM543.33,809l6.58,27.22-2.92.69-6.38-27.26Zm-10.92,2.48,5.8,27.39-1.83.38h0l-.16,0h0l-.91.19L529.67,812Zm-11,2.16,5,27.55h0l-.35.06h0l-.16,0h0l-.12,0h-.07l-.09,0-.1,0h-.06l-.13,0h0l-1.8.32-4.81-27.58Zm-11,1.85,4.23,27.68h-.08l-2.45.36h0l-.14,0h-.16l-.11,0h0l-4-27.71ZM499.27,817l3.44,27.79-.55.06H502l-.14,0h0l-2.14.25-3.23-27.81Zm-11.13,1.21,2.64,27.88-.73.07h-.31l-1.94.18-2.45-27.89Zm-11.17.9,1.85,27.94-3,.19-1.66-28Zm-11.2.59,1.06,28-3,.1-.87-28Zm-11.21.27.28,28h-.59l-2.42,0-.08-28Zm-14-.1,2.8.06-.5,28-1.87,0h-1.13Zm-11.21-.44,2.8.14-1.29,28-.45,0h-.13l-1.28-.06h-.16l-1-.05Zm-11.19-.75,2.8.22-2.07,27.92-1.48-.11h-1l-.54,0ZM407,817.63l2.78.3-2.86,27.85-1.67-.18h-.16l-.13,0h-.2l-.16,0h0l-.5-.06h-.16Zm-11.12-1.39,2.78.38L395,844.38l-2.55-.34L392,844Zm-11.07-1.7,2.76.46-4.44,27.64-1-.16h0l-.11,0h-.16l-.13,0h0l-1.46-.24h0Zm-11-2,2.75.53-5.23,27.51-1.71-.33h0l-.11,0-1.08-.21Zm-10.95-2.33,2.74.61-6,27.35-2.93-.66Zm-10.88-2.64,2.72.69-6.8,27.16-2.91-.74Zm-10.8-2.95,2.69.77-7.57,27c-1-.26-1.92-.54-2.88-.82h0Zm-10.71-3.26,2.67.84-8.34,26.73-2.86-.9Zm-10.61-3.56,2.64.91-9.11,26.48-.69-.24h-.05l-.08,0-1.49-.52-.52-.18Zm-10.51-3.87,2.62,1-9.87,26.21-1.31-.5h0l-.13,0-.06,0-.08,0-.68-.26h0l-.15-.06,0,0-.1,0-.23-.09Zm-10.39-4.17,2.59,1.07L290.9,816.73l-.45-.18h0l-.11,0-.06,0-.1,0-.07,0-.08,0-.08,0-.09,0,0,0-.2-.08-.06,0-.1,0-.07,0-.09,0-.07,0-.08,0-.08,0-.08,0-.12-.05,0,0-.69-.28Zm-10.27-4.46,2.55,1.14L279.86,812l0,0h0l-2.67-1.2Zm-10.14-4.76,2.52,1.21L269,807l-1.42-.68-.09-.05,0,0-.14-.07h0l-1-.49Zm-10-5,2.49,1.29-12.8,24.91-2.66-1.38Zm-9.85-5.33,2.45,1.36-13.5,24.54L245.68,795h0l-.09-.05-.11-.06h0l-.49-.28Zm-9.7-5.6,2.41,1.42-14.19,24.14,0,0-.06,0-1.23-.72-.12-.07h0l-1.12-.67Zm-9.54-5.89,2.37,1.5-14.87,23.73-.6-.38,0,0-.05,0-.5-.31h0l-.12-.08,0,0-.09-.06-.13-.08h0l-1-.6Zm-9.36-6.15,2.32,1.56-15.54,23.29h0l-.11-.07,0,0-.13-.09-.09-.06-.06,0-.1-.07,0,0-.12-.07v0l-1.79-1.2Zm-9.18-6.41,2.28,1.63L207,770.57h0l-1.21-.86h0l-.13-.09-.14-.1h0l-.95-.68Zm-9-6.68,2.23,1.7-16.83,22.37h0c-.8-.6-1.6-1.2-2.39-1.81Zm-8.81-6.92,2.19,1.75-17.47,21.89-.23-.19h0l-.1-.08,0,0-.09-.07,0,0-.09-.07,0,0-.32-.26,0,0-.1-.07,0,0-.09-.08,0,0-.09-.07,0,0-.32-.25,0,0-.07-.06-.07-.05-.06,0-.09-.07,0,0-.27-.22Zm-8.61-7.18,2.14,1.82-18.08,21.38-1-.85h0l-.12-.1,0-.05-.07-.06-.08-.06,0,0-.93-.79Zm-8.4-7.41,2.08,1.87-18.68,20.86-.47-.42,0,0-.08-.07-.07-.06-.05,0-.11-.1,0,0-.13-.12h0l-.12-.1,0,0-.09-.08,0,0-.07-.06-.06-.06-.05,0-.76-.69Zm-8.19-7.65,2,1.93-19.26,20.32-1.95-1.86-.05,0-.06-.06-.11-.11Zm-8-7.88,2,2-19.83,19.77c-.56-.56-1.12-1.12-1.67-1.69l0,0,0,0-.1-.1h0l-.26-.26Zm-7.74-8.1,1.91,2-20.37,19.2-1.33-1.41-.05-.06,0,0-.63-.68ZM154.65,686l1.85,2.1-20.91,18.62-1.3-1.47h0l-.68-.77Zm-7.27-8.53,1.8,2.15-21.44,18-.77-.91v0l-.08-.09-.09-.11,0,0-1-1.15Zm-7-8.73,1.73,2.2-21.94,17.4-.5-.63-.07-.09,0,0-.08-.11,0,0-.1-.13h0l-1-1.33Zm-6.78-8.92,1.67,2.25L112.82,678.8l-.21-.28,0,0,0-.06-1.49-2Zm-6.52-9.11,1.61,2.3-22.89,16.12-.22-.3h0l-.1-.14h0l-.1-.15h0l-.54-.76h0l-.1-.15h0l-.19-.29-.09-.13h0l-.35-.5Zm-6.26-9.3,1.54,2.34L99,659.19l-.38-.58h0l-.09-.12h0c-.35-.52-.68-1-1-1.55l0-.07,0,0-.09-.14Zm-6-9.47,1.48,2.38L92.5,649.09l0-.08,0,0-.07-.11,0,0-.07-.12h0c-.45-.72-.9-1.45-1.34-2.18Zm-5.72-9.63,1.4,2.42L86.3,638.82l-.42-.72h0l-.07-.11-.06-.1,0,0-.93-1.62Zm-5.44-9.79,1.34,2.46L80.4,628.37c-.48-.87-1-1.76-1.43-2.64Zm-5.16-9.94,1.26,2.5L74.79,617.76l-.93-1.83v0l-.06-.12,0-.08,0-.05-.29-.58ZM93.6,592.46,94.79,595l-25.3,12c-.42-.89-.85-1.79-1.26-2.69v0ZM89,582.24l1.12,2.57L64.5,596.08l-1.2-2.75ZM84.73,571.9l1,2.6L59.83,585,59,582.86v0l0-.12,0,0-.05-.1,0-.07,0-.09,0-.08,0-.08Zm-4-10.46,1,2.62-26.24,9.79c-.35-.93-.69-1.87-1-2.81Zm-3.69-10.57.89,2.65-26.5,9-.32-1,0-.07,0-.07,0-.12,0,0,0-.13v0l-.05-.14v0l0-.14c-.12-.37-.24-.73-.37-1.1Zm-3.39-10.68.82,2.68-26.75,8.27v0l0-.07,0-.1,0,0-.11-.37,0-.06,0-.09,0-.09,0-.07,0-.1,0-.07,0-.11v-.06l0-.13v0l-.11-.35v-.05l0-.11,0-.1V549l-.24-.77Zm-3.07-10.77.74,2.7-27,7.5-.05-.17h0l0-.16v0l0-.15-.1-.34h0c-.18-.68-.37-1.36-.55-2Zm-2.76-10.85.66,2.72L41.3,528l-.11-.43v0l0-.11-.57-2.34Zm-2.46-10.92.58,2.74-27.36,5.94,0-.18h0l0-.12,0-.08h0L38,513.39Zm-2.14-11,.51,2.75-27.52,5.16v-.07l0-.15v0l-.05-.27v0l0-.11v-.06l0-.12,0-.05,0-.13v0l0-.14h0l-.32-1.77ZM61.4,485.6l.43,2.77-27.65,4.37c-.16-1-.31-2-.46-3Zm-1.5-11.1.35,2.78-27.78,3.58c-.08-.64-.16-1.31-.24-2v-.32l0-.11v-.05l0-.16h0l0-.37Zm-1.2-11.14.27,2.79-27.86,2.79c-.1-1-.2-2-.29-3Zm-.88-11.17L58,455l-27.93,2c0-.16,0-.35,0-.52-.06-.82-.12-1.64-.17-2.47ZM57.26,441l.11,2.8-28,1.2c0-.66-.06-1.33-.08-2v-.11a.66.66,0,0,0,0-.14v-.19h0c0-.18,0-.37,0-.56ZM57,429.79l0,2.8-28,.42c0-.34,0-.7,0-1v-.46h0c0-.29,0-.58,0-.87V430ZM29.08,418l28,.55,0,2.8L29,421v-.93h0v-1.55h0c0-.17,0-.34,0-.5Zm.41-12,28,1.34-.13,2.8-28-1.15,0-.54v-.28h0c0-.56,0-1.11.07-1.67v-.32Zm.74-12,27.92,2.13L58,399,30,397c.05-.75.1-1.49.16-2.24h0v-.11c0-.21,0-.42,0-.63Zm1.08-11.95L59.16,385l-.28,2.79L31,385.07l.09-.93v0l0-.15v-.22l.06-.55h0l.12-1.12Zm1.42-11.92,27.76,3.71-.37,2.78-27.77-3.51,0-.17v-.16c.11-.88.23-1.77.34-2.65Zm1.76-11.87,27.64,4.5-.44,2.77L34,361.26c.15-1,.31-2,.47-3Zm2.1-11.81,27.5,5.28-.52,2.75L36,349.42c.18-1,.37-2,.56-2.94ZM39,334.73l27.33,6.07-.6,2.73-27.37-5.87c0-.26.11-.5.16-.76l.48-2.17Zm2.77-11.68,27.15,6.85-.67,2.72L41.07,326v-.09l.18-.73v0l0-.11v-.07l0-.1,0-.08,0-.08,0-.12v0l.13-.53v0l0-.14,0-.06,0-.1,0-.09,0-.05.11-.45Zm3.1-11.59,26.94,7.63-.75,2.7-27-7.44,0-.09v0l0-.12v-.06l0-.1,0-.07,0-.09,0-.13v0l.1-.36h0l0-.18h0l.46-1.63ZM48.33,300,75,308.36,74.21,311l-26.77-8.2c.1-.32.2-.63.29-.95l0-.11,0,0,0-.12v-.05l0-.13,0,0,0-.13v0l0-.14v0l0-.15v0l.05-.16,0-.09,0-.08,0-.1,0-.05,0-.11v0l0-.12v0Zm3.76-11.39,26.46,9.16-.91,2.64-26.52-9c.15-.46.31-.93.47-1.39l0-.05,0,0c.15-.45.3-.9.46-1.34Zm4.09-11.28,26.18,9.91-1,2.62-26.26-9.73,0-.11c.3-.79.59-1.59.89-2.38Zm4.4-11.16,25.9,10.66-1.06,2.59-26-10.48v0l0-.14,0,0,.06-.15h0l1-2.42Zm4.73-11,25.58,11.4-1.14,2.56L64.1,257.84l.83-1.89h0l.06-.14.05-.11,0,0Zm5-10.89,25.24,12.12-1.2,2.53-25.33-12,1.29-2.7Zm5.35-10.74,24.88,12.84-1.27,2.49-25-12.66.09-.16v0l.07-.12,0-.06,0-.08,1.15-2.23Zm5.65-10.58,24.51,13.54-1.35,2.46L79.92,225.52c.23-.43.46-.86.7-1.28l.74-1.35Zm6-10.42,24.11,14.23L110,229.12,85.79,215.05,87,213l0-.06,0-.07.22-.37Zm6.25-10.25,23.69,14.92-1.48,2.38L92,204.77l0-.08h0l.08-.13h0l.08-.13,0,0,.07-.12.09-.14h0l.77-1.24,0,0,0-.06.35-.55Zm6.54-10.06,23.26,15.58-1.55,2.34L98.43,194.65l1.44-2.16,0,0,.06-.08Zm6.82-9.88,22.81,16.25-1.62,2.28-22.92-16.08,1.61-2.29h0l.07-.11Zm7.1-9.67,22.34,16.88-1.68,2.24L112.22,175l1-1.35,0,0,.06-.08.7-.93Zm7.37-9.47,21.85,17.51-1.74,2.19-22-17.35.33-.42,0,0,0,0,1.48-1.86Zm7.64-9.26L150.37,172l-1.81,2.14-21.47-18c.64-.77,1.28-1.54,1.93-2.3Zm7.89-9,20.82,18.71-1.86,2.09-21-18.57,2-2.23Zm8.15-8.81,20.28,19.3-1.92,2L143,138.21l.38-.4h0l.13-.14h0l.25-.27h0l.12-.12,0,0,.1-.1,0,0,.09-.1,0,0,.1-.1,0,0,.12-.13h0l.1-.11,0,0,.07-.07.06-.07.05,0,.08-.08,0,0Zm8.39-8.58,19.73,19.86-2,2-19.87-19.73,0,0q1-1,2.1-2.1Zm8.63-8.34,19.16,20.42-2,1.92-19.31-20.28.11-.1,0,0,0,0,.11-.1h0l.68-.64,0,0,.08-.08.08-.08,0,0,1-1ZM171,111,189.54,132l-2.09,1.87L168.72,113l1.58-1.42Zm9.09-7.84,18,21.47-2.14,1.8-18.13-21.33,2.3-1.94Zm9.3-7.57,17.37,22-2.2,1.74L187,97.5h0l2-1.63h0l.11-.09Zm9.52-7.31,16.73,22.45-2.24,1.68L196.47,90.12l.58-.43.11-.09h0l1.7-1.27Zm9.73-7,16.08,22.91-2.29,1.62L206.14,83l1.12-.8.05,0,.07-.06,1-.72Zm9.91-6.76L233.94,97.9l-2.33,1.55L216,76.2l.66-.44.05,0,.08,0,1.38-.92,0,0,.1-.07.06,0,.07,0Zm10.11-6.47,14.76,23.8L241,93.34,226.07,69.65l.06,0h0l2.48-1.56Zm10.29-6.18L253,86.08l-2.42,1.42L236.31,63.4l2.59-1.52ZM249.36,56l13.38,24.6L260.29,82l-13.56-24.5,0,0,.07,0,.08,0,.1-.06,0,0,.32-.17h0l.14-.08h0l.13-.08h0l.13-.07,0,0,.12-.07,0,0,.14-.08.12-.06,0,0,.14-.07h0l.89-.48ZM260,50.42l12.67,25-2.49,1.27L257.31,51.78c.81-.42,1.6-.83,2.42-1.24l0,0,.1-.05.09,0Zm10.78-5.28,11.95,25.32-2.53,1.2L268.05,46.43c.9-.44,1.8-.87,2.71-1.29Zm10.92-5,11.23,25.65L290.34,67l-11.4-25.57,2.15-1,.06,0,0,0Zm11.06-4.65,10.49,26-2.59,1.06L290,36.65l.49-.2,2.29-.93Zm11.19-4.33,9.74,26.25-2.62,1-9.93-26.18,2.27-.85h0l.09,0,.42-.15Zm11.31-4,9,26.52-2.65.9L312.4,28.14l1.36-.47h0l.09,0,.09,0,0,0,.15,0h0Zm11.42-3.69,8.22,26.77-2.68.83-8.41-26.71,1.36-.42h0l.14-.05h0l.11,0,.07,0,.09,0Zm11.52-3.36,7.45,27-2.7.75-7.64-26.94.16,0,.08,0,.07,0,.12,0h0l1.83-.51h0l.06,0Zm11.61-3,6.67,27.19-2.72.68-6.86-27.15,1.92-.48h0l.15,0h0Zm11.7-2.69,5.88,27.38-2.73.6-6.08-27.34.72-.16h.06l2-.44h0l.09,0Zm11.76-2.35,5.1,27.53-2.75.52-5.3-27.5,2.95-.56Zm11.83-2,4.31,27.67-2.76.44-4.51-27.64,3-.47ZM397,8.37l3.52,27.78-2.78.36L394,8.76l2.78-.37h.2ZM408.89,7l2.73,27.87-2.79.28L405.9,7.33H406l.13,0h1.19l.45,0h0l.15,0h.19l.16,0h0Zm12-1L422.79,34l-2.79.2L417.86,6.25l1.29-.11h.28l1.42-.1Zm12-.67,1.15,28-2.8.13-1.35-28,.54,0h.31l2.15-.09Zm12-.32.37,28-2.8,0-.56-28,2.54,0h.45Z"
                            />
                          </motion.g>)
                      }
                    </AnimatePresence>


                    {
                      showCoreteam &&
                      (<motion.g initial={{ x: 137, y: 68 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{ delay: 0.5, duration: 1, type: 'tween' }} onClick={() => childToggle('coreteam')} id="Core_team" data-name="Core team" className={childTogglename.isActive == true || childTogglename.isActiveunit == true || childTogglename.isActivecorpoteam == true || childTogglename.isActivemanufservice == true ? 'disable-svg' : ''}>
                        <circle id="Ellipse_113" data-name="Ellipse 113" className={childTogglename.isActivecoreteam ? 'cls-21 selected-stroke' : 'cls-21'} cx="318.5" cy="351.5" r="50.5" />
                        <g id="Core_Team-2" data-name="Core Team-2" className="cls-22">
                          <text className="cls-23" transform="translate(275.49 357)">
                            Core Team
                          </text>
                        </g>
                      </motion.g>)
                    }

                    {
                      showUniteam && (
                        <motion.g id="Unit_team" data-name="Unit team" initial={{ x: -208, y: 115 }}
                          animate={{ x: 0, y: 0 }}
                          transition={{ delay: 0.5, duration: 1, type: 'tween' }} onClick={() => childToggle('unitteam')} className={childTogglename.isActive == true || childTogglename.isActivecoreteam == true || childTogglename.isActivecorpoteam == true || childTogglename.isActivemanufservice == true ? 'disable-svg' : ''}>
                          <circle id="Ellipse_114" data-name="Ellipse 114" className={childTogglename.isActiveunit ? 'cls-25 selected-stroke' : 'cls-25'} cx="660.5" cy="307.5" r="45.5" />
                          <g id="Unit_Team-2" data-name="Unit Team-2" className="cls-22">
                            <text className="cls-23" transform="translate(623.99 314)">
                              Unit Team
                            </text>
                          </g>
                        </motion.g>
                      )

                    }



                    <g id="_24_7" data-name=" 24 7">
                      <AnimatePresence>
                        {
                          showthirdcircle &&
                          (
                            <motion.path variants={scaleAnimate}
                              initial="hidden"
                              animate="visible" id="Path_978" data-name="Path 978" className="cls-26" d="M451.88,338.45a88.44,88.44,0,1,1-88.43,88.43,88.44,88.44,0,0,1,88.43-88.43Z" />
                          )
                        }
                      </AnimatePresence>

                      <AnimatePresence>
                        {
                          showsecondcircle &&
                          (<motion.circle variants={scaleAnimate}
                            initial="hidden"
                            animate="visible" id="Ellipse_86" data-name="Ellipse 86" className="cls-27" cx="451.5" cy="426.5" r="80.5" />)
                        }
                      </AnimatePresence>


                      <AnimatePresence>

                        {
                          showfirstcircle &&
                          (
                            <motion.g variants={scaleAnimate}
                              initial="hidden"
                              animate="visible"  >
                              <circle id="Ellipse_85" data-name="Ellipse 85" onClick={() => childToggle('twentyseven')} className={childTogglename.isActive ? 'cls-28 selected-stroke' : 'cls-28'}
                                cx="451.5" cy="426.5" r="72.5" />
                              <g id="_24_7_Team-2" data-name=" 24 7 Team-2" className="cls-22">
                                <text className="cls-29" transform="translate(390.2 437)">
                                  24/7 Team

                                </text>

                              </g>
                            </motion.g>
                          )
                        }

                      </AnimatePresence>
                    </g>

                    <AnimatePresence>
                      {
                        // onClick={() =>setiscorpClicked(true)}
                        corpcircle && (
                          <motion.g variants={noAnimate}
                            initial="hidden"
                            animate="visible" onClick={() => childToggle('corporate')} className={childTogglename.isActive == true || childTogglename.isActiveunit == true || childTogglename.isActivecoreteam == true || childTogglename.isActivemanufservice == true ? 'click-button disable-svg' : 'click-button'} id="Corporate">
                            <circle id="Ellipse_118" data-name="Ellipse 118" className={childTogglename.isActivecorpoteam ? 'cls-31 selected-stroke' : 'cls-31'} cx="38" cy="427" r="35" />
                            <g id="Corporate-2" className="cls-22"><text className="cls-32" transform="translate(7.92 431)">Corporate</text></g>
                          </motion.g>
                        )
                      }
                    </AnimatePresence>

                  </g>

                  {
                    combinecircle && (
                      <motion.g initial={{ x: -10, y: -200, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1, type: 'keyframes' }} onClick={() => childToggle('manufactor')} className={childTogglename.isActive == true || childTogglename.isActiveunit == true || childTogglename.isActivecoreteam || childTogglename.isActivecorpoteam == true ? 'disable-svg' : ''}>
                        <g id="Maintaince_and_reliability" data-name="Maintaince and reliability" >
                          <path id="Path_1199" data-name="Path 1199" className={childTogglename.isActivemanufservice ? 'cls-33 selected-stroke' : 'cls-33'} d="M454.5,689A42.5,42.5,0,1,1,412,731.5,42.5,42.5,0,0,1,454.5,689Z" />
                          <g id="Manufacturing_Services" data-name="Manufacturing Services" className="cls-22">
                            <text className="cls-34" transform="translate(418.6 730)">Manufacturing</text>
                            <text className="cls-34" transform="translate(434.06 741)">Services</text>
                          </g>
                        </g>
                      </motion.g>
                    )

                  }

                </g>
              </g>
            </g>
          </svg>

        </div>
        <div className="right-side">
          {
            !childTogglename.isActivecoreteam && !childTogglename.isActiveunit && !childTogglename.isActivecorpoteam && !childTogglename.isActivemanufservice && !childTogglename.isActive ? (
              <>
                <div className="scrollerdivchart">
                  <h4>Production Unit Feed Rate</h4>
                  <Vam> </Vam>
                 <Meoh> </Meoh>
                 <Aas> </Aas>
                 <Eo></Eo>
                 <Eg1></Eg1>
                 <Eg2></Eg2>
                </div>
                <SquareBackground></SquareBackground>
              </>
            )
              : (
                svgToggle.twentysevenSvg && (
                  <>
                    <div className="scrollerdiv">
                      <h4>24/7 Team</h4>
                      <ul>
                        <li><span className="circle"></span> <span className="span-txt"> Closest to the product</span></li>
                        <li><span className="circle"></span> <span className="span-txt"> Where value is created for Celanese</span></li>
                        <li><span className="circle"></span><span className="span-txt">Produces product</span></li>
                      </ul>
                      <div className="strips-section">
                        <a className="strip-bar">24/7 Team Dashboard </a>
                      </div>
                    </div>
                    <SquareBackground></SquareBackground>
                  </>
                )
              )
          }




          {
            svgToggle.unitteamSvg && (
              <>
                <div className="scrollerdiv">
                  <h4>Unit Team</h4>
                  <ul>
                    <li><span className="circle"></span> <span className="span-txt">Technology optimization, UTP, Long term Improvement </span></li>
                    <li><span className="circle"></span> <span className="span-txt"> Unit Team resourced to ensure daily focus on Core Principles by preventing distractions to Core Team</span></li>

                  </ul>
                  <div className="strips-section">
                    <a className="strip-bar">Unit Team Dashboard </a>
                    <a className="strip-bar">Technology Dashboard </a>
                    <a className="strip-bar" target="_blank" href="https://dashboards.celanese.com/#/views/CLKDashboard_16248906590710/Operations">Operation Leader Dashboard </a>
					<a className="strip-bar" target="_blank" href="https://dashboards.celanese.com/#/views/Utilitiesdashboard/UtilitiesDashboard?:iid=1">Utilities Dashboard </a>
                  </div>
                </div>
                <SquareBackground></SquareBackground>
              </>
            )
          }
          {
            svgToggle.coreteamSvg && (
              <>
                <div className="scrollerdiv">
                  <h4>Core Team</h4>
                  <ul>
                    <li><span className="circle"></span> <span className="span-txt">Supports the 24/7 team for flawless production </span></li>
                    <li><span className="circle"></span> <span className="span-txt"> Runs self-sufficiently day in and day out</span></li>
                    <li><span className="circle"></span> <span className="span-txt"> Direct management of operations and assets</span></li>

                  </ul>
                  <div className="strips-section">
                    <a className="strip-bar">Core Team Dashboard </a>
                    <a className="strip-bar">Operations update</a>
                  </div>
                  <div className="strips-section-new">
                    <p>Overtime</p>
                    <a className="strip-bar">Overtime and Budget Impact Analysis </a>
                    <a className="strip-bar">Wage type Analysis </a>
                  </div>
                </div>
                <SquareBackground></SquareBackground>
              </>
            )
          }

          {
            svgToggle.manufservicesSvg && (
              <>
                <div className="scrollerdiv">
                  <h4>Manufacturing Service</h4>
                  <ul>
                    <li><span className="circle"></span> <span className="span-txt">Expertise that services the core  </span></li>
                    <li><span className="circle"></span> <span className="span-txt">Complete activities outside core team scope</span></li>
                    <li><span className="circle"></span> <span className="span-txt"> Resource flexibility</span></li>
                    <li><span className="circle"></span> <span className="span-txt"> Regional and global resources</span></li>

                  </ul>
                  <div className="strips-section">
                    <a className="strip-bar">Maintenance & Reliability </a>
                    <a className="strip-bar">Capex</a>
					<a className="strip-bar">Productivity Dashboard</a>
                  </div>
                  <div className="strips-section-new">
                    <p>EHS</p>
                    <a className="strip-bar">FEPT Dashboard </a>
                    <a className="strip-bar">Injuries Dashboard </a>
                    <a className="strip-bar">LOPC Dashboard </a>
                    <a className="strip-bar">PRD Dashboard </a>
                    <a className="strip-bar">RTE Dashboard </a>
                    <a className="strip-bar">SIS Dashboard </a>
                    <a className="strip-bar">SOL Dashboard </a>
                  </div>
                </div>
                <SquareBackground></SquareBackground>
              </>
            )
          }

          {
            svgToggle.corporateSvg && (
              <>
                <div className="scrollerdiv">
                  <h4>Corporate</h4>
                  <ul>
                    <li><span className="circle"></span> <span className="span-txt">Governing organization for corporate initiatives  </span></li>
                    <li><span className="circle"></span> <span className="span-txt">Sets policies and practices to ensure compliance</span></li>
                    <li><span className="circle"></span> <span className="span-txt"> Establishes vision and targets to meet stakeholder expectations</span></li>
                    <li><span className="circle"></span> <span className="span-txt"> Acts as governing organization for corporate wide initiatives </span></li>

                  </ul>
                  <div className="strips-section">
                    <a className="strip-bar">Corporate Manufacturing </a>
                    <a className="strip-bar">Regional Manufacturing</a>
                    <a className="strip-bar">Stewardship</a>
                    <a className="strip-bar">Quality</a>
                    <a className="strip-bar">HR</a>
                    <a className="strip-bar"> FP&A</a>
                    <a className="strip-bar"> Procurement</a>
                    <a className="strip-bar"> IT</a>
        
                  </div>
                </div>
                <SquareBackground></SquareBackground>
              </>
            )
          }


        </div>
      </div>
      {
        <motion.div
          className="LM_logo_bg">
          <img src={LM_logo_bg} />
        </motion.div>
      }

      {
        <motion.div
          className="moving-core-bottom">
          <img src={moving_core_bottom} />
        </motion.div>
      }

      {/* {
          bottomlogoanimation &&  <motion.div initial={{
            y: -200,
          }}
          animate={{
            y: 0,
            delay:1,
            duration:20,
          }} className="bottom_logo_image">
          <img src={ bottom_logo}  />
          </motion.div>
        } */}


      {
        corpcircle && <motion.div variants={noAnimate} className="copyright-text">
          <span> Copyright 2021 Celanese Corporation</span>
        </motion.div>

      }
    </div>





  )

}

export default Svganimation