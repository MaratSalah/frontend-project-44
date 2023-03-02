#!/usr/bin/env node

import { rule, brainGcd } from '../src/games/gcdGame.js';
import engine from '../src/index.js';

engine(rule, brainGcd);
