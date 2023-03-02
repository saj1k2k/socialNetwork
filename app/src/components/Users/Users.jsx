import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/user.png'
import styles from './users.module.css'

let Users = props => {
	// let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pagesCount = 6

	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div>
			<div>
				{pages.map(p => {
					return (
						<span
							className={props.currentPage === p && styles.selectedPage}
							onClick={e => {
								props.onPageChanged(p)
							}}
						>
							{p}
						</span>
					)
				})}
			</div>
			{props.users.map(u => (
				<div key={u.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + u.id}>
								<img
									src={u.photos.small != null ? u.photos.small : userPhoto}
									className={styles.userPhoto}
									alt='rerere' />
							</NavLink>
						</div>
						<div>
							{u.followed ? (
								<button disabled={props.followingInProgress}
									onClick={() => {

										props.toggleIsFollowingProgress(true)
										axios.delete(`https://social-network.samuraijs.com/api/1.0/follow${u.id}`,
											{
												withCredentials: true, headers: {
													"API-KEY": "30241101-9fd0-486b-a397-ea93116b0862"
												}
											},
										)
											.then(response => {
												if (response.data.resultCode === 0) {
													props.unfollow(u.id)
												}
												props.toggleIsFollowingProgress(false)
											})
									}}>
									Unfollow</button>
							) : (
								<button disabled={props.followingInProgress}
									onClick={() => {
										props.toggleIsFollowingProgress(true)
										axios.post(`https://social-network.samuraijs.com/api/1.0/follow${u.id}`, {}, {
											withCredentials: true, headers: {
												"API-KEY": "30241101-9fd0-486b-a397-ea93116b0862"
											}
										})
											.then(response => {
												if (response.data.resultCode === 0) {
													props.follow(u.id)
												}
											})
										props.toggleIsFollowingProgress(false)

									}}>
									Follow</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</span>
					</span>
				</div >
			))}
		</div >
	)
}

export default Users
