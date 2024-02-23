import connectToDataBase from '/Users/gurpreetsingh/Desktop/TruckPro/truck_pro/src/lib/mongodb.js'
import InvoiceTemp from '/Users/gurpreetsingh/Desktop/TruckPro/truck_pro/src/model/models.js'
import {NextResponse} from 'next/server'

export async function POST(request){
   if(request.method != 'POST'){
    return NextResponse.json({msg:"Method not POST"});
   }
  const j = await request.json();


  try{
     await connectToDataBase().then((d) => {console.log("works")});
     const invoice = await InvoiceTemp.create(j)//.then((data) => { console.log(data);})
     console.log(invoice)
    return NextResponse.json({msg: "Success"});
  }
    catch(err){
    return NextResponse.json({err, msg: "some fault"});
  }
}