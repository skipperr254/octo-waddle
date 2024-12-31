import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-gray-200 py-8'>
      <div className='container 2xl:max-w-7xl mx-auto grid grid-cols-3 gap-4 px-4'>
        <div>
          <h2 className='text-xl font-bold'>Octo-Waddle</h2>
          <div className='flex gap-2 flex-wrap'>
            <input
              type='email'
              placeholder='you@example.com'
              className='border rounded px-4 py-2 outline-none mt-2 flex-grow'
            />
            <button className='mt-2 bg-pink-500 text-white px-8 py-2 rounded'>
              Sign Up
            </button>
          </div>
        </div>
        <div>
          <h3 className='font-bold'>Categories</h3>
          <ul>
            <li>
              <Link>Laptops & Computers</Link>
            </li>
            <li>
              <Link>Cameras & Photography</Link>
            </li>
            <li>
              <Link>Smartphones & Tablets</Link>
            </li>
            <li>
              <Link>Video Games & Consoles</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold'>Customer Care</h3>
          <ul>
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Order Tracking</li>
          </ul>
        </div>
      </div>
      <div className='text-center mt-4'>
        © Octo-Waddle - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
