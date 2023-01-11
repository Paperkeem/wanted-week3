export type EventFunc = (a: any) => void;

export type SProps = {
  keyword: string,
  handleChange?: EventFunc,
  handleFocus?: () => void,
}

export type Data = {
  sickCd: string,
  sickNm: string,
}

export type Datas = {
  sickData: Data[],
}