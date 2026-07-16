# 選取格子時高亮同行同列（十字）與所屬 3x3 宮格

- **Date:** 2026-07-16
- **Commit / PR:** (see PR for #7)
- **Issue:** #7
- **Files:** `index.html`, `peer-logic.mjs`, `tests/peer-logic.test.mjs`

## What changed

- 新增 `peer-logic.mjs` 的 `isPeerCell(row, col, selectedRow, selectedCol, boxSize = 3)`
  純函式：判斷某格是否與選中格同行、同列或同宮格（不含選中格自身）。
- `index.html` `render()` 對每個非選中格的 peer 格套用新的 `.highlighted`
  CSS class（淺色 `#e8ebfa`），色階為 selected > highlighted > 一般格；
  `.error` 規則在 CSS 中排在 `.highlighted` 之後，錯誤格疊加 highlighted
  時仍清楚可辨。
- 預填格（`given`）現在也可點擊觸發選取／高亮，但 `fillCell` /
  `clearSelected` 仍會擋下 given 格的數字異動，維持不可填入。
- `selectCell()` 新增「再點一次已選中的格子＝取消選取」的 toggle 行為；
  新遊戲／換難度既有的重置（`selectedCell = null`）行為不變。

## Why (root cause)

單純選取目前只標記出被選中的那一格，玩家需要自行掃視整行/整列/宮格比對
是否重複數字，體驗較差。加上十字與宮格淺色輔助線可以降低視覺搜尋成本。

## Verification

- 新增 `tests/peer-logic.test.mjs`，涵蓋同行/同列/同宮格/皆不同/選中格自身
  /總 peer 數（20 格）等案例。
- 手動驗證步驟見對應 PR body。
