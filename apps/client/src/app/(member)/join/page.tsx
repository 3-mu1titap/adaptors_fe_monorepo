import JoinForm from '../../../components/form/JoinForm';
import AuthFrame from '../../../components/pages/member/AuthFrame';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[#F9F9F9]">
      <AuthFrame>
        <JoinForm />
      </AuthFrame>
    </main>
  );
}
