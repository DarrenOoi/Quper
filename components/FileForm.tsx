import { useState } from 'react';

const FileForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFile && selectedFile !== null) {
      console.log('Selected File:', selectedFile.name);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files ? event.target.files[0] : null);
  };

  return (
    <div className='flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='flex'>
        <input
          type='file'
          className='file-input file-input-bordered w-full max-w-xs mr-2'
          onChange={handleFileChange}
        />
        <button type='submit' className='btn btn-accent'>
          Analyse
        </button>
      </form>
    </div>
  );
};

export default FileForm;
