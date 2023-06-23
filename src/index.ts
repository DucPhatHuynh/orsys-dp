import { File } from './orsys/bo/file';
import { Folder } from './orsys/bo/folder';
import { FS } from './orsys/bo/FS';
import { Link } from './orsys/bo/link';
import { Console } from './orsys/gui/console';
import { FSView } from './orsys/gui/FSView';

const fs = new FS();
const file = new File('file-1', 3000);
const secondFile = new File('file-2', 400);
const thirdFile = new File('file-3', 20000);
const fourthFile = new File('file-4', 100000);
const link = new Link('link', file);
const folder = new Folder('folder');
const subFolder = new Folder('sub-folder');
const subSubFolder = new Folder('sub-sub-folder');

fs.folders.push(folder);
subSubFolder.content.push(fourthFile);
subFolder.content.push(thirdFile, subSubFolder);
folder.content.push(subFolder, link, file, secondFile);

const view = new FSView();
folder.accept(view);

const c = new Console();
file.register(c);
file.setTaille(100000000);
file.setTaille(1);
file.setTaille(2);
file.setTaille(3);
