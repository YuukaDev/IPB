import GridLoader from "react-spinners/GridLoader";

export default function Loader({ isLoading }) {
  return (
    <div className="mt-32 flex justify-center items-center">
      <GridLoader margin={30} color="#34de01" loading={isLoading} size={30} />
    </div>
  );
}
