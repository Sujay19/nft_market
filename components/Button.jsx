const Button = ({ handleClick, btnName, classStyles }) => (
  <button
    type="button"
    className={` nft-gradient py-2 px-6 text-sm minlg:text-lg minlg:px-8 text-white font-poppins font-semibold ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;
