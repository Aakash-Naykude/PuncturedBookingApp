import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  const getList = () => {
    fetch(`http://localhost:4000/cart`)
      .then((res) => res.json())
      .then((json) => {
        setList(json);
        console.log(json);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div class="container">
      {list.length ? (
        <h1
          style={{
            marginTop: "80px",
            fontFamily: "Helvetica",
            textAlign: "center",
          }}
        >
          Here are Services that you have in your cart
        </h1>
      ) : (
        <div>
          <h1
            style={{
              marginTop: "80px",
              fontFamily: "Helvetica",
              textAlign: "center",
            }}
          >
            Oops! Your cart is empty
          </h1>
          <button
            type="button"
            class="btn btn-outline-success"
            style={{ marginLeft: "45%" }}
          >
            <Link to="/shops" style={{ textDecoration: "none" }}>
              Add Service to cart
            </Link>
          </button>
        </div>
      )}

      <div className="shopList">
        {list.map((e, i) => (
          <div key={i} class="shadow-lg p-3 mb-5 bg-body rounded shopListDiv">
            <img src={e.image} alt="shopimages" className="shopimages" />

            <button type="button" class="btn btn-info">
              <Link
                to={`/shops`}
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

export default Cart;
