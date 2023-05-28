import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (cookieName, value) => {
    cookies.set(cookieName, value);
}

export const getCookie = cookieName => {
    return cookies.get(cookieName);
}

export const removeCookie = cookieName => {
    cookies.remove(cookieName);
}