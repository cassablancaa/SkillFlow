import { useState } from "react";
import { BackIcon } from "./Icons";

export default function LoginPage({ onRegisterClick, onHomeClick }) {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log("Logowanie:", formData);
	};

	return (
		<main className='page-wrapper'>
			<div className='form-card'>
				<button className='back-link' onClick={onHomeClick}>
					<BackIcon className="back-link-img" />
					<p>Wróć na stronę główną</p>
				</button>

				<h1 className='form-title'>Zaloguj się</h1>

				<form className='form' onSubmit={handleSubmit}>
					<label className='form-label'>
						Email
						<input
							className='form-input'
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
						/>
					</label>

					<label className='form-label'>
						Hasło
						<input
							className='form-input'
							type='password'
							name='password'
							value={formData.password}
							onChange={handleChange}
						/>
					</label>

					<button type='submit' className='main-btn form-btn'>
						Zaloguj się
					</button>
				</form>

				<p className='switch-text'>
					Nie masz konta?{" "}
					<button className='text-button' onClick={onRegisterClick}>
						Załóż konto
					</button>
				</p>
			</div>
		</main>
	);
}
