import LoginForm from '../../form/LoginForm';
import PolicyLinks from './PolicyLinks';
import Separator from './Separator';
import SignInTitle from './SignInTitle';
import SocialLogin from './SocialLogin';

export default function Login() {
  return (
    <section className="w-[100%] tablet:max-w-[100px] md:max-w-[418px] px-8 bg-white rounded-[5%]">
      <div className="space-y-6 flex flex-col justify-center h-[80%] py-7">
        <SignInTitle />
        <LoginForm />
        <Separator />
        <SocialLogin />
        <PolicyLinks />
      </div>
    </section>
  );
}
