import { expect } from 'chai';
import { createSandbox } from 'sinon';
import { File } from './file';
import { Folder } from './folder';
import { FS } from './FS';
import { Link } from './link';

const sandbox = createSandbox();

describe.only('FS', () => {
  let fs;
  beforeEach(() => {
    fs = new FS();
  });

  afterEach(() => {
    sandbox.restore();
  })

  describe('file', () => {
    it('shall return undefined when querying a non-existing file', () => {
      expect(fs.getFile('toto')).to.equal(undefined);
    });

    it('shall return a file when querying an existing file', () => {
      const file = new File('toto', 0);
      fs.files.push(file);
      expect(fs.getFile('toto')).to.not.equal(undefined);
      expect(fs.getFile('toto')).to.equal(file);
    });
  });

  describe('folder', () => {
    it('shall return undefined when querying a non-existing folder', () => {
      expect(fs.getFolder('toto')).to.equal(undefined);
    });

    it('shall return a folder when querying an existing folder', () => {
      const folder = new Folder('toto');
      fs.folders.push(folder);
      expect(fs.getFolder('toto')).to.not.equal(undefined);
      expect(fs.getFolder(('toto'))).to.equal(folder);
    });
  });

  describe('link', () => {
    it('shall return undefined when querying a non-existing link', () => {
      expect(fs.getLink('toto')).to.equal(undefined);
    });

    context('when referencing a file', () => {
      it('shall return a link when querying an existing link', () => {
        const file = new File('titi', 0);
        const link = new Link('toto', file);
        fs.links.push(link);
        expect(fs.getLink('toto')).to.not.equal(undefined);
        expect(fs.getLink(('toto'))).to.equal(link);
      });
    });

    context('when referencing a folder', () => {
      it('shall return a link when querying an existing link', () => {
        const folder = new Folder('titi');
        const link = new Link('toto', folder);
        fs.links.push(link);
        expect(fs.getLink('toto')).to.not.equal(undefined);
        expect(fs.getLink(('toto'))).to.equal(link);
      });
    });
  });
});
