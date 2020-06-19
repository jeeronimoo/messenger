export enum PrimaryMenuItem {
  All = "All Messages",
  Unread = "Unread",
  Important = "Important",
  Drafts = "Drafts",
  Teams = "Teams",
  Groups = "Groups",
  Channels = "Channels",
  Media = "Media"
}

export enum SettingsMenuItem {
  Help = "Help",
  Settings = "Settings"
}

export type TInboxMenuItems = PrimaryMenuItem | SettingsMenuItem;

export const PRIMARY_MENU_ITEMS: PrimaryMenuItem[] = [
  PrimaryMenuItem.All,
  PrimaryMenuItem.Unread,
  PrimaryMenuItem.Important,
  PrimaryMenuItem.Drafts,
  PrimaryMenuItem.Teams,
  PrimaryMenuItem.Groups,
  PrimaryMenuItem.Channels,
  PrimaryMenuItem.Media
];

export const SETTINGS_MENU_ITEMS: SettingsMenuItem[] = [
  SettingsMenuItem.Help,
  SettingsMenuItem.Settings
];

export type TCounts = { [K in PrimaryMenuItem]: number };
