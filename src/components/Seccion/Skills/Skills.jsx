import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import Styles from './Skills.module.scss'


function Skills(props) {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
        <div>
            <h1>
                SKILLS
            </h1>
            <List
                sx={{ width: '30%', bgcolor: 'transparent',color: '#0094FF' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" sx={{ bgcolor: 'transparent', color: '#0094FF'}}>
                        Nested List Items
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon sx={{color: '#0094FF'}}>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div >
    );
}

export default Skills;