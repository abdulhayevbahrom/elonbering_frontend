import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FaTelegram, FaYoutube, FaTiktok } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import logo from '../../assets/logo (2).png'
import { useTranslation } from 'react-i18next'
import Capitalize from '../../hooks/capitalize'
import {Category} from '../../static/categories'

function Footer() {
    const { t } = useTranslation()
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="footer_container_item">
                    <div className="footerLogo">
                        <img src={logo} className="logo" alt="" />
                    </div>
                    <div className="footer_phone">
                        <p>{t("Murojaatuchun")}</p>
                        <a className='phoneNum' href="tel:+998939119572">+998(93) 911-95-72</a>
                    </div>
                    <p className='tos'>{t("footer_tos")}</p>
                </div>
                <div className="footer_container_item">
                    <h2>{t("toifalar")}</h2>
                    {Category().slice(1, Category().length-1).map((item, index) =>
                        <Link className='footer_links_item' key={index} to={item.link}>{Capitalize(item.title)}</Link>
                    )}
                </div>
                <div className="footer_container_item">
                    <h2>{t('boglanish')}</h2>
                    <div className="footer_social_networks">
                        <a target="_blank" rel="noreferrer" className='social_item' href="https://t.me/elonbering_uz"><FaTelegram />Telegram</a>
                        <a target="_blank" rel="noreferrer" className='social_item' href="https://www.instagram.com/elonbering_uz"><RiInstagramFill />Instagram</a>
                        <a target="_blank" rel="noreferrer" className='social_item' href="https://youtube.com/channel/UCO-kphng8ADTfvcwNq7A_6w"><FaYoutube />YouTube</a>
                        <a target="_blank" rel="noreferrer" className='social_item' href="https://www.tiktok.com/@elonbering_uz/video/7120040414282829057?_r=1&u_code=e2dch5m0034k70&preview_pb=0&language=uz&_d=e2dcgk46e2j649&share_item_id=7120040414282829057&source=h5_m&timestamp=1657763618&user_id=7113253047019258885&sec_user_id=MS4wLjABAAAABO4xrRC31Uk0gU6QC3bbyj-_chsMj6s0U1Htg2S3zH6axaA717tvzNCHoNwkv9Dv&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7113253051554006790&share_link_id=d6ffc73f-b038-4e41-b6ee-df27b722eadc&share_app_id=1233&ugbiz_name=Main"><FaTiktok />Tiktok</a>
                    </div>
                </div>
            </div>
            <p className="copyright">
                © CopyRight {new Date().getFullYear()} All right reserved | this template is made with by coding
                with E'LON BERING.UZ Team
            </p>
        </div>
    )
}

export default Footer