import { AuthProvider } from "@/AuthContext";
import LoginForm from "@/components/Login";

export default function LoginPage() {
    return (
        <AuthProvider>
            <LoginForm />
        </AuthProvider>
    );
  }