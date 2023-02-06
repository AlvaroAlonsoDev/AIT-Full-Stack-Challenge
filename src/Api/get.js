import { setTrending } from "../redux/features/gifsSlice";
import { setLoading } from "../redux/features/loadingSlice";


export const getTrending = async(server_url, action, api_key, limit, dispatch) => {
    try {
        dispatch(setLoading(true))
        const res = await fetch(`${server_url}/${action}?api_key=${api_key}&limit=${limit}&rating=g`);
        const { data } = await res.json();
        // Dispatch
        await dispatch(setTrending(data));
        await dispatch(setLoading(false));
        return data;
    } catch (error) {
        console.log(error);
    }
}