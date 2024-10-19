import { Button } from "../../Button";
import { ErrorPageStyle } from "./ErrorPageStyles";

export default function ErrorPage() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <ErrorPageStyle>
      <h1>Error</h1>
      <Button onClick={() => handleReload()}>Reload window</Button>
    </ErrorPageStyle>
  );
}
