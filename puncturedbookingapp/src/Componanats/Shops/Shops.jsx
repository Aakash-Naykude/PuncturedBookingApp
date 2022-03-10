import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shops.css";
function Shops() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchStores();
  }, []);
  const fetchStores = () => {
    fetch(`https://puncturedbookingapp.herokuapp.com/shops`)
      .then((e) => e.json())
      .then((res) => {
        console.log(res);
        setList(res);
      });
  };
  return (
    <div class="container">
      <h1
        style={{
          marginTop: "80px",
          fontFamily: "Helvetica",
          textAlign: "center",
        }}
      >
        Here are puncture shops near your location
      </h1>
      <div className="shopList">
        {list.map((e, i) => (
          <div key={i} class="shadow-lg p-3 mb-5 bg-body rounded shopListDiv">
            <img src={e.image} alt="shopimages" className="shopimages" />
            <h4>Shopname : {e.shopname}</h4>
            <h5>Ownername : {e.ownername}</h5>
            <h5>Contact no : {e.mobilenumber}</h5>
            <button type="button" class="btn btn-info">
              <Link
                to={`/shops/${e._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                More Info
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shops;
