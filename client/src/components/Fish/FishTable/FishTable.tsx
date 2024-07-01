import { useDirection } from "../../../context/ReadingDirectionContext";
import "./FishTable.css"

interface IFishDetail {
  label: string;
  value: string;
}

interface IFishTable {
  details: IFishDetail[];
}

export default function FishTable({ details }: IFishTable) {
  const { direction } = useDirection();
  return (
    <table className={`${direction === 'rtl' ? 'text-right' : 'text-left'} w-full mt-6 table-auto border-collapse border border-blue-300 rounded-lg shadow-md bg-white`}>
      <thead>
        <tr className="bg-blue-200 text-blue-900">
          <th className="px-4 py-2">Label</th>
          <th className="px-4 py-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {details.map((detail, index) => (
          <tr key={index} className={`${index % 2 === 0 ? 'bg-blue-50' : 'bg-blue-100'} border-t border-blue-300`}>
            <td className="px-4 py-2 font-semibold text-blue-900 border-r border-blue-300">{detail.label}</td>
            <td className="px-4 py-2 text-stone-800">{detail.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}