import { useState } from 'react';

interface FormModalProps {
  setIsIframeVisible: (val: boolean) => void;
}

export default function FormModal({ setIsIframeVisible }: FormModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    // Use env variable for backend link if available
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_LINK
      ? `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/group-discussion`
      : '/api/group-discussion';
    try {
      const res = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, mobile }),
      });
      if (res.ok) {
        setSuccess('Successfully registered!');
        setFullName('');
        setEmail('');
        setMobile('');
        setTimeout(() => {
          setIsIframeVisible(false);
        }, 1500);
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-2 text-brand-500">Join Mock Group Discussion</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
        value={fullName}
        onChange={e => setFullName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Mobile"
        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
        value={mobile}
        onChange={e => setMobile(e.target.value)}
        required
        pattern="[0-9]{10,15}"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-brand-400 to-[#fe7465] text-white font-semibold py-2 rounded mt-2 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {success && <div className="text-green-600 text-center mt-2">{success}</div>}
      {error && <div className="text-red-600 text-center mt-2">{error}</div>}
    </form>
  );
} 