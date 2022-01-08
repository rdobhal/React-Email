import React from 'react'
import SideBarOption from './SideBarOption'
import InboxIcon from '@material-ui/icons/Inbox';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import DraftsIcon from '@material-ui/icons/Drafts';
import DeleteIcon from '@material-ui/icons/Delete';
import './MailSideBar.css'
import { Button } from '@material-ui/core'
import SendMail from './SendMail'
import { useState } from 'react';
import {Link} from 'react-router-dom'


const MailSideBar = () => {
    const[buttonPopup, setButtonPopup] = useState(false)
    return (
        <div className='mailsidebar'>
            <Button className='sidebar__compose' onClick={() => {setButtonPopup(true)}}>Compose Mail</Button>
            <SendMail trigger={buttonPopup} setTrigger={setButtonPopup}/>
            <SideBarOption Icon={InboxIcon} title="Inbox" number={16} />
            <Link to="/sent" style={{textDecoration: 'none', color:'black'}}> <SideBarOption Icon={MailOutlineIcon} title="Sent Mails"/></Link>
            <SideBarOption Icon={LabelImportantIcon} title="Important"/>
            <SideBarOption Icon={DraftsIcon} title="Drafts" number={2} />
            <SideBarOption Icon={DeleteIcon} title="Trash" />
            <div className='categories'>
                <h3>CATEGORIES</h3>
                <ul>
                    <li>Work</li>
                    <li>Documents</li>
                    <li>Social</li>
                    <li>Advertising</li>
                    <li>Clients</li>
                </ul>
            </div>
            <div className='labels'></div>
        </div>
    )
}

export default MailSideBar
