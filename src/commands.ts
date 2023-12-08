import {ConsoleLogger} from '@nestjs/common';
import {Command, CommandRunner, Option} from 'nest-commander';

@Command({
    name: 'solve',
    description: 'solve a problem',
    arguments: '<day> <part>',
    argsDescription: {
        day: 'Day of the problem',
        part: 'Part of the problem',
    },
    options: {
        isDefault: true,
    },
    aliases: ['s'],
})
export class SolveDayProblemCommand extends CommandRunner {
    private readonly logger = new ConsoleLogger('ProblemSolver');

    async run(
        inputs: string[], options: Record<string, any>
    ): Promise<void> {
        this.logger.log('running', {
            inputs,
            options,
        });
    }

    @Option({
        flags: '-d, --day [day]',
        description: 'Day of the problem',
        defaultValue: '1',
    })
    solve(day: string) {
        this.logger.debug('day', day);
        return day;
    }

    @Option({
        flags: '-p, --part [part]',
        description: 'Part of the problem',
        defaultValue: '1',
    })
    part(part: string) {
        this.logger.debug('part', part);
        return part;
    }
}
