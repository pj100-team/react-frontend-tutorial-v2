interface Props {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  onChange: () => void;
}

const CheckBox: React.FC<Props> = ({ isChecked, setIsChecked, onChange }) => {
  const check = () => setIsChecked(!isChecked);

  return (
    <>
      <input
        checked={isChecked}
        type="checkbox"
        onClick={check}
        onChange={onChange}
      />
    </>
  );
};

export default CheckBox;
