import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className='flex-grow container 2xl:max-w-7xl mx-auto px-4'>
      <Outlet />
    </main>
  );
};

export default Main;
