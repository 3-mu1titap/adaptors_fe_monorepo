import AdaptorsLogoIcon from '../assets/AdaptorsLogo';
import LoginForm from './LoginForm';
import PolicyLinks from './PolicyLinks';
import Separator from './Separator';
import SignInTitle from './SignInTitle';
import SocialLogin from './SocialLogin';

export default function Login() {
  return (
    <div className="space-y-4 flex flex-col justify-center mt-5">
      <AdaptorsLogoIcon className="w-[50%] mb-3 lg:!hidden" />
      <SignInTitle title="SIGN IN" />
      <LoginForm />
      <Separator />
      <SocialLogin />
      <PolicyLinks />
    </div>
  );
}
