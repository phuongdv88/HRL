import React from 'react';
import {AppBar, Hidden, Icon} from '@material-ui/core';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import Logo from 'app/fuse-layouts/shared-components/Logo';


function NavbarMobileLayoutGuest(props)
{
    return (
        <div className="flex flex-col overflow-hidden">
            <AppBar
                color="primary"
                position="static"
                elevation={0}
                className="flex flex-row items-center flex-shrink h-64 min-h-64 pl-20 pr-12"
            >
                <div className="flex flex-1 pr-8">
                    <Logo/>
                </div>

                <Hidden lgUp>
                    <NavbarMobileToggleButton className="w-40 h-40 p-0">
                        <Icon>menu</Icon>
                    </NavbarMobileToggleButton>
                </Hidden>
            </AppBar>
        </div>
    );
}

export default NavbarMobileLayoutGuest;


