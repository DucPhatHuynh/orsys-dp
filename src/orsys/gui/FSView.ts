import { File } from '../bo/file';
import { Folder } from '../bo/folder';
import { Link } from '../bo/link';
import { Visitor } from '../bo/visitor';

export class FSView implements Visitor {
  visit(arg: Folder | File | Link): void {
    // use different method names in js/ts
    console.log(arg.name);
  }

}
