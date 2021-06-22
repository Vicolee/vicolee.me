/* eslint-disable no-shadow */
/* eslint-disable prefer-spread */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function File(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages) {
    // console.log(props.match.params.filename);
    console.log('it loaded!', numPages);
    setNumPages(numPages);
  }

  const displayPages = () => {
    console.log(numPages);
  };

  return (
    <div>
      <Document
        file={`/src/files/${props.match.params.filename}.pdf`}
        onLoadSuccess={({ numPages }) => { onDocumentLoadSuccess(numPages); }}
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <div>
                <Page pageNumber={page} className="resume" />
                <br />;
              </div>
            );
          })}
      </Document>
    </div>
  );
}

export default File;
