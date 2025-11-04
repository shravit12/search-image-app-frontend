import { Github, Facebook, Chrome } from "lucide-react";

const LoginPage = () => {
  const backend = import.meta.env.VITE_API_URL;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-200 p-10 rounded-2xl shadow-lg w-full max-w-md text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Login</h2>

        <div className="flex flex-col gap-4">
          <button
            className="py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition font-medium flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => window.location.href = `${backend}/auth/google`}
          >
            <Chrome size={20} />
            Continue with Google
          </button>

          <button
            className="py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition font-medium flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => window.location.href = `${backend}/auth/github`}
          >
            <Github size={20} />
            Continue with GitHub
          </button>

          <button
            className="py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition font-medium flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => window.location.href = `${backend}/auth/facebook`}
          >
            <Facebook size={20} />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
