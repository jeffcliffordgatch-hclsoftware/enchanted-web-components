/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2025. All Rights Reserved.       *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 ********************************************************************
*/
import path from 'path';
import fs from 'fs';

export const tmpFolderCleanup = async (): Promise<void> => {
  const directory = '/tmp';
  const prefix = '.org.chromium.Chromium';
  const files = await fs.promises.readdir(directory);
  const filesToDelete = files.filter(file => { return file.startsWith(prefix); });
  // eslint-why - No specific logger are able to use here
  // eslint-disable-next-line no-console
  console.log(`Found ${filesToDelete.length} files to delete with prefix "${prefix}"`);
  for (const file of filesToDelete) {
    try {
      const stats = fs.lstatSync(path.join(directory, file));
      if (stats.isDirectory()) {
        await fs.promises.rm(path.join(directory, file), { recursive: true, force: true });
      } else if (stats.isFile()) {
        await fs.promises.unlink(path.join(directory, file));
      }
    } catch (err) {
      // @ts-ignore
      if (err.code === 'ENOENT') {
        // eslint-why - No specific logger are able to use here
        // eslint-disable-next-line no-console
        console.log('File or directory does not exist');
      } else {
        // eslint-why - No specific logger are able to use here
        // eslint-disable-next-line no-console
        console.error('Error:', err);
      }
    }
  }
  const logFiles = await fs.promises.readdir(directory); 
  const nonDeletableFiles = logFiles.filter(file => { return file.startsWith(prefix); });
  // eslint-why - No specific logger are able to use here
  // eslint-disable-next-line no-console
  console.log(`Verification after cleanup: Found ${nonDeletableFiles.length} files with prefix "${prefix}"`);
};
