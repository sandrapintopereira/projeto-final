export interface FormConteudo {
  titulo: string;
  tipo: 'filme' | 'série';
  estado: 'visto' | 'porVer';
  avaliacao?: number;
  genero: string;
  criador: string;
  anoLancamento: number;
  anoFim?: number;
}
