import LoginForm from '../../form/LoginForm';
import PolicyLinks from './PolicyLinks';
import Separator from './Separator';
import SignInTitle from './SignInTitle';
import SocialLogin from './SocialLogin';

export default function Login() {
  return (
    <div className="space-y-4 flex flex-col justify-center mt-5">
      <SignInTitle title="SIGN IN" />
      <LoginForm />
      <Separator />
      <SocialLogin />
      <PolicyLinks />
    </div>
  );
}
