#!/usr/bin/env node

import { rule, primeGame } from '../src/games/primeGame.js';
import engine from '../src/index.js';

engine(rule, primeGame);
