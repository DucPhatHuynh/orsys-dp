import { File } from './file';
import { Folder } from './folder';
import { Link } from './link';

export interface Visitor {
  visit(folder: Folder): void;
  visit(file: File): void;
  visit(link: Link): void;
}
