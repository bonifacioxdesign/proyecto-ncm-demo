import { LoginForm } from "./login-form";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; reset?: string }>;
}) {
  const { from, reset } = await searchParams;
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4">
      <LoginForm from={from} resetSuccess={reset === "success"} />
    </div>
  );
}
