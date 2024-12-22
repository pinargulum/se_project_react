import "../Footer/Footer.css";
function Footer() {
  return (
  
    <footer className="footer">
      
      <h3 className="footer__title">Developed by Pinar Gulum</h3>
      <p className="footer__year">{new Date().getFullYear()}</p>
    </footer>
  );
}
export default Footer;
