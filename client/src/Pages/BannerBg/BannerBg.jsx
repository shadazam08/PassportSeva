import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './bannerBg.scss'
import Button from 'react-bootstrap/esm/Button';
// Shad Azam
const BannerBg = () => {
    return (
        <div className='container-fluid'>
            <div className="Grey_Banner_BG" style={{ backgroundColor: '#ffffff' }}>
                <div className="Apply_Container">
                    {/* <!--  02       --> */}
                    <div style={{ border: '#0066CC solid 0px', height: '60px', paddingTop: '10px', paddingBottom: '3px' }}>
                        <a href="#" style={{ color: '#ffffff' }}>
                            <Button className="main_button_typ_002">
                                <div style={{ color: '#FFFFFF', fontSize: '16px', textAlign: 'left', verticalAlign: 'middle', position: 'absolute', top: '16px', left: '75px' }}>
                                    New User Registration</div>
                                <div className='imageUser' style={{ position: 'absolute', backgroundRepeat: 'no-repeat', width: '40px', height: '40px', left: '25px', top: '10px' }}></div>
                            </Button>
                        </a>
                    </div>
                    <div style={{ border: '#0066CC solid 0px', height: '60px', paddingTop: '0px', paddingBottom: '3px' }}>
                        <a href="#" style={{ color: '#ffffff' }}>
                            <Button className="main_button_typ_001">
                                <div style={{ color: '#FFFFFF', fontSize: '16px', textAlign: 'left', verticalAlign: 'middle', position: 'absolute', top: '16px', left: '75px' }}>
                                    Existing User Login
                                </div>
                                <div className='imageLogin' style={{ position: 'absolute', backgroundRepeat: 'no-repeat', width: '40px', height: '40px', left: '25px', top: '10px' }}></div>
                            </Button>
                        </a>
                    </div>
                    <div style={{ border: '#0066CC solid 0px', paddingTop: '0px', height: '60px', paddingBottom: '3px' }}>
                        <a href="#" style={{ color: '#ffffff' }}>
                            <Button className="main_button_typ_006">
                                <div style={{ color: '#FFFFFF', fontSize: '16px', textAlign: 'left', verticalAlign: 'middle', position: 'absolute', top: '16px', left: '75px' }}>
                                    Check Appointment Availability</div>
                                <div className='imageCheck' style={{ position: 'absolute', backgroundRepeat: 'no-repeat', width: '40px', height: '40px', left: '25px', top: '10px' }}></div>
                            </Button>
                        </a>
                    </div>
                    <div style={{ border: '#0066CC solid 0px', paddingTop: '0px', height: '60px', paddingBottom: '3px' }}>
                        <a href="#" style={{ color: '#ffffff' }}>
                            <Button className="main_button_typ_005">
                                <div style={{ color: '#FFFFFF', fontSize: '16px', textAlign: 'left', verticalAlign: 'middle', position: 'absolute', top: '16px', left: '75px' }}>
                                    Track Application Status
                                </div>
                                <div className='imageTrack' style={{ position: 'absolute', backgroundRepeat: 'no-repeat', width: '40px', height: '40px', left: '25px', top: '10px' }}></div>
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="sliderb_container" style={{ position: 'relative', height: '270px', overflow: 'hidden' }}>
                    <Carousel data-bs-theme="dark" controls={false} indicators={true}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ height: '270px', top: '0px', left: '0px' }}
                                src={require('../../image/slide1.JPG')}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ height: '270px', top: '0px', left: '0px' }}
                                src={require('../../image/slide2.JPG')}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ height: '270px', top: '0px', left: '0px' }}
                                src={require('../../image/slide3.JPG')}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ height: '270px', top: '0px', left: '0px' }}
                                src={require('../../image/slide4.JPG')}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ height: '270px', top: '0px', left: '0px' }}
                                src={require('../../image/slide5.JPG')}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ height: '270px', top: '0px', left: '0px' }}
                                src={require('../../image/slide6.JPG')}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ height: '270px', top: '0px', left: '0px' }}
                                src={require('../../image/slide7.JPG')}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                style={{ height: '270px', top: '0px', left: '0px' }}
                                src={require('../../image/slide8.JPG')}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default BannerBg
