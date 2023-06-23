import { expect } from 'chai';
import { createSandbox } from 'sinon';
import { File } from './file';
import { Folder } from './folder';
import { Link } from './link';

const sandbox = createSandbox();

describe.only('folder', () => {
  let folder;
  beforeEach(() => {
    folder = new Folder('toto');
  });

  afterEach(() => {
    sandbox.restore();
  })

  describe('getContent', () => {
    it('shall return an empty array when querying an empty folder', () => {
      expect(folder.getContent().length).to.equal(0);
    });

    it('shall return an array containing files, folders and links in it', () => {
      const file = new File('titi', 0);
      const link = new Link('tutu', file);
      const subFolder = new Folder('tata');

      folder.content.push(subFolder, link, file);
      expect(folder.getContent().length).to.equal(3);
      expect(folder.getContent()).to.include(file);
      expect(folder.getContent()).to.include(link);
      expect(folder.getContent()).to.include(subFolder);
    });
  });

  describe('getSize', () => {
    it('shall return 0 as size when querying an empty folder', () => {
      expect(folder.getSize()).to.equal(0);
    });

    it('shall return the sum of the folder content\'s size', () => {
      const file = new File('file-1', 5000);
      const secondFile = new File('file-2', 500);
      const link = new Link('link', file);
      const subFolder = new Folder('sub-folder');

      folder.content.push(subFolder, link, file, secondFile);
      expect(folder.getSize()).to.equal(5500);
    });

    it('shall return the sum of the folder content\'s size and its sub folders', () => {
      const file = new File('file-1', 3000);
      const secondFile = new File('file-2', 400);
      const thirdFile = new File('file-3', 20000);
      const fourthFile = new File('file-4', 100000);
      const link = new Link('link', file);
      const subFolder = new Folder('sub-folder');
      const subSubFolder = new Folder('sub-sub-folder');

      subSubFolder.content.push(fourthFile);
      subFolder.content.push(thirdFile, subSubFolder);
      folder.content.push(subFolder, link, file, secondFile);
      expect(folder.getSize()).to.equal(123400);
    });
  });
});
