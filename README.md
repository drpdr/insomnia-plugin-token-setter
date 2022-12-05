# insomnia-plugin-token-setter
## Overview
This plugin is a very simple "replace all with token" for a group of requests. Given a group of requests with authentication set as template var token, the group action will replace the *token* with what you have in clipboard.

## Install
### Manual installation only
This plugin is a very quick and dirty hack I needed overnight. However, I also learnt something about INSOMNIA plugin system while messing up with [request hooks](https://docs.insomnia.rest/insomnia/context-object-reference#contextrequest) and actions.
If, for whatever reason, you find it useful and want to try it just clone this repo in [Plugin File Location](https://docs.insomnia.rest/insomnia/introduction-to-plugins#plugin-file-location).

## Usage
Add a template variable in the request (please note, there are no checks ATM) called *token* (ctrl + space). Then use the group action dropdown menu and choose *Replace all tokens from clip*.