import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import Card from '../Components/Card/Card';
import Loader from "../Components/Loader/Loader";
import { v4 as uuidv4 } from 'uuid';
import SkeletonLoader from '../Components/Loader/SkeletonLoader';


export const HomePage = () => {
    const isLoading = useSelector(state => state.loading.set);
    const trending = useSelector(state => state.gifs.trending);
    // console.log(trending[0])

    return (
        <div>
            {/* {!!isLoading && <Loader />} */}
            {!!isLoading && <SkeletonLoader />}
            
            <Grid container sx={{ mt: 1 }} spacing={2}>
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
