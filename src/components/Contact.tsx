const Contact = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-black text-left">
          Contact
        </h2>
        <div className="border-t-8 border-black mt-4 mb-8"></div>
        <div className="flex justify-between items-center">
          <p className="text-black text-lg font-semibold">
            HHSCARCLUB0@GMAIL.COM
          </p>
          <p className="text-black text-lg">508-202-6778</p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Name"
                className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 bg-white text-black placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Email *"
                className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 bg-white text-black placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="sr-only">
                Phone number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                placeholder="Phone number"
                className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 bg-white text-black placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="sr-only">
                Comment
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Comment"
                className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 bg-white text-black placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
