# Minipage

[![License:MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Your personal minimal new tab page replacement for Google Chrome.

![Minipage Screenshot](/docs/screenshot@2x.png)

## Installing

Minipage is only available for [Google Chrome](https://chrome.google.com) and [Brave](https://brave.com) on the [Chrome Webstore](https://chrome.google.com/webstore/detail/minipage/___insert_your_link) for now. 

Do you want minipage to support other browser? [Let us know!](https://github.com/surajmandalcell/minipage/issues/new?assignees=&labels=platform+support&template=browser-support.md&title=)

## Features

* Useful information at a glance
  * current date & time
  * connection status (offline/online)
  * estimated download speed in Mbps
  * battery level
  * synced tabs from remote Chrome sessions
  * custom clocks from any timezone around the world
* An optional button for your navigation bar for quick access to your shortcuts and synced tabs.
* Simple UI for customizing shortcuts that sync as Bookmarks across all your devices
* Rich-text, minimal scratchpad called "Writing mode" to you jot down notes for later (stored locally, in a per-device basis)
* Variety of color themes and synced preferences across browser sessions

## Usage Guide

#### Adding Shortcuts

If you have not added any shortcut to Minipage yet, you should see an `Add Shortcut` button at the top-center part of your new tab page. If you already have shortcuts you can add a new one by right-clicking the new tab page and selecting `Add shortcut`.

#### Editing a Shortcut

Right-click the shortcut you want to edit and then select `Edit`. You will see a modal dialog where you can edit your shortcut's title and url.

#### Deleting a Shortcut

Right-click the shortcut you want to delete and then select `Delete`. Your shortcut will be deleted immediately.

#### Rearranging Shortcuts

Drag-and-drop shortcuts to rearrange them. The order will be saved automatically and synced across all your devices via Bookmarks.

#### Changing Minipage's Appearance

Right-click the new tab page and click `Change appearance`. You will see a modal dialog where you can select your preferred mode (light or dark), theme, and advanced settings such as time format (12hr or 24hr), keyboard shortcuts, and custom CSS style.

#### Toggle Writing Mode On/Off

Right-click the new tab page and click `Exit writing mode` or `Enter writing mode`. Alternatively, you can use the default keyboard shortcut `shift+⌘` keys (`ctrl+shift` in Windows) or change it in `Change Appearance...` > `Advanced Settings` > `Writing Mode Keyboard Shortcut`

#### Adding Time Zone Clocks

If you want to track different time zones in your new tab page you can do so with Minipage! Right-click the new tab page and click `Add time zone`. You will see a modal dialog prompting you to specify a friendly name and to select the time zone's [IANA](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) code.

#### Editing a Time Zone Clock

Right-click the time zone clock you want to edit and then select `Edit`. You will see a modal dialog where you can edit your time zone's name and [IANA](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) code.

#### Deleting a Time Zone Clock

Right-click the time zone clock you want to delete and then select `Delete`. Your time zone clock will be deleted immediately.

#### Rearranging Time Zone Clock

Drag-and-drop time zone clocks to rearrange them. The order will be automatically saved and stored in your device.

## Privacy

**Minipage does not collect any data. Period.**

Although this extension reads your bookmarks and session data to display shortcuts and synced tabs from remote Chrome sessions, your data does not leave your devices. 

## Contributing

#### Bug Reports & Feature Requests

Something does not work as expected or perhaps you think this extension _needs_ a feature? Please open an issue using GitHub [issue tracker](https://github.com/surajmandalcell/minipage/issues/new/choose). 

Make sure that an issue pointing out your specific problem does not exist already. Please be as specific and straightforward as possible.

#### Pull Requests

Pull Requests (PRs) are welcome! You should follow the [same basic stylistic conventions](http://standardjs.com/rules.html) as the original code. 

Make sure that a pull request solving your specific problem does not exist already. Your changes must be concise and focus on solving a discrete problem.

## Known issues

### Color tearing

If you encounter any color tearing issues with your Minipage start screen then you need to force the sRGB color profile in Chrome.

To do this, enter the following URL into your browser and switch the option to `sRGB`:
`chrome://flags#force-color-profile`
