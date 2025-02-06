import PDFListingView from 'components/listings/PDFListingView';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef, useState } from 'react';

// NO TITLE LINK

const PDFButton = ({ listing, resource }) => {
  const targetRef = useRef();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    if (!targetRef.current || isGenerating) return;

    setIsGenerating(true);

    try {
      const pdf = new jsPDF('p', 'pt', 'a4');
      const element = targetRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        windowWidth: element.scrollWidth,
      });

      // Calculate dimensions to fit A4
      const imgWidth = 595.28; // A4 width in points
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add the canvas as image
      const imgData = canvas.toDataURL('image/jpeg', 1.0);

      // Calculate how many pages we need
      const pageHeight = 841.89; // A4 height in points
      let heightLeft = imgHeight;
      let position = 0;
      const totalPages = Math.ceil(imgHeight / pageHeight);

      // Construct the full URL
      const listingUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.playacarhomes.com'}/${resource}/${listing.slug}`;

      // First page
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);

      // Add additional pages if content is longer
      while (heightLeft > pageHeight) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Add title link to first page
      pdf.setPage(1);

      // Footer positioning and styling
      pdf.setPage(totalPages);
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);

      // Position footer after content
      const lastPageContentHeight = imgHeight % pageHeight;
      const footerStartY = Math.min(lastPageContentHeight + 100, pdf.internal.pageSize.height - 150);

      // Add divider
      pdf.setDrawColor(200, 200, 200);
      pdf.line(40, footerStartY - 20, imgWidth - 40, footerStartY - 20);

      // Footer text
      pdf.text('View this listing online:', 40, footerStartY);

      // Clickable URL
      pdf.setTextColor(0, 0, 255); // Blue color for link
      pdf.textWithLink(listingUrl, 40, footerStartY + 15, { url: listingUrl });

      // Save the PDF
      pdf.save(`${listing.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className='hover:bg-blue-700 inline-flex items-center justify-center gap-x-2 rounded-lg bg-blue px-4 py-3 text-sm font-semibold text-white disabled:pointer-events-none disabled:opacity-50'
      >
        {isGenerating ? (
          <span>Generating PDF...</span>
        ) : (
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
              <polyline points='7 10 12 15 17 10' />
              <line x1='12' y1='15' x2='12' y2='3' />
            </svg>
            Download PDF
          </>
        )}
      </button>

      {/* PDF Content */}
      <div className='fixed left-0 top-[-9999px]' aria-hidden='true'>
        <div ref={targetRef} className='w-[800px] bg-white p-8'>
          <PDFListingView listing={listing} resource={resource} />
        </div>
      </div>
    </>
  );
};

export default PDFButton;

// NO LINKS
// const PDFButton = ({ listing, resource }) => {
//   const targetRef = useRef();
//   const [isGenerating, setIsGenerating] = useState(false);

//   const handleDownload = async () => {
//     if (!targetRef.current || isGenerating) return;

//     setIsGenerating(true);

//     try {
//       const pdf = new jsPDF({
//         orientation: 'p',
//         unit: 'pt',
//         format: 'a4',
//       });

//       // PDF page dimensions
//       const pageWidth = pdf.internal.pageSize.getWidth();
//       const pageHeight = pdf.internal.pageSize.getHeight();
//       const margin = 40;
//       const usableWidth = pageWidth - margin * 2;
//       const usableHeight = pageHeight - margin * 2;

//       // Capture the entire content
//       const canvas = await html2canvas(targetRef.current, {
//         scale: 2,
//         useCORS: true,
//         allowTaint: true,
//         logging: false,
//         windowWidth: targetRef.current.scrollWidth,
//         windowHeight: targetRef.current.scrollHeight,
//       });

//       const imgData = canvas.toDataURL('image/jpeg', 1.0);
//       const imgProps = pdf.getImageProperties(imgData);

//       // Calculate scaling to fit width
//       const imgWidth = usableWidth;
//       const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

//       // Prepare for multi-page rendering
//       let position = 0;
//       let pageNumber = 0;
//       let lastPageAddedHeight = 0;

//       while (position < imgHeight) {
//         // Determine height for this page
//         const remainingHeight = imgHeight - position;
//         const currentPageHeight = Math.min(remainingHeight, usableHeight);

//         // Add page (except for the first iteration)
//         if (pageNumber > 0) {
//           pdf.addPage();
//         }

//         // Add image section
//         pdf.addImage(imgData, 'JPEG', margin, -position + margin, imgWidth, imgHeight);

//         // Track last page's added height
//         lastPageAddedHeight = currentPageHeight;

//         // Move to next section
//         position += usableHeight;
//         pageNumber++;
//       }

//       // Construct the full URL
//       const listingUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.playacarhomes.com'}/${resource}/${listing.slug}`;

//       // Add title link to first page
//       pdf.setPage(1);
//       pdf.textWithLink(listing.title, margin, 120, { url: listingUrl });

//       // Add footer link to the last page, just after the content
//       pdf.setPage(pageNumber);

//       // Calculate Y position for the footer (near the bottom, but not exactly at the bottom)
//       const footerY = Math.min(margin + lastPageAddedHeight + 50, pdf.internal.pageSize.height - 100);

//       // Footer text
//       pdf.setFontSize(10);
//       pdf.setTextColor(100, 100, 100);
//       pdf.text('View this listing online:', margin, footerY);

//       // Clickable URL
//       pdf.setTextColor(0, 0, 255); // Blue color for link
//       pdf.textWithLink(listingUrl, margin, footerY + 15, { url: listingUrl });

//       // Save PDF
//       pdf.save(`${listing.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <>
//       <button
//         onClick={handleDownload}
//         disabled={isGenerating}
//         className='hover:bg-blue-700 inline-flex items-center justify-center gap-x-2 rounded-lg bg-blue px-4 py-3 text-sm font-semibold text-white disabled:pointer-events-none disabled:opacity-50'
//       >
//         {isGenerating ? (
//           <span>Generating PDF...</span>
//         ) : (
//           <>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               width='16'
//               height='16'
//               viewBox='0 0 24 24'
//               fill='none'
//               stroke='currentColor'
//               strokeWidth='2'
//               strokeLinecap='round'
//               strokeLinejoin='round'
//             >
//               <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
//               <polyline points='7 10 12 15 17 10' />
//               <line x1='12' y1='15' x2='12' y2='3' />
//             </svg>
//             Download PDF
//           </>
//         )}
//       </button>

//       {/* PDF Content */}
//       <div className='fixed left-0 top-[-9999px]' aria-hidden='true'>
//         <div ref={targetRef} className='w-[800px] bg-white p-8'>
//           <PDFListingView listing={listing} resource={resource} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default PDFButton;

// const PDFButton = ({ listing, resource }) => {
//   const targetRef = useRef();
//   const [isGenerating, setIsGenerating] = useState(false);

//   const handleDownload = async () => {
//     if (!targetRef.current || isGenerating) return;

//     setIsGenerating(true);

//     try {
//       const pdf = new jsPDF('p', 'pt', 'a4');
//       const element = targetRef.current;
//       const canvas = await html2canvas(element, {
//         scale: 2,
//         useCORS: true,
//         allowTaint: true,
//         logging: false,
//         // @ts-ignore
//         windowWidth: element.scrollWidth,
//       });

//       // Calculate dimensions to fit A4
//       const imgWidth = 595.28; // A4 width in points
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;

//       // Add the canvas as image
//       const imgData = canvas.toDataURL('image/jpeg', 1.0);

//       // Calculate how many pages we need
//       const pageHeight = 841.89; // A4 height in points
//       let heightLeft = imgHeight;
//       let position = 0;

//       // First page
//       pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;

//       // Add additional pages if content is longer
//       while (heightLeft > 0) {
//         position -= pageHeight;
//         pdf.addPage();
//         pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;
//       }

//       // Save the PDF
//       pdf.save(`${listing.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <>
//       <button
//         onClick={handleDownload}
//         disabled={isGenerating}
//         className='hover:bg-blue-700 inline-flex items-center justify-center gap-x-2 rounded-lg bg-blue px-4 py-3 text-sm font-semibold text-white disabled:pointer-events-none disabled:opacity-50'
//       >
//         {isGenerating ? (
//           <span>Generating PDF...</span>
//         ) : (
//           <>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               width='16'
//               height='16'
//               viewBox='0 0 24 24'
//               fill='none'
//               stroke='currentColor'
//               strokeWidth='2'
//               strokeLinecap='round'
//               strokeLinejoin='round'
//             >
//               <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
//               <polyline points='7 10 12 15 17 10' />
//               <line x1='12' y1='15' x2='12' y2='3' />
//             </svg>
//             Download PDF
//           </>
//         )}
//       </button>

//       {/* PDF Content */}
//       <div className='fixed left-0 top-[-9999px]' aria-hidden='true'>
//         <div ref={targetRef} className='w-[800px] bg-white p-8'>
//           <PDFListingView listing={listing} resource={resource} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default PDFButton;
