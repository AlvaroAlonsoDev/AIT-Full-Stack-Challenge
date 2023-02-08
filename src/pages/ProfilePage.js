import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Card from '../Components/Card/Card';
import { v4 as uuidv4 } from 'uuid';
import SkeletonLoader from '../Components/Loader/SkeletonLoader';
import { Box } from '@mui/system';
import '@fontsource/roboto/500.css';
import { useAuth0 } from '@auth0/auth0-react';


export const ProfilePage = () => {
    const { user } = useAuth0();
    const isLoading = useSelector(state => state.loading.set);
    const comunityGifs = useSelector(state => state.gifs.comunity);
    const ownGifs = comunityGifs.filter(e => e.user.name === user.name)
    console.log(ownGifs);
    const title = 'My own Gifs'
    return (
        <>

            <Box sx={{ mt: 1 }}>
                <Typography variant="h2" gutterBottom>
                    {title}
                </Typography>
            </Box>
            {/* {!!isLoading && <Loader />} */}
            {!!isLoading && <SkeletonLoader />}
            <Grid container spacing={2}>
                {
                    ownGifs && ownGifs.map(e => {
                        return (
                            <Grid sx={{ mr: 1 }} key={uuidv4()} >
                                <Card gif={e} />
                            </Grid>
                        )
                    })
                }
            </Grid>

        </>
    )
}
