const Login = () => {
  return (
    <div className='min-h-[calc(100vh-103.6px)] flex flex-col items-center justify-center'>
      <div className='max-w-md min-w-[440px] bg-white p-8 shadow rounded'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Login</h1>
        <p className='mb-4 text-center'>
          Please login using account details below.
        </p>
        <hr />
        <form className='mt-2'>
          <div className='mb-4'>
            <label htmlFor='email' className='block font-bold mb-2'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              className='border rounded w-full px-3 py-2'
              placeholder='Email Address'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block font-bold mb-2'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='border rounded w-full px-3 py-2'
              placeholder='Password'
            />
          </div>
          <a
            href='#'
            className='text-sm text-purple-600 hover:underline block mb-4'
          >
            Forgot your password?
          </a>
          <button
            type='submit'
            className='bg-pink-500 text-white px-4 py-2 rounded w-full'
          >
            Sign In
          </button>
          <p className='mt-4 text-center'>
            Don’t have an Account?{" "}
            <a href='/signup' className='text-purple-600 hover:underline'>
              Create account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
