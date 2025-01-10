import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'react-feather';
import { toast } from 'react-toastify';
import { parseFile } from '../../utils/fileParser';

const FileUpload = ({ onUploadSuccess }) => {
    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            try {
                const parsedData = await parseFile(file);
                onUploadSuccess(parsedData);
                toast.success('File uploaded and parsed successfully!');
            } catch (error) {
                toast.error('Error parsing file: ' + error.message);
            }
        }
    }, [onUploadSuccess]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'text/csv': ['.csv'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
        }
    });

    return (
        <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors duration-300">
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            {
                isDragActive ?
                    <p className="mt-2">Drop the file here ...</p> :
                    <p className="mt-2">Drag 'n' drop a CSV or XLSX file here, or click to select files</p>
            }
        </div>
    );
};

export default FileUpload;

