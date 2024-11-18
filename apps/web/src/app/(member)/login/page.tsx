import AuthFrame from '@components/pages/member/AuthFrame';
import Login from '@components/pages/member/Login';

export default function page() {
  return (
    <div className="relative h-[100vh] w-[100vw] bg-[#F9F9F9]">
      <AuthFrame style="top-[50%] translate-y-[-50%] w-full">
        <Login />
      </AuthFrame>
    </div>
  );
}
