
import { Link } from "react-router-dom";

const PageNavigation = () => {
  return (
    <div className="page-navigation">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/message-leaders" className="nav-link">Message & Leaders</Link>
      <Link to="/du-heads" className="nav-link">DU Heads</Link>
      <Link to="/table-of-contents" className="nav-link">Contents</Link>
    </div>
  );
};

export default PageNavigation;
