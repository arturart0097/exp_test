import { Spinner } from "@chakra-ui/spinner";

export default function Loader() {
  return (
    <Spinner
      width="100px"
      height="100px"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "transition(-50%, 50%)",
      }}
    />
  );
}
