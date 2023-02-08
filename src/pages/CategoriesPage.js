import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Card from '../Components/Card/Card';
import { v4 as uuidv4 } from 'uuid';
import SkeletonLoader from '../Components/Loader/SkeletonLoader';
import { Box } from '@mui/system';
import '@fontsource/roboto/400.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { CardCategory } from '../Components/Card/CardCategory';

export const CategoriesPage = () => {
    const { user } = useAuth0();
    const navigate = useNavigate();
    const isLoading = useSelector(state => state.loading.set);
    const categories = useSelector(state => state.categories.categories);

    const title = 'Categories';
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
                    categories && categories.map(e => {
                        return (
                            <Grid sx={{ mt: 1, mr: 1 }} key={uuidv4()} >
                                <Typography variant="h4">
                                    {(e.name).charAt(0).toUpperCase() + (e.name).slice(1)}
                                </Typography>
                                    <CardCategory gif={e.gif} category={e.name} />
                            </Grid>
                        )
                    })
                }
            </Grid>

        </>
    )
}
