import mongoose from "mongoose";
const {Schema, model, models} = mongoose;

const invSchema = new Schema({
    broker: {
      type: String,
    },
    brokerMC: {
      type: Number,
    },
    invoiceNumber: {
      type: Number,
    },
    loadNumber: {
      type: Number,
    },
    accessories: {
      type: Number,
      default: 0
    },
    rate: {
      type: Number,
      defualt: 10000
    },
    dateMonth: {
      type: Number
    },
    dateDay: {
      type: Number
    },
    dateYear: {
      type: Number
    },
    dateWeek: {
      type: Number
    },
    origin: {
      type: String,
    },
    destination: {
      type: String,
    },
    paid: {
      type: Boolean,
      defualt: false
    },
  });
  
  const InvoiceTemp = models.InvoiceTemp || model('InvoiceTemp', invSchema);

  export default InvoiceTemp;