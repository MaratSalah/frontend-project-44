#!/usr/bin/env node

import { brainCalc, rule } from '../src/games/calcGame.js';
import engine from '../src/index.js';

engine(rule, brainCalc);
