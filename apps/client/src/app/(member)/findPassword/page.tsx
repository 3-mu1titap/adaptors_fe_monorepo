import FindPasswordForm from '../../../components/form/FindPasswordForm';
import AuthFrame from '../../../components/pages/member/AuthFrame';
import Links from '../../../components/pages/member/Links';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[#F9F9F9]">
      <AuthFrame style="top-[20%]">
        <FindPasswordForm />
        <Links currentPage={'/findPassword'} />
      </AuthFrame>
    </main>
  );
}
