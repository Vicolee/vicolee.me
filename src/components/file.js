/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable prefer-spread */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../files/resume.pdf';
import dso_internship_report from '../files/dso_internship_report.pdf';
import coinhako_testimonial from '../files/coinhako_testimonial.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function File(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const dict = {
    resume,
    coinhako_testimonial,
    dso_internship_report,
  };

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }

  console.log(props.match.params.filename);

  return (
    <div className="file">
      <br />
      <Document
        file={dict[props.match.params.filename]}
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
