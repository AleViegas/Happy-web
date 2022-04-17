// essa função é quem chama a api de autenticação e o banco de dados para no final retornar o token e os dados que seram utilizados para as proximas paginas (ID e Orphanages-list)

// tirando o default do export a importação fica diferente, vale apena relembrar, login.tsx que importa

interface Response {
    token: string,
    user: {
        email: string,
        password: string
    }
}

export function SignIn(): Promise<Response> {
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve({
                token: "asdjkdvasidioavsbdnjb",
                user: {
                    email: "email@hotmail.com",
                    password: "senha"
                }
            })
        }, 100);
    })
}
