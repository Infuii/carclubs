import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0B3E27] to-[#186F48] text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section: Four Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-4">
              Hopkinton Car Club
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Bringing automotive enthusiasm to the Hopkinton community. Join us
              for events, showcases, and more.
            </p>
          </div>

          {/* Column 2: Follow Us */}
          <div>
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/channel/UCmhw8qIcyGMVHappkuv_i7w"
                className="text-gray-200 hover:text-white transform hover:scale-110 transition duration-200"
                aria-label="YouTube"
              >
                <FaYoutube size={32} />
              </a>
              <a
                href="https://www.instagram.com/hopkintoncarclub/"
                className="text-gray-200 hover:text-white transform hover:scale-110 transition duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://www.tiktok.com/@hopkintoncarclub"
                className="text-gray-200 hover:text-white transform hover:scale-110 transition duration-200"
                aria-label="TikTok"
              >
                <FaTiktok size={32} />
              </a>
            </div>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-200 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-200 hover:text-white transition"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-gray-200 hover:text-white transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#tickets"
                  className="text-gray-200 hover:text-white transition"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-200 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-gray-200">
                <div className="text-gray-200 mr-2">
                  <FaMapMarkerAlt />
                </div>
                Hopkinton, MA, USA
              </li>
              <li className="flex items-center text-gray-200">
                <div className="text-gray-200 mr-2">
                  <FaEnvelope />
                </div>
                support@hopkintoncarclub.com
              </li>
              <li className="flex items-center text-gray-200">
                <div className="text-gray-200 mr-2">
                  <FaPhone />
                </div>
                508-202-6778
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Divider & Credits */}
        <div className="border-t border-gray-200/20 pt-6">
          <p className="text-center text-gray-200 text-sm">
            © {new Date().getFullYear()} Hopkinton Car Club. All rights
            reserved.
          </p>
          <p className="text-center text-gray-300 text-xs mt-2">
            Photo Credits: @shotbymo • @ps.newengland • @b_kerya • @sweaty_yes •
            @dhruvgshah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
