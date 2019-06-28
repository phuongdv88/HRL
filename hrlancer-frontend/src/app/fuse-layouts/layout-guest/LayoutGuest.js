import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {FuseScrollbars, FuseMessage, FuseDialog, FuseSuspense} from '@fuse';
import {renderRoutes} from 'react-router-config'
import {useSelector} from 'react-redux';
import clsx from 'clsx';
import AppContext from 'app/AppContext';
import LeftSideLayoutGuest from './components/LeftSideLayoutGuest';
import ToolbarLayoutGuest from './components/ToolbarLayoutGuest';
import NavbarWrapperLayoutGuest from './components/NavbarWrapperLayoutGuest';
import FooterLayoutGuest from './components/FooterLayoutGuest';
import RightSideLayoutGuest from './components/RightSideLayoutGuest';
import SettingsPanel from 'app/fuse-layouts/shared-components/SettingsPanel';

const useStyles = makeStyles(theme => ({
    root          : {
        position     : 'relative',
        display      : 'flex',
        flexDirection: 'row',
        width        : '100%',
        height       : '100%',
        overflow     : 'hidden',
        '&.boxed'    : {
            maxWidth : 1280,
            margin   : '0 auto',
            boxShadow: theme.shadows[3]
        },
        '&.container': {
            '& .container' : {
                maxWidth: 1120,
                width   : '100%',
                margin  : '0 auto'
            },
            '& .navigation': {}
        }
    },
    content       : {
        display                     : 'flex',
        overflow                    : 'auto',
        flex                        : '1 1 auto',
        flexDirection               : 'column',
        width                       : '100%',
        '-webkit-overflow-scrolling': 'touch',
        zIndex                      : 4
    },
    toolbarWrapper: {
        display : 'flex',
        position: 'relative',
        zIndex  : 5
    },
    toolbar       : {
        display: 'flex',
        flex   : '1 0 auto'
    },
    footerWrapper : {
        position: 'relative',
        zIndex  : 5
    },
    footer        : {
        display: 'flex',
        flex   : '1 0 auto'
    }
}));

function LayoutGuest(props)
{
    const config = useSelector(({fuse}) => fuse.settings.current.layout.config);

    const classes = useStyles(props);

    return (
        <AppContext.Consumer>
            {({routes}) => (
                <div id="fuse-layout" className={clsx(classes.root, config.mode)}>

                    {config.leftSidePanel.display && (
                        <LeftSideLayoutGuest/>
                    )}

                    <div className="flex flex-1 flex-col overflow-hidden relative">

                        {config.toolbar.display && config.toolbar.position === 'above' && (
                            <ToolbarLayoutGuest/>
                        )}

                        {config.navbar.display && (
                            <NavbarWrapperLayoutGuest/>
                        )}

                        {config.toolbar.display && config.toolbar.position === 'below' && (
                            <ToolbarLayoutGuest/>
                        )}

                        <FuseScrollbars className={classes.content}>

                            <FuseDialog/>

                            <div className="flex flex-auto flex-col relative">

                                <FuseSuspense>
                                    {renderRoutes(routes)}
                                </FuseSuspense>

                                {props.children}

                                {config.footer.display && config.footer.style === 'static' && (
                                    <FooterLayoutGuest/>
                                )}

                            </div>

                        </FuseScrollbars>

                        {config.footer.display && config.footer.style === 'fixed' && (
                            <FooterLayoutGuest/>
                        )}

                        <SettingsPanel/>

                    </div>

                    {config.rightSidePanel.display && (
                        <RightSideLayoutGuest/>
                    )}

                    <FuseMessage/>
                </div>)}
        </AppContext.Consumer>
    );
}

export default LayoutGuest;
