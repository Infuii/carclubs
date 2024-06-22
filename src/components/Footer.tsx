import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto pt-4 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: info@example.com</p>
            <p className="text-gray-300">Phone: 123-456-7890</p>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://youtube.com"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-300 text-center">© 2021 Car Clubs</p>
          <p className="text-gray-300 text-center">
            Image Credit: @shotbymo, @ps.newengland, @b_kerya, @sweaty_yes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
