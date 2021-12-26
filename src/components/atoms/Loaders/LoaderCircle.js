import Loader from "react-loader-spinner";
export default function LoaderCircle({ timeout }) {
  //other logic
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={timeout} //3 secs
    />
  );
}
