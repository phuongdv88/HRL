import {MaterialUIComponentsNavigation} from 'app/main/documentation/material-ui-components/MaterialUIComponentsNavigation';
import {authRoles} from 'app/auth';

const navigationConfig = [
    {
        'id'      : 'home',
        'title'   : 'Trang chủ',
        'type'    : 'item',
        'icon'    : 'home',
        'url'  : '/home'        
    },
    {
        'id'      : 'jobs',
        'title'   : 'Tìm việc',
        'type'    : 'item',
        'icon'    : 'work',
        'url'      : '/page/jobs'
    },
    {
        'id'      : 'employers',
        'title'   : 'Công ty',
        'type'    : 'item',
        'icon'    : 'web',
        'url'       : '/page/companies'
    },
    {
        'id'      : 'contact',
        'title'   : 'Liên Hệ',
        'type'    : 'item',
        'icon'    : 'email',
        'url'       : '/page/contact'
    },
    {
        'id'      : 'recruiter',
        'title'   : 'Dành cho nhà tuyển dụng',
        'type'    : 'link',
        'icon'    : 'people',
        'url'       : '/page/recruiters'
    }
];

export default navigationConfig;
