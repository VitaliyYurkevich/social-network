import {UserType} from "../redux/users-reducer";


export const updateObjectInArray = (items: Array<UserType>, itemId: number, newObjProps: { followed: boolean }) => {
  return   items.map((u) => {
        if (u.id === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}