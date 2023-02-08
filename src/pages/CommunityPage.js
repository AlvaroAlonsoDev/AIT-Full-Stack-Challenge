import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Card from '../Components/Card/Card';
import { v4 as uuidv4 } from 'uuid';
import SkeletonLoader from '../Components/Loader/SkeletonLoader';
import { Box } from '@mui/system';
import '@fontsource/roboto/500.css';

export const CommunityPage = () => {
    const isLoading = useSelector(state => state.loading.set);
    const OwnGifs = useSelector(state => state.gifs.comunity);
    console.log(OwnGifs);
    const title = 'Community Gifs'
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
                    OwnGifs && OwnGifs.map(e => {
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
