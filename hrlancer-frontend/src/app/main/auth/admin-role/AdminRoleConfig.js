import {authRoles} from 'app/auth';
import AdminRole from './Admin./AdminRole';

export const AdminRoleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth    : authRoles.admin,//['admin']
    routes  : [
        {
            path     : '/auth/admin-role',
            component: AdminRole
        }
    ]
};
