import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordCheckerController } from './word-checker/word-checker.controller';
import { WordCheckerService } from './word-checker/word-checker.service';
import { WordCheckerModule } from './word-checker/word-checker.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/standard-requirements'),
    WordCheckerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
