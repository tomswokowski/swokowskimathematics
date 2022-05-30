import { useRef, useState } from 'react';

export const SubscribeForm = () => {
  const inputEl: any = useRef(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = async (e: any) => {
    e.preventDefault();

    const res = await fetch('/api/mailchimp', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      setError(true);
      setMessage(error);
      return;
    }

    inputEl.current.value = '';
    setError(false);
    setSubscribed(true);
    setMessage('Successfully! 🎉 You are now subscribed.');
  };

  return (
    <>
      <form className="sm:flex" onSubmit={subscribe}>
        <label htmlFor="email-input" className="sr-only">
          Email address
        </label>
        <input
          autoComplete="email"
          id="email-input"
          name="email"
          placeholder={
            subscribed ? "Check your email to confirm !  🎉" : 'Enter your email'
          }
          ref={inputEl}
          required
          type="email"
          disabled={subscribed}
          className="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 sm:max-w-xs"
        />
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 py-3 px-5 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            disabled={subscribed}
          >
            {subscribed ? 'Thank you!' : 'Get Free Workbook'}
          </button>
        </div>
      </form>
      {error && <div className="w-72 pt-2 text-sm text-red-500">{message}</div>}
    </>
  );
};
