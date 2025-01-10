import { useState } from 'react';
import { parseFile } from '../utils/fileParser';

export const useFileUpload = () => {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    const uploadFile = async (file) => {
        setIsUploading(true);
        setUploadError(null);

        try {
            const parsedData = await parseFile(file);
            setIsUploading(false);
            return parsedData;
        } catch (error) {
            setUploadError(error.message);
            setIsUploading(false);
            throw error;
        }
    };

    return { isUploading, uploadError, uploadFile };
};

