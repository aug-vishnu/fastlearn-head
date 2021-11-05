import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { Context } from "../context";
import { Col, Row, Tabs } from "antd";

const Login = () => {
  const [email, setEmail] = useState("alok.node@gmail.com");
  const [password, setPassword] = useState("rrrrrr");
  const [loading, setLoading] = useState(false);
  
   // state
   const {
    state: { user },
    dispatch,
  } = useContext(Context);
  // const { user } = state;

  // router
  const router = useRouter();
  const { TabPane } = Tabs;

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      console.log("LOGIN RESPONSE", data);
      // setLoading(false);
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      // save in local storage
      window.localStorage.setItem("user", JSON.stringify(data));
      router.push("/");
    } catch (err) {
      // toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <Row justify="center" align="middle" className="singleForm">
        <Col span="7" >
        <Tabs defaultActiveKey="1" type="card" size="large" className="mb-4" centered>
          <TabPane tab="Student Login" key="1">
          </TabPane>
          <TabPane tab="Tutor Login" key="2">
          </TabPane>
        </Tabs>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />

          <button
            type="submit"
            className="btn btnGrad btn-block btn-primary"
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>

        <p className="text-center p-3">
          Not yet registered?{" "}
          <Link href="/register">
            <a>Register</a>
          </Link>
        </p>

        {/* <p className="text-center">
          <Link href="/forgot-password">
            <a className="text-danger">Forgot password</a>
          </Link>
        </p> */}

        </Col>
      </Row>
    </>
  );
};

export default Login;
