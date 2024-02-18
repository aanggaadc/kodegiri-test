import { Link } from "react-router-dom";
import { RegisterType } from ".";

import EyeIcon from "../../components/icons/eye";
import Styles from "./index.module.scss";

type FormTypeProps = {
  data: RegisterType;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  >;
  handleToOtp: React.FormEventHandler<HTMLFormElement>;
};

export default function Form({
  data,
  showPassword,
  setShowPassword,
  handleOnChange,
  handleToOtp,
}: FormTypeProps) {
  const { name, email, phoneNumber, phoneCode, password } = data;
  return (
    <form onSubmit={handleToOtp}>
      <input
        name="name"
        type="text"
        value={name}
        className={Styles.input}
        placeholder="Name"
        onChange={handleOnChange}
      />

      <input
        name="email"
        type="email"
        value={email}
        className={Styles.input}
        placeholder="Email"
        onChange={handleOnChange}
      />

      <div className={Styles.inputPhone}>
        <select
          onChange={handleOnChange}
          name="phoneCode"
          value={phoneCode}
          className={Styles.select}
        >
          <option value="+62">+62</option>
          <option value="+65">+65</option>
        </select>

        <input
          name="phoneNumber"
          type="number"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={handleOnChange}
        />
      </div>

      <div className={Styles.inputPassword}>
        <input
          name="password"
          value={password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={handleOnChange}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          <EyeIcon />
        </button>
      </div>

      <div className={`${Styles.linkTo} ${Styles.forgot}`}>
        Forgot password ? <Link to="/">Reset Password</Link>
      </div>

      <button
        disabled={!email || !password}
        className={Styles.btnSubmit}
        type="submit"
      >
        Create Account
      </button>

      <div className={`${Styles.linkTo} ${Styles.register}`}>
        Already registered ? <Link to="/signin">Signin</Link>
      </div>
    </form>
  );
}
