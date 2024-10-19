import { useNavigate } from "react-router-dom";
import { Button } from "../../../widgets/Button";
import { NotFoundStyle } from "./NotFoundPageStyles";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <NotFoundStyle>
      <h1>Not Found Page</h1>
      <Button onClick={() => navigate("/")}>Home</Button>
    </NotFoundStyle>
  );
}
