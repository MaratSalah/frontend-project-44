#!/usr/bin/env node

import { progressionGame, rule } from '../src/games/progressionGame.js';
import engine from '../src/index.js';

engine(rule, progressionGame);
