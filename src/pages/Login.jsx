import { Button, Input } from '../components/index.js';
import bg_image from '../images/login_bg.png';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import auth from '../services/auth.js';
import { login } from '../store/authSlice.js';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const signin = async (data) => {
    const session = await auth.login(data);
    //console.log(session);

    if (session) {
      dispatch(login(session));
      navigate('/dashboard');
    } else {
      alert(session);
    }
  };

  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <form
          onSubmit={handleSubmit(signin)}
          className="border-2 border-blue-950 max-w-md w-full mx-auto p-10 bg-white rounded-2xl shadow-xl flex flex-col gap-4 items-center"
        >
          <label className="text-3xl font-bold text-gray-700 mb-6 text-center">
            Login
          </label>
          <Input
            type="email"
            inputClassname="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-blue-950 focus:border-blue-500"
            placeholder="Email..."
            htmlFor="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <Input
            type="password"
            inputClassname="w-full p-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password..."
            htmlFor="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-xl"
          >
            Sign-In
          </Button>
        </form>
      </div>
    </>
  );
}
