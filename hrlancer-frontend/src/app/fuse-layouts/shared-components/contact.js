import React from 'react';
import {IconButton, Tooltip, Typography} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';

function ContactUs()
{
    return (
        <FuseAnimateGroup
            enter={{
                animation: "transition.expandIn"
            }}
            className="hidden sm:flex items-center"
        >
            <Typography variant='caption'> 
            <div>Địa chỉ: Số 12, Ngõ 641, Đường Phạm Văn Đồng, Hà Nội, Việt Nam</div>
            <div> email: contact@swilife.com</div>
            <div> Điện Thoại: 077.88.00.899</div>
            <div> Skype: swilife@outlook.com</div>
            </Typography>
            
        </FuseAnimateGroup>
    );
}

export default ContactUs
;
