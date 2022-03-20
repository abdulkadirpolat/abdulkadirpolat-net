import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

const NavLink = ({ href, exact, children, ...props }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " text-xl font-extrabold";
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};

export default NavLink;
