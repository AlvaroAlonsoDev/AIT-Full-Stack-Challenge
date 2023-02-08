import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Card from '../Components/Card/Card';
import { v4 as uuidv4 } from 'uuid';
import SkeletonLoader from '../Components/Loader/SkeletonLoader';
import { Box } from '@mui/system';
import '@fontsource/roboto/500.css';

export const HomePage = () => {
    const isLoading = useSelector(state => state.loading.set);
    const trending = useSelector(state => state.gifs.trending);
    // console.log(trending)
    const title = 'Most viral gifs'

    return (
        <div>
            <Box sx={{ mt: 1 }}>
                <Typography variant="h2" gutterBottom>
                    {title}
                </Typography>
            </Box>
            {/* {!!isLoading && <Loader />} */}
            {!!isLoading && <SkeletonLoader />}
            <Grid container  spacing={2}>
                {console.log(trending[0])}
                {
                    trending && trending.map(e => {
                        return (
                            <Grid sx={{ mr: 1 }} key={uuidv4()} >
                                <Card gif={e} />
                            </Grid>
                        )
                    })
                }
            </Grid>


        </div>
    )
}
