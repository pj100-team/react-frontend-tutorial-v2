interface Props {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBox: React.FC<Props> = ({ isChecked, setIsChecked }) => {
  const check = () => setIsChecked(!isChecked);
  return (
    <>
      <input checked={isChecked} type="checkbox" onClick={check} />
    </>
  );
};

export default CheckBox;
