interface Props {
  isChecked: boolean;
  setIsChecked: () => void;
  onChange: () => void;
}

const CheckBox: React.FC<Props> = ({ isChecked, setIsChecked, onChange }) => {
  // const check = () => setIsChecked(!isChecked);

  return (
    <>
      <input
        checked={isChecked}
        type="checkbox"
        onClick={setIsChecked}
        onChange={onChange}
      />
    </>
  );
};

export default CheckBox;
