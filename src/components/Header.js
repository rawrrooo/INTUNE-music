import React from 'react'
import { TbPlaylist } from "react-icons/tb";

import './Header.css'

const Header = ({ onClickPlayList }) => {
    return (
        <div className='player-header'>
            <h3 className='player-title'>
                <img src='mainlogo.png' alt='logo' />
                INTUNE
            </h3>

            <button className='playlist-button' onClick={onClickPlayList}>
                <TbPlaylist />
            </button>
        </div>
    )
}

export default Header