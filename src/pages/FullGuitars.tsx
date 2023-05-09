import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FullGuitars: React.FC = () => {
  const params = useParams();
  const [guitar, setGuitar] = useState<{
    imageUrl: string;
    name: string;
    price: string;
  }>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGuitars() {
      try {
        const { data } = await axios.get(
          "https://6444d6e4914c816083c0a023.mockapi.io/items/" + params.id
        );
        setGuitar(data);
      } catch (error) {
        alert("Ошибка при получении товара!");
        navigate("/");
      }
    }
    fetchGuitars();
  }, []);

  if (!guitar) {
    return <>"Загрузка..."</>;
  }

  return (
    <div>
      <h2>{guitar.name}</h2>
      <h2>{guitar.price}</h2>
      <img src="" alt="ss" />
    </div>
  );
};

export default FullGuitars;
