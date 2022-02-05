import { Command } from "../interfaces/Command";

import { oneHundred } from "./oneHundred";

import { edit } from "./edit";

import { view } from "./view"

import { help } from "./help";

export const CommandList: Command[] = [oneHundred, edit, view, help];