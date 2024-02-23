'use client'
import {useEffect, useState, useRef } from 'react';
import DatePicker from '../../../components/datePicker'
import SideBar from '../../../components/sidebar';
import { Slider, Switch } from 'antd';

export default function Create({params: {invId}}) {
    const Broker = decodeURIComponent(invId);
    const [invoice, setInvoice] = useState({broker: "", brokerMC: "", invoiceNumber: "", loadNumber: "", accessories: 0, rate: 1000, dateMonth: 0,  dateDay: 0, dateYear: 0, dateWeek: 0, origin: "", destination: "",  paid: false});
    const [date, setDate] = useState(new Date('2023/02/23'));
    const refx = useRef(null);

    const handleChange = (e) => {
      console.log('ao');
      let name = e.target.name;
      let value = e.target.value;
      if(name == "paid"){value = !invoice.paid};
      setInvoice((prevInvoice) => ({
        ...prevInvoice,
        [name]: value,
      }));
    };


    const saveInvoice = async () => {
      try {
        const response = await fetch('/api/postdata', { method: "POST", body: JSON.stringify(invoice)});
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log("cool", data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const handleSubmit = async (e) => {
      //e.preventDefault();
      console.log('here')
      await saveInvoice()
      window.location.reload()
    }

    useEffect(()=>{
      setInvoice((prevInvoice) => ({
        ...prevInvoice,
        ["dateDay"]: date.getDate(),
        ["dateMonth"]: date.getMonth(),
        ["dateYear"]: date.getFullYear(),
        ["dateWeek"]: date.getDay(),
      }));
    }, [date])
  

    return(
        
      <div className="flex h-screen bg-gray-50">
        <SideBar/>
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-semibold= mb-4 text-black">Load Information</h2>
        <form novalidate="" action=""  className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              <div>
                <label for="broker" className="text-sm font-medium text-gray-700">Broker</label>
                <input id="broker" name='broker' value={invoice.broker} type="text" placeholder="Ultra Transport" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:ring focus:border-blue-500" />
                <label for="invoiceNumber" className="text-sm font-medium text-gray-700">Invoice#</label>
                <input id="invoiceNumber" name='invoiceNumber' value={invoice.invoiceNumber} type="number" placeholder="1234" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:ring focus:border-blue-500" />
                <label for="loadNumber" className="text-sm font-medium text-gray-700">PO#</label>
                <input id="loadNumber" name='loadNumber' value={invoice.loadNumber} type="number" placeholder="1234" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:ring focus:border-blue-500" />
                <label for="origin" className="text-sm font-medium text-gray-700">Origin</label>
                <input id="origin" name='origin' value={invoice.origin} type="text" placeholder="Los Angeles,CA" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:ring focus:border-blue-500" />
                <label for="destination" className="text-sm font-medium text-gray-700">Destination</label>
                <input id="destination" name='destination' value={invoice.destination} type="text" placeholder="Sacramento,CA" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:ring focus:border-blue-500" />
                <label for="brokerMC" className="text-sm font-medium text-gray-700">Broker MC</label>
                <input id="brokerMC" name='brokerMC' value={invoice.brokerMC} type="number" placeholder="1234" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:ring focus:border-blue-500" />
                <div className="col-span-1">
                <label for="invoiceDate" className="text-sm font-medium text-gray-700">Date</label>
                <div className="w-full rounded-md focus:ring focus:border-blue-500">
                <DatePicker selectedDate={date} handleDateChange={date=>setDate(date)}/>
                </div>
                </div>
              </div>
              <div>
                <label for="rate" className="text-sm font-medium text-gray-700">Haul Rate</label>
                <input id="rate" name='rate' value={invoice.rate} type="number" placeholder="$" onChange={handleChange}  className="w-full px-3 py-2 border rounded-md focus:ring focus:border-blue-500" />
                <label for="accessories" className="text-sm font-medium text-gray-700">Accessories</label>
                <input id="accessories" name='accessories' value={invoice.accessories} type="number" placeholder="$" onChange={handleChange}  className="w-full px-3 py-2 border rounded-md focus:ring focus:border-blue-500" />
                <label for="notes" className="text-sm font-medium text-gray-700">Notes</label>
                <textarea id="notes" placeholder="" className="w-full px-3 py-2 border rounded-md focus:ring focus:border-blue-500"></textarea>
               <label for="paid" className="inline-flex items-center space-x-4 cursor-pointer text-black">
                  <span>Paid</span>
                  <span className="relative">
                    <input id="paid" name='paid' value={invoice.paid} type="checkbox" onChange={handleChange} className="hidden peer" />
                    <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:bg-violet-400"></div>
                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-violet-400"></div>
                  </span>
              </label>
              </div>
              <div className="flex justify-end mt-6">
          <button type="button" onClick={handleSubmit} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
          </div>
        </form>
      </div>
    </div>
      
    );
}



