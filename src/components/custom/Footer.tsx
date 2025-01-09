function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/logo.png"
                className="h-12"
                alt="Flowbite Logo"
              />
            </a>
            <ul className="flex flex-wrap items-center justify-center sm:justify-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 space-x-4 md:space-x-6 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-[#f56551]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-[#f56551]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-[#f56551]"
                >
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-[#f56551]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <p className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2025{" "}
            <span className="text-[#f56551]">EconomiTrip™</span>. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
