import { IUpdateable } from "../interfaces";
import { updater } from "../utils/ObjectUpdater";

export default class PostModel implements IUpdateable<PostModel> {
    public id!: string;
    public title!: string;
    public content!: string;

    constructor(args?: Partial<PostModel>) {
        Object.assign(this, args);
    }

    public update(obj: Partial<PostModel>): PostModel {
        return updater.update(this, obj);
    };
}