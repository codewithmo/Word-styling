import { Body, Controller, Get, Post } from '@nestjs/common';
import { WordCheckerService } from './word-checker.service';
import { UserStylingDto } from './dto/requirements.dto';
import { Requirement } from './schema/standard-requirements.schema';

@Controller('word-checker')
export class WordCheckerController {
  constructor(private readonly wordCheckerService: WordCheckerService) {}

  @Post()
  checkRequirements(@Body() userStylingDto: UserStylingDto): Promise<any> {
    return this.wordCheckerService.checkRequirements(userStylingDto);
  }

  @Post('developers')
  createRequirements(
    @Body() createReuirementInterface: Requirement,
  ): Promise<Requirement> {
    return this.wordCheckerService.createRequirements(
      createReuirementInterface,
    );
  }

  @Get('developers')
  findAllRequirements(): Promise<Requirement[]> {
    return this.wordCheckerService.findAllRequirements();
  }
}
