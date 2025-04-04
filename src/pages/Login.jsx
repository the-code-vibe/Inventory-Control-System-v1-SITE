import Title from "../components/Title";
import Input from "../components/Input";
import Label from "../components/label";
import Button from "../components/Button";

function Login() {
  return(
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col gap-1.5 p-3 rounded-lg" >

        <Title>Login</Title>

        <Label htmlFor="emain">E-mail:</Label>
        <Input placeholder="Digite seu E-mail"/>

        <Label htmlFor="senha">Senha:</Label>
        <Input placeholder="Digite seu E-mail"/>

        <a href="#">
          <p className="mb-[6px] text-sm text-right text-[#405FF2] ">Esqueci a senha</p>
        </a>

        <Button>Acessar Sistema</Button>

        
      
      </div>
    </div>
    );
}

export default Login;

