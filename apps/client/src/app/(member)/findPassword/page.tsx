import FindPasswordForm from '../../../components/form/FindPasswordForm';
import AuthFrame from '../../../components/pages/auth/AuthFrame';
import Links from '../../../components/pages/auth/Links';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[url('/assets/images/authBackground.svg')] bg-cover bg-center bg-no-repeat bg-fixed ">
      <AuthFrame title="비밀번호 찾기" style="top-[20%]">
        <FindPasswordForm />
        <Links currentPage={'/findPassword'} />
      </AuthFrame>
    </main>
  );
}
