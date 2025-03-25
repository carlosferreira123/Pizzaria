import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  Link } from 'react-router';

const signUpForm = z.object({
  email: z.string().email(),
})

type signUpForm = z.infer<typeof signUpForm>

export function SingIn() {
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<signUpForm>()  
  
  async function handlesignUp(data: signUpForm) {
    try {

    await new Promise(resolve => setTimeout(resolve,2000))

    //toast.success('Enviamos um link de autenticação para seu e-mail.', {
      //action: {
       // label:'Reenviar',
        //onClick:() => {handlesignUp(data)},
      //},
  //  })
    } catch {
      toast.error('Credenciais invalidas')
    
    }
  }

  return (
       
       <div className="p-8">
        <Button variant={'ghost'}>
           <Link to="/sign-in">Fazer login</Link>
        </Button>
         <div className="w-[350px] flex flex-col justify-center gap-6">
            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Criar conta gratis</h1>
                <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(handlesignUp)}>
                <div className="space-y-2">
                  <Label htmlFor="email">Seu e-mail</Label>
                  <Input id="email" type="email" {...register('email')}/>
                </div>

                <Button disabled={isSubmitting} className="w-full" type="submit" >Finalizar cadastro </Button>
            </form>
         </div>
       </div>
    )
}