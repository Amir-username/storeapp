import EMPTYNOTE from '../../assets/EMPTYNOTE.svg';
import EMPTYCART from '../../assets/EMPTYCART.svg';


function CartEmptyPage() {
  return (
    <div className="flex flex-col gap-4 h-screen justify-center items-center">
      <img src={EMPTYCART} className='w-72 h-72 md:w-96 md:h-96'/>
      <div className='text-3xl md:text-5xl text-orange-500 font-snigletR'>oops! Cart is empty</div>
    </div>
  );
}

export default CartEmptyPage;
