import React, { useEffect, useState } from "react";

function Shops() {
  const [list, setList] = useState([])
  useEffect(() =>{
    fetchStores()
  },[])
  const fetchStores = ()=>{
    fetch(``)
  }
  return (
    <div>
      <h1 style={{ marginTop: "100px" }}>Heloo Shops</h1>
    </div>
  );
}

export default Shops;
