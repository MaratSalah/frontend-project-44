#!/usr/bin/env node

import { rule, brainEven } from '../src/games/evenGame.js';
import engine from '../src/index.js';

engine(rule, brainEven);
