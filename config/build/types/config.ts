export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnvironment {
  mode: BuildMode;
  port: number;
  analyzeBundle: string;
  apiUrl: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  analyzeBundle: boolean;
  apiUrl: string;
  project: 'frontend' | 'storybook' | 'jest';
}
