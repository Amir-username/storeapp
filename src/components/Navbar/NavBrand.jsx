import SHOPO from '../../assets/SHOPO.svg'

function NavBrand() {
    return (
        <div className='flex p-1 cursor-pointer'>
            <img src={SHOPO} alt="shop" className='w-10 h-10'/>
            <span className='text-xl lowercase font-mono text-gray-700 font-bold mt-1.5'>Store</span>
        </div>
    );
}

export default NavBrand;