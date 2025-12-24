import { FaMapMarkerAlt } from "react-icons/fa";

export default function TempleCard({ temple }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={temple.image}
        alt={temple.name_en}
        className="w-full h-56 object-cover"
        loading="lazy"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-sm text-gray-900">
          {temple.name_kn}
        </h3>

        <div className="flex items-center text-sm text-gray-600 gap-1">
          <FaMapMarkerAlt />
          {temple.location}
        </div>

        <button className="mt-2 bg-red-700 text-white px-4 py-2 rounded text-sm">
          ಇಲ್ಲಿ ಬುಕ್ ಮಾಡಿ
        </button>
      </div>
    </div>
  );
}
