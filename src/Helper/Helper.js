import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getTrending } from "../Api/get";
import Loader from "../Components/Loader/Loader";
import { checkUser } from "./functions/checkUser";

export const Helper = () => {
    const dispatch = useDispatch();

    const { getAccessTokenSilently, user } = useAuth0();

    const api_key = process.env.REACT_APP_API_KEY_GIPHY;
    const giphy_url = process.env.REACT_APP_SERVER_URL_GIPHY;
    // const serverUrl = process.env.REACT_APP_SERVER_URL;

    // const isLoading = useSelector(state => state.loading.set);

    useEffect(() => {
        getTrending(giphy_url, "trending", api_key, "100", dispatch)
    }, [api_key, dispatch]);

    useEffect(() => {
        if (user) {
            (async () => {
                // const token = await getAccessTokenSilently();
                checkUser();
            })()
        }
    }, [user]);

}
