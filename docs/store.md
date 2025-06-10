---
title: Simple HP Tracker
description: A lightweight extension for tracking hit points against character tokens.
author: Jordan Accinelli
image: https://github.com/jtaccinelli/simple-hp-tracker/blob/main/docs/header.png?raw=true
icon: https://hp-tracker.jtaccinelli.workers.dev/logo.png
tags:
  - combat
manifest: https://hp-tracker.jtaccinelli.workers.dev/manifest.json
learn-more: https://github.com/jtaccinelli/simple-hp-tracker
---

# Simple HP Tracker

A lightweight extension for tracking hit points against character tokens with a shared view for you and your players.

![context menu](https://github.com/jtaccinelli/simple-hp-tracker/blob/main/docs/context-menu.png?raw=true)

You can toggle tracking on character tokens by clicking them and selecting 'Track HP' or 'Untrack HP'. You can also select multiple tokens at a time.

## Player vs. GM Views

![view gm](https://github.com/jtaccinelli/simple-hp-tracker/blob/main/docs/view-gm.png?raw=true)

As a GM, you will have access to the specifics of the max HP and current HP of any given token.

![view player](https://github.com/jtaccinelli/simple-hp-tracker/blob/main/docs/view-player.png?raw=true)

Players will instead be shown one of 3 status:

1. Active
2. Bloodied (below 50% HP)
3. Down (at 0 HP)

## Modifying HP values

![direct edit](https://github.com/jtaccinelli/simple-hp-tracker/blob/main/docs/direct-edit.png?raw=true)

You can make changes to the values associated with a token in several different ways. When a token is ready for tracking, you can modify the values directly from the item in the list by clicking on the hit point text.

![action bar](https://github.com/jtaccinelli/simple-hp-tracker/blob/main/docs/action-bar.png?raw=true)

You can also deal damage or heal by an specific amount by using the icons at the top of the panel.

Modifying the max HP for a token in any way before the current HP is changed will result in both values being updated. Once the current HP is set however, this no longer stays coupled to the max HP. This is done to make initial token set up a little easier.

## Bulk Editing

![bulk edit](https://github.com/jtaccinelli/simple-hp-tracker/blob/main/docs/bulk-edit.png?raw=true)

You can make changes to multiple tokens at a time. To do this, either select each item you'd like to adjust from the Hit Points panel, or select the tokens directly. Whatever items are to be updated will be clearly highlighted in the panel.

The only way for tokens to be bulk updated is using the actions in the header. Modifying the items hit points values directly in this case won't apply to every line item.

## Support

If you need support for this extension please send an email to info@jtaccinelli.com.au
