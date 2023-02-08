export const uploadCloudinary = async (file, type) => {

    const data = new FormData();
    data.append("file", file[0]);
    data.append("upload_preset", "uploadCloudinary");
    data.append("api_key", process.env.REACT_APP_API_CLOUDINAR);

    const res = await fetch(`https://api.cloudinary.com/v1_1/dtmhsomgg/${type}/upload`, {
        method: "POST",
        body: data,
    });
    const info = await res.json();
    const src = await info.secure_url
    
    return src
}