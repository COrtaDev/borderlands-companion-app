import { usersUrl, loginUrl, restoreUrl } from "../config";
// import { useDispatch } from 'react-redux';
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const SIGN_IN = "SIGNED_IN";
export const LOG_OUT = "LOG_OUT";

export const getCookieValue = (value) => {
    const match = document.cookie.match("(^|;)\\s*" + value + "\\s*=\\s*([^;]+)");
    return match ? match.pop() : null;
}

export const hasAccessToken = () => async (dispatch) => {
    const token = getCookieValue(ACCESS_TOKEN);
    // console.log(token)
    const res = await fetch(`${restoreUrl}`, {
        headers: { Authorization: "Bearer " + token },
    });
    if (res.ok) {
        const data = await res.json();
        if (data !== null) {
            dispatch({ type: SIGN_IN, token: data.token, user: data.user });
        };
    };
}
