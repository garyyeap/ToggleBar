import * as vscode from 'vscode';

let primarySidebarButton: vscode.StatusBarItem;
let secondarySidebarButton: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
    console.log('ToggleBar extension is now active!');

    // Create status bar buttons
    createStatusBarButtons(context);

    // Register commands
    registerCommands(context);
}

function createStatusBarButtons(context: vscode.ExtensionContext) {
    // Primary sidebar toggle button with custom SVG icon
    primarySidebarButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    primarySidebarButton.command = 'togglebar.togglePrimarySidebar';
    primarySidebarButton.text = '$(sidebar-layout) |<';
    primarySidebarButton.tooltip = 'Toggle Primary Sidebar';
    primarySidebarButton.show();

    // Secondary sidebar toggle button
    secondarySidebarButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99);
    secondarySidebarButton.command = 'togglebar.toggleSecondarySidebar';
    secondarySidebarButton.text = '$(sidebar-right) >|';
    secondarySidebarButton.tooltip = 'Toggle Secondary Sidebar';
    secondarySidebarButton.show();

    // Add to subscriptions for proper cleanup
    context.subscriptions.push(primarySidebarButton);
    context.subscriptions.push(secondarySidebarButton);
}

function registerCommands(context: vscode.ExtensionContext) {
    // Register primary sidebar toggle command
    const togglePrimaryCommand = vscode.commands.registerCommand('togglebar.togglePrimarySidebar', () => {
        vscode.commands.executeCommand('workbench.action.toggleSidebarVisibility');
    });

    // Register secondary sidebar toggle command
    const toggleSecondaryCommand = vscode.commands.registerCommand('togglebar.toggleSecondarySidebar', () => {
        vscode.commands.executeCommand('workbench.action.toggleAuxiliaryBar');
    });

    // Add commands to subscriptions
    context.subscriptions.push(togglePrimaryCommand);
    context.subscriptions.push(toggleSecondaryCommand);
}

export function deactivate() {
    // Cleanup is handled automatically by VSCode through subscriptions
}
