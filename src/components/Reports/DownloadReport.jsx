import React from 'react';
import { Download } from 'react-feather';
import { toast } from 'react-toastify';
import { generatePDF } from '../../utils/reportGenerator';

const DownloadReport = ({ transactions, budgets, user }) => {
    const handleDownload = async () => {
        try {
            await generatePDF(transactions, budgets, user);
            toast.success('Report downloaded successfully!');
        } catch (error) {
            toast.error('Error generating report: ' + error.message);
        }
    };

    return (
        <button className="btn btn-primary" onClick={handleDownload}>
            <Download className="mr-2" /> Download Report
        </button>
    );
};

export default DownloadReport;

