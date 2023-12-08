import {CommandFactory} from 'nest-commander';
import {CliModule} from './app.module';
import {ConsoleLogger, Type} from "@nestjs/common";

export const bootstrapLogger = new ConsoleLogger('bootstrap');

export async function bootstrap(modue: Type) {
    await CommandFactory.run(modue, {
        completion: {
            cmd: 'solve',
            nativeShell: {
                executablePath:
                    '%SystemRoot%system32WindowsPowerShell\v1.0powershell.exe',
            },
            fig: true,
        },
        cliName: 'aoc',
        snapshot: true,
        abortOnError: true,
        autoFlushLogs: true,
        version: '0.0.1',
        serviceErrorHandler: (e) => bootstrapLogger.error(e),
        errorHandler: (e) => bootstrapLogger.error(e),
    });
}