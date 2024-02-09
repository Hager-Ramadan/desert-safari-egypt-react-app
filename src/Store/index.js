import { atom } from "recoil";

const oldData = localStorage.getItem('loggedInUser')
export const $Auth_Data = atom({
    key : "$Auth_Data",
    default: {
        isAuth: oldData ? true: false,
        userId: oldData ? oldData.id : null 
    }
})