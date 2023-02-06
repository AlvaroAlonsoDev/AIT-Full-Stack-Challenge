export const checkUser = async (token, serverUrl, user) => {
    // PETICION AL BACKEND
    // const data_fetchGetUser = await fetchgetUser(serverUrl, user, token);
    // CONDICIONAL - EL BACK NOS DEVUELVE TRUE O FALSE
    // if (data_fetchGetUser) {
    //     console.log('El usuario existe en la bbdd');
        // dispatch(setUserLogged(fetchGetUser.info[0]));
    // } else {
    //     // SI NO EXISTE, CREAR USER CON POST
        console.log('El usuario no existe en la bbdd');
    //     // TENEMOS QUE CREAR ESTE USUARIO
    //     const $user = {
    //         email: user.email,
    //         userData: {
    //             username: user.nickname,
    //             first_name: user.given_name,
    //             last_name: user.family_name,
    //             profilePicture: user.picture,
    //             complete_name: user.name
    //         }
    //     }

        // const fetchNewUser = await fetchPostNewUser(serverUrl, $user, token);
        // dispatch(setUserLogged(fetchNewUser.info));
    // }
}