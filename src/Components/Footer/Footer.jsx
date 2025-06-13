const Footer = ({ data }) => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {currentYear} {data.name}.{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;