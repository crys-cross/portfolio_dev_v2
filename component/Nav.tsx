import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <div>DEV PORTFOLIO</div>
      <div>
        <li>
          <Link href="#">Profile</Link>
        </li>
        <li>
          <Link href="#">Featured Projects</Link>
        </li>
        <li>
          <Link href="#">Other Projects</Link>
        </li>
        <li>
          <Link href="#">Contact Me</Link>
        </li>
      </div>
    </div>
  );
};

export default Nav;
