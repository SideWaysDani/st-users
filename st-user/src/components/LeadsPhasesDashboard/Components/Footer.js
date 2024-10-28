import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="selector">
        <select>
          <option>Commercial</option>
          <option>Sector</option>
        </select>
        <button className="delete-btn">🗑️</button>
      </div>
    </footer>
  );
}

export default Footer;