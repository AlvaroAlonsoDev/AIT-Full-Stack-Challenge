import { Box, Grid, Skeleton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { v4 as uuidv4 } from 'uuid';
import { styled } from '@mui/material/styles';

const Image = styled('img')({
    width: '100%',
});

export default function SkeletonLoader() {
    const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3  ];

    return (
        <>
            <Grid container spacing={2}>
                {
                    arreglo.map(e => {
                        return (
                            <Grid item xs={6} md={4} key={uuidv4()}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{ margin: 1 }}>
                                        <Skeleton variant="circular">
                                            <Avatar />
                                        </Skeleton>
                                    </Box>
                                    <Box sx={{ width: '100%' }}>
                                        <Skeleton width="100%">
                                            <Typography>.</Typography>
                                        </Skeleton>
                                    </Box>
                                </Box>
                                <Skeleton variant="rectangular" width="100%">
                                    <div style={{ paddingTop: '57%' }} />
                                </Skeleton>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    );
}