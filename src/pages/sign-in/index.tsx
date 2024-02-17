import { useState } from "react";
import { Link } from "react-router-dom";
import LayaouteLogo from "../../components/icons/layaoute-logo";
import EyeIcon from "../../components/icons/eye";
import Styles from "./index.module.scss";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.logo}>
        <LayaouteLogo width="132px" height="29px" />
      </div>

      <div className={Styles.content}>
        <h2 className={Styles.title}>Let's sign You In.</h2>
        <p className={Styles.subTitle}>
          Hey there, fabulous! Ready to kick back and explore? Just a quick
          sign-in away from unlocking a world of fun.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            className={Styles.input}
            placeholder="Email"
            onChange={handleOnChange}
          />
          <div className={Styles.inputPassword}>
            <input
              name="password"
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
            Haven't registered yet ? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
