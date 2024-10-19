import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../../widgets/Loader";
import { BackStyle, InfoStyle, ProductInfoStyle } from "./InfoPageStyles";
import { Button } from "../../../widgets/Button";
import { ProductInterface } from "../../../shared/types/ProductTypes";

export default function InfoPage() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ProductInterface | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/MOCK_PRODUCTS.json")
      .then((response) => {
        const product = response.data.find(
          (el: ProductInterface) => el.id === Number(id)
        );
        setItem(product || null);
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [id]);

  if (!item) {
    return <Loader />;
  }

  return (
    <InfoStyle>
      <ProductInfoStyle>
        <img src={item.image} alt={`${item.name} icon`} />
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <BackStyle>
            <p>Category: {item.category}</p>
            <Button onClick={() => navigate("/")}>Back</Button>
          </BackStyle>
        </div>
      </ProductInfoStyle>
    </InfoStyle>
  );
}
