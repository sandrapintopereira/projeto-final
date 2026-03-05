import { FormConteudo } from './formConteudo'
//interface para filmes/series
//readonly no id para tornar a propriedade imutável
//criar verificações para cada union type
export interface Conteudo extends FormConteudo{
    readonly id: number;
    criadoEm: Date;
}

