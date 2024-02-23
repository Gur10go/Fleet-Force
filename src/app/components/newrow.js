import {useState} from 'react'
import {useRouter} from 'next/navigation'

function Row({invoice, key}){
    const [localInvoice, setLocalInvoice] = useState(invoice);
    const [paid, setPaid] = useState(invoice.paid);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // const invoiceData = {
    //     "invoiceNumber": localInvoice.invoiceNumber,
    //     "date": '12/2/23',
    //     "billTo": localInvoice.broker,
    //     "loadNumber": 1234,
    //     "totalAmount": localInvoice.rate,
    //     "accessories": 0,
    //     "ShipFrom": localInvoice.origin,
    //     "ShipTo": localInvoice.destination
    //   }
      const router = useRouter();
      
      function handleClick(){
        router.push(`/invoice/detail/${localInvoice._id}`)
        console.log(localInvoice._id);
      }
      function decideMon(month){
        return months[month];
      }
      function decideWeek(week){
        return weekDays[week];
      }

    return(
		<>
        <tr key={key} className="border-b border-opacity-20 border-gray-700 bg-gray-900 hover:bg-gray-800 transition duration-300 ease-in-out text-gray-200">
            <td className="p-3 hover:text-sky-400 cursor-pointer" onClick={handleClick}>
                <p>{localInvoice.invoiceNumber}</p>
            </td>
            <td className="p-3">
                <p>{localInvoice.broker}</p>
            </td>
            <td className="p-3">
                <p className="font-bold">{`${localInvoice.dateDay} ${decideMon(localInvoice.dateMonth)} ${localInvoice.dateYear}`}</p>
                <p className="text-gray-400">{`${decideWeek(localInvoice.dateWeek)}`}</p>
            </td>
            <td className="p-3">
                <p>{localInvoice.origin}</p>
            </td>
            <td className="p-3">
                <p>{localInvoice.destination}</p>
            </td>
            <td className="p-3 text-right">
                <p>{`$${localInvoice.rate}`}</p>
            </td>
            <td className="p-3 text-right">
                {
                    paid == true &&
                <span className="px-3 py-1 font-semibold rounded-md bg-green-400 text-gray-900">
                    <span> Paid </span>
                </span>
                }
                 {
                    paid == false &&
                <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                    <span>Pending</span>
                </span>
                }
            </td>
        </tr>
        </>
    )
}

export default Row;