import './registro.css';
import { useState, useRef } from 'react';
import mapaLogin from "../../../../assets/mapaLogin.png";
import camera from "../../../../assets/Camera.png";

export function Registro() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (e.target.value === confirmPassword || confirmPassword === '') {
            setErrorMessage('');
        } else {
            setErrorMessage('As senhas não coincidem');
        }
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        if (e.target.value === password || e.target.value === '') {
            setErrorMessage('');
        } else {
            setErrorMessage('As senhas não coincidem');
        }
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const isFormValid = () => {
        return username.trim() !== '' && email.trim() !== '' && password !== '' && password === confirmPassword;
    };

    return (
        <div className="retangulo">
            <div className="img-container">
                <img src={mapaLogin} alt="mapa ilustrativo" className="mapa-styled" />
            </div>

            <div className="cadastro">
                <div className="circulo" onClick={handleImageClick}>
                    {selectedImage ? (
                        <img src={selectedImage} alt="Imagem selecionada" className="circulo-img" />
                    ) : (
                        <img src={camera} alt="Camera" className="camera-img" />
                    )}
                </div>
                {selectedImage && <h2 className="h2C" onClick={handleRemoveImage}>remover foto</h2>}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />

                <div className="espacos">
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Nome de usuário"
                            className="caixa"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="caixa"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="password-label">
                            <input
                                type="password"
                                placeholder="Senha (mínimo 5 caracteres)"
                                className="caixa"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </label>
                    </div>
                    <div className="input-container">
                        <label className="confirm-password-label">
                            <input
                                type="password"
                                placeholder="Confirmar senha"
                                className={`caixa ${errorMessage ? 'error' : ''}`}
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                        </label>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </div>
                    {isFormValid() && <button className="cadastrar">Cadastrar</button>}
                </div>
            </div>
        </div>
    );
}
