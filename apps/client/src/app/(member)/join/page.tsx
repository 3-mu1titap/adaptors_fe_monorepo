import JoinFunnel from '../../../components/form/JoinFunnel';
import AuthFrame from '../../../components/pages/member/AuthFrame';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[#F9F9F9]">
      <AuthFrame>
        {/* <SignInTitle title="회원가입" />
        <JoinForm /> */}
        <JoinFunnel />
      </AuthFrame>
    </main>
  );
}
