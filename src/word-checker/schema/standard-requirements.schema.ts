import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const StandardRequirementsSchema = new mongoose.Schema({
  type: {
    docMode: { type: String, required: false },
    docSize: { type: String, required: false },
  },
  properties: {
    topMargin: { type: Number, required: false },
    bottomMargin: { type: Number, required: false },
    leftMargin: { type: Number, required: false },
    rightMargin: { type: Number, required: false },
    fromEdgeHeaderMargin: { type: Number, required: false },
    fromEdgeFooterMargin: { type: Number, required: false },
    textFont: { type: String, required: false },
    textSize: { type: Number, required: false },
  },
  headings: {
    mainSection: {
      font: { type: String },
      size: { type: Number },
      bold: { type: Boolean },
    },
    secondLevel: {
      font: { type: String },
      size: { type: Number },
      bold: { type: Boolean },
    },
    thirdLevel: {
      font: { type: String },
      size: { type: Number },
      bold: { type: Boolean },
    },
    fourthLevel: {
      font: { type: String },
      size: { type: Number },
      bold: { type: Boolean },
    },
    fifthLevel: {
      font: { type: String },
      size: { type: Number },
      bold: { type: Boolean },
    },
  },
  tables: {
    tableTitle: {
      font: { type: String },
      size: { type: Number },
      bold: { type: Boolean },
    },
    columnHeading: {
      font: { type: String },
      size: { type: Number },
      bold: { type: Boolean },
    },
  },
});

export interface Requirement extends Document {
  id: string;
  type: { docMode: string; docSize: string };
  properties: {
    topMargin: number;
    bottomMargin: number;
    leftMargin: number;
    rightMargin: number;
    fromEdgeHeaderMargin: number;
    fromEdgeFooterMargin: number;
    textFont: string;
    textSize: number;
  };
  headings: {
    mainSection: {
      font: string;
      size: number;
      bold: boolean;
    };
    secondLevel: {
      font: string;
      size: number;
      bold: boolean;
    };
    thirdLevel: {
      font: string;
      size: number;
      bold: boolean;
    };
    fourthLevel: {
      font: string;
      size: number;
      bold: boolean;
    };
    fifthLevel: {
      font: string;
      size: number;
      bold: boolean;
    };
  };
  tables: {
    tableTitle: {
      font: string;
      size: number;
      bold: boolean;
    };
    columnHeading: {
      font: string;
      size: number;
      bold: boolean;
    };
  };
}
