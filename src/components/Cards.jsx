const cards = [
  {
    title: "ಕರ್ನಾಟಕ ಪ್ರವಾಸಿ ನಿಲಯ, ತಿರುಮಲ",
    location: "📍 ತಿರುಪತಿ",
    img: "/hotel1.jpg",
  },
  {
    title: "ಶ್ರೀ ಚಾಮುಂಡೇಶ್ವರಿ ದೇವಸ್ಥಾನದ ವಸತಿ ಗೃಹ",
    location: "📍 ಮೈಸೂರು",
    img: "/hotel2.jpg",
  },
  {
    title: "ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನದ ವಸತಿ ಗೃಹ",
    location: "📍 ದಕ್ಷಿಣ ಕನ್ನಡ",
    img: "/hotel3.jpg",
  },
];

export default function Cards() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
        {cards.map((c, i) => (
          <div key={i} className="bg-white rounded-xl shadow">
            <img src={c.img} alt={c.title} className="rounded-t-xl" />
            <div className="p-4">
              <h4 className="font-semibold">{c.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{c.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
