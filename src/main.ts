#!/usr/bin/env node

import {CliModule} from './app.module';
import {bootstrap, bootstrapLogger} from "./bootstrap";

bootstrap(CliModule)
    .catch((e) => bootstrapLogger.error(e))
    .then();
