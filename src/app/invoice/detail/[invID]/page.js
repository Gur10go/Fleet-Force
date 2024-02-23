'use client'
import {React, useEffect, useState} from 'react';
import { useRouter } from 'next/navigation'
import SideBar from '../../../components/sidebar';
import InvoicePDF from '../../../components/InvoicePDF'
function InvoiceDetail({params: {invID}}) {
  const[invoiceData, setInvoiceData] = useState({})
  const id = decodeURIComponent(invID);
  const router = useRouter();


  const getStuff = async () => {
    const reqbody = {
      method: 'GET',
      Headers: {
        Accept: 'application.json',
      },
  };
    const response = await fetch(`/api/fetchdata/${id}`, reqbody);
     const v = await response.json();
     return v;
  }

  useEffect(()=>{
    const res = getStuff();
    res.then((d) => {setInvoiceData(d)});
  }, [])

  async function handleDelete(){
    const reqbody = {
      method: 'DELETE',
      Headers: {
        Accept: 'application.json',
      },
      body: JSON.stringify({type: invoiceData._id})
  };
    const response = await fetch(`/api/deletedata`, reqbody);
     const v = await response.json();
     console.log(v);
     router.push("/invoice");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />
      <div className="flex-1 min-h-screen container p-6 mx-auto sm:p-4">
        <div className="max-w-3xl mx-auto bg-white rounded-md overflow-hidden shadow-md">
          <div className="flex justify-between px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Load Details</h3>
            <button className="text-red-500 hover:text-red-700" onClick={handleDelete}>Delete</button>
          </div> 
          <div className="px-4 divide-y divide-gray-200">
          <div className="px-4">
        <h3 className="text-base font-semibold text-gray-900">Ship Information</h3>
      </div>
      <div className="p-4 border-t border-gray-200">
        <dl className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <dt className="text-sm font-medium text-gray-900">Broker</dt>
            <dd className="mt-1 text-sm text-gray-700">{invoiceData.broker}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-sm font-medium text-gray-900">Broker MC</dt>
            <dd className="mt-1 text-sm text-gray-700">{invoiceData.brokerMC}</dd>
          </div>
        </dl>
      </div>
          </div>
          <div className="px-4 divide-y divide-gray-200">
          <div className="px-4">
        <h3 className="text-base font-semibold text-gray-900">Load Information</h3>
      </div>
      <div className="p-4 border-t border-gray-200">
        <dl className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
            <dt className="text-sm font-medium text-gray-900">Invoice Number</dt>
            <dd className="mt-1 text-sm text-gray-700">{invoiceData.invoiceNumber}</dd>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-medium text-gray-900">Ship From</dt>
            <dd className="mt-1 text-sm text-gray-700">{invoiceData.origin}</dd>
          </div>
          <div className="col-span-1">
            <dt className="text-sm font-medium text-gray-900">Ship To</dt>
            <dd className="mt-1 text-sm text-gray-700">{invoiceData.destination}</dd>
          </div>
        </dl>
      </div>
          </div>
          <div className="px-4 py-5 divide-y divide-gray-200">
          <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Rate Information</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Rate</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${invoiceData.rate}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Accessories</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${invoiceData.accessories}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Total</dt>
            <div className='flex justify-between'>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${invoiceData.rate}</dd>
              {invoiceData.paid == true && <span className="mt-1 text-sm leading-6 text-green-600 sm:mt-0 self-end">Paid</span>}
              {invoiceData.paid == false && <span className="mt-1 text-sm leading-6 text-red-600 sm:mt-0 self-end">Unpaid</span>}
          </div>
          </div>
        </dl>
      </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
        <InvoicePDF invoiceData={invoiceData} className={"bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"}/>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetail;
