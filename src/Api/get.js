import { setCategories } from "../redux/features/categorySlice";
import { setSearch, setTrending } from "../redux/features/gifsSlice";
import { setLoading } from "../redux/features/loadingSlice";


export const getTrending = async (server_url, action, api_key, limit, dispatch) => {
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
export const getSearch = async (server_url, action, api_key, limit, value, dispatch) => {
    try {
        dispatch(setLoading(true))
        const res = await fetch(`${server_url}/${action}?api_key=${api_key}&q=${value}&limit=${limit}&offset=0&rating=g&lang=en`);
        const { data } = await res.json();
        // Dispatch
        await dispatch(setSearch(data));
        await dispatch(setLoading(false));
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getcategories = async (server_url, api_key, dispatch) => {
    try {
        dispatch(setLoading(true))
        const res = await fetch(`${server_url}/categories?api_key=${api_key}`);
        const { data } = await res.json();
        console.log(data)
        // Dispatch
        await dispatch(setCategories(data));
        await dispatch(setLoading(false));
        return data;
    } catch (error) {
        console.log(error);
    }
}