import { Module } from '@nestjs/common';
import { WordCheckerController } from './word-checker.controller';
import { WordCheckerService } from './word-checker.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StandardRequirementsSchema } from './schema/standard-requirements.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Requirement', schema: StandardRequirementsSchema },
    ]),
  ],
  controllers: [WordCheckerController],
  providers: [WordCheckerService],
})
export class WordCheckerModule {}
