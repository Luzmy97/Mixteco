import { CONFIG } from './config'

export const VALIDGUESSES = [
"cha'yu",
"tya'a",
"sɨnka",
"rakua",
"nonka",
"va'chi",
"tyakɨ"

]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
