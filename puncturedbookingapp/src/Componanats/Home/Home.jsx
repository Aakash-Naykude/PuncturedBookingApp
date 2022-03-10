import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LocationContext } from "../../ContextApi/LocationDet";
import "./Home.css";
function Home() {
  const { handleToggleSelect } = useContext(LocationContext);
  const handleSelect = () => {
    handleToggleSelect();
  };

  return (
    <div className="homeDiv">
      <img
        style={{ opacity: 0.5 }}
        src="https://thumbs.dreamstime.com/b/scenes-auto-repair-shop-vector-illustration-56283110.jpg"
        alt="HomeTag"
      />
      <div class="centered">CHOOSE YOUR NEAREST SERVICE SHOP</div>
      <button
        type="button"
        class="btn btn-outline-secondary location"
        onClick={handleSelect}
      >
        <Link
          to="/location"
          style={{ textDecoration: "none", color: "#1B1F3A" }}
        >
          Click here to choose location
        </Link>
      </button>
    </div>
  );
}

export default Home;
