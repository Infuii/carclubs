import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800" id="contact">
      <div className="container mx-auto pt-4 px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-24">
          <div className="text-white flex flex-col items-center ">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: hhscarclub0@gmail.com</p>
            <p className="text-gray-300">Phone: 508-202-6778</p>
          </div>
          <div className="text-white flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@hhscarclub"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/hhscarclub/"
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
            Image Credit: @shotbymo, @ps.newengland, @b_kerya, @sweaty_yes,
            @dhruvgshah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
