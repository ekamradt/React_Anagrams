import {Anagram} from "./Anagram.ts";

export interface AnagramPair {
    match: boolean
    timestamp: Number;
    result1: Anagram;
    result2: Anagram;
}
