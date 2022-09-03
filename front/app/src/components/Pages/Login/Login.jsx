import Header from "../../elements/header/Header";
import Footer from "../../elements/footer/Footer"
import "./Login.css";
export default function Login() {
    return (
        <>
            <Header />
            <div className="body">
                <div class="signupFrm">
                    <form action="" class="form">
                        <h1 class="title">Iniciar Sesion</h1>

                        <div class="inputContainer">
                            <input type="text" class="input" placeholder=""></input>
                            <label for="" class="label">Usuario</label>
                        </div>

                        <div class="inputContainer">
                            <input type="text" class="input" placeholder=""></input>
                            <label for="" class="label">Contraseña</label>
                        </div>

                        <input type="submit" class="submitBtn" value="Ingresar"></input>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )

}