import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'
import Logo from '../components/Logo/Logo'
import Post from '../components/Posts/Posts'
import PostTwo from '../components/PostsTwo/PostsTwo'
import PostThree from '../components/PostsThree/PostsThree'
// import {getAllposts} from '../posts/hooks/getAllposts'


const Homepage = () =>{

	return(

		<>

			<Logo/>
			<Navbar/>
			<Search/>

			{/*<div className='container-fluid'>
				<div className='row'>
					{getAllposts}
				</div>
			</div>*/}

			{/*metamask wallet etension
			web3.js npm*/}

			<div  className='container-fluid bg-white'>
				<div className='row'>
					<div className={`${styles.menu}`}>
						<div className={`${styles.clip1} text-white`}>
							<i className='bi-playstation fa-3x'></i>
							<div className=''>
								Games
							</div>
						</div>

						<div className={`${styles.clip2}`}>
							<div className={`${styles.pill}`}>
								4
							</div>
							<div className=''>
								Carmia Marshall
							</div>
						</div>

						<div className={`${styles.clip3}`}>
							<div className={`${styles.pill}`}>
								5
							</div>
							<div className=''>
								Anthony Ugo
							</div>
						</div>

						<div className={`${styles.clip4}`}>
							<div className={`${styles.pill}`}>
								1
							</div>
							<div className=''>
								Pelumi Olowookere
							</div>
						</div>

						<div className={`${styles.clip5}`}>
							<div className={`${styles.pill}`}>
								2
							</div>
							<div className=''>
								Nancy derrick
							</div>
						</div>

						<div className={`${styles.clip6}`}>
							<div className={`${styles.pill}`}>
								5
							</div>
							<div className=''>
								Detola Ogungbe
							</div>
						</div>

						<div className={`${styles.clip7}`}>
							<div className={`${styles.pill}`}>
								3
							</div>
							<div className=''>
								Anthony david
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='container-fluid mt-3 bg-white mt-2'>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<div className={`${styles.intro_text} mt-2`}>
							Connect with fellow Cryptobuddies
						</div>
					</div>
				</div>
			</div>

			<div className='container-fluid bg-white'>
				<div className='row justify-content-center'>
					<div className={`${styles.request_wrap}`}>
						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/crb10.jpg'  width='100%'/>
							</div>

							<div className='mt-3 ml-3'>
								Melonie Brown
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>

						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/crb11.jpg' width='100%' />
							</div>

							<div className='mt-3 ml-3'>
								Joy Ifeaojuku
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>

						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/crb22.jpg' width='100%' />
							</div>

							<div className='mt-3 ml-3'>
								Ntare
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>
					</div>

					<div className='mt-3 text-center'>
						See all
					</div>

				</div>
			</div>

			<Post/>

			<div className='container-fluid mt-3 bg-white mt-5'>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<div className={`${styles.intro_text} mt-2`}>
							Connect with fellow Cryptobuddies
						</div>
					</div>
				</div>
			</div>

			<div className='container-fluid bg-white'>
				<div className='row justify-content-center'>
					<div className={`${styles.request_wrap2}`}>
						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/crb21.jpg'  width='100%'/>
							</div>

							<div className='mt-3 ml-3'>
								Melonie Brown
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>

						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/crb21.jpg' width='100%' />
							</div>

							<div className='mt-3 ml-3'>
								Joy Ifeaojuku
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>

						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/crb21.jpg' width='100%' />
							</div>

							<div className='mt-3 ml-3'>
								Ntare
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>

					{/*	<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/man-img2.jpg' width='100%' />
							</div>

							<div className='mt-3 ml-3'>
								Ntare
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>

						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/man-img1.jpg' width='100%' />
							</div>

							<div className='mt-3 ml-3'>
								Ntare
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>*/}
					</div>

					<div className='mt-3 text-center'>
						See all
					</div>

				</div>
			</div>

			<PostTwo/>

						<div  className='container-fluid bg-white'>
				<div className='row'>
					<div className={`${styles.menu}`}>
						<div className={`${styles.clip1} text-white`}>
							<i className='bi-playstation fa-3x'></i>
							<div className=''>
								Games
							</div>
						</div>

						<div className={`${styles.clip2}`}>
							<div className={`${styles.pill}`}>
								4
							</div>
							<div className=''>
								Carmia Marshall
							</div>
						</div>

						<div className={`${styles.clip3}`}>
							<div className={`${styles.pill}`}>
								5
							</div>
							<div className=''>
								Anthony Ugo
							</div>
						</div>

						<div className={`${styles.clip4}`}>
							<div className={`${styles.pill}`}>
								1
							</div>
							<div className=''>
								Pelumi Olowookere
							</div>
						</div>

						<div className={`${styles.clip5}`}>
							<div className={`${styles.pill}`}>
								2
							</div>
							<div className=''>
								Nancy derrick
							</div>
						</div>

						<div className={`${styles.clip6}`}>
							<div className={`${styles.pill}`}>
								5
							</div>
							<div className=''>
								Detola Ogungbe
							</div>
						</div>

						<div className={`${styles.clip7}`}>
							<div className={`${styles.pill}`}>
								3
							</div>
							<div className=''>
								Anthony david
							</div>
						</div>
					</div>
				</div>
			</div>

			<PostThree/>

		</>

	)
}


export default Homepage