import PolicyLinks from '../pages/member/PolicyLinks';
import Separator from '../pages/member/Separator';
import SignInTitle from '../pages/member/SignInTitle';
import SocialLogin from '../pages/member/SocialLogin';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <section className="w-full max-w-md px-8 bg-white rounded-[5%]">
      <div className="space-y-6 flex flex-col justify-center pt-[25%] ">
        <SignInTitle />
        <LoginForm />
        <Separator />
        <SocialLogin />
        <PolicyLinks />
      </div>
    </section>
  );
}
