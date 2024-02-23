'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function Navbar() {
const router = useRouter();

 function show_invoices(){
  router.push("/invoice");
 }
 function return_home(){
  router.push("/");
 }
function create_invoice(){
  router.push("/invoice/create")
}
  return (
   <>
   <div className="navbar bg-base-100 fixed-top navar">
  <div className="navbar-start">
  <button className='btn btn-ghost text-stone-200' onClick={show_invoices}>Invoices</button>
  <button className='btn btn-ghost text-stone-200' onClick={create_invoice}>Create</button>
  <button className='btn btn-ghost text-stone-200'>Legal</button>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl text-purple-500 clr" onClick={return_home}>Fleet Force</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle clr">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle clr">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item notification"></span>
      </div>
    </button>
  </div>
</div>

   </>
  )
}

export default Navbar