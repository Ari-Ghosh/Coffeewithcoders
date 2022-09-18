import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Tooltips = (props) => {
    return (
        <Tooltip title={props.title}>
            <IconButton>
                {props.children}
            </IconButton>
        </Tooltip>
    );
}
export default Tooltips;