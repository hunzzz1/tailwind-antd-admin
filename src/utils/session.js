import Cookies from 'js-cookie'

const TokenKey = 'X-Token'

export function getAppToken() {
    return Cookies.get(TokenKey)
}

export function setAppToken(token) {
    return Cookies.set(TokenKey, token, { expires: 7 })
}

export function removeAppToken() {
    return Cookies.remove(TokenKey)
}