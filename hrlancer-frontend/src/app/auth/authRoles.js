/**
 * Authorization Roles
 */
const authRoles = {
    admin    : ['admin'],
    staff    : ['admin', 'staff'],
    client   : ['admin', 'client'],
    hrlancer : ['admin', 'hrlancer'],
    onlyGuest: []
};

export default authRoles;
