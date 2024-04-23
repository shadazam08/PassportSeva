import React from 'react';
import './NavMenu.scss'

const NavMenuBar = () => {
    return (
        <div className='container'>
            <div id="mySidenav" className="Navigation_Containter">
                <div>
                    <ul className="toplinks" role="navigation">
                        <li className="active" style={{ width: '115px' }}>
                            <a style={{ textAlign: 'center' }} onkeyup="abouthideS(event)" href="/AppOnlineProject/welcomeLink">Home</a>
                        </li>
                        <li id="aboutUs" style={{ width: '110px' }} onkeyup="aboutdis(event),passporthide()">
                            <a id="abtUs" href="#">
                                About Us&nbsp;<img src={require('../../image/down.gif')} alt="arrow down" border="0" />
                            </a>
                            <ul id="aboutdply">
                                <li>
                                    <a id="abtUs1" href="/AppOnlineProject/online/profiles">
                                        Profiles
                                    </a>
                                </li>
                                <li>
                                    <a id="abtUs2" href="/AppOnlineProject/online/whoAreWe">PSP Division</a>
                                </li>
                                <li>
                                    <a id="abtUs2" href="/AppOnlineProject/online/knowPassportSeva">Passport Seva</a>
                                </li>
                            </ul>
                        </li>
                        <li style={{ width: '140px' }} id="passportoffices" onkeyup="abouthide(),passportdis(event)">
                            <a id="passOffice" href="#">
                                Passport Offices&nbsp;
                                <img src={require('../../image/down.gif')} alt="arrow down" border="0" />
                            </a>
                            <ul id="passportdply">
                                <li>
                                    <a id="passportoffices1" href="/AppOnlineProject/online/rpo">
                                        Passport Offices in India
                                    </a>
                                </li>
                                <li>
                                    <a id="passportoffices2" href="/AppOnlineProject/mission/mission">
                                        Mission/Post Abroad
                                    </a>
                                </li>
                            </ul>
                        </li>




                        <li id="rti" style={{ textAlign: 'center', width: ' 90px' }} onkeyup="contacthide()">
                            <a href="/AppOnlineProject/online/rti">
                                RTI
                            </a>
                        </li>
                        <li id="citizenCharter" style={{ textAlign: 'center', width: '135px' }} onkeyup="contacthide()">
                            <a href="/AppOnlineProject/pdf/Citizen_Charter.pdf" target="_blank">
                                Citizens' Charter
                            </a>
                        </li>
                        <li id="contactus" style={{ width: '125px' }} onkeyup="contactdis(event)">
                            <a id="cont" href="#">
                                Contact Us&nbsp;
                                <img src="/AppOnlineProject/images/down.gif" alt="arrow down" border="0" />
                            </a>
                            <ul id="contactdply">
                                <li onkeyup="contpassdis(event)">
                                    <a id="pass" onmouseover="passgp();" href="#">
                                        <img src="/AppOnlineProject/images/left.gif" alt="Left Arrow" border="0" className="contactDiv" />
                                        Passport
                                    </a>

                                    <ul id="pasgp">
                                        <li>
                                            <a id="pass1" href="/AppOnlineProject/online/callCenter">General Information</a>
                                        </li>
                                        <li>
                                            <a id="pass2" href="/AppOnlineProject/online/chiefOfficer">Chief Passport Officer</a>
                                        </li>
                                        <li>
                                            <a id="pass3" href="/AppOnlineProject/online/rpo">Passport Offices</a>
                                        </li>
                                        <li>
                                            <a id="pass5" href="/AppOnlineProject/online/vigilance">Vigilance Unit</a>
                                        </li>

                                    </ul>

                                </li>

                                <li onkeyup="contpasshide()">
                                    <a id="visaoff" href="/AppOnlineProject/online/consularOfficers">Visa Services</a>
                                </li>
                                <li>
                                    <a id="consular" href="/AppOnlineProject/online/consularOfficers">Consular / Visa</a>
                                </li>

                            </ul>


                        </li>
                        <li id="whatsNew" style={{ width: '130px', textAlign: 'center' }} onkeyup="contacthide()">
                            <a href="/AppOnlineProject/online/whatsNew">What's New</a>
                        </li>
                        <li>
                            <form id="searchFormId" name="search" onsubmit="return checkEmpty();" action="/AppOnlineProject/search" method="post">

                                <label for="searchBox">
                                    <input type="text" value="Search..." id="searchBox" name="query" title="Search Box" onfocus="clickclear(this, 'Search...')" onblur="clickrecall(this,'Search...')" maxlength="45" />
                                </label>
                                <div id="button-holder">
                                    <label for="search">
                                        <input type="submit" id="search" title="Search..." value="" style={{ backgroundColor: 'black' }} />
                                    </label>
                                </div>

                            </form>
                        </li>
                    </ul>
                </div>
            </div>












            <div id="sliderb_container" style={{ position: 'relative', width: '635px', height: '258px', overflow: 'hidden' }} jssor-slider="true">
                    {/* <!-- Loading Screen -->
                        <!-- Slides Container -->
                        <!-- ThumbnailNavigator Skin Begin -->
                        <!-- bullet navigator container --> */}
                    <div style={{ position: 'absolute', top: '0px', left: '0px', width: '635px', height: '258px', transformOrigin: '0px 0px 0px', transform: 'scale(1)' }}>
                        <div className="" style={{ position: 'relative', width: '635px', height: '258px', overflow: 'visible', display: 'block', top: '0px', left: '0px' }}>
                            {/* <div u="loading" style={{ position: 'absolute', top: '0px', left: '0px', width: '635px', height: '258px', display: 'none' }} debug-id="loading-container">
                                <div style={{ filter: 'alpha(opacity=70)', opacity: '0.7', position: 'absolute', display: 'block', backgroundColor: ' #000', top: '0px', left: '0px', width: '100%', height: '100%' }}></div>
                                <div className='loadImage' style={{ position: 'absolute', display: 'block', top: '0px', left: '0px', width: '100%', height: '100%' }}></div>
                            </div> */}
                            <div u="slides" style={{ cursor: 'move', position: 'absolute', left: '0px', top: '0px', width: '635px', height: '258px', overflow: 'hidden', zIndex: '0' }}>
                                <div style={{ position: 'absolute', zIndex: '0', pointerEvents: 'none', left: '0px', top: '0px', display: 'none' }} debug-id="slide_container"></div>
                            </div>
                            <div u="slides" style={{ cursor: 'move', position: 'absolute', left: '0px', top: '0px', width: '635px', height: '258px', overflow: 'hidden', zIndex: '0' }} debug-id="slide-board">
                                <div style={{ width: '635px', height: '258px', top: '0px', left: '0px', position: 'absolute', backgroundColor: 'rgb(0, 0, 0)', opacity: '0', display: 'none' }}></div>
                                <div style={{ width: '635px', height: '258px', top: '0px', left: '-635px', position: 'absolute', overflow: 'hidden' }} debug-id="slide-0">
                                    <img u="image" src={require('../../image/slide1.JPG')} border="0" style={{ width: '635px', height: '258px', top: '0px', left: '0px', position: 'absolute' }} jssor-content="true" />
                                    <div u="thumb" style={{ display: 'none' }} jssor-content="true"></div>
                                    {/* <div u="loading" style={{ position: 'absolute', top: ' 0px', left: '0px', width: '635px', height: '258px', zIndex: '1000', display: 'none' }} jssor-content="true">
                                        <div style={{ filter: 'alpha(opacity=70)', opacity: '0.7', position: 'absolute', display: 'block', backgroundColor: '#000', top: '0px', left: '0px', width: '100%', height: '100%' }} jssor-content="true">
                                        </div>
                                        <div className='loadImage' style={{ position: 'absolute', display: 'block', top: '0px', left: '0px', width: '100%', height: '100%' }} jssor-content="true">
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div>
                                    <img u="image" src="/AppOnlineProject/images/5years/slide2.JPG" />
                                    <div u="thumb"></div>
                                </div>
                                <div>
                                    <img u="image" src="/AppOnlineProject/images/5years/slide3.JPG" />
                                    <div u="thumb"></div>
                                </div>

                                <div>
                                    <img u="image" src="/AppOnlineProject/images/5years/Meenakashi_Lekhi.JPG" />
                                    <div u="thumb"></div>
                                </div>

                                <div>
                                    <img u="image" src="/AppOnlineProject/images/5years/Rajkumar_Ranjan_Singh.JPG" />
                                    <div u="thumb"></div>
                                </div> */}
                                <div style={{ width: '635px', height: '258px', top: '0px', left: '0px', position: 'absolute', overflow: 'hidden' }} debug-id="slide-1">
                                    <img u="image" src={require('../../image/slide4.JPG')} border="0" style={{ width: '635px', height: '258px', top: '0px', left: '0px', position: 'absolute' }} jssor-content="true" />
                                    <div u="thumb" style={{ display: 'none' }} jssor-content="true"></div>
                                    {/* <div u="loading" style={{ position: 'absolute', top: '0px', left: '0px', width: '635px', height: '258px', zIndex: '1000', display: 'none' }} jssor-content="true">
                                        <div style={{ filter: 'alpha(opacity=70)', opacity: '0.7', position: 'absolute', display: 'block', backgroundColor: '#000', top: '0px', left: '0px', width: '100%', height: '100%' }} jssor-content="true">
                                        </div>
                                        <div className='loadImage' style={{ position: 'absolute', display: 'block', top: '0px', left: '0px', width: '100%', height: '100%' }} jssor-content="true">
                                        </div>
                                    </div> */}
                                </div>
                                <div style={{ width: '635px', height: '258px', top: '0px', left: '635px', position: 'absolute', overflow: 'hidden' }} debug-id="slide-2">
                                    <img u="image" src={require('../../image/slide5.JPG')} border="0" style={{ width: '635px', height: '258px', top: '0px', left: '0px', position: 'absolute' }} jssor-content="true" />
                                    <div u="thumb" style={{ display: 'none' }} jssor-content="true"></div>
                                    {/* <div u="loading" style="position: absolute, top: 0px, left: 0px, width: 635px, height: 258px, zIndex: 1000, display: none," jssor-content="true">
                                        <div style="filter: alpha(opacity=70), opacity:0.7, position: absolute, display: block, backgroundColor: #000, top: 0px, left: 0px,width: 100%,height:100%," jssor-content="true">
                                        </div>
                                        <div style="position: absolute, display: block, background: url(/AppOnlineProject/images/5years/load.gif) no-repeat center center, top: 0px, left: 0px,width: 100%,height:100%," jssor-content="true">
                                        </div>
                                    </div> */}
                                </div>
                                <div style={{ width: '635px', height: '258px', top: '0px', left: '-635px', position: 'absolute', overflow: 'hidden' }} debug-id="slide-3">
                                    <img u="image" src={require('../../image/slide6.JPG')} border="0" style={{ width: '635px', height: '258px', top: '0px', left: '0px', position: 'absolute' }} jssor-content="true" />
                                    <div u="thumb" style={{ display: 'none' }} jssor-content="true"></div>
                                    {/* <div u="loading" style="position: absolute, top: 0px, left: 0px, width: 635px, height: 258px, zIndex: 1000, display: none," jssor-content="true">
                                        <div style="filter: alpha(opacity=70), opacity:0.7, position: absolute, display: block, backgroundColor: #000, top: 0px, left: 0px,width: 100%,height:100%," jssor-content="true">
                                        </div>
                                        <div style="position: absolute, display: block, background: url(/AppOnlineProject/images/5years/load.gif) no-repeat center center, top: 0px, left: 0px,width: 100%,height:100%," jssor-content="true">
                                        </div>
                                    </div> */}
                                </div>
                                <div style={{ width: '635px', height: '258px', top: '0px', left: '-635px', position: 'absolute', overflow: 'hidden' }} debug-id="slide-4">
                                    <img u="image" src={require('../../image/slide7.JPG')} border="0" style={{ width: '635px', height: '258px', top: '0px', left: '0px', position: 'absolute' }} jssor-content="true" />
                                    <div u="thumb" style={{ display: 'none' }} jssor-content="true"></div>
                                    {/* <div u="loading" style="position: absolute, top: 0px, left: 0px, width: 635px, height: 258px, zIndex: 1000, display: none," jssor-content="true">
                                        <div style="filter: alpha(opacity=70), opacity:0.7, position: absolute, display: block, backgroundColor: #000, top: 0px, left: 0px,width: 100%,height:100%," jssor-content="true">
                                        </div>
                                        <div style="position: absolute, display: block, background: url(/AppOnlineProject/images/5years/load.gif) no-repeat center center, top: 0px, left: 0px,width: 100%,height:100%," jssor-content="true">
                                        </div>
                                    </div> */}
                                </div>
                                <div style={{ width: '635px', height: '258px', top: '0px', left: '-635px', position: 'absolute', overflow: 'hidden' }} debug-id="slide-5">
                                    <img u="image" src={require('../../image/slide8.JPG')} border="0" style={{ width: '635px', height: '258px', top: '0px', left: '0px', position: 'absolute' }} jssor-content="true" />
                                    <div u="thumb" style={{ display: 'none' }} jssor-content="true"></div>
                                    {/* <div u="loading" style="position: absolute, top: 0px, left: 0px, width: 635px, height: 258px, zIndex: 1000, display: none," jssor-content="true">
                                        <div style="filter: alpha(opacity=70), opacity:0.7, position: absolute, display: block, backgroundColor: #000, top: 0px, left: 0px,width: 100%,height:100%," jssor-content="true">
                                        </div>
                                        <div style="position: absolute, display: block, background: url(/AppOnlineProject/images/5years/load.gif) no-repeat center center, top: 0px, left: 0px,width: 100%,height:100%," jssor-content="true">
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div u="thumbnavigator" className="sliderb-T" style={{ position: 'absolute', bottom: '0px', left: '0px', height: '0.5px', width: '635px' }} jssor-slider="true">
                                <div style={{ position: 'absolute', top: '0px', left: '0px', width: '635px', height: '0.5px', transformOrigin: ' 0px 0px 0px', transform: 'scale(1)' }}>
                                    <div className="sliderb-T" style={{ position: 'relative', bottom: '0px', left: '0px', height: '0.5px', width: '635px', display: 'block', top: '0px', overflow: 'visible' }}>
                                        <div style={{ filter: 'alpha(opacity=40)', opacity: '0.4', position: 'absolute', display: 'block', backgroundColor: '#000000', top: '0px', left: '0px', width: '100%', height: '100%', }}></div>
                                        <div u="slides" style={{ position: 'absolute', overflow: 'hidden', left: '0px', top: '-0.25px', width: '635px', height: '1px', zIndex: '0', }}>
                                            <div style={{ position: 'absolute', zIndex: '0', pointerEvents: 'none', left: '-638px', top: '0px' }} debug-id="slide_container"></div>
                                        </div>
                                        <div u="slides" style={{position: 'absolute', overflow: 'hidden', left: '0px', top: '-0.25px', width: '635px', height: '1px', zIndex:'0'}} debug-id="slide-board">
                                            <div style={{width: '635px', height: '1px', top: '0px', left: '0px', position: 'absolute', backgroundColor: 'rgb(0, 0, 0)', opacity: '0'}}></div>
                                            <div style={{width: '635px', height: '1px', top: '0px', left: '-638px', position: 'absolute', overflow: 'hidden'}} debug-id="slide-0">
                                                <div u="prototype" style={{position: 'absolute', width: '635px', height: '1px', top: '0', left: '0' }} jssor-content="true" className="">
                                                    <div u="thumb" className="" style={{fontFamily: 'verdana', fontWeight: 'normal', position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', color: 'rgb(255, 255, 255)', lineHeight: '1px', fontSize: '20px', paddingLeft: '20px' }} jssor-content="true"></div>
                                                </div>
                                                <div style={{width: '635px', height: '1px', top: '0px', left: '0px', zIndex: '1000', display: 'none'}} jssor-content="true"></div>
                                            </div>
                                            <div style={{width: '635px', height: '1px', top: '0px', left: '0px', position: 'absolute', overflow: 'hidden'}} debug-id="slide-1">
                                                <div u="prototype" style={{position: 'absolute', width: '635px', height: '1px', top: '0', left: '0'}} jssor-content="true" className="av">
                                                    <div u="thumb" className="" style={{fontFamily: 'verdana', fontWeight: 'normal', position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', color: 'rgb(255, 255, 255)', lineHeight: '1px', fontSize: '20px', paddingLeft: '20px'}} jssor-content="true"></div>
                                                </div>
                                                <div style={{width: '635px', height: '1px', top: '0px', left: '0px', zIndex: '1000', display: 'none'}} jssor-content="true"></div>
                                            </div>
                                            <div style={{width: '635px', height: '1px', top: '0px', left: '638px', position: 'absolute', overflow: 'hidden'}} debug-id="slide-2">
                                                <div u="prototype" style={{position: 'absolute', width: '635px', height: '1px', top: '0', left: '0'}} jssor-content="true" className="">
                                                    <div u="thumb" className="" style={{fontFamily: 'verdana', fontWeight: 'normal', position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', color: 'rgb(255, 255, 255)', lineHeight: '1px', fontSize: '20px', paddingLeft: '20px'}} jssor-content="true"></div>
                                                </div>
                                                <div style={{width: '635px', height: '1px', top: '0px', left: '0px', zIndex: '1000', display: 'none'}} jssor-content="true"></div>
                                            </div>
                                            <div style={{width: '635px', height: '1px', top: '0px', left: '-638px', position: 'absolute', overflow: 'hidden'}} debug-id="slide-3">
                                                <div u="prototype" style={{position: 'absolute', width: '635px', height: '1px', top: '0', left: '0'}} jssor-content="true" className="">
                                                    <div u="thumb" className="" style={{fontFamily: 'verdana', fontWeight: 'normal', position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', color: 'rgb(255, 255, 255)', lineHeight: '1px', fontSize: '20px', paddingLeft: '20px'}} jssor-content="true"></div>
                                                </div>
                                                <div style={{width: '635px', height: '1px', top: '0px', left: '0px', zIndex: '1000', display: 'none'}} jssor-content="true"></div>
                                            </div>
                                            <div style={{width: '635px', height: '1px', top: '0px', left: '-638px', position: 'absolute', overflow: 'hidden'}} debug-id="slide-4">
                                                <div u="prototype" style={{position: 'absolute', width: '635px', height: '1px', top: '0', left: '0'}} jssor-content="true" className="">
                                                    <div u="thumb" className="" style={{fontFamily: 'verdana', fontWeight: 'normal', position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', color: 'rgb(255, 255, 255)', lineHeight: '1px', fontSize: '20px', paddingLeft: '20px'}} jssor-content="true"></div>
                                                </div>
                                                <div style={{width: '635px', height: '1px', top: '0px', left: '0px', zIndex: '1000', display: 'none'}} jssor-content="true"></div>
                                            </div>
                                            <div style={{width: '635px', height: '1px', top: '0px', left: '-638px', position: 'absolute', overflow: 'hidden'}} debug-id="slide-5">
                                                <div u="prototype" style={{position: 'absolute', width: '635px', height: '1px', top: '0', left: '0'}} jssor-content="true" className="">
                                                    <div u="thumb" className="" style={{fontFamily: 'verdana', fontWeight: 'normal', position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', color: 'rgb(255, 255, 255)', lineHeight: '1px', fontSize: '20px', paddingLeft: '20px'}} jssor-content="true"></div>
                                                </div>
                                                <div style={{width: '635px', height: '1px', top: '0px', left: '0px', zIndex: '1000', display: 'none'}} jssor-content="true"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div u="navigator" className="jssorb01" style={{ position: 'absolute', bottom: '8px', right: '10px', width: '122px', height: '12px' }}>
                                <div u="prototype" style={{ position: 'absolute', width: '12px', height: '12px', left: '0px', top: '0px', }} className=""></div>
                                <div u="prototype" style={{ position: 'absolute', width: '12px', height: '12px', left: '22px', top: '0px' }} className="av"></div>
                                <div u="prototype" style={{ position: 'absolute', width: '12px', height: '12px', left: '44px', top: '0px' }} className=""></div>
                                <div u="prototype" style={{ position: 'absolute', width: '12px', height: '12px', left: '66px', top: '0px' }} className=""></div>
                                <div u="prototype" style={{ position: 'absolute', width: '12px', height: '12px', left: '88px', top: '0px' }} className=""></div>
                                <div u="prototype" style={{ position: 'absolute', width: '12px', height: '12px', left: '110px', top: '0px' }} className=""></div>
                            </div>
                            <span u="arrowleft" className="jssora05l" style={{ width: '40px', height: '40px', top: '109px', left: '6px' }}>
                            </span>
                            <span u="arrowright" className="jssora05r" style={{ width: '40px', height: '40px', top: '109px', right: '8px' }}>
                            </span>
                        </div>
                    </div>
                </div>









        </div>
    )
}

export default NavMenuBar
