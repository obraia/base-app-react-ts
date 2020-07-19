import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { Container, MenuList, MenuItem, MenuItemName } from './styles';

interface MenuItem {
    name: string;
    route: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Sidebar = (props: { menuItems: MenuItem[] }) => {

    const [isExpanded, setIsExpanded] = useState(true);
    const location = useLocation();

    console.log(location.pathname);

    return (
        <Container className={!isExpanded ? 'closed' : ''}>
            <MenuList>
                {props.menuItems.map(menuItem => (
                    <MenuItem key={menuItem.name} className={menuItem.route === location.pathname ? 'selected' : ''}>
                        <Link to={menuItem.route}>
                            {<menuItem.icon />}
                            <MenuItemName className={!isExpanded ? 'closed' : ''}>{menuItem.name}</MenuItemName>
                        </Link>
                    </MenuItem>
                ))}
            </MenuList>
        </Container>
    );
}

export default Sidebar;