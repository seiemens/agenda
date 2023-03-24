import { ObjectId } from "mongoose";

export class Meeting {
public title: string = "";
public description: string = "";
public startDate : Date | undefined;
public endDate : Date | undefined;
}