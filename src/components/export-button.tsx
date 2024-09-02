// @ts-ignore
import * as XLSX from "xlsx/xlsx.mjs";

const ExportButton = ({ data }: any) => {
  const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Expenses");
    XLSX.writeFile(wb, "expenses.xlsx");
  };

  return (
    <button onClick={exportToExcel} disabled={!data.length}>
      Export to Excel
    </button>
  );
};

export default ExportButton;
