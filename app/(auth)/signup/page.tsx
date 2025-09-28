import Image from "next/image";
import SignupForm from "./_components/SignupForm";

const SignupPage = () => {

  return (
    <section className="h-screen w-full bg-zinc-200">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-full">
        <div className="w-full px-12 md:flex-1 flex flex-col justify-center items-center">
          {/* TITLE & DESC  */}
          <div className="w-full mb-8">
            <h1 className="heading">
              Signup to <span className="text-primary">SehatConn</span>
            </h1>
            <p className="desc">Signup to SehatConn to create your account</p>
          </div>
          
          {/* SIGNUP CLIENT FORM  */}
          <SignupForm/>
        </div>

        {/* Right image/side */}
        <div className="hidden md:flex flex-2 bg-zinc-400 h-full">
          <Image
            src={"/auth/signup/hero.jpg"}
            alt="signup-img"
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

export default SignupPage;
