import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const InvoicePDF = ({ invoiceData, className }) => {
  const generatePdf = () => {
    const docDefinition = {
      content: [
        {
          text: 'Invoice',
          style: 'invoiceLabel',
          margin: [0, 0, 0, 10],
        },
        {
          text: 'OnRoad Logistics',
          style: 'header',
          margin: [0, 0, 0, 5], // Adjusted margin
        },
        {
          text: '3948 E Colony Dr\n Sacramento, CA 83833',
          style: 'Address',
        },
        {
          columns: [
            {
              text: [
                { text: 'Invoice Number: ', bold: true },
                `${invoiceData.invoiceNumber}`,
              ],
              margin: [0, 0, 5, 15],
            },
            {
              text: [
                { text: 'Date: ', bold: true },
                `${invoiceData.dateMonth + 1}/${invoiceData.dateDay}/${invoiceData.dateYear}`,
              ],
              alignment: 'right',
              margin: [0, 0, 0, 5],
            },
          ],
        },
        {
          text: 'Bill To:',
          style: 'subheader',
          margin: [0, 0, 0, 5], // Adjusted margin
        },
        {
          text: `${invoiceData.broker}`,
          margin: [0, 0, 0, 15], // Adjusted margin
        },
        {
          text: 'Invoice Details:',
          style: 'subheader',
          margin: [0, 10, 0, 5],
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto'],
            body: [
              ['Description', 'Rate', 'Accessories'],
              [
                [
                  {
                    text: [{ text: 'Ship From: ', bold: true }, { text: `${invoiceData.origin}`, bold: false }],
                    style: 'subheader',
                  },
                  {
                    text: [{ text: 'Ship To: ', bold: true }, { text: `${invoiceData.destination}`, bold: false }],
                    style: 'subheader',
                  },
                  {
                    text: [{ text: 'Load Number: ', bold: true }, { text: `${invoiceData.loadNumber}`, bold: false }],
                    style: 'subheader',
                  },
                ],
                `$${invoiceData.rate}.00`,
                `$${invoiceData.accessories}.00`,
              ],
            ],
          },
          margin: [0, 10, 0, 10],
        },
        {
          text: [
            { text: 'Total Amount: ', bold: true },
            `$${invoiceData.rate + invoiceData.accessories}.00`,
          ],
          margin: [0, 0, 0, 10],
        },
        {
          text: 'Notes:',
          style: 'subheader',
          margin: [0, 15, 15, 20],
        },
        {
          text: [
            { text: 'Thank you! ', bold: true },
          ],
          style: {fontSize: 14},
          margin: [0, 30, 0, 20],
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 5, 0, 5],
        },
        Address: {
          fontSize: 14,
          bold: false,
          margin: [0, 0, 0, 15],
        },
        invoiceLabel: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 10],
          color: '#3498db',
        },
      },
    };

    pdfMake.createPdf(docDefinition).open();
  };

  return (
    <div className='p-3 text-left'>
      <button className={className} onClick={generatePdf}>
        Generate PDF
      </button>
    </div>
  );
};

export default InvoicePDF;
