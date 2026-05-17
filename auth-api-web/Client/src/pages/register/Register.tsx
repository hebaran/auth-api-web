import { Input } from "../../components/Input";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { CustomLink } from "../../components/CustomLink";
import { Checkbox } from "../../components/Checkbox";

export function Register() {
	return (
        <div className="flex w-full min-h-screen bg-white text-black text-sm font-mona">
            <div className="flex-1 flex flex-col items-center p-8 pt-22 bg-black text-white">
                <h2 className="text-3xl font-bold mb-4">Crie sua conta gratuitamente</h2>
                <p>Explore os principais recursos do Vunoa para indivíduos e organizações.</p>
            </div>
            <div className="flex-1 flex flex-col items-center p-8 pt-22 bg-white text-black">
                <span className="absolute top-5 right-12">Já tem uma conta?&nbsp;&nbsp;&nbsp;<CustomLink to="/login" className="underline text-black">Faça login ➝</CustomLink></span>
                <form action="" className="w-113 flex flex-col gap-5">
                    <h1 className="font-semibold text-[1.3rem]">Cadastre-se no Vunoa</h1>
                    <div className="flex flex-col gap-1">
                        <label className="font-medium" htmlFor="">
                            E-mail*
                        </label>
                        <Input placeholder="E-mail" type="text" className="border-[#D1D9E0] placeholder-gray-600" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-medium" htmlFor="">
                            Senha*
                        </label>
                        <Input placeholder="Senha" type="password"  className="border-[#D1D9E0] placeholder-gray-600" />
                        <span className="text-xs text-gray-600">Sua senha deve conter no mínimo 8 caracteres incluindo pelo menos uma letra maiuscula, uma letra minuscula, um número e um caractere especial.</span>
                        <label className="font-medium mt-2" htmlFor="">
                            Repita sua senha*
                        </label>
                        <Input placeholder="Repita sua senha" type="password"  className="border-[#D1D9E0] placeholder-gray-600" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-medium" htmlFor="">
                            Nome de usuário*
                        </label>
                        <Input placeholder="Nome de usuário" type="text"  className="border-[#D1D9E0] placeholder-gray-600" />
                        <span className="text-xs text-gray-600">O nome de usuário pode conter apenas caracteres alfanuméricos ou hífens simples e não pode começar nem terminar com um hífen.</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium" htmlFor="">
                            Preferências de e-mail
                        </label>
                        <Checkbox label="Receba atualizações e anúncios de produtos ocasionalmente" onChange={(e) => console.log(e.target.checked)} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <ButtonSubmit className="h-12 text-white bg-black border-black text-[1rem]">Criar conta<span className="text-xs">&nbsp;&nbsp;&nbsp;➤</span></ButtonSubmit>
                        <span className="text-xs text-gray-600">Ao criar uma conta, você concorda com os <CustomLink to="/" className="underline">Termos de Serviço</CustomLink>. Para adquirir mais informações sobre as práticas de privacidade do Vunoa, consulte a <CustomLink to="/" className="underline">Declaração de Privacidade do Vunoa</CustomLink>. Enviaremos ocasionalmente e-mails relacionados à sua conta.</span>
                    </div>
                </form>
            </div>
        </div>
	)
}
