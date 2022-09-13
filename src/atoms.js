import { atom } from "recoil"

const selection = atom({
    key: 'selectionVal',
    default: 0
})

const projectVal = atom({
    key: 'projectVal',
    default: 0
})

const blogVal = atom({
    key: 'blogVal',
    default: 0
})

export { blogVal, projectVal, selection }