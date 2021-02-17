import { loginUrl } from '../config';
export const SIGN_IN = "SIGNED_IN";

export const loginUser = (email, password) => async (dispatch) => {
    // loginUrl = 'http://localhost:5000/api/users/login'
    console.log(JSON.stringify({ email, password }))
    const res = await fetch(loginUrl, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
        const data = await res.json();
        console.log(data.user);
        const token = await data.token.slice(2, data.token.length - 1);
        console.log(token)
        const cookie = `${ACCESS_TOKEN}=${token}`;
        const setCookie = new Promise((resolve, reject) => {
            resolve(document.cookie = cookie);
        });
        setCookie
            .then(console.log("fucking dispatch you whore!"),
                dispatch({ type: SIGN_IN, token: data.token, user: data.user }));
    }
}
