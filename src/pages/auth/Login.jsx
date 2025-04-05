import { useAppDispatch } from "../../hooks/useAppDispatch"
import { setUser } from "@/store/slices/user.slice"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import Title from "../../components/Title"
import Input from "../../components/Input"
import Label from "../../components/label"
import Button from "../../components/Button"

import { login } from "../../services/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

const schema = z.object({
  email: z.string().min(1, "Campo obrigatório").email("E-mail inválido"),
  password: z.string().min(1, "Campo obrigatório")
})

function Login() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await login(data)
      const { token, user } = res.data

      dispatch(setUser({ ...user }))
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))

      toast.success(res.error || "Login realizado com sucesso")
      navigate("/dashboard")
    } catch (err) {
      const message = "Login inválido!";
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1.5 p-4 rounded-lg w-full max-w-md">
        <Title>Login</Title>

        <div className={`flex flex-col gap-y-[6px] transition-all ${errors.email ? "animate-shake" : ""}`}>
          <Label obrigatorio>E-mail:</Label>
          <Input
            autoFocus
            type="text"
            placeholder="Digite seu e-mail"
            hasError={!!errors.email}
            {...register("email")}
          />
        </div>

        <div className={`flex flex-col gap-y-[6px] mb-[16px] transition-all ${errors.password ? "animate-shake" : ""}`}>
          <Label obrigatorio>Senha:</Label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            hasError={!!errors.password}
            {...register("password")}
          />
        </div>

        <Button type="submit" disabled={loading} loading={loading} loadingText="Entrando...">
          Entrar
        </Button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default Login