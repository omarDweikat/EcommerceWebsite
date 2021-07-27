import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppConfig from './AppConfig';
import AppMenu from './AppMenu';
import AppRightMenu from './AppRightMenu';

import { IconsDemo } from './utilities/IconsDemo';
import { Widgets } from './utilities/Widgets';
import { GridDemo } from './utilities/GridDemo';
import { SpacingDemo } from './utilities/SpacingDemo';
import { ElevationDemo } from './utilities/ElevationDemo';
import { TextDemo } from './utilities/TextDemo';
import { TypographyDemo } from './utilities/TypographyDemo';
import { DisplayDemo } from './utilities/DisplayDemo';
import { FlexBoxDemo } from './utilities/FlexboxDemo';
import { Invoice } from './pages/Invoice';
import { Help } from './pages/Help';
import { EmptyPage } from './pages/EmptyPage';

import PrimeReact from 'primereact/api';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';
import { Login } from './pages/Login';

const App = () => {

    const [layoutMode, setLayoutMode] = useState('slim');
    const [lightMenu, setLightMenu] = useState(true);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [staticMenuMobileActive, setStaticMenuMobileActive] = useState(false);
    const [staticMenuDesktopInactive, setStaticMenuDesktopInactive] = useState(false);
    const [isRTL, setIsRTL] = useState(false);
    const [inlineUser, setInlineUser] = useState(false);
    const [topbarMenuActive, setTopbarMenuActive] = useState(false);
    const [activeTopbarItem, setActiveTopbarItem] = useState(null);
    const [rightPanelMenuActive, setRightPanelMenuActive] = useState(null);
    const [inlineUserMenuActive, setInlineUserMenuActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [topbarColor, setTopbarColor] = useState('layout-topbar-blue');
    const [theme, setTheme] = useState('blue');
    const [configActive, setConfigActive] = useState(false);
    const [inputStyle, setInputStyle] = useState('filled');
    const [ripple, setRipple] = useState(false);

    const menu = [
        {
            label: 'Favorites', icon: 'pi pi-fw pi-home',
            items: [
                { label: 'Empty', icon: 'pi pi-fw pi-home', to: '/' },
            ],
        },
        {
            label: 'Utilities', icon: 'pi pi-fw pi-compass',
            items: [
                { label: 'Elevation', icon: 'pi pi-fw pi-external-link', to: '/elevation' },
                { label: 'Flexbox', icon: 'pi pi-fw pi-directions', to: '/flexbox' },
                { label: 'Icons', icon: 'pi pi-fw pi-search', to: '/icons' },
                { label: 'Widgets', icon: 'pi pi-fw pi-star-o', to: '/widgets' },
                { label: 'Grid System', icon: 'pi pi-fw pi-th-large', to: '/grid' },
                { label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', to: '/spacing' },
                { label: 'Typography', icon: 'pi pi-fw pi-align-center', to: '/typography' },
                { label: 'Text', icon: 'pi pi-fw pi-pencil', to: '/text' },
            ]
        },
        {
            label: 'Pages', icon: 'pi pi-fw pi-copy',
            items: [
                { label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login' },
                { label: 'Error', icon: 'pi pi-fw pi-exclamation-triangle', to: '/error' },
                { label: '404', icon: 'pi pi-fw pi-times', to: '/notfound' },
                { label: 'Access Denied', icon: 'pi pi-fw pi-ban', to: '/access' },
                { label: 'Empty', icon: 'pi pi-fw pi-clone', to: '/empty' }
            ]
        },
    ];

    const routers = [
        { path: '/', component: EmptyPage, exact: true },
        { path: '/login', component: Login },
        { path: '/icons', component: IconsDemo },
        { path: '/widgets', component: Widgets },
        { path: '/grid', component: GridDemo },
        { path: '/spacing', component: SpacingDemo },
        { path: '/elevation', component: ElevationDemo },
        { path: '/typography', component: TypographyDemo },
        { path: '/display', component: DisplayDemo },
        { path: '/flexbox', component: FlexBoxDemo },
        { path: '/text', component: TextDemo },
        { path: '/invoice', component: Invoice },
        { path: '/help', component: Help },
        { path: '/empty', component: EmptyPage },
    ];

    let topbarItemClick;
    let menuClick;
    let rightMenuClick;
    let userMenuClick;
    let configClick = false;

    useEffect(() => {
        if (staticMenuMobileActive) {
            blockBodyScroll();
        }
        else {
            unblockBodyScroll();
        }
    }, [staticMenuMobileActive]);

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    };

    const onRippleChange = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    };

    const onDocumentClick = () => {
        if (!topbarItemClick) {
            setActiveTopbarItem(null);
            setTopbarMenuActive(false);
        }

        if (!rightMenuClick) {
            setRightPanelMenuActive(false);
        }

        if (!userMenuClick && isSlim() && !isMobile()) {
            setInlineUserMenuActive(false);
        }

        if (!menuClick) {
            if (isHorizontal() || isSlim()) {
                setMenuActive(false);
            }

            if (overlayMenuActive || staticMenuMobileActive) {
                hideOverlayMenu();
            }

            unblockBodyScroll();
        }

        if (configActive && !configClick) {
            setConfigActive(false);
        }

        topbarItemClick = false;
        menuClick = false;
        rightMenuClick = false;
        userMenuClick = false;
        configClick = false;
    };

    const onMenuButtonClick = (event) => {
        menuClick = true;
        setTopbarMenuActive(false);
        setRightPanelMenuActive(false);

        if (layoutMode === 'overlay') {
            setOverlayMenuActive(prevOverlayMenuActive => !prevOverlayMenuActive);
        }

        if (isDesktop())
            setStaticMenuDesktopInactive(prevStaticMenuDesktopInactive => !prevStaticMenuDesktopInactive);
        else {
            setStaticMenuMobileActive(prevStaticMenuMobileActive => !prevStaticMenuMobileActive);
            if (staticMenuMobileActive) {
                blockBodyScroll();
            } else {
                unblockBodyScroll();
            }
        }

        event.preventDefault();
    };

    const onTopbarMenuButtonClick = (event) => {
        topbarItemClick = true;
        setTopbarMenuActive(prevTopbarMenuActive => !prevTopbarMenuActive);
        hideOverlayMenu();
        event.preventDefault();
    };

    const onTopbarItemClick = (event) => {
        topbarItemClick = true;

        if (activeTopbarItem === event.item)
            setActiveTopbarItem(null);
        else
            setActiveTopbarItem(event.item);

        event.originalEvent.preventDefault();
    };

    const onMenuClick = () => {
        menuClick = true;
    };

    const onInlineUserClick = () => {
        userMenuClick = true;
        setInlineUserMenuActive(prevInlineUserMenuActive => !prevInlineUserMenuActive);
        setMenuActive(false);
    };

    const onConfigClick = () => {
        configClick = true;
    };

    const onConfigButtonClick = () => {
        setConfigActive(prevConfigActive => !prevConfigActive);
        configClick = true;
    };

    const blockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        }
        else {
            document.body.className += ' blocked-scroll';
        }
    };

    const unblockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        }
        else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };

    const onRightMenuButtonClick = (event) => {
        rightMenuClick = true;
        setRightPanelMenuActive(prevRightPanelMenuActive => !prevRightPanelMenuActive);

        hideOverlayMenu();

        event.preventDefault();
    };

    const onRightMenuClick = () => {
        rightMenuClick = true;
    };

    const hideOverlayMenu = () => {
        setOverlayMenuActive(false);
        setStaticMenuMobileActive(false);
    };

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            hideOverlayMenu();
        }
        if (!event.item.items && (isHorizontal() || isSlim())) {
            setMenuActive(false);
        }
    };

    const onRootMenuItemClick = () => {
        setMenuActive(prevMenuActive => !prevMenuActive);
        setInlineUserMenuActive(false);
    };

    const isDesktop = () => {
        return window.innerWidth > 896;
    };

    const isMobile = () => {
        return window.innerWidth <= 1025;
    };

    const isHorizontal = () => {
        return layoutMode === 'horizontal';
    };

    const isSlim = () => {
        return layoutMode === 'slim';
    };

    const onLayoutModeChange = (layoutMode) => {
        setLayoutMode(layoutMode);
        setStaticMenuDesktopInactive(false);
        setOverlayMenuActive(false);

        if (layoutMode === 'horizontal' && inlineUser) {
            setInlineUser(false)
        }

    };

    const onMenuColorChange = (menuColor) => {
        setLightMenu(menuColor);
    };

    const onThemeChange = (theme) => {
        setTheme(theme);
    };

    const onProfileModeChange = (profileMode) => {
        setInlineUser(profileMode);
    };

    const onOrientationChange = (orientation) => {
        setIsRTL(orientation);
    };

    const onTopbarColorChange = (color) => {
        setTopbarColor(color);
    };

    const layoutClassName = classNames('layout-wrapper', {
        'layout-horizontal': layoutMode === 'horizontal',
        'layout-overlay': layoutMode === 'overlay',
        'layout-static': layoutMode === 'static',
        'layout-slim': layoutMode === 'slim',
        'layout-menu-light': lightMenu,
        'layout-menu-dark': !lightMenu,
        'layout-overlay-active': overlayMenuActive,
        'layout-mobile-active': staticMenuMobileActive,
        'layout-static-inactive': staticMenuDesktopInactive,
        'layout-rtl': isRTL,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': !ripple
    }, topbarColor);

    const inlineUserTimeout = layoutMode === 'slim' ? 0 : { enter: 1000, exit: 450 };

    return (
        <div className={layoutClassName} onClick={onDocumentClick}>
            <AppTopbar topbarMenuActive={topbarMenuActive} activeTopbarItem={activeTopbarItem} inlineUser={inlineUser}
                onRightMenuButtonClick={onRightMenuButtonClick} onMenuButtonClick={onMenuButtonClick}
                onTopbarMenuButtonClick={onTopbarMenuButtonClick} onTopbarItemClick={onTopbarItemClick} />

            <AppRightMenu rightPanelMenuActive={rightPanelMenuActive} onRightMenuClick={onRightMenuClick}></AppRightMenu>

            <div className="layout-menu-container" onClick={onMenuClick}>
                {
                    inlineUser && (
                        <div className="layout-profile">
                            <button type="button" className="p-link layout-profile-button" onClick={onInlineUserClick}>
                                <img src="assets/layout/images/avatar.png" alt="roma-layout" />
                                <div className="layout-profile-userinfo">
                                    <span className="layout-profile-name">Arlene Welch</span>
                                    <span className="layout-profile-role">Design Ops</span>
                                </div>
                            </button>
                            <CSSTransition classNames="p-toggleable-content" timeout={inlineUserTimeout} in={inlineUserMenuActive} unmountOnExit>
                                <ul className={classNames('layout-profile-menu', { 'profile-menu-active': inlineUserMenuActive })}>
                                    <li>
                                        <button type="button" className="p-link">
                                            <i className="pi pi-fw pi-user"></i><span>Profile</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="p-link">
                                            <i className="pi pi-fw pi-cog"></i><span>Settings</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="p-link">
                                            <i className="pi pi-fw pi-envelope"></i><span>Messages</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="p-link">
                                            <i className="pi pi-fw pi-bell"></i><span>Notifications</span>
                                        </button>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </div>
                    )
                }
                <AppMenu model={menu} onMenuItemClick={onMenuItemClick} onRootMenuItemClick={onRootMenuItemClick} layoutMode={layoutMode} active={menuActive} mobileMenuActive={staticMenuMobileActive} />
            </div>

            <div className="layout-main">
                <div className="layout-content">
                    {
                        routers.map((router, index) => {
                            if (router.exact) {
                                return <Route key={`router${index}`} path={router.path} exact component={router.component} />
                            }

                            return <Route key={`router${index}`} path={router.path} component={router.component} />
                        })
                    }
                </div>

                <AppConfig configActive={configActive} onConfigClick={onConfigClick} onConfigButtonClick={onConfigButtonClick}
                    rippleActive={ripple} onRippleChange={onRippleChange} inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
                    theme={theme} onThemeChange={onThemeChange} topbarColor={topbarColor} onTopbarColorChange={onTopbarColorChange}
                    inlineUser={inlineUser} onProfileModeChange={onProfileModeChange} isRTL={isRTL} onOrientationChange={onOrientationChange}
                    layoutMode={layoutMode} onLayoutModeChange={onLayoutModeChange} lightMenu={lightMenu} onMenuColorChange={onMenuColorChange}></AppConfig>

                <AppFooter />
            </div>

            <div className="layout-content-mask"></div>
        </div>
    );

}

export default App;
