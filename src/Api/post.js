import { setNewOwn } from "../redux/features/gifsSlice";


export const fetchPostGif = async (server_url, gif, token, dispatch) => {
    try {
        const token_done = await token();
        const res = await fetch(`${server_url}/api/gif/new`, {
            method: "POST",
            body: JSON.stringify(gif),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token_done}`
            }
        });
        const { data } = await res.json();
        dispatch(setNewOwn(data));
        return data
    } catch (error) {
        console.log(error);
    }
}