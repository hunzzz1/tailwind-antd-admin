import {post} from "@/utils/request.js";


export function loginApp(params) {
    return post("/login", params);
}

export function logoutApp() {
    return post("/logout");
}