import {AnagramPair} from "../../interfaces/AnagramPair.ts";

/**
 * Transform a phrase into a 'original' string and a
 *  'processed' string. These 'processed' strings are compared to
 *  see if they match, and are therefore anagrams.
 *
 * @param firstPhrase
 * @param secondPhrase
 * @returns {{match: boolean, result2: *, result1: *}}
 */
export const compareAnagrams: AnagramPair = (firstPhrase, secondPhrase) => {
    const processAnagram: Anagram = (word) => {
        // to lower, remove non-alpha chars, sort chars
        let w = word.toLowerCase();
        w = w.replace(/[^a-z]/g, '')
        w = w.split("").sort().join("");
        return {
            original: word,
            processed: w,
        };
    }

    const result1 = processAnagram(firstPhrase);
    const result2 = processAnagram(secondPhrase);
    return {
        match: result1.processed === result2.processed,
        result1: result1,
        result2: result2,
    }
}

