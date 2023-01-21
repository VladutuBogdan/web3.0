import { NavbarItemProps } from './types';

const NavbarItem = ({title, classProps}: NavbarItemProps) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}

export default NavbarItem;
