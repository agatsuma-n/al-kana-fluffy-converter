import { BaseConverter } from ".";
import * as types from "../types";
import * as utils from "../utils";

/**
 * 英単語をローマ字に変換する
 */
export class WordToRomaConverter extends BaseConverter {
	get conversions() {
		return types.WordToRomaConversions;
	}

	convert(word: string) {
		super.convert(word);

		// 全ての一致するパターン取得
		const matches = this.getAllMatch(word);

		// 変換優先順にソート
		matches.sort(utils.sortByPriorityConversion);

		// 置換
		this.replaceByMatchPattern(word, matches);

		return this.convertedWord;
	}
}
