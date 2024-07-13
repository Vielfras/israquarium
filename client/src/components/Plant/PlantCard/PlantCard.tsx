// PlantCard.tsx

import "./PlantCard.css";
import { IPlant } from "../../../interfaces/IPlant";

interface IPlantCard {
  plantData: IPlant;
}

export default function PlantCard({ plantData }: IPlantCard) {
  const language = 'en'; 
  const langData = plantData.languages[language];

  const details = [
    { label: 'Family', value: langData.family },
    { label: 'Synonyms', value: langData.synonyms },
    { label: 'Etymology', value: langData.etymology },
    { label: 'Distribution', value: langData.distribution },
    { label: 'Notes', value: langData.notes },
    { label: 'Propagation', value: langData.propagation },
    { label: 'Latin Name', value: plantData.latinName },
    { label: 'First Description', value: plantData.firstDescription },
    { label: 'Height', value: plantData.height },
    { label: 'Width', value: plantData.width },
    { label: 'Temperature', value: plantData.temperature },
    { label: 'PH', value: plantData.ph },
    { label: 'Hardness', value: plantData.hardness },
    { label: 'Light', value: plantData.light },
    { label: 'Growth Rate', value: plantData.growthRate },
    { label: 'Placement', value: plantData.placement },
    { label: 'Sources', value: plantData.sources },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-green-50 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-green-900 mb-4">{plantData.name}</h1>
      <div className="">
        {plantData.images.map((image, index) => (
          <img key={index} src={`http://127.0.0.1:3000/api/plant/image/${plantData._id}/${image.src}`} alt={image.alt} className="w-full rounded" />
        ))}
      </div>
      
      <table className="w-full mt-4">
        <tbody>
          {details.map((detail, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
              <td className="font-bold p-2">{detail.label}:</td>
              <td className="p-2">{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}