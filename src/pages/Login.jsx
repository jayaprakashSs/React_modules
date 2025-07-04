import React, { useState } from 'react';
import InputField from '../components/InputField';
import IllustrationPanel from '../components/IllustrationPanel';
import AuthFormWrapper from '../components/AuthFormWrapper';

const Login = () => {
  const [email, setEmail] = useState('alex@email.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="w-full min-h-screen bg-[#f1f3f6] flex lg:rounded-[50px] overflow-hidden border-[15px] border-[#1e2772]">
      <IllustrationPanel />
      <AuthFormWrapper title="Login into your account">
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showToggle
            showValue={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
          />
          <div className="text-right">
            <a href="#" className="text-sm text-[#1e2772] underline hover:text-orange-500">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-[#fd7401] rounded-lg text-white font-semibold hover:bg-orange-600 transition"
          >
            Login now
          </button>
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-400">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <button
            type="button"
            className="w-full h-12 border border-[#fd7401] text-[#fd7401] rounded-lg font-semibold hover:bg-[#fd7401] hover:text-white transition"
          >
            Signup now
          </button>
        </form>
      </AuthFormWrapper>
    </div>
  );
};

export default Login;
