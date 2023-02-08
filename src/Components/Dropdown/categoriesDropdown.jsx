import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function CategoriesDropdown() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (link) => {
        navigate(`/search/${link}`);
        setAnchorEl(null)
    };

    return (
        <div>
            <Button
                variant="secondary"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Most wanted
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => {handleClose("trending")}}>Trending</MenuItem>
                <MenuItem onClick={() => {handleClose("animals")}}>Animals</MenuItem>
                <MenuItem onClick={() => {handleClose("sport")}}>Sport</MenuItem>
                <MenuItem onClick={() => {handleClose("anime")}}>Anime</MenuItem>
                <MenuItem onClick={() => {handleClose("reaction")}}>Reaction</MenuItem>
                <MenuItem onClick={() => {handleClose("gaming")}}>Gaming</MenuItem>
            </Menu>
        </div>
    );
}
