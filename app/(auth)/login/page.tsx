import Image from "next/image";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <section className="h-screen w-full bg-zinc-200">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-full">
        <div className="flex-1 px-12 flex flex-col items-center justify-center w-full">
          {/* TITLE & DESC  */}
          <div className="w-full mb-8">
            <h1 className="heading">
              Login to <span className="text-primary">SehatConn</span>
            </h1>
            <p className="desc">Login to SehatConn to access your account</p>
          </div>

          {/* FORM CLIENT */}
          <LoginForm />
          
        </div>
        {/* Right image/side */}
        <div className="hidden md:flex flex-2 bg-zinc-400 h-full">
          <Image
            src={"/auth/login/hero.jpg"}
            alt="login-img"
            width={1600}
            height={1600}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
