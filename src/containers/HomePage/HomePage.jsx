import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import HomePageItems from "../../components/HomePageItems/HomePageItems";
import "./HomePage.css";
import db from "../../firebase";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";

// After deciding on the database structure,the example function below should be deleted and
// replaced with a function that reads categories from firebase, takes 8 items by random
// and passes it to HomePageItems as a prop

function HomePage() {
  const [dbItems, setDbItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await db.collection("homePageItems").get();
        const itemList = [];
        response.forEach((doc) => itemList.push(doc.data()));
        setDbItems(itemList);
      } catch (err) {
        alert(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Hero />
      <HomePageItems dbItems={dbItems} />
      <SearchBar />
    </Container>
  );
}

export default HomePage;
