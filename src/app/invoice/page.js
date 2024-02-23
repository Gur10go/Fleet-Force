'use client'
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation'
import Row from '../components/newrow'
import SideBar from '../components/sidebar'

const AllInvoices = () => {
  const [invoices, updateInvoices] = useState([]);
  const [subInvoices, setSubInvoices] = useState([]);
  const [pageNum, setPage] = useState(0)
  const router = useRouter();


  const getStuff = async () => {
    const reqbody = {
      method: 'GET',
      Headers: {
        Accept: 'application.json',
      },
  };
    const response = await fetch(`/api/fetchdata/0`, reqbody);
     const v = await response.json();
     return v;
  }

  useEffect(() => {
    const r = getStuff();
    let arr = [];
    let inarr = [];
    let cntMax = 0;
    r.then((d) => {
      for(let i=0; i<d.length; i++){
        if(cntMax < 10){
        inarr.push(d[i]);
        cntMax++;
        }
        else{
          arr.push(inarr);
          inarr = [];
          inarr.push(d[i]);
          cntMax = 1;
        }
      }
      arr.push(inarr);
      inarr = [];
      console.log(d.length);
      updateInvoices(arr);
      setSubInvoices(arr[0]);
    })
  }, [])

  function handleRight(){
    if(pageNum !== (invoices.length - 1)){
      console.log(subInvoices);
      let newPage = pageNum + 1;
      setPage(newPage);
      setSubInvoices(invoices[newPage])
    }
  }


  function handleLeft(){
    let newPage = pageNum - 1;
    if(pageNum !== 0){
      setPage(newPage);
      setSubInvoices(invoices[newPage])
    }
  }


  return (
  <div className='h-screen flex bg-gray-100'>
    <SideBar/>
      <div className="flex-1 min-h-screen container p-4 mx-auto sm:p-8 text-gray-900">
        <h2 className="mb-6 text-3xl font-bold leading-tight text-black">Invoices</h2>
        <div className="overflow-x-auto rounded-lg shadow-xl bg-white p-6">
          <table className="min-w-full text-sm leading-5">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-800 text-white">
              <tr className="text-left">
                <th className="p-3">Invoice #</th>
                <th className="p-3">Client</th>
                <th className="p-3">Issued</th>
                <th className="p-3">Origin</th>
                <th className="p-3">Destination</th>
                <th className="p-3 text-right">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
            {subInvoices.map((invoice) => (
              <Row invoice={invoice} key={invoice._id}/>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end items-center mt-6">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-indigo-700 mr-2 transition duration-300 ease-in-out" onClick={handleLeft}><span>&#8249;</span></button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-indigo-700 mr-2 transition duration-300 ease-in-out" onClick={handleRight}><span>&#8250;</span></button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AllInvoices;
