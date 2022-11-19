import { CONFIG } from './config'

export const ORTHOGRAPHY = [
"a",
"ch",
"d",
"e",
"i",
"k",
"l",
"m",
"n",
"ñ",
"o",
"p",
"r",
"s",
"t",
"ty",
"y",
"u",
"v",
"x",
"ɨ",
"'",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
