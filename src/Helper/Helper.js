// import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getcategories, getOwnGif, getTrending } from "../Api/get";
// import Loader from "../Components/Loader/Loader";

export const Helper = () => {
    const dispatch = useDispatch();

    // const { getAccessTokenSilently, user } = useAuth0();

    const api_key = process.env.REACT_APP_API_KEY_GIPHY;
    const url_giphy = process.env.REACT_APP_SERVER_URL_GIPHY;
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    // const isLoading = useSelector(state => state.loading.set);

    useEffect(() => {
        getTrending(url_giphy, "trending", api_key, "100", dispatch);
        getcategories(url_giphy, api_key, dispatch);
        getOwnGif(serverUrl, dispatch);
    }, [api_key, dispatch, url_giphy]);

}
