import connectToDataBase from '/Users/gurpreetsingh/Desktop/TruckPro/truck_pro/src/lib/mongodb.js'
import InvoiceTemp from '/Users/gurpreetsingh/Desktop/TruckPro/truck_pro/src/model/models.js'
import {NextResponse} from 'next/server'
import mongoose from "mongoose";

export async function GET(request, {params: {id}}){
   if(request.method != 'GET'){
    return NextResponse.json({msg:"Method not POST"});
   }
  // const j = await request.json();
  const signal = decodeURIComponent(id);
  let invoiceone;


  try{
     await connectToDataBase().then((d) => {console.log("works")});
     //const invoice = await InvoiceTemp.create(j)//.then((data) => { console.log(data);})
     if (signal == 0) {
      console.log('MongoDB connection is not established.');
    }
     if(signal == 0){
     invoiceone = await InvoiceTemp.find({})
     }
     else{
      invoiceone = await InvoiceTemp.findById(signal)
     }
     console.log(invoiceone);
    return NextResponse.json(invoiceone);
  }
    catch(err){
    return NextResponse.json({err, msg: "some fault"});
  }
}