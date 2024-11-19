import JoinFunnel from '@components/form/JoinFunnel';
import AuthFrame from '@components/pages/member/AuthFrame';
import SignUpTitle from '@components/pages/member/SignUpTitle';

export default function page() {
  return (
    <AuthFrame>
      <SignUpTitle />
      <JoinFunnel />
    </AuthFrame>
  );
}
