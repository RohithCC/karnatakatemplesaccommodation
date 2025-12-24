import { FaMapMarkerAlt } from "react-icons/fa";

/* ======================
   DATA (JSON)
====================== */
const templeRoomsData = [
  {
    id: 1,
    name_kn: "ಕರ್ನಾಟಕ ಪ್ರವಾಸಿ ಸೌಧ, ತಿರುಮಲ",
    name_en: "Karnataka Pravasi Saudha, Tirumala",
    location: "ತಿರುಪತಿ",
    image:
      "https://karnatakatemplesaccommodation.com/assets/img/temples/cover/3_karnataka_pravasi_saudha_tirupati_tirumala.webp",
    link: "https://karnatakatemplesaccommodation.com/k/temples/karnataka-pravasi-saudha-tirumala",
  },
  {
    id: 2,
    name_kn: "ಶ್ರೀ ಚಾಮುಂಡೇಶ್ವರಿ ದೇವಸ್ಥಾನದ ವಸತಿ ಗೃಹ",
    name_en: "Sri Chamundeshwari Temple Accommodation",
    location: "ಮೈಸೂರು",
    image:
      "https://karnatakatemplesaccommodation.com/assets/img/temples/cover/22_chamundi-hill.webp",
    link: "https://karnatakatemplesaccommodation.com/k/temples/sri-chamundeshwari-temple-accommodation-chamundi-hill",
  },
  {
    id: 3,
    name_kn: "ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಮಣ್ಯ ದೇವಸ್ಥಾನದ ವಸತಿ ಗೃಹ",
    name_en: "Kukke Shree Subrahmanya Temple Accommodation",
    location: "ದಕ್ಷಿಣ ಕನ್ನಡ",
    image:
      "https://karnatakatemplesaccommodation.com/assets/img/temples/cover/21_Kukke-Shree-Subrahmanya.webp",
    link: "https://karnatakatemplesaccommodation.com/k/temples/kukke-shree-subrahmanya-temple",
  },
  {
    id: 4,
    name_kn: "ಶ್ರೀ ಶ್ರೀಕಂಠೇಶ್ವರಸ್ವಾಮಿ ದೇವಸ್ಥಾನದ ವಸತಿ ಗೃಹ",
    name_en: "Sri Srikanteshwaraswamy Temple Accommodation",
    location: "ಮೈಸೂರು",
    image:
      "https://karnatakatemplesaccommodation.com/assets/img/temples/cover/23_sri-srikanteshwaraswamy-temple-accommodation.webp",
    link: "https://karnatakatemplesaccommodation.com/k/temples/sri-srikanteshwaraswamy-temple-accommodation",
  },
  {
    id: 5,
    name_kn: "ಶ್ರೀ ರೇಣುಕಾ ಎಲ್ಲಮ್ಮ ದೇವಸ್ಥಾನದ ವಸತಿ ಗೃಹ, ಸವದತ್ತಿ",
    name_en: "Sri Renuka Yellamma Temple Accommodation",
    location: "ಬೆಳಗಾವಿ",
    image:
      "https://karnatakatemplesaccommodation.com/assets/img/temples/cover/24_Sri-Renuka-Yellamma-temple.webp",
    link: "https://karnatakatemplesaccommodation.com/k/temples/sri-renuka-yellamma-temple-accommodation-saundatti",
  },
  {
    id: 6,
    name_kn: "ಶ್ರೀ ಮಂಜುನಾಥ ದೇವಸ್ಥಾನ ವಸತಿ ಗೃಹ, ಕದ್ರಿ",
    name_en: "Shree Manjunatha Temple Accommodation, Kadri",
    location: "ದಕ್ಷಿಣ ಕನ್ನಡ",
    image:
      "https://karnatakatemplesaccommodation.com/assets/img/temples/cover/12_Shree-Manjunatha-Temple.webp",
    link: "https://karnatakatemplesaccommodation.com/k/temples/shree-manjunatha-temple-kadri",
  },
  {
    id: 7,
    name_kn: "ಶ್ರೀ ಮೂಕಾಂಬಿಕಾ ದೇವಸ್ಥಾನದ ವಸತಿ ಗೃಹ, ಕೊಲ್ಲೂರು",
    name_en: "Sri Mookambika Temple Accommodation",
    location: "ಉಡುಪಿ",
    image:
      "https://karnatakatemplesaccommodation.com/assets/img/temples/cover/25_Sri-Mookambika-Temple.webp",
    link: "https://karnatakatemplesaccommodation.com/k/temples/sri-mookambika-temple-accommodation-kollur",
  },
  {
    id: 8,
    name_kn: "ಶ್ರೀ ಘಾಟಿ ಸುಬ್ರಮಣ್ಯ ದೇವಸ್ಥಾನದ ವಸತಿ ಗೃಹ",
    name_en: "Shri Ghati Subrahmanya Temple Accommodation",
    location: "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ",
    image:
      "https://karnatakatemplesaccommodation.com/assets/img/temples/cover/17_Shri-Ghati-Subrahmanya-Temple.webp",
    link: "https://karnatakatemplesaccommodation.com/k/temples/shri-ghati-subrahmanya-temple",
  },
  {
    id: 9,
    name_kn: "ಶ್ರೀ ಕೆಂಗಲ್ ಆಂಜನೇಯಸ್ವಾಮಿ ದೇವಸ್ಥಾನದ ವಸತಿ ಗೃಹ",
    name_en: "Sri Kengal Anjaneya Swamy Temple Accommodation",
    location: "ರಾಮನಗರ",
    image:
      "https://karnatakatemplesaccommodation.com/assets/img/temples/cover/14_Sri-Kengal-Anjaneya-Swamy-Temple.webp",
    link: "https://karnatakatemplesaccommodation.com/k/temples/sri-kengal-anjaneya-swamy-temple-accommodation",
  },
  {
    id: 10,
    name_kn: "ಶ್ರೀ ಹುಲಿಗೆಮ್ಮ ದೇವಸ್ಥಾನದ ವಸತಿ ಗೃಹ",
    name_en: "Sri Huligemma Temple Accommodation",
    location: "ಕೊಪ್ಪಳ",
    image:
      "https://karnatakatemplesaccommodation.com/assets/img/temples/cover/20_Sri-Huligemma-Temple.webp",
    link: "https://karnatakatemplesaccommodation.com/k/temples/sri-huligemma-temple",
  },
  {
    id: 11,
    name_kn: "ಶ್ರೀ ಮಹಿಷಮರ್ದಿನಿ ದೇವಾಲಯ ವಸತಿ, ನೀಲಾವರ",
    name_en: "Shri Mahishamardini Temple Accommodation",
    location: "ಉಡುಪಿ",
    image:
      "https://karnatakatemplesaccommodation.com/assets/img/temples/cover/32_Shri_Mahishamardini_Temple_Neelavara.webp",
    link: "https://karnatakatemplesaccommodation.com/k/temples/shri-mahishamardini-temple-accommodation-neelavara",
  },
  {
    id: 12,
    name_kn: "ಶ್ರೀ ಸುಗುರೆಶ್ವರ ದೇವಸ್ಥಾನದ ವಸತಿ ಗೃಹ",
    name_en: "Sri Sugureshwara Temple Accommodation",
    location: "ರಾಯಚೂರು",
    image:
      "https://karnatakatemplesaccommodation.com/assets/img/temples/cover/9_sugur1_rotated_cropped.webp",
    link: "https://karnatakatemplesaccommodation.com/k/temples/sri-sugureshwara-temple",
  },
];







/* ======================
   CARD COMPONENT
====================== */
function TempleCard({ temple }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={temple.image}
        alt={temple.name_en}
        className="w-full h-56 object-cover"
        loading="lazy"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-sm text-gray-900 leading-snug">
          {temple.name_kn}
        </h3>

        <div className="flex items-center text-sm text-gray-600 gap-1">
          <FaMapMarkerAlt className="text-gray-500" />
          <span>{temple.location}</span>
        </div>

        <button
          type="button"
          className="mt-2 bg-red-700 text-white px-4 py-2 rounded text-sm hover:bg-red-800 transition"
        >
          ಇಲ್ಲಿ ಬುಕ್ ಮಾಡಿ
        </button>
      </div>
    </div>
  );
}

/* ======================
   MAIN COMPONENT
====================== */
export default function TempleRooms() {
  // Defensive check (never crash)
  if (!Array.isArray(templeRoomsData)) {
    return (
      <div className="text-center py-10 text-red-600">
        Invalid temple data
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templeRoomsData.map((temple) => (
          <TempleCard key={temple.id} temple={temple} />
        ))}
      </div>
    </section>
  );
}
