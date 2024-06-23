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
            <Link href="/audio" exact>
              Audio
            </Link>
          </li>
          <li>
            <Link href="/video" exact>
              Video
            </Link>
          </li>
          <li>
            <Link href="/gallery" exact>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="https://reeds.adotterer.com/" exact>
              Oboe Reeds
            </Link>
          </li>
          <li>
            <Link href="/contact" exact>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  