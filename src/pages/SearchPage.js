import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSearch } from '../Api/get';
import Card from '../Components/Card/Card';
import SkeletonLoader from '../Components/Loader/SkeletonLoader';
import { v4 as uuidv4 } from 'uuid';

export const SearchPage = () => {
    const { search } = useParams();
    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.loading.set);
    const searchfor = useSelector(state => state.gifs.search);

    const api_key = process.env.REACT_APP_API_KEY_GIPHY;
    const giphy_url = process.env.REACT_APP_SERVER_URL_GIPHY;



    useEffect(() => {
        // hacer un get con el search
        getSearch(giphy_url, "search", api_key, "100", search, dispatch);
    }, [search]);

    return (
        <div>
            {/* {!!isLoading && <Loader />} */}
            {!!isLoading && <SkeletonLoader />}

            <Grid container sx={{ mt: 1 }} spacing={2}>
                {
                    searchfor && searchfor.map(e => {
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
