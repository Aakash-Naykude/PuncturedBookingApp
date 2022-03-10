import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Shops.css";
function ShopsDetails() {
  const { id } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  const getList = () => {
    fetch(`http://localhost:4000/shops/${id}`)
      .then((res) => res.json())
      .then((json) => setList(json))
      .catch((e) => {
        console.log(e);
      });
  };
  const handleAddToCart = () => {
    fetch(`http://localhost:4000/cart`, {
      method: "POST",
      body: JSON.stringify(list),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => alert("added successfully to cart"))
      .catch((e) => {
        console.log(e);
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
      <div className="moreInfoCont shadow-lg p-3 mb-5 bg-body rounded">
        <img src={list.image} alt="Shop Img" className="MoreInfoImg" />
        <div>
          <h2>Shopname : {list.shopname}</h2>
          <h3>Owner Name : {list.ownername}</h3>
          <h5>Contact Number : {list.mobilenumber}</h5>
          <h5>Contact Mail : {list.email}</h5>
          <h5>Online Pay : {list.onlinePay}</h5>
          <h5>
            Ratings : {list.ratings}
            <img
              style={{ width: "200px", marginTop: "-5px", height: "35px" }}
              src="https://previews.123rf.com/images/barks/barks1712/barks171200371/91718841-f%C3%BCnf-sterne-bewertungssymbol-3-5-.jpg"
              alt="stars"
            />
          </h5>
          <h5>Two Wheeler charges : {list.twoWheelerCharge} RS</h5>
          <h5>Four Wheeler charges : {list.fourWheelerCharge} RS</h5>
          <h5>Discounts : {list.Discounts} %</h5>
          <button
            type="button"
            class="btn btn-outline-success"
            onClick={handleAddToCart}
          >
            Add Service to Cart
          </button>
        </div>
      </div>
      <div className="ToggleBtns">
        <button type="button" class="btn btn-outline-success">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            Go To Cart
          </Link>
        </button>
        <button type="button" class="btn btn-outline-dark">
          <Link to="/shops" style={{ textDecoration: "none" }}>
            Back To Shops
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ShopsDetails;
