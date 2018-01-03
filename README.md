# Referobot

A referral bot, great for investment pump Discord servers and other referral-based servers. Currently, the noly way to use it is to self-host, but I may consider hosting the bot at a later time. See installation and usage for self-hosting directions.

## Commands

* Admin = "Administrator" permission
* Mod = "Manage Messages" permission

|Command|Description|Permissions|
|---|---|--|
|`help`|sends a list of all commands to the channel|everyone|
|`invites`|displays number of invites and number left until next role|everyone|
|`top <#>`|displays top <#> of inviters|everyone|
|`membercount`|displays total number of server members|everyone|

Referobot also automatically updates user's roles.

## Installation

1. Download or clone this repo's files.
2. `cd` into the Referobot directory.
3. Run `npm install` to install dependencies.
4. Run `npm run build` to build.
5. Run `node lib/referobot.js`.<sup>1</sup>

## Usage

1. Make sure Referobot has the `Manage Roles` permission in your server. If for some reason this does not work, move the Referobot's role above all other user roles.
2. To customize roles and role invite number thresholds, go to the `roles.json` file in the root Referobot directory. You can customize up to six roles. Role names are case-sensitive. Make sure the role names you type exactly match the role names from your server.<sup>2</sup>

### Footnotes

1. If you need 24/7 hosting, you may need a VPS.
2. For now, you have more than six roles, any roles beyond six will not work, but the bot will not break.
