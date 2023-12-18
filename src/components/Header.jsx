import { IconButton } from '@mui/material';
import './header.css'

import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
  return (
    <header>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>

      <img
        className='header__logo'
        src="./tinder.png"
        alt="" />

      <IconButton>
        <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
    </header>
  )
}

export default Header