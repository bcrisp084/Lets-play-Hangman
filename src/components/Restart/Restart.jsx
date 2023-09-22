import { Link } from "react-router-dom";
import "./Restart.css";
import { motion } from "framer-motion";

const Restart = () => {
  //animate the button from the left with a zero opacity
  // use react router link to return home
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="home"
    >
      <Link className="home-btn" to="/">
        Home
      </Link>
    </motion.div>
  );
};

export default Restart;
