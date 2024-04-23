import React from 'react'
import { Helmet } from 'react-helmet'
import LogoContainer from '../logoContainer/LogoContainer'
import TopNav from '../navbar/TopNav'
import NavBar from '../navbar/NavBar'
import BannerBg from '../BannerBg/BannerBg'

const HomeLanding = () => {
    return (
        <>
            <Helmet>
                <title>Passport Seva Home | Indian Passport | Passport | Passport Seva Project</title>
            </Helmet>
            <div className='container'>
                <TopNav />
                <LogoContainer />
                <NavBar />
                <BannerBg />
            </div>
        </>
    )
}
export default HomeLanding