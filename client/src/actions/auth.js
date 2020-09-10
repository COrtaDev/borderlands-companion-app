import { usersUrl, loginUrl, restoreUrl } from "../config";
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const SIGN_IN = "SIGNED_IN";
export const LOG_OUT = "LOG_OUT";

export const signUp = (userName, email, password) => async (dispatch) => {
    try {
        const res = await fetch(`${usersUrl}`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName, email, password }),
        });
        if (res.ok) {
            const data = await res.json();
            data.token = data.token.slice(2, data.token.length - 1);
            document.cookie = `${ACCESS_TOKEN}=${data.token}`;
            dispatch({ type: SIGN_IN, token: data.token, user: data.user });
        }
    }
    catch (e) {
        console.error(e);
        throw new Error(e)
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        const res = await fetch(`${loginUrl}`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (res.ok) {
            const data = await res.json();
            // if (data === "Bad Login") return;
            data.token = data.token.slice(2, data.token.length - 1);
            document.cookie = `${ACCESS_TOKEN}=${data.token}`;
            dispatch({ type: SIGN_IN, token: data.token, user: data.user });
        };
    }
    catch (e) {
        console.error(e);
        throw new Error(e)
    };
};

function getCookieValue(value) {
    const match = document.cookie.match("(^|;)\\s*" + value + "\\s*=\\s*([^;]+)");
    return match ? match.pop() : null;
}

export const hasAccessToken = () => async (dispatch) => {
    const token = getCookieValue(ACCESS_TOKEN);
    try {
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
    catch (e) {
        console.error(e)
        throw new Error(e)
    };
};
