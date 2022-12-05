type Product = {
  aliquota: number;
  cest: string;
  descricao: string;
  fundamentacao: string;
  id: number;
  item: string;
  mva: number;
  ncm: string;
  segmento: string;
};

export interface ProductProps {
  dados: Product[];
  menssagem: string;
}
