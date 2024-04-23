import React, { useEffect, useState } from 'react'
import './TopNav.scss';

const TopNav = () => {
    const [dates, setDates] = useState();
    const [times, setTimes] = useState()



    useEffect(() => {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setDates(date.toLocaleDateString(undefined, options));
        setTimes(date.toLocaleTimeString());
    }, []);
    return (
        <>
            <div className='container'>
                <h4 style={{ textAlign: 'center' }}>This is not orignal site.  If you are applying, then click this link: <a href='https://portal1.passportindia.gov.in/AppOnlineProject/welcomeLink'>Passport Seva</a></h4>
                <div className='topMostBar'>
                    <div style={{ marginTop: '5px', marginLeft: '7px', flex: '140%' }}>
                        {dates} | {times}
                    </div>

                    <div style={{ marginTop: '5px', alignItems: 'center', marginLeft: '10px', flex: '100%' }}>
                        <a href="#">Skip to main content</a>&nbsp;<span>|</span>
                        <a href="#">Screen Reader Access</a> <span>|</span>
                        <a href="#">Sitemap</a> <span>|</span>

                        <span>Home</span>

                        <a href="#" className="texttoggler" rel="normalview" style={{ fontSize: '11px', marginLeft: '10px' }}>
                            <span title="Decrease Font Size"><strong>A-</strong>
                                <span className="hide">Decrease Font Size</span>
                            </span>
                        </a>

                        <a href="#" rel="normalview" className="texttoggler" style={{ fontSize: '12px', marginLeft: '10px' }}>
                            <span title="Normal Font Size"><strong>A</strong>
                                <span className="hide">Normal Font Size</span>
                            </span>
                        </a>
                        <a href="#" rel="largeview" className="texttoggler" style={{ fontSize: '14px', marginLeft: '10px' }}>
                            <span title="Increase Font Size">
                                <strong>A+</strong>
                                <span className="hide">Increase Font Size</span>
                            </span>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopNav
