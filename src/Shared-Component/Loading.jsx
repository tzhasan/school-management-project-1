import ScaleLoader from "react-spinners/ScaleLoader";
const Loading = () => {
  return (
    <ScaleLoader
      className="mx-auto w-1/2 translate-x-[45%] translate-y-[200%]"
      color="#000605"
      height={60}
      margin={3}
      radius={10}
      speedMultiplier={1}
      width={6}
    />
  );
};

export default Loading;
