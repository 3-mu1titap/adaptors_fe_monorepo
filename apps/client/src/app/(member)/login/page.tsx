import Login from '../../../components/form/Login';
import AuthFrame from '../../../components/pages/member/AuthFrame';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[#F9F9F9]">
      <AuthFrame style="top-[50%] translate-y-[-50%] w-full">
        <Login />
      </AuthFrame>
    </main>
  );
}
