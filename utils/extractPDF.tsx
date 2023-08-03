import pdfjsLib from 'pdfjs-dist';

export async function extractTextFromPDF() {
  try {
    const loadingTask = pdfjsLib.getDocument(
      'https://www.africau.edu/images/default/sample.pdf'
    );
    const pdf = await loadingTask.promise;
    const maxPages = pdf.numPages;
    console.log(maxPages);
    return maxPages;
  } catch (error) {
    console.error('Error extracting text:', error);
    return 0;
  }
}
