export type EventFunc = (a: any) => void;

export type SProps = {
  keyword: string,
  handleChange?: EventFunc,
  handleFocus?: () => void,
}

export type RProps = {
  keyword: string,
  setKeyword: (a: string) => void
}

export type RLProps = {
  data: Data,
  keyword: string,
  isFocus: boolean,
  setKeyword: (a: string) => void
}

export type Data = {
  sickCd: string,
  sickNm: string,
}

export type Datas = {
  sickData: Data[],
}

export type Keybord = {
  index: number,
  maxIndex: number | undefined,
  isKeyboardOn: boolean,
  recoKeyword: string,
  setIndex: (a: number) => void,
  setMaxIndex: (a: number | undefined) => void,
  setIsKeyboardOn: (a: boolean) => void,
  setRecoKeyword: (a: string) => void,
}