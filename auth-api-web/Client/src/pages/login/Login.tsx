import { Input } from "../../components/Input";
import logoVunoa from "../../assets/logo/vunoa-logo.png";
import { ButtonSubmit } from "../../components/ButtonSubmit";

export function Login() {
    return (
        <div className="min-h-screen bg-[#0d1117] flex flex-col items-center pt-12 text-sm">
			<img src={logoVunoa} alt="Logo Vunoa" className="w-11 h-auto mb-4" />
            <h1 className="text-[1.3rem] font-semibold mb-7">Entre no Vunoa</h1>
			<form className="flex flex-col gap-4 w-88 h-auto">
                <div className="flex flex-col gap-1">
                    <label htmlFor="identifier" className="font-semibold">
						Nome de usuário ou e-mail
					</label>
					<Input type="text" id="identifier" />
                </div>
                <div className="flex flex-col gap-1">
					<div className="flex justify-between">
						<label htmlFor="password" className="font-semibold">
							Senha
						</label>
						<a href="#" className="text-[#4493F8] hover:underline">
							Esqueceu sua senha?
						</a>
					</div>
                   <Input type="password" id="password" />
                </div>
				<ButtonSubmit>Entrar</ButtonSubmit>
            </form>
			<section className="mt-5">
				<span>Novo no Vunoa? <a href="" className="text-[#4493F8] hover:underline">Crie uma conta</a></span>
			</section>
        </div>
    )
}
