import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/logonew.jpg'
import tg from '../../assets/tg.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/insta.png'
import tiktok from '../../assets/tik-tok.png'
import { Link } from 'react-router-dom'
import { ImPhone } from 'react-icons/im'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_container">

                <div className="footer_item">
                    <div className="footerLogo">
                        <img src={footerLogo} alt="" />
                        <h2>E'LON BERING.UZ</h2>
                    </div>
                    <p>Mahalliy va biznes reklamalar</p>
                </div>

                <div className="footer_item">
                    <ul>
                        <h2><b>Yo'nalishlar</b></h2>
                        <li><Link to="/avtomobile">Avtomobillar</Link></li>
                        <li><Link to="/houses">Uy-joylar</Link></li>
                        <li><Link to="/mobile">Mobile texnikalar</Link></li>
                        <li><Link to="/maishiyTexnikalar">Maishiy texnikalar</Link></li>
                        <li><Link to="/texnikalar">Qurilish texnikalari</Link></li>
                        <li><Link to="/oziqovqat">Oziq-ovqatlar</Link></li>
                        <li><Link to="/mebel">Mebellar</Link></li>
                        <li><Link to="/ishbor">Ishbor(mi?)</Link></li>
                    </ul>
                </div>

                <div className="footer_item">
                    <h2>Biz bilan bog'laning</h2>
                    <a className='footer_phoneNumber' href="tel:+998942029122"><ImPhone /> +9989420029122</a>
                    <div className="footer_networks">
                        <a target='blank' href="https://t.me/elonbering_uz">
                            <img src={tg} alt="telegram" />
                        </a>
                        <a target='blank' href='https://www.instagram.com/elonbering_uz'>
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a target='blank' href="https://youtube.com/channel/UCO-kphng8ADTfvcwNq7A_6w">
                            <img src={youtube} alt="youtube" />
                        </a>

                        <a target="blank" href="https://www.facebook.com/profile.php?id=100082467521287">
                            <img className='FooterTiktokIcon' src={tiktok} alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <p className="copyright">© CopyRight {new Date().getFullYear()} All right reserved | this template is made with by coding with E'LON BERING_UZ team.</p>
        </div>
    )
}

export default Footer