const leaders = [
  {
    name: "ಶ್ರೀ. ಸಿದ್ದರಾಮಯ್ಯ",
    role: "ಸನ್ಮಾನ್ಯ ಮುಖ್ಯಮಂತ್ರಿ",
    img: "https://karnatakatemplesaccommodation.com/assets/img/karnataka-cm.webp?v=5",
  },
  {
    name: "ಶ್ರೀ. ಡಿ ಕೆ ಶಿವಕುಮಾರ್",
    role: "ಸನ್ಮಾನ್ಯ ಉಪ ಮುಖ್ಯಮಂತ್ರಿ",
    img: "https://karnatakatemplesaccommodation.com/assets/img/karnataka-deputy-cm.webp?v=5",
  },
  {
    name: "ಶ್ರೀ. ರಾಮಲಿಂಗ ರೆಡ್ಡಿ",
    role: "ಸನ್ಮಾನ್ಯ ಸಚಿವ",
    img: "https://karnatakatemplesaccommodation.com/assets/img/karnataka-minister.webp?v=5",
  },
];

export default function Leaders() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 text-center">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* RED OVAL */}
              <div className="relative w-[200px] h-[270px] bg-[#ef4444] rounded-[999px] flex items-center justify-center">
                <img
                  src={leader.img}
                  alt={leader.name}
                  loading="lazy"
                  className="
                    w-[180px] 
                    h-[245px] 
                    object-cover 
                    rounded-[999px]
                  "
                />
              </div>

              {/* NAME */}
              <h3 className="mt-5 text-[15px] font-semibold text-black">
                {leader.name}
              </h3>

              {/* ROLE */}
              <p className="mt-1 text-[14px] text-black leading-tight">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
