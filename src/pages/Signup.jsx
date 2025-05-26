import { useForm } from 'react-hook-form';
import bg_image from '../images/login_bg.png';
import { Button, Input } from '../components/index.js';
import auth from '../services/auth.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice.js';

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = async (data) => {
    const user = await auth.createAccount(data);

    if (user) {
      navigate('/signin');
    } else {
      alert('Something Went Wrong');
    }
  };

  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <form
          onSubmit={handleSubmit(signup)}
          className="border-2 border-blue-950 max-w-md w-full mx-auto p-10 bg-white rounded-2xl shadow-xl flex flex-col gap-4 items-center"
        >
          <div className="flex flex-col w-full gap-2">
            <Input
              type="text"
              htmlFor="username"
              inputClassname="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-blue-950 focus:border-blue-500"
              labelChildren="Username: "
              labelClassname="font-bold text-blue-950 text-lg"
              {...register('username', {
                required: 'Username is required',
              })}
            />
          </div>

          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}

          <div className="flex flex-col w-full gap-2">
            <Input
              type="email"
              htmlFor="email"
              inputClassname="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-blue-950 focus:border-blue-500"
              labelChildren="Email: "
              labelClassname="font-bold text-blue-950 text-lg"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
          </div>

          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <div className="flex flex-col w-full gap-2">
            <Input
              type="password"
              htmlFor="password"
              inputClassname="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-blue-950 focus:border-blue-500"
              labelChildren="Password: "
              labelClassname="font-bold text-blue-950 text-lg"
              {...register('password', {
                required: 'Password is required',
              })}
            />
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <Button
            type="submit"
            className="w-full mt-2 bg-blue-500 hover:bg-blue-600 py-3 rounded-xl"
            children="Sign Up"
          />
        </form>
      </div>
    </>
  );
}
