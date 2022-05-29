export const SubscribeForm = () => {
  return (
    <form className="sm:flex">
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        id="email-address"
        name="email-address"
        type="email"
        autoComplete="email"
        required
        className="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-red-600 focus:ring-1 focus:ring-red-600 sm:max-w-xs"
        placeholder="Enter your email"
      />
      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 py-3 px-5 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        >
          Get Free Workbook
        </button>
      </div>
    </form>
  );
};
