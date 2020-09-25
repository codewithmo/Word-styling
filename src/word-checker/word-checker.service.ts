import { Injectable } from '@nestjs/common';
import { UserStylingDto } from './dto/requirements.dto';
import { StandardRequirementsSchema } from './schema/standard-requirements.schema';
import { Requirement } from './schema/standard-requirements.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WordCheckerService {
  constructor(
    @InjectModel('Requirement')
    private readonly requirementModel: Model<Requirement>,
  ) {}

  async checkRequirements(userStylingDto: UserStylingDto): Promise<any> {
    const doc = await this.requirementModel.findOne({
      'type.docMode': userStylingDto.docMode,
      'type.docSize': userStylingDto.docSize,
    });
    const prop = doc['properties'];

    if (
      prop['topMargin'] === userStylingDto.top &&
      prop['bottomMargin'] === userStylingDto.bottom &&
      prop['leftMargin'] === userStylingDto.left &&
      prop['rightMargin'] === userStylingDto.right &&
      prop['fromEdgeFooterMargin'] === userStylingDto.fromEdgeFooter &&
      prop['fromEdgeHeaderMargin'] === userStylingDto.fromEdgeHeader &&
      prop['textFont'] === userStylingDto.textStyleFont &&
      prop['textSize'] === userStylingDto.textStyleSize
    ) {
      return 'No changes to be done, matches to standard requirements';
    }

    return doc;
  }

  async createRequirements(
    createReuirementInterface: Requirement,
  ): Promise<Requirement> {
    const newRequirements = new this.requirementModel(
      createReuirementInterface,
    );
    return await newRequirements.save();
  }

  async findAllRequirements(): Promise<Requirement[]> {
    return this.requirementModel.find();
  }
}
