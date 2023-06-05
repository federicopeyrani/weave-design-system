import { CSSVariable } from "@/model/CSSVariable";
import { MapLeaves } from "@/utils/Types";

export type Tokens = {
  [key: string]: string | Tokens;
};

export type Contract = {
  [key: string]: CSSVariable | Contract;
};

export type ContractOf<T extends Tokens> = MapLeaves<Tokens, CSSVariable>;
