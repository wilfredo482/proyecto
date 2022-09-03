import Header from "../../elements/header/Header";
import Footer from "../../elements/footer/Footer"
import { Flex, Box, Center } from "@chakra-ui/react";
import "./registro.css";
export default function Registro() {
    return (
        <>
            <Header />
            <div className="body">
                <div class="signupFrm">
                    <form action="" class="form">
                        <h1 class="title">Registro</h1>

                        <div class="inputContainer">
                            <input type="text" class="input" placeholder=""></input>
                            <label for="" class="label">Correo Electronico</label>
                        </div>

                        <div class="inputContainer">
                            <input type="text" class="input" placeholder=""></input>
                            <label for="" class="label">Usuario</label>
                        </div>

                        <div class="inputContainer">
                            <input type="text" class="input" placeholder=""></input>
                            <label for="" class="label">Contraseña</label>
                        </div>

                        <div class="inputContainer">
                            <input type="text" class="input" placeholder=""></input>
                            <label for="" class="label">Confirmar Contraseña</label>
                        </div>

                        <input type="submit" class="submitBtn" value="Registrarse"></input>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )

}