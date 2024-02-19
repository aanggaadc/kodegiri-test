import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux/usersSlice";
import { RegisterType } from "../../types";
import { RootState } from "../../redux/store";

import Form from "./form";
import Otp from "./otp";
import LayaouteLogo from "../../components/icons/layaoute-logo";
import Styles from "./index.module.scss";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state: RootState) => state.users.users);

  const [stage, setStage] = useState("form");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState<RegisterType>({
    name: "",
    email: "",
    phoneCode: "+62",
    phoneNumber: "",
    password: "",
  });

  const onChangeOtp = (value: string) => setOtp(value);

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleToOtp = (e: React.FormEvent<HTMLFormElement>) => {
    const foundUser = users.find((user) => user.email === data.email);

    e.preventDefault();
    if (foundUser) return alert("user already register!");
    setStage("otp");
  };

  const handleSubmit = () => {
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
        <h2 className={Styles.title}>
          {stage === "form" ? "Create an account" : "Enter OTP Verification"}
        </h2>

        <p className={Styles.subTitle}>
          {stage === "form"
            ? "New around here? Awesome choice! Let's make it official"
            : `We’ve sent an OTP code to  ${data.phoneCode} ${data.phoneNumber}`}
        </p>

        {stage === "form" ? (
          <Form
            data={data}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleToOtp={handleToOtp}
            handleOnChange={handleOnChange}
          />
        ) : (
          <Otp
            onChange={onChangeOtp}
            value={otp}
            valueLength={4}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
