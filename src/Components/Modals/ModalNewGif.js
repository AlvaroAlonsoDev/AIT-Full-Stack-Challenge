import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, TextField } from '@mui/material';
import '@fontsource/roboto/400.css';

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchPostGif } from '../../Api/post';
import { useDispatch } from 'react-redux';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalNewGif = ({ open, handleClose }) => {

    const [urlGif, setTitleGif] = React.useState("");
    const [titleGif, setUrlGif] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();
    const server_url = process.env.REACT_APP_SERVER_URL;

    const { user, getAccessTokenSilently } = useAuth0();
    const dispatch = useDispatch();

    const buttonSx = {
        ...(success && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };
    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);
    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);

            const newGif = {
                user: {
                    name: user.name,
                    avatar_url: user.picture
                },
                title: titleGif,
                images: {
                    original: {
                        url: urlGif
                    }
                }
            };
            console.log(server_url);
            fetchPostGif(server_url, newGif, getAccessTokenSilently, dispatch);

            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{
                    width: "auto",
                    p: 1
                }}>
                    <Typography align="center" id="modal-modal-title" variant="h3" component="h2">
                        GIFS Upload
                    </Typography>

                    <Typography align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                        Upload your collection to share on Facebook, Twitter,
                    </Typography>
                    <Typography align="center" id="modal-modal-description" >
                        Instagram, text message, email, & everywhere else.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        mt: 2,
                        width: "auto",
                        height: 280,
                        p: 3
                    }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://media.istockphoto.com/id/1371870517/vector/gif-icon-vector-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration.jpg?s=612x612&w=0&k=20&c=u-_cluxpScK172KDEKe7-KokIIfH8n9JJflznqf7z8o="
                            title="Gif"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gif
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Upload a GIF, MP4, MOV, or WebM.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                fullWidth
                                variant="contained"
                                component="label"
                            >
                                Choose File
                                <input
                                    type="file"
                                    hidden
                                />
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box
                    sx={{
                        width: "auto",
                        height: 300,
                    }}>
                    <Box sx={{
                        p: 3,
                    }}>
                        <Typography id="modal-modal-title" variant="h5" component="h5">
                            Any URL
                        </Typography>
                        <Typography id="modal-modal-title" variant="p" component="h6">
                            We support media URLs from GIPHY, YouTube, Vimeo, & many others!
                        </Typography>
                        <FormControl fullWidth>
                            <Box >
                                <TextField onChange={(e) => setUrlGif(e.target.value)} fullWidth sx={{ mt: 2 }} label="Gif's Name" id="fullWidth" />
                            </Box>
                            <Box >
                                <TextField onChange={(e) => setTitleGif(e.target.value)} fullWidth sx={{ mt: 2 }} label="Enter any media or GIF URL" id="fullWidth" />
                            </Box>
                            <Box sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ mt: 1, mr: 1, position: 'relative' }}>
                                    <Fab
                                        aria-label="save"
                                        color="primary"
                                        sx={buttonSx}
                                        onClick={handleButtonClick}
                                    >
                                        {success ? <CheckIcon /> : <SaveIcon />}
                                    </Fab>
                                    {loading && (
                                        <CircularProgress
                                            size={68}
                                            sx={{
                                                color: green[500],
                                                position: 'absolute',
                                                top: -6,
                                                left: -6,
                                                zIndex: 1,
                                            }}
                                        />
                                    )}
                                </Box>
                                <Box sx={{ mt: 1, position: 'relative' }}>
                                    <Button
                                        variant="contained"
                                        sx={buttonSx}
                                        disabled={loading}
                                        onClick={handleButtonClick}
                                    >
                                        Accept terms
                                    </Button>
                                    {loading && (
                                        <CircularProgress
                                            size={24}
                                            sx={{
                                                color: green[500],
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                marginTop: '-12px',
                                                marginLeft: '-12px',
                                            }}
                                        />
                                    )}
                                </Box>
                            </Box>

                        </FormControl>

                    </Box>
                </Box>
            </Box>
        </Modal >
    )
}
