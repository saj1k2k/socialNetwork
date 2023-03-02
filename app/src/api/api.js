import axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "30241101-9fd0-486b-a397-ea93116b0862"
	}
})

export const usersAPI = {
	getUsers(currentPage= 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
					return response.data;
				})
			}
}
