import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='navbar bg-purple-800 text-white'>
      <div className='flex-1'>
        <Link className='btn btn-ghost normal-case text-xl' href='/'>
          QuPer
        </Link>
      </div>
      <div className='flex-none gap-2'>
        <div className='form-control text-black'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered w-24 md:w-auto bg-white'
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
