import { RingLoader, BarLoader } from "react-spinners";

export default function Loader({ loading }) {
  return (
    <div className='border border-gray-200'>
      <div className='mx-auto w-100 mb-5 py-5 flex justify-center ring-loader'>
        <RingLoader color='#FF0064' loading={loading} size={150} />
      </div>
      <div className='mx-auto w-100 py-5 flex justify-center'>
        <BarLoader color='#FF0064' loading={loading} />
      </div>
    </div>
  );
}
