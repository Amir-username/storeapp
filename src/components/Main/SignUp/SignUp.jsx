import PERSON from "../../../assets/PERSON.svg";

function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-36 mb-10">
      <div className="flex gap-2">
        <p className="text-5xl uppercase font-snigletR">Join us</p>
        <img src={PERSON} alt="person" className="w-9 h-9 mt-2" />
      </div>
      <div className="flex gap-2 p-5">
        <div
          className="ring-1 ring-orange-500 py-3 px-4 rounded-lg text-orange-500
       cursor-pointer hover:bg-orange-500 hover:text-white font-bold uppercase"
        >
          signup
        </div>
        <div
          className="py-3 px-4 rounded-lg text-white bg-orange-500
          cursor-pointer hover:bg-orange-400 hover:text-white font-bold uppercase"
        >
          login
        </div>
      </div>
    </div>
  );
}

export default SignUp;
