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
        'id'      : 'auth',
        'title'   : 'Người dùng',
        'type'    : 'group',
        'icon'    : 'usaccount_boxer',
        'children': [
            {
                'id'   : 'login',
                'title': 'Đăng nhập',
                'type' : 'item',
                'url'  : '/login',
                auth   : authRoles.onlyGuest,
                'icon' : 'lock'
            },
            {
                'id'   : 'register',
                'title': 'Đăng ký',
                'type' : 'item',
                'url'  : '/register',
                auth   : authRoles.onlyGuest,
                'icon' : 'person_add'
            },
        ]
    },
    {
        'type': 'divider'
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
