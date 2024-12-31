const Register = () => {
  return (
    <div className='h-screen flex items-center justify-center flex-col'>
      <div>
        <h2 className='text-2xl font-bold'>Welcome to Octo-waddle</h2>
        <p>Create your account to enjoy great stuff</p>
      </div>
      <div>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              className='outline-none '
              type='text'
              placeholder='you@example.com'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='*************' />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
        <div className='flex items-center'>
          <hr className='flex-1' />
          <p>Need help?</p>
          <hr className='flex-1' />
        </div>
        <p>Forgot Password?</p>
      </div>
    </div>
  );
};

export default Register;
