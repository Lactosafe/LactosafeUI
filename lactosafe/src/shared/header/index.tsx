import * as  React from 'react';
import './header.scss';
import HeaderIcon from './headerIcon/headerIcon';
import HeaderListItem from './headerList/headerListItem';

const Header:React.FC = () => {
  return (
    <div className='header-container row'>
      <div className='header-log flex-grow-one'>Logo</div>
      <div className='header-action flex-grow-one'><HeaderIcon></HeaderIcon></div>
    </div>
  )
}

export default Header;
