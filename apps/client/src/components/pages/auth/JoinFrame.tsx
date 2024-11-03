import JoinForm from '../../form/JoinForm';
import '../../form/index.css';
export default function JoinFrame() {
  return (
    <section className="min-w-[400px] w-[50%] absolute right-8 top-[10%] h-[80vh] overflow-y-scroll scrollbar-hide">
      <h1 className="font-extrabold text-4xl text-center">회원가입</h1>
      <JoinForm />
    </section>
  );
}
