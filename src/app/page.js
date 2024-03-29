'use client'
import Navbar from "./components/navbar"
import {useRouter} from 'next/navigation'
import {useState, useEffect} from 'react'


const Homepage = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/examp', {method: "GET"}); // Endpoint from step 1
        console.log("works")
      } catch (error) {
        console.log("no");
      }
    };

    fetchData();
  }, []);

  return (
   <>
   <Navbar/>
   {/* <div className="bg-gray-100 min-h-screen flex items-center justify-centerr">
        <div className="max-w-3xl w-full p-8 bg-white rounded-lg shadow-lg justify-center flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D"
            alt="Homepage Image"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
        </div>
      </div> */}

<div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
	<div className="p-6 space-y-8">
		<main>
			<div className="container mx-auto space-y-16">
				<section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
					<div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 bg-black">
						<span className="block mb-2 text-violet-400">Mamba design system</span>
						<h1 className="text-5xl font-extrabold text-gray-50">Manage With Fleet Force</h1>
						<p className="my-8 text-gray-50">
							<span className="font-medium">Modular and versatile.</span>The ultimate work flow toolkit for trucking.
						</p>
						<form novalidate="" action="" className="self-stretch space-y-3">
							<div>
								<label for="name" className="text-sm sr-only">Your name</label>
								<input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ri border-gray-700" />
							</div>
							<div>
								<label for="lastname" className="text-sm sr-only">Email address</label>
								<input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ri border-gray-700" />
							</div>
							<button className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900">Create Account</button>
						</form>
					</div>
					<img src="https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VtaSUyMHRydWNrfGVufDB8fDB8fHww" alt="" className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500" />
				</section>
				<section>
					<h2 className="text-5xl font-bold lg:text-center text-black mb-8"></h2>
					<div className="grid gap-6 my-16 lg:grid-cols-3">
						<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-500">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">1</div>
							<p className="text-2xl font-semibold">
								<b>Create</b>
							</p>
						</div>
						<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-500">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">2</div>
							<p className="text-2xl font-semibold">
								<b>Manage</b>
							</p>
						</div>
						<div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-500">
							<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">3</div>
							<p className="text-2xl font-semibold">
								<b>Send</b>
							</p>
						</div>
					</div>
				</section>
				<section className="grid gap-6 lg:grid-cols-2">
					<img src="https://plus.unsplash.com/premium_photo-1663950995673-f4916a77ca6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VtaSUyMHRydWNrfGVufDB8fDB8fHww" alt="" className="object-cover w-full rounded-md max-h-96 dark:bg-gray-500" />
					<div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900">
						<img src="https://source.unsplash.com/random/100x100" alt="" className="object-cover w-20 h-20 rounded-full dark:bg-gray-500" />
						<blockquote className="max-w-lg text-lg italic font-medium text-center">"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"</blockquote>
						<div className="text-center dark:text-gray-400">
							<p>Leroy Jenkins</p>
							<p>CEO of Company Co.</p>
						</div>
						<div className="flex space-x-2">
							<button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-50"></button>
							<button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
							<button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
							<button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
						</div>
					</div>
					<div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 dark:bg-gray-900">
						<h2 className="text-5xl font-bold dark:text-gray-50">Create with us</h2>
						<p className="dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt facilis quod accusantium beatae cum nam adipisci reiciendis omnis possimus error quo animi voluptas magni, at incidunt. Nulla ex at ullam corporis quidem adipisci vitae, perferendis dolorem libero minus atque tenetur enim pariatur cupiditate commodi in beatae, ipsa eligendi? Quis, saepe.</p>
					</div>
				</section>
			</div>
		</main>
		<footer>
			<div className="container flex justify-between p-6 mx-auto lg:p-8 bg-gray-900">
				<a rel="noopener noreferrer" href="#" className="font-bold text-white">Fleet Force</a>
				<div className="flex space-x-2 text-white">
					<a aria-label="Email" rel="noopener noreferrer" href="#" className="flex items-center justify-center0">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					<a aria-label="Twitter" rel="noopener noreferrer" href="#" className="flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
							<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
						</svg>
					</a>
					<a aria-label="Github" rel="noopener noreferrer" href="#" className="flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
							<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	</div>
</div>
      </>
  )
}

export default Homepage