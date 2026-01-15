import {
  TypographyBodySizes,
  TypographyLetterSpacingSizes,
  TypographyWeightSizes
} from 'src/themes/types';

export type TextProps = {
  /** Elemento HTML ou componente React usado como tag principal do texto. */
  as?: React.ElementType;
  /** Cor do texto. Aceita apenas a chave do tema (ex: 'blue[500]'). */
  color?: string;
  /** Tamanho da fonte e altura da linha. */
  size?: TypographyBodySizes;
  /** Peso da fonte do texto. */
  weight?: TypographyWeightSizes;
  /** Espaçamento entre letras do texto. */
  letterSpacing?: TypographyLetterSpacingSizes;
  /** Estilo de capitalização do texto. */
  textTransform?: React.CSSProperties['textTransform'];
  /** Limite de linhas para o texto truncar. */
  lineClamp?: number;
  /** Alinhamento do texto. */
  textAlign?: React.CSSProperties['textAlign'];
  /** Define o conteúdo do texto. */
  children?: React.ReactNode;
};

export type TextStyledProps = {
  color?: TextProps['color'];
  size?: TextProps['size'];
  weight?: TextProps['weight'];
  letterSpacing?: TextProps['letterSpacing'];
  textTransform?: TextProps['textTransform'];
  textAlign?: TextProps['textAlign'];
  lineClamp?: TextProps['lineClamp'];
};
