import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsers } from "../../redux/usersSlice";

import LayaouteLogo from "../../components/icons/layaoute-logo";
import EyeIcon from "../../components/icons/eye";
import Styles from "./index.module.scss";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneCode: "+62",
    phoneNumber: "",
    password: "",
  });

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name: data.name,
      email: data.email,
      phoneNumber: `${data.phoneCode}${data.phoneNumber}`,
      password: data.password,
    };

    dispatch(setUsers(payload));
    navigate("/signin");
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.logo}>
        <LayaouteLogo width="132px" height="29px" />
      </div>

      <div className={Styles.content}>
        <h2 className={Styles.title}>Create an account</h2>
        <p className={Styles.subTitle}>
          New around here? Awesome choice! Let's make it official.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={data.name}
            className={Styles.input}
            placeholder="Name"
            onChange={handleOnChange}
          />

          <input
            name="email"
            type="email"
            value={data.email}
            className={Styles.input}
            placeholder="Email"
            onChange={handleOnChange}
          />

          <div className={Styles.inputPhone}>
            <select
              onChange={handleOnChange}
              name="phoneCode"
              className={Styles.select}
            >
              <option value="+62">+62</option>
              <option value="+65">+65</option>
            </select>

            <input
              name="phoneNumber"
              value={data.phoneNumber}
              placeholder="Phone Number"
              onChange={handleOnChange}
            />
          </div>

          <div className={Styles.inputPassword}>
            <input
              name="password"
              value={data.password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleOnChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <EyeIcon />
            </button>
          </div>

          <div className={`${Styles.linkTo} ${Styles.forgot}`}>
            Forgot password ? <Link to="/">Reset Password</Link>
          </div>

          <button
            disabled={!data.email || !data.password}
            className={Styles.btnSubmit}
            type="submit"
          >
            Sign In
          </button>

          <div className={`${Styles.linkTo} ${Styles.register}`}>
            Already registered ? <Link to="/signin">Signin</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
