import React from 'react';
import { Icon } from '@material-ui/core';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import Logo from 'app/fuse-layouts/shared-components/Logo';


function NavbarMobileShowMenuGuest(props) {
    return (
        <div className="flex flex-1 justify-between items-center w-full h-full container p-0">
                <div className="flex flex-1 p-2 m-2 my-px">
                    <Logo />
                </div>

                <NavbarMobileToggleButton className="w-40 h-40 p-0">
                    <Icon>menu</Icon>
                </NavbarMobileToggleButton>
        </div>
    );
}

export default NavbarMobileShowMenuGuest;


