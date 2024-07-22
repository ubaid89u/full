export default function Signin({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b text-center pt-1">
        20% off for the next 3 days If You SignIn
      </div>
      {children}
    </div>
  );
}
