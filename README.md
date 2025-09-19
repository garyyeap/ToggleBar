# ToggleBar VSCode Extension

A simple VSCode extension that adds status bar buttons to toggle the primary and secondary sidebars.

Created by Claude Code.

## Features

- **Primary Sidebar Toggle**: Click the left sidebar icon in the status bar to toggle the primary sidebar (Explorer, Search, etc.)
- **Secondary Sidebar Toggle**: Click the right sidebar icon in the status bar to toggle the secondary sidebar (Auxiliary Bar)

## Installation

1. Open VSCode
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the command palette
3. Type "Extensions: Install from VSIX..." and select it
4. Choose the `.vsix` file for this extension

## Usage

After installation, you'll see two new icons in the status bar:
- 📁 Left sidebar icon - toggles the primary sidebar
- 📂 Right sidebar icon - toggles the secondary sidebar

Simply click these icons to show/hide the respective sidebars.

## Development

To work on this extension:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run compile` to compile TypeScript
4. Press `F5` to open a new Extension Development Host window

## Commands

- `togglebar.togglePrimarySidebar` - Toggle Primary Sidebar
- `togglebar.toggleSecondarySidebar` - Toggle Secondary Sidebar
