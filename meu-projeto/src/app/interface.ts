//interface para filmes/series
//readonly no id para tornar a propriedade imutável
//criar verificações para cada union type
export interface Conteudo {
    readonly id: Date;
    titulo: string;
    tipo: 'filme' | 'serie';
    estado: 'visto' | 'porVer';
    avaliacao?: number;
    genero: string;
    criador: string;
    anoLancamento: number;
    anoFim?: number;
    criadoEm: Date;
}

