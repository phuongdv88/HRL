import React from 'react';
import {Button, Icon} from '@material-ui/core';

function PurchaseButton()
{
    return (
        <Button component="a"
                href="https://hrlancer.com"
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                className="normal-case"
                variant="contained"
                color="secondary">
            <Icon className="text-16 mr-4">contacts</Icon>
            <span>Contact us</span>
        </Button>
    );
}

export default PurchaseButton;
