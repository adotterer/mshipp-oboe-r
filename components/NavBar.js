import Link from 'next/link'
const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/" exact>
              Bio
            </Link>
          </li>
          <li>
            <Link href="/contact" exact>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/audio" exact>
              Audio
            </Link>
          </li>
          <li>
            <Link href="/video" exact>
              Video
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  