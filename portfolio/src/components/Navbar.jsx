import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/writing'>Projects</Link>
        </li>
        <li>
          <Link to='/books'>Books</Link>
        </li>
      </ul>
      <div>
        <p>FIND ME ON</p>
        <ul>
          <li>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
