import AdaptorsLogoIcon from '../../assets/icons/AdaptorsLogo';
import LoginForm from '../../form/LoginForm';

export default function LoginFrame() {
  return (
    <section className="w-[70%] mx-auto">
      <AdaptorsLogoIcon className="w-8/12 h-[50px] mx-auto" />
      <LoginForm />
    </section>
  );
}
