import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function LoginModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!form.name) err.name = "ಹೆಸರು ಅಗತ್ಯ";
    if (!form.email) err.email = "ಇಮೇಲ್ ಅಗತ್ಯ";
    if (!form.mobile) err.mobile = "ಮೊಬೈಲ್ ಅಗತ್ಯ";
    if (!form.password) err.password = "ಪಾಸ್‌ವರ್ಡ್ ಅಗತ್ಯ";
    if (form.password !== form.confirmPassword)
      err.confirmPassword = "ಪಾಸ್‌ವರ್ಡ್ ಹೊಂದಿಕೆಯಾಗಿಲ್ಲ";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Login Successful (Demo)");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded shadow-lg relative">

        {/* HEADER */}
        <div className="flex justify-between items-center border-b px-4 py-3">
          <h2 className="text-lg font-semibold">ನೋಂದಣಿ</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-600" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-4 space-y-3">
          <Input label="ಹೆಸರು" name="name" value={form.name} onChange={handleChange} error={errors.name} />
          <Input label="ಇಮೇಲ್" name="email" value={form.email} onChange={handleChange} error={errors.email} />
          <Input label="ಮೊಬೈಲ್" name="mobile" value={form.mobile} onChange={handleChange} error={errors.mobile} />

          <div className="flex gap-2">
            <input
              placeholder="OTP"
              className="border px-3 py-2 rounded w-full"
            />
            <button className="border px-3 rounded text-sm">OTP ಕಳುಹಿಸಿ</button>
          </div>

          <Input type="password" label="ಪಾಸ್‌ವರ್ಡ್" name="password" value={form.password} onChange={handleChange} error={errors.password} />
          <Input type="password" label="ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಣ" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />

          {/* BUTTONS */}
          <div className="flex gap-3 pt-3">
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white py-2 rounded w-full"
            >
              ನೋಂದಣಿ
            </button>
            <button
              onClick={onClose}
              className="bg-red-600 text-white py-2 rounded w-full"
            >
              ಲಾಗಿನ್
            </button>
          </div>

          {/* GOOGLE */}
          <button className="w-full border py-2 rounded flex items-center justify-center gap-2 mt-3">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              className="h-5"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

function Input({ label, error, ...props }) {
  return (
    <div>
      <input
        {...props}
        placeholder={label}
        className="border px-3 py-2 rounded w-full"
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}
