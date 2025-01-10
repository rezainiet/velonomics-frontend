import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { formatCurrency, formatDate } from './dataFormatter';

export const generatePDF = (transactions, budgets) => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text('Financial Report', 14, 22);

    // Add date
    doc.setFontSize(11);
    doc.text(`Generated on: ${formatDate(new Date())}`, 14, 30);

    // Transactions table
    doc.setFontSize(14);
    doc.text('Transactions', 14, 40);

    const transactionData = transactions.map(t => [
        formatDate(t.Date),
        t.Description,
        t.Category,
        formatCurrency(t.Amount)
    ]);

    doc.autoTable({
        head: [['Date', 'Description', 'Category', 'Amount']],
        body: transactionData,
        startY: 45,
    });

    // Budget summary
    const currentY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(14);
    doc.text('Budget Summary', 14, currentY);

    const budgetData = budgets.map(b => [
        b.category,
        formatCurrency(b.budget),
        formatCurrency(b.spent),
        formatCurrency(b.budget - b.spent)
    ]);

    doc.autoTable({
        head: [['Category', 'Budget', 'Spent', 'Remaining']],
        body: budgetData,
        startY: currentY + 5,
    });

    // Save the PDF
    doc.save('financial-report.pdf');
};

export const generateCSV = (transactions, budgets) => {
    let csvContent = "data:text/csv;charset=utf-8,";

    // Transactions
    csvContent += "Transactions\n";
    csvContent += "Date,Description,Category,Amount\n";
    transactions.forEach(t => {
        csvContent += `${formatDate(t.Date)},${t.Description},${t.Category},${formatCurrency(t.Amount)}\n`;
    });

    // Add a blank line
    csvContent += "\n";

    // Budget summary
    csvContent += "Budget Summary\n";
    csvContent += "Category,Budget,Spent,Remaining\n";
    budgets.forEach(b => {
        csvContent += `${b.category},${formatCurrency(b.budget)},${formatCurrency(b.spent)},${formatCurrency(b.budget - b.spent)}\n`;
    });

    // Create a download link and trigger the download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "financial-report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

