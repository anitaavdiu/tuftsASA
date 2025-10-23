import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const logoRotationVariant = {
  rotate: {
    rotate: [0, 360],
    transition: { duration: 8, ease: "linear", repeat: Infinity },
  },
};

const Logo = () => {
  return (
    <NavLink to="/" className="inline-block">
      <motion.img
        alt="ASA Logo"
        src="/logo.png"  
        className="block w-[70px]"
        width="70"
        height="70"
        variants={logoRotationVariant}
        animate="rotate"
      />
    </NavLink>
  );
};

export default Logo;
