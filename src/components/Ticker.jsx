export default function Ticker() {
  const text =
    "www.karnatakatemplesaccommodation.com ಇದು ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಹಾಗೂ ದೇವಾಲಯಗಳ ಬಳಿ ವಸತಿ ಕಾಯ್ದಿರಿಸಲು ಏಕೈಕ ವೆಬ್‌ಸೈಟ್ ಆಗಿದೆ. ಪಾವತಿಗಳನ್ನು ವೆಬ್‌ಸೈಟ್‌ನ ಪಾವತಿ ಗೇಟ್‌ವೇ ಮೂಲಕ ಮಾತ್ರ ಮಾಡಬೇಕು. ಅಪರಿಚಿತ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗಳಿಗೆ ನೇರವಾಗಿ ಹಣ ವರ್ಗಾಯಿಸಬೇಡಿ. www.karnatakatemplesaccommodation.com is the only official Karnataka Government website for booking accommodations near temples. Payments must be made only via the website's payment gateway.";

  return (
    <div className="bg-red-700 text-white overflow-hidden">
      <div className="relative flex">
        <div className="flex whitespace-nowrap ticker">
          <span className="px-8 py-2 text-sm font-medium">
            {text}
          </span>
          <span className="px-8 py-2 text-sm font-medium">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
