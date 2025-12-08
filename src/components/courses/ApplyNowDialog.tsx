import { useState, useRef, FormEvent } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { CourseContent } from './types';

interface ApplyNowDialogProps {
  handleCloseDialog: () => void;
  courseContent: CourseContent;
  handleOpenDialog?: () => void;
  source: string;
}

const ApplyNowDialog: React.FC<ApplyNowDialogProps> = ({
  handleCloseDialog,
  courseContent,
  handleOpenDialog,
  source,
}) => {
  // const router = useRouter();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [profession, setProfession] = useState('professional');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);


 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  const mobileNumRegex = /^\d{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    setMessage('Please enter Full name');
    return;
  } else if (!emailId || !emailRegex.test(emailId)) {
    setMessage('Please enter valid Email Id');
    return;
  } else if (!mobileNum || !mobileNumRegex.test(mobileNum)) {
    setMessage('Please enter valid mobile number');
    return;
  } else if (!captchaToken) {
    setMessage('Please verify the captcha');
    return;
  }

  setLoading(true);

  try {
    await fetch('/api/enrollNowForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: name,
        emailId,
        number: mobileNum,
        profession,
        course: courseContent.courseTitle || courseContent,
        captchaToken,
        source,
        currentUrl: window.location.href,
      }),
    });

    setName('');
    setEmailId('');
    setMobileNum('');
    setCaptchaToken(null); // Clear token
    recaptchaRef.current?.reset(); // Reset the checkbox
    handleCloseDialog();
    if (handleOpenDialog) handleOpenDialog();
    setMessage('');
  } catch (error:unknown) {
    console.error("❌ Error caught:", error);
     if (error instanceof Error) {
    setMessage(error.message);
  } else {
    setMessage('An unexpected error occurred');
  }
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
       <div className="bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={handleCloseDialog}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold dark:text-white text-center mb-2">Contact us</h2>
        <p className="text-center dark:text-white text-gray-600 mb-4">
          Get in touch for guidance and offers
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm dark:text-white text-gray-700 mb-1">
              Full Name*
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full dark:text-white border border-[#E4E4E7] dark:border-[#27272A]  rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm dark:text-white text-gray-700 mb-1">
              Email ID*
            </label>
            <input
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="w-full dark:text-white border border-[#E4E4E7] dark:border-[#27272A]  rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block dark:text-white text-sm text-gray-700 mb-1">
              Mobile Number*
            </label>
            <input
              type="tel"
              value={mobileNum}
              onChange={(e) => setMobileNum(e.target.value)}
              className="w-full border dark:border-[#27272A]  dark:text-white border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <span className="block text-sm dark:text-white text-gray-700 mb-1">Profession</span>
            <div className="flex items-center space-x-4">
              <label className="inline-flex dark:text-white items-center">
                <input
                  type="radio"
                  value="professional"
                  checked={profession === 'professional'}
                  onChange={(e) => setProfession(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Working Professional</span>
              </label>
              <label className="inline-flex items-center dark:text-white">
                <input
                  type="radio"
                  value="student"
                  checked={profession === 'student'}
                  onChange={(e) => setProfession(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Student</span>
              </label>
              <label className="inline-flex items-center dark:text-white">
                <input
                  type="radio"
                  value="other"
                  checked={profession === 'other'}
                  onChange={(e) => setProfession(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
          </div>
          {message && (
            <p className="text-red-500 text-sm mb-4">{message}</p>
          )}
          <div className="pb-4">
             <ReCAPTCHA
  ref={recaptchaRef}
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
  onChange={(token) => {
    setCaptchaToken(token); // you'll need to add useState
  }}
  size="normal"
/>


            </div>
          <button

            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          <p className="text-center text-gray-600 dark:text-white text-sm mt-4">
            By filling this form, you agree to our{' '}
            <a href="/terms" className="text-purple-600 hover:underline">
              Terms and conditions
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowDialog;
