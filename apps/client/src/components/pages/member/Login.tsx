import LoginForm from '../../form/LoginForm';
import PolicyLinks from './PolicyLinks';
import Separator from './Separator';
import SignInTitle from './SignInTitle';
import SocialLogin from './SocialLogin';

export default function Login() {
  return (
    <div className="space-y-6 flex flex-col justify-center h-[80%] py-7">
      <SignInTitle title="SIGN IN" />
      <LoginForm />
      <Separator />
      <SocialLogin />
      <PolicyLinks />
    </div>
  );
}
