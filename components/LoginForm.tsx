export default function LoginForm() {
  return (
    <div className="flex flex-col gap-2">
      <h2>LOGIN</h2>

      <div className="flex flex-col ">
        <p>Email</p>
        <input placeholder="Enter your email"></input>
      </div>

      <div className="flex flex-col ">
        <p>Password</p>
        <input placeholder="Enter your email"></input>
      </div>
      <button>LOG IN</button>
    </div>
  );
}
