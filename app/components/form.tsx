import { Dispatch, FormEvent, SetStateAction } from "react";

type FormProps = {
  birth: string;
  setBirth: Dispatch<SetStateAction<string>>;
  death: string;
  setDeath: Dispatch<SetStateAction<string>>;
};

const Form = ({ birth, setBirth, death, setDeath }: FormProps) => {
  const handleBirth = (e: FormEvent<HTMLInputElement>) => {
    setBirth(e.currentTarget.value);
  };
  const handleDeath = (e: FormEvent<HTMLInputElement>) => {
    setDeath(e.currentTarget.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl text-center">Enter Dates For Your Real Ages</h2>
      <div className="grid grid-cols-2 gap-4 p-2">
        <p className="text-right">Birth date:</p>
        <span>
          <input
            className="text-black"
            type="date"
            value={birth}
            onChange={handleBirth}
          />
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-right">Current or death date:</p>
        <span>
          <input
            className="text-black"
            type="date"
            value={death}
            onChange={handleDeath}
          />
        </span>
      </div>
    </div>
  );
};

export default Form;
