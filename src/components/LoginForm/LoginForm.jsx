import './LoginForm.css'
import { FaRegUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
	return (
		<section className="loginBox">
			<form>
				<h1>Sign In</h1>
				<div className="inputBx">
					<input type="text" placeholder="Username" required />
					<FaRegUser className="icon" />
				</div>
				<div className="inputBx">
					<input type="password" placeholder="Password" required />
					<FaLock className="icon" />
				</div>
				<div className="remmber_forgot">
					<label htmlFor="remmber-me">
						<input type="checkbox" id="remmber-me" />
						Remmber me
					</label>
					<a href="#">Forgot Password?</a>
				</div>
				<button type="submit">Sign In</button>
				<div className="linkSignUp">
					<p>Don't have an account? <a href="#">Sign Up</a></p>
				</div>
			</form>
		</section>
	)
}

export default LoginForm;