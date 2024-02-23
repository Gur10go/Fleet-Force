import {useEffect, useState, useRef} from 'react';
import React, { memo } from 'react';
//import InvoicePDF from './InvoicePDF';
import {useRouter} from 'next/navigation'


  function Row({ invoice, index}) {
    const [localInvoice, setLocalInvoice] = useState(invoice);
    const [paid, setPaid] = useState(localInvoice.paid);
    const router = useRouter();
;
    const invoiceData = {
    "invoiceNumber": localInvoice.invoiceNumber,
    "date": localInvoice.days_hauled,
    "billTo": localInvoice.brokerDetails,
    "loadNumber": localInvoice.loadNumber,
    "totalAmount": localInvoice.rate,
    "accessories": localInvoice.accessories,
    "ShipFrom": localInvoice.origin,
    "ShipTo": localInvoice.destination
  }

    const refi = useRef(null);
    const refb = useRef(null);
    const refo = useRef(null);
    const refd = useRef(null);
    //const refh = useRef(null);
    const refr = useRef(null);

    const data = { 
      broker: localInvoice.broker,
      rate: localInvoice.rate,
      hauled_days:  localInvoice.hauled_days,
      origin: localInvoice.origin,
      destination: localInvoice.destination
  }

  


  async function updatePaid(){
      setPaid(!paid);
  }


  // const getStuff = async () => {
  //   const reqbody = {
  //     method: 'GET',
  //     Headers: {
  //       Accept: 'application.json',
  //     },
  // };
  //   const response = await fetch('/api/fetchdata', reqbody);
  //    const v = await response.json();
  //    return v;
  // }

  // useEffect(() => {
  //   const r = getStuff();
  //   r.then((d) => {setLocalInvoice(d[0])})
  // }, [])

  const more_details = () => {
    router.push(`/invoice/create/${localInvoice.broker}`);
  }


    const handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      let firname = name.slice(0,1);
      let keyname;
      switch(firname) {
            case "b":
              keyname = name.slice(0,6)
              //keynamesliced = keyname.slice(0,6)
              break;
            case "o":
              keyname = name.slice(0,6)
              //keynamesliced = keyname.slice(0,6)
              break;
            case "d":
              keyname = name.slice(0,11)
              //keynamesliced = keyname.slice(0,11)
              break;
            case "h":
              keyname = name.slice(0,11)
              //keynamesliced = keyname.slice(0,11)
              break;
            case "r":
              keyname = name.slice(0,4)
              //keynamesliced = keyname.slice(0,4)
            case "i":
              keyname = name.slice(0,13)
              break;
            default:
              break;
          }
  
      setLocalInvoice((prevLocalInvoice) => ({
        ...prevLocalInvoice,
        [keyname]: value,
      }));
    };


    const handleFocus = (e) => {
      e.target.focus();
    };
  
    return (
      <>
      <tr key={index} className={`hover:bg-gray-100 transition-colors duration-300 ${true == paid && "bg-green-300 hover:bg-green-400"}`}>
      <td className='tabledata py-2 px-4'>
          <input
            ref={refb}
            type="text"
            placeholder="Broker"
            name={`broker${index}`}
            value={localInvoice.broker}
            onChange={handleChange}
            onFocus={handleFocus}
            className="border rounded px-3 py-1 focus:outline-none focus:border-blue-500 bg-white text-black"
          />
        </td>
        <td className='tabledata py-2 px-4'>
          <input
            ref={refi}
            type="Number"
            placeholder="Invoice #"
            name={`invoiceNumber${index}`}
            value={localInvoice.invoiceNumber}
            onChange={handleChange}
            onFocus={handleFocus}
            className="border rounded px-3 py-1 focus:outline-none focus:border-blue-500 bg-white text-black"
          />
        </td>
  
        <td className='tabledata py-2 px-4'>
          <input
            ref={refo}
            type="text"
            placeholder='Origin'
            name={`origin${index}`}
            value={localInvoice.origin}
            onChange={handleChange}
            onFocus={handleFocus}
            className="border rounded px-3 py-1 focus:outline-none focus:border-blue-500 bg-white text-black"
          />
        </td>
  
        <td className='tabledata py-2 px-4'>
          <input
            ref={refd}
            type="text"
            placeholder='Destination'
            name={`destination${index}`}
            value={localInvoice.destination}
            onChange={handleChange}
            onFocus={handleFocus}
            className="border rounded px-3 py-1 focus:outline-none focus:border-blue-500 bg-white text-black"
          />
        </td>

  
        <td className='tabledata py-2 px-4'>
          <input
            ref={refr}
            type="Number"
            placeholder='Rate'
            name={`rate${index}`}
            value={localInvoice.rate}
            onChange={handleChange}
            onFocus={handleFocus}
            className="border rounded px-3 py-1 focus:outline-none focus:border-blue-500 bg-white text-black"
          />
        </td>
        <td>
          {/*<InvoicePDF invoiceData={invoiceData}/>*/}
          <button onClick={more_details}>More Details</button>
        </td>
        <td>
          {true==paid && <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded' onClick={updatePaid}>&#10003;</button>}
          {false==paid && <button className='btn btn-error hover:bg-green-600 text-white font-bold py-2 px-4 rounded' onClick={updatePaid}></button>}
        </td>
      </tr>
      </>
    );
  }

  const MemoizedRow = memo(Row);
  export default MemoizedRow;




//   <div className="overflow-x-auto table-container">
//   <table className="table min-w-full border border-gray-300">
//     <thead className='bg-gray-50 border-b-2 border-gray-200 tableheader bg-slate-800 text-neutral-50'>
//       <tr className='tablerow'>
//         <th className='p-3 text-sm font-semibold border-r'>Broker</th>
//         <th className='p-3 text-sm font-semibold border-r'>Invoice#</th>
//         <th className='p-3 text-sm font-semibold border-r'>Origin</th>
//         <th className='p-3 text-sm font-semibold border-r'>Destination</th>
//         <th className='p-3 text-sm font-semibold border-r'>Rate</th>
//         <th className='p-3 text-sm font-semibold border-r'>Invoice</th>
//         <th className='p-3 text-sm font-semibold border-r'>Paid</th>
//       </tr>
//     </thead>
//     <tbody className='tablebody'>
//       {invoices.map((invoice, index) => (
//         <MemoizedRow invoice={invoice} index={index}/>
//       ))}
//     </tbody>
//   </table>
// </div>

// <button className="btn btn-accent mr-4" onClick={GoHome}>Home</button>
// <button className="btn btn-primary" onClick={Create}>Add Invoice</button>
//"node": "^21.6.1",