export default function MainTitle({ loading }) {
  return <h1 className='text-2xl font-bold mb-4 text-center main-title'>{loading ? "Loading..." : "Accounts list"}</h1>;
}
