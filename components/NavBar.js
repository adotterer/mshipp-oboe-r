import Link from 'next/link'
const NavBar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/" exact={true} activeClassName="active">
              Bio
            </Link>
          </li>
          <li>
            <Link href="/gallery" exact={true} activeClassName="active">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/audio" exact={true} activeClassName="active">
              Audio
            </Link>
          </li>
          <li>
            <Link href="/video" exact={true} activeClassName="active">
              Video
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  