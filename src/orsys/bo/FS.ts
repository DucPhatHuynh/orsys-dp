import { File } from './file';
import { Folder } from './folder';
import { Link } from './link';

export class FS {
  public files: File[] = [];
  public folders: Folder[] = [];
  public links: Link[] = [];
  getFile(name: string): File | undefined {
    return this.files.find(el => el.name === name);
  }

  getFolder(name: string): Folder | undefined {
    return this.folders.find(el => el.name === name);
  }

  getLink(name: string): Link | undefined {
    return this.links.find(el => el.name === name);
  }
}
