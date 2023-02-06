import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export const SearchPage = () => {
    const { search } = useParams();

    useEffect(() => {
        // hacer un get con el search
    })
    //* Animals,Sport, Trending, Reaction, Anime, Gaming
    return (
        <div>
            {search}
        </div>
    )
}
