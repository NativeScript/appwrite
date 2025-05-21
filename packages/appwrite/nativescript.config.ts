import { NativeScriptConfig } from '@nativescript/core';

export default {
  ios: {
    SPMPackages: [
      {
        name: 'sdk-for-swift',
        libs: ['Appwrite'],
        repositoryURL: 'https://github.com/appwrite/sdk-for-swift',
        version: '10.0.0',
      },
    ],
  },
} as NativeScriptConfig;
