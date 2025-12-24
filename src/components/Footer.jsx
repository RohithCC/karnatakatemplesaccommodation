import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fdecc8] text-red-700 text-sm">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* CONTACT INFO */}
        <div className="space-y-2">
          <h3 className="font-bold text-base mb-2">
            ಕರ್ನಾಟಕ ದೇವಾಲಯಗಳ ವಸತಿ
          </h3>

          <p className="flex items-center gap-2">
            <FaPhoneAlt /> Bengaluru - 080 2670 9689
          </p>

          <p className="flex items-center gap-2">
            <FaEnvelope /> endowmentcommissioner@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> kartempaccommodationcell@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> info@karnatakatemplesaccommodation.com
          </p>
        </div>

        {/* COMMISSIONER */}
        <div className="space-y-2">
          <h3 className="font-bold text-base">Mr. Sharat. B, IAS</h3>
          <p className="font-semibold">Commissioner of KHRICE</p>
          <p>
            3rd floor, Minto Sri Anjaneya Bhavan, AV Road,
            Chamrajpet, Bangalore – 18
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-2">
          <h3 className="font-bold text-base mb-2">
            ಸಂಸದೀಯ ಮಾಹಿತಿ
          </h3>

          {[
            "ಟೆಂಡರ್ಗಳು",
            "ಸರ್ಕಾರಿ ಆದೇಶ",
            "ಮಾಧ್ಯಮ",
            "ನಮ್ಮ ಬಗ್ಗೆ",
            "ಸಂಪರ್ಕಿಸಿ",
            "ಅಧಿಸೂಚನೆಗಳು",
          ].map((item, i) => (
            <p
              key={i}
              className="cursor-pointer hover:translate-x-1 transition"
            >
              › {item}
            </p>
          ))}
        </div>

        {/* NEWSLETTER */}
        <div className="space-y-3">
          <h3 className="font-bold text-base">
            ಸುದ್ದಿಪತ್ರಿಕೆ ಚಂದಾದಾರರಿಗೆ
          </h3>

          <input
            type="email"
            placeholder="ಇಮೇಲ್ ವಿಳಾಸ"
            className="w-full px-3 py-2 border border-red-400 rounded"
          />

          <button className="bg-red-700 text-white px-5 py-2 rounded hover:bg-red-800 transition">
            ನೋಂದಣಿ
          </button>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-12"
          />

          <div className="flex gap-3 pt-2">
            <SocialIcon bg="bg-blue-600">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon bg="bg-pink-600">
              <FaInstagram />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* PARTNER LOGOS (EXACT FROM SITE) */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 px-4">

          <a href="https://karnatakatourism.org/" target="_blank" rel="nofollow">
            <img
              src="https://karnatakatemplesaccommodation.com/assets/img/partners/karnatakatourism-logo.png"
              alt="Karnataka Tourism"
              className="h-10"
            />
          </a>

          <a href="https://kstdc.co/" target="_blank" rel="nofollow">
            <img
              src="https://kstdc.co/wp-content/themes/kstdc/img/logo.png"
              alt="KSTDC"
              className="h-10"
            />
          </a>

          <a href="https://explorekodagu.com/" target="_blank">
            <img
              src="https://xklsv.com/assets/img/explorekodagu-logo.webp"
              alt="Explore Kodagu"
              className="h-10"
            />
          </a>

          <a href="https://www.airbnb.co.in/" target="_blank" rel="nofollow">
            <img
              src="https://karnatakatemplesaccommodation.com/assets/img/partners/airbnb-logo.png"
              alt="Airbnb"
              className="h-10"
            />
          </a>

          <a href="https://www.discover-places.com/" target="_blank">
            <img
              src="https://karnatakatemplesaccommodation.com/assets/img/partners/discover-places-logo.jpeg"
              alt="Discover Places"
              className="h-10"
            />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center py-4 px-4">
        © Copyright <b>Government of Karnataka</b> (Hindu Religious Institutions
        And Charitable Endowments Department) 2025.
      </div>

      {/* CAPTCHA MOCK */}
      <div className="flex justify-center pb-6">
        <div className="bg-white px-8 py-2 rounded shadow font-bold text-lg">
          xklsv
        </div>
      </div>
    </footer>
  );
}

/* SOCIAL ICON */
function SocialIcon({ children, bg }) {
  return (
    <div
      className={`${bg} text-white w-9 h-9 flex items-center justify-center rounded hover:scale-110 transition cursor-pointer`}
    >
      {children}
    </div>
  );
}
