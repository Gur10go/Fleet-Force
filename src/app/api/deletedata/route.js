import connectToDataBase from '/Users/gurpreetsingh/Desktop/TruckPro/truck_pro/src/lib/mongodb.js'
import InvoiceTemp from '/Users/gurpreetsingh/Desktop/TruckPro/truck_pro/src/model/models.js'
import {NextResponse} from 'next/server'
import mongoose from "mongoose";

export async function DELETE(request){
   if(request.method != 'DELETE'){
    return NextResponse.json({msg:"Method not POST"});
   }
   const j = await request.json();
  //const signal = decodeURIComponent(id);


  try{
     await connectToDataBase().then((d) => {console.log("works")});
     if(j.type == 'all'){
      await InvoiceTemp.deleteMany({});
      return NextResponse.json({msg:'success'});
     }
     else{
     await InvoiceTemp.deleteOne({ _id: j.type });
    return NextResponse.json({msg:'success'});
     }
  }
    catch(err){
    return NextResponse.json({err, msg: "some fault"});
  }
}