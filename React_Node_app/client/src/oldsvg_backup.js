 {/* <svg  viewBox="0 0 1165 853" className="main-svg"> 
    <defs>
       
        <radialGradient id="radial-gradient" cx="276.93" cy="822.56" r="0.5" gradientTransform="matrix(488, 0, 0, -488, -134404, 401838)" gradientUnits="userSpaceOnUse">
            <stop offset="0" />
            <stop offset="1" stop-color="#e75113" stop-opacity="0.05" />
        </radialGradient>
        <radialGradient id="radial-gradient-2" cx="276.66" cy="822.59" r="0.5" gradientTransform="matrix(331, 0, 0, -330, -90837, 271883)"  />
    </defs>
    <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          {
            iscorpClicked && (
            <motion.g variants={noAnimate}
            initial="hidden"
            animate="visible">
              <path className="cls-1" d="M226.4,175H184" />
              <path className="cls-1" d="M227.4,247H185" />
              <path className="cls-1" d="M227.4,319H185" />
              <path className="cls-1" d="M227.4,394H185" />
              <path className="cls-1" d="M287,427H233.07" />
              <path className="cls-1" d="M227.4,463.5H185" />
              <path className="cls-1" d="M227.4,535H185" />
              <path className="cls-1" d="M227.4,607H185" />
              <path className="cls-1" d="M227.4,679H185" />
              <path className="cls-2" d="M229.2,173.06V681.32" />
              <rect className="cls-3" y="149" width="180" height="52" rx="5" />
              <g className="cls-4"><text className="cls-5" transform="translate(84 181)">IT</text></g>
              <rect className="cls-3" y="221" width="180" height="52" rx="5" />
              <g className="cls-4"><text className="cls-5" transform="translate(79 253)">HR</text></g>
              <rect className="cls-3" y="293" width="180" height="52" rx="5" />
              <g className="cls-4">
                  <text className="cls-5" transform="translate(69 325)">
                      FP&amp;A
                  </text>
              </g>
              <rect className="cls-3" y="365" width="180" height="52" rx="5" />
              <g className="cls-4"><text className="cls-5" transform="translate(44 397)">Procurement</text></g>
              <rect className="cls-3" y="437" width="180" height="52" rx="5" />
              <g className="cls-4">
                  <text className="cls-5" transform="translate(59 469)">
                    Logistics
                  </text>
              </g>
              <rect className="cls-3" y="509" width="180" height="52" rx="5" />
              <g className="cls-4"><text className="cls-5" transform="translate(72 541)">MRO</text></g>
              <rect className="cls-3" y="581" width="180" height="52" rx="5" />
              <g className="cls-4"><text className="cls-5" transform="translate(39 613)">Major Projects</text></g>
              <rect className="cls-3" y="653" width="180" height="52" rx="5" />
              <g className="cls-4"><text className="cls-5" transform="translate(69 685)">S&amp;OP</text></g>
              </motion.g>)
            }
           
           <AnimatePresence>
             {
              corpcircle && (
                <motion.g variants={noAnimate}
                initial="hidden"
                animate="visible" onClick={() =>setiscorpClicked(true)} className="corp_button">
                <circle className="cls-9" cx="322" cy="427" r="35" />
                 <g className="cls-4"><text className="cls-10" transform="translate(294.92 431)">Corporate</text></g>
                </motion.g>
              )
             }

           
           </AnimatePresence>
          
            
            <AnimatePresence>
              {
                showfifthobject && (
                  <motion.g variants={noAnimate}
                  initial="hidden"
                  animate="visible">
                <g className="cls-11">
                    <path className="cls-12" d="M932.64,561.49,914,543.33V509L881.2,443.47V411.19L856,392.53,822.7,400.6l-59-24.71-6.56-57.5,23.2-25.21h49.43l17.65,25.21,48.41,8.07,49.43-16.14" />
                    <path className="cls-13" d="M602.05,388.75l-37.82,36.31v26.23l16.64,32.27,38.83,8.07v83.22l18.16,41.36,22.7,7.06,3.53-37.83,32.78-26.22v-23.7l32.78-32.28,8.07-39.34L706,459.36l-26.23-40.85H624.25Z" />
                    <path className="cls-14" d="M908.4,260.64l-18.62,14.75-66.73-14.75-33,6.21-25.6-9.7,15.9-31.81h35.69L839,209.82" />
                    <path className="cls-14" d="M654.1,203.61l18.63,13.58,46.55,10.09-5.82,20.95-22.89,9.31-26.38,42.28-38.41,24.45-59,10.47-2.32,22.89,14.74,17.07v26.77l-48.5-26.77-13.19-33" />
                </g>
                <g className="cls-15">
                    <circle className="cls-16" cx="739" cy="427" r="244" />
                    <circle className="cls-17" cx="739" cy="427" r="241.5" />
                </g>
                <motion.g className="cls-18"
                initial={{
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
                  
                }}>
                    <ellipse className="cls-19" cx="737.5" cy="425" rx="241.5" ry="241" />
                    <ellipse className="cls-20" cx="737.5" cy="425" rx="235.5" ry="235" />
                </motion.g>
            </motion.g>
                )
              }
             
            </AnimatePresence>
            
            <AnimatePresence>
            {
              showfourthcircle && (
                <motion.g variants={noAnimate}
                initial="hidden"
                animate="visible">
                <g className="cls-21">
                    <ellipse className="cls-22" cx="738.5" cy="427" rx="165.5" ry="165" />
                    <ellipse className="cls-23" cx="738.5" cy="427" rx="163.5" ry="163" />
                </g>
                <motion.g className="cls-24" 
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
                  
                }}>
                    <circle className="cls-19" cx="739" cy="427" r="159" />
                    <circle className="cls-25" cx="739" cy="427" r="129.5" />
                </motion.g>
                <motion.g className="cls-26"initial={{
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
                  
                }}>
                    <circle className="cls-19" cx="738.4" cy="426.39" r="158.67" />
                    <circle className="cls-27" cx="738.4" cy="426.39" r="152.67" />
                </motion.g>
               </motion.g>
              )
          }
          </AnimatePresence>

          <AnimatePresence>
            {
              combinecircle && (
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
                  
                }}>
                    <path className="cls-28" d="M447.19,289.86s38.38-101.65,156.45-155.71c.37-.18,8.49,15.31,8.49,15.31s-100.36,42.9-148.33,148C463.8,297.7,447.19,289.86,447.19,289.86Z" />
              <path className="cls-28" d="M822.12,723.84s106.8-20.11,180.6-127c.24-.33-13.61-11-13.61-11S929.39,677.2,817.55,706.17C817.28,706.13,822.12,723.84,822.12,723.84Z" />
              <g className="cls-29">
                  <ellipse className="cls-19" cx="738.61" cy="419.96" rx="324.27" ry="317.61" />
                  <ellipse className="cls-30" cx="738.61" cy="419.96" rx="322.77" ry="316.11" />
              </g>
                </motion.g>
              )
            }
          </AnimatePresence>

          <AnimatePresence>
         
            {outercircle && (
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
                  
                }}>
            <g className="cls-31">
                <circle className="cls-19" cx="738.5" cy="426.5" r="426.5" />
                <circle className="cls-32" cx="738.5" cy="426.5" r="425.5" />
            </g>
            <g className="cls-33">
                <circle className="cls-19" cx="737.5" cy="426.5" r="421.5" />
                <circle className="cls-34" cx="737.5" cy="426.5" r="407.5" />
            </g>
            </motion.g>
            )}
            
            
            </AnimatePresence>

              {
                showCoreteam && (
                  <motion.g 
                  initial={{x:137,y:68}}
                  animate={{x:0,y:0}}
                  transition={{delay:0.5, duration:1, type:'tween'}}
                  >
                <circle className="cls-35" cx="605.5" cy="351.5" r="50.5" />
                <g className="cls-4">
                    <text className="cls-36" transform="translate(562.49 357)">
                        Core
                        <tspan className="cls-37" x="38.66" y="0">T</tspan>
                        <tspan x="46.21" y="0">eam</tspan>
                    </text>
                </g>
                </motion.g>
                )
                
              }
            
            <AnimatePresence>
            {
                  combinecircle && (
                    <motion.g variants={noAnimate}>
                <ellipse className="cls-38" cx="519.5" cy="656" rx="40.5" ry="41" />
                <g className="cls-4">
                    <text className="cls-39" transform="translate(488.11 646)">Maintenance</text>
                    <text className="cls-39" transform="translate(511.22 657)"><tspan >&amp;</tspan></text>
                    <text className="cls-39" transform="translate(495.51 668)">
                        <tspan className="cls-40">R</tspan>
                        <tspan x="5.98" y="0">eliability</tspan>
                    </text>
                </g>
                <circle className="cls-38" cx="733.5" cy="106.5" r="40.5" />
                <g className="cls-4">
                    <text className="cls-41" transform="translate(721.2 102)">OPS</text>
                    <text className="cls-41" transform="translate(709.25 118)">Manager</text>
                </g>
                </motion.g>
                  )
             }              
              </AnimatePresence>
              {
                  showUniteam && (
                    <motion.g 
                    initial={{x:-208,y:115}}
                    animate={{x:0,y:0}}
                    transition={{delay:0.5, duration:1, type:'tween'}}
                    >
                    <circle className="cls-42" cx="947.5" cy="307.5" r="45.5" />
                    <g className="cls-4">
                        <text className="cls-36" transform="translate(910.99 314)">
                            Unit 
                            <tspan className="cls-37" x="33.65" y="0">T</tspan>
                            <tspan x="41.2" y="0">eam</tspan>
                        </text>
                    </g>
                  </motion.g>
                  )
              }
            <AnimatePresence>
              {
                showthirdcircle &&
                (
                <motion.path variants={scaleAnimate}
                initial="hidden"
                animate="visible" className="cls-43" d="M738.88,338.45a88.44,88.44,0,1,1-88.43,88.43,88.44,88.44,0,0,1,88.43-88.43Z" />
                )
              }
            </AnimatePresence>
            <AnimatePresence>
              {
                showsecondcircle &&
                ( <motion.circle variants={scaleAnimate}
                  initial="hidden"
                  animate="visible" className="cls-44" cx="738.5" cy="426.5" r="80.5" />)
                
              }
               </AnimatePresence>
               <AnimatePresence>
                {
                  showfirstcircle &&
                  (
                    <motion.g variants={scaleAnimate}
                          initial="hidden"
                          animate="visible">
                          <circle   className="cls-45" cx="738.5" cy="426.5" r="72.5" />
                    <g className="cls-4">
                        <text className="cls-46" transform="translate(677.2 437)">
                            24/7 Team
                        </text>
                    </g>
                    </motion.g>
                  )
                }
           </AnimatePresence>
           
           <AnimatePresence>
            {
                  combinecircle && (
                    <motion.g variants={noAnimate}>
            <circle className="cls-38" cx="1040" cy="557" r="40" />
            <g className="cls-4"><text className="cls-10" transform="translate(1028.64 561)">EHS</text></g>
            </motion.g>
                  )
            }
            </AnimatePresence>

        </g>
    </g>
</svg> */}





// .cls-1,
// .cls-12,
// .cls-13,
// .cls-14,
// .cls-17,
// .cls-19,
// .cls-2,
// .cls-20,
// .cls-23,
// .cls-25,
// .cls-27,
// .cls-30,
// .cls-32,
// .cls-34 {
//     fill: none;
// }
// .cls-1,
// .cls-2 {
//     stroke: #4a4444;
// }
// .cls-1,
// .cls-2,
// .cls-30 {
//     stroke-width: 3px;
// }
// .cls-1 {
//     stroke-dasharray: 8 8;
// }
// .cls-3 {
//     fill: #554b4b;
// }
// .cls-10,
// .cls-36,
// .cls-39,
// .cls-4,
// .cls-41,
// .cls-46,
// .cls-5 {
//     isolation: isolate;
// }
// .cls-36,
// .cls-5 {
//     font-size: 16px;
// }
// .cls-5 {
//     fill: #c5c5c5;
// }
// .cls-10,
// .cls-36,
// .cls-39,
// .cls-41,
// .cls-46,
// .cls-5 {
//     font-weight: 600;
// }
// .cls-6 {
//     letter-spacing: -0.03em;
// }
// .cls-7 {
//     letter-spacing: 0em;
// }
// .cls-8 {
//     letter-spacing: -0.01em;
// }
// .cls-9 {
//     fill: #a57662;
//     z-index: 1;
// }
// .cls-10,
// .cls-41 {
//     font-size: 12px;
// }
// .cls-11 {
//     opacity: 0.1;
// }
// .cls-12,
// .cls-14 {
//     stroke: #e75113;
// }
// .cls-12,
// .cls-17 {
//     stroke-width: 5px;
// }
// .cls-13 {
//     stroke: #e35013;
// }
// .cls-13,
// .cls-14,
// .cls-23 {
//     stroke-width: 4px;
// }
// .cls-15 {
//     opacity: 0.48;
// }
// .cls-16 {
//     fill: url(#radial-gradient);
// }
// .cls-17 {
//     stroke: #0eff45;
// }
// .cls-18 {
//     opacity: 0.15;
// }
// .cls-20 {
//     stroke: #168b37;
//     stroke-width: 12px;
// }
// .cls-20,
// .cls-25,
// .cls-27 {
//     stroke-dasharray: 2 16;
// }
// .cls-21 {
//     opacity: 0.46;
// }
// .cls-22 {
//     fill: url(#radial-gradient-2);
// }
// .cls-23 {
//     stroke: #73f6ff;
// }
// .cls-24 {
//     opacity: 0.41;
// }
// .cls-25,
// .cls-27 {
//     stroke: #54331f;
// }
// .cls-25 {
//     stroke-width: 59px;
// }
// .cls-26 {
//     opacity: 0.56;
// }
// .cls-27 {
//     stroke-width: 12px;
// }
// .cls-28 {
//     fill: #142d36;
// }
// .cls-29 {
//     opacity: 0.3;
// }
// .cls-30 {
//     stroke: #cecece;
// }
// .cls-31 {
//     opacity: 0.47;
// }
// .cls-32 {
//     stroke: #847e7e;
//     stroke-width: 2px;
// }
// .cls-33 {
//     opacity: 0.16;
// }
// .cls-34 {
//     stroke: #777070;
//     stroke-width: 28px;
//     stroke-dasharray: 3 9;
// }
// .cls-35 {
//     fill: #73f6ff;
// }
// .cls-36,
// .cls-41 {
//     fill: #11252d;
// }
// .cls-37 {
//     letter-spacing: -0.11em;
// }
// .cls-38 {
//     fill: #a8a8a8;
// }
// .cls-39 {
//     font-size: 10px;
// }
// .cls-40 {
//     letter-spacing: -0.03em;
// }
// .cls-42 {
//     fill: #0eff45;
// }
// .cls-43 {
//     fill: #6e4226;
// }
// .cls-44 {
//     fill: #905530;
// }
// .cls-45 {
//     fill: #e75113;
// }
// .cls-46 {
//     font-size: 26px;
//     fill: #fff;
// }
// .cls-47 {
//     letter-spacing: -0.1em;
// }