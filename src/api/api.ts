import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "482cc18a-19a0-4ab1-be65-64dee4acdd40"}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        })
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return  response.data
            })
    },
    getUserStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return  response.data
            })
    },
    updateStatus(status: string) {

        return instance.put(`profile/status`, {status: status})
            .then(response => {
                return  response.data
            })
    }
}

export const followAPI = {
    deleteFollow(id: number) {
        return  instance.delete(`follow/${id}`,)
            .then(response => {
                return response.data
            })
    },
    postFollow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    authLogin(email: string, password: string, rememberMe = false ) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    authLogout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}


