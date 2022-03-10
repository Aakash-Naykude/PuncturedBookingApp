import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  const getList = () => {
    fetch(`https://puncturedbookingapp.herokuapp.com/cart`)
      .then((res) => res.json())
      .then((json) => {
        setList(json);
        console.log(json);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleDelete = (id) => {
    fetch(`https://puncturedbookingapp.herokuapp.com/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((s) => s.json())
      .then(() => {
        alert("Deleted successfully");
        getList();
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
      <div className="ToggleBtns">
        <Link class="navbar-brand" to="/shops">
          <button type="button" class="btn btn-success">
            Add more services
          </button>
        </Link>
        <Link class="navbar-brand" to="/checkout">
          <button type="button" class="btn btn-success">
            Check Out And Do Payment
          </button>
        </Link>
      </div>

      <div className="shopList">
        {list.map((e, i) => (
          <div key={i} class="shadow-lg p-3 mb-5 bg-body rounded shopListDiv">
            <img src={e.image} alt="shopimages" className="shopimages" />
            <h4>Shopname : {e.shopname}</h4>
            <h5>Ownername : {e.ownername}</h5>
            <h5>Contact no : {e.mobilenumber}</h5>
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => handleDelete(e._id)}
            >
              Delete From Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
