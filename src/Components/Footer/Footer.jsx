const Footer = ({ data }) => {

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {data.name}.{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;