type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type NovoTipoUsuario = Omit<Usuario, 'rg'>
type UsuarioCamposObrigatorios = Required<NovoTipoUsuario>

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}