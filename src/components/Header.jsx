import { BsPeople, BsGear, BsBook } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import styled from 'styled-components';

function Header() {
  return (
    <NavBar>
        <Icons><BsPeople /></Icons>
            <h3>Employees</h3>
        <Icons><HiOutlineMail /></Icons>
            <h3>Invitations</h3>
        <Icons><BsBook /></Icons>
            <h3>Accountability</h3>
        <Icons><BsGear /></Icons>
            <h3>Roles</h3>
    </NavBar>
  );
}

const NavBar = styled.nav`
    display: flex;
    
    h3 {
        margin-bottom: 8px;
        margin-top: 8px;
        font-size: 14px;
    }
`;

const Icons = styled.div`
    margin: 8px 16px;
`;

export default Header;