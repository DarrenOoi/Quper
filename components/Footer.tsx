const Footer = () => {
  return (
    <footer className="footer p-5 bg-purple-800 text-base-content text-white">
      <div>
        <svg
          width="150"
          height="150"
          viewBox="0 0 24 24"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <image
            href="https://static.uq.net.au/v11/logos/corporate/uq-logo--reversed.svg"
            width="100%"
            height="100%"
          />
        </svg>
      </div>
      <div>
        <span className="footer-title">Research Team</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
