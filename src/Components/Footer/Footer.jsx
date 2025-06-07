const Footer = ({ data }) => (
  <footer className="footer">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} {data.name}. Designed and built with ❤️.</p>
    </div>
  </footer>
);

export default Footer;