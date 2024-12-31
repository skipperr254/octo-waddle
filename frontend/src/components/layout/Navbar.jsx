import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='shadow py-4'>
      <div className='container 2xl:max-w-7xl flex justify-between items-center mx-auto px-4'>
        <h1 className='text-2xl font-bold'>Octo-Waddle</h1>
        <ul className='flex space-x-4'>
          <li>
            <Link to='/' className='hover:text-purple-600'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/products' className='hover:text-purple-600'>
              Products
            </Link>
          </li>
          <li>
            <Link to='/blog' className='hover:text-purple-600'>
              Blog
            </Link>
          </li>
          <li>
            <Link to='/contact' className='hover:text-purple-600'>
              Contact
            </Link>
          </li>
        </ul>
        <input
          type='text'
          placeholder='Search'
          className='border rounded px-2 py-1 outline-none'
        />
      </div>
    </nav>
  );
};

export default Navbar;
