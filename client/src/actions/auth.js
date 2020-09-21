import { restoreUrl } from "../config";
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const SIGN_IN = "SIGNED_IN";
export const LOG_OUT = "LOG_OUT";
/*
This function will allow you to read the cookie saved in localstorage
*/
export const getCookieValue = (value) => {
    const match = document.cookie.match("(^|;)\\s*" + value + "\\s*=\\s*([^;]+)");
    return match ? match.pop() : null;
}
/*
This function will check to see if the token the user has in local storage is valid for the site,
this allows us to keep the user logged-in after refreshing/closing/re-opening the site.
We send a fetch call to the and sent the token in the header. The sever then confirms it as a
valid token otherwise we need to get the user logged back in or signed up...
*/
export const hasAccessToken = () => async (dispatch) => {
    const token = getCookieValue(ACCESS_TOKEN);
    if (!token) return;
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
