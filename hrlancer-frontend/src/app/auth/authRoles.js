/**
 * Authorization Roles
 */
const authRoles = {
    admin    : ['admin'],
    staff    : ['admin', 'staff'],
    client   : ['admin', 'user'],
    hrlancer : ['admin', 'staff'],
    onlyGuest: []
};

export default authRoles;
