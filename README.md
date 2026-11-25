# The Best Meal You Ever Had

[![Competition](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85.svg)](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
[![Rank](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/lerrboyy/best-meal-ever-had/rank.svg)](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
[![Reward](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/lerrboyy/best-meal-ever-had/reward.svg)](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)

Entry for the make.fun bounty [The Best Meal You Ever Had](https://make.fun/bounty/u-pangg7-the-best-meal-you-ever-had-a3ac0f85).

## What it does

`main.ts` writes exactly one sentence about the best meal ever had to `/output/entry.txt` — one sentence, at most 200 characters, no title, no explanation, no list of courses:

> The best meal I ever had was instant noodles at 2 a.m. after a night shift, eaten standing in the kitchen, and nothing since has tasted like being finally done.

## Run it

```sh
node main.ts
```

It validates the sentence first (one non-blank line, 1–200 characters), clears only the contents of `/output` (never the directory itself), writes the sentence, then re-reads the file and verifies the exact bytes.

## License

MIT — see [LICENSE](LICENSE).
