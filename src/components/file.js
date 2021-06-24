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
    setNumPages(numPages);
  }

  return (
    <div className="file">
      <br />
      <Document
        file="https://static1.squarespace.com/static/5c0ee8ceaa49a1ceb598befc/t/5f59921800cf8679baf2fa5d/1599705624520/Resume_Kathy+Dong.pdf"
        // file={`/src/files/${props.match.params.filename}.pdf`}
        onLoadSuccess={({ numPages }) => { onDocumentLoadSuccess(numPages); }}
        renderAnnotationLayer="false"
        className="document"
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <div>
                <Page pageNumber={page} className="page" />
                <br />
              </div>
            );
          })}
      </Document>
    </div>
  );
}

export default File;
