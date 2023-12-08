import { Module } from '@nestjs/common';
import { SolveDayProblemCommand } from './commands';

@Module({
  providers: [SolveDayProblemCommand],
})
export class CliModule {}
