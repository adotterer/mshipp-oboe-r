import Link from 'next/link'
const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/" exact={true}>
              Bio
            </Link>
          </li>
          <li>
            <Link href="/contact" exact={true}>
              Contact
            </Link>
          </li>
          {/* <li>
            <Link href="/gallery" exact={true}>
              Gallery
            </Link>
          </li> */}
          <li>
            <Link href="/audio" exact={true}>
              Audio
            </Link>
          </li>
          {/* <li>
            <Link href="/video" exact={true}>
              Video
            </Link>
          </li> */}
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  