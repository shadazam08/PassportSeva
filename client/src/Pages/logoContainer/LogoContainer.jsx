import React from 'react'
import './logoContainer.scss';

const LogoContainer = () => {
    return (
        <>
            <div className='container'>
                <div className="Logo_Containter" style={{ height: '97px', margintop: '-6px' }}>
                    <table border="0" cellSpacing="0" cellPadding="0" width="99%" align="center">
                        <tbody>
                            <tr>
                                <td width="2%">
                                    <span className='leftbgImage' style={{ width: '60px', height: '88px', margin: '5px 1px 0px 6px', float: 'left', display: 'inline' }}></span>
                                </td>
                                <td width="32%" height="100">
                                    <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                                        <tbody>
                                            <tr>
                                                <td className="Logo_H1">Passport Seva</td>
                                            </tr>
                                            <tr>
                                                <td className="Logo_H4" style={{ lineHeight: '20px' }}>PSP Division<br />
                                                    Ministry of External Affairs, Government of India
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td width="27%" align="right">
                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td align="right" valign="top">
                                                    <span className='rightbgImage' title="Passport Seva" style={{ width: '165px', float: 'right', display: 'inline', height: '73px' }}></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default LogoContainer
