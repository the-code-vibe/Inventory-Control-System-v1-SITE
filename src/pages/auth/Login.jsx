import Title from "../../components/Title"
import Input from "../../components/Input"
import Label from "../../components/label"
import Button from "../../components/Button"
import { login } from "../../services/auth"
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"

function Login() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    const data = {
      email: formData.get("email"),
      password: formData.get("senha"),
    }

    try {
      const res = await login(data)
      const { token, user } = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      toast.success(res.message || "Login realizado com sucesso")
    } catch (err) {
      const message =
        err.response?.data?.message || "Erro ao realizar login"
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 p-4 rounded-lg w-full max-w-md">
        <Title>Login</Title>

        <div className="flex flex-col gap-y-[6px]">
          <Label htmlFor="email" obrigatorio>E-mail:</Label>
          <Input type="email" name="email" placeholder="Digite seu e-mail" required />
        </div>

        <div className="flex flex-col gap-y-[6px] mb-[16px]">
          <Label htmlFor="senha" obrigatorio>Senha:</Label>
          <Input type="password" name="senha" placeholder="Digite sua senha" required />
        </div>

        <Button type="submit" loading={loading} loadingText="Entrando...">
          Entrar
        </Button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default Login