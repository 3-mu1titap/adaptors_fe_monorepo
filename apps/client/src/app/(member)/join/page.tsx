import JoinFunnel from '../../../components/form/JoinFunnel';
import AuthFrame from '../../../components/pages/member/AuthFrame';
import SignUpTitle from '../../../components/pages/member/SignUpTitle';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[#F9F9F9]">
      <AuthFrame>
        <SignUpTitle />
        <JoinFunnel />
      </AuthFrame>
    </main>
  );
}
