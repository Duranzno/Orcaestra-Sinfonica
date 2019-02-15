import { AuthService } from './auth.service';
import { MidiService } from './midi.service';
import { UIService } from './ui.service';
import { WavesurferService } from './wavesurfer.service';
import { UploadService } from './upload.service';
import { OsmdService } from './osmd.service';
import { MusicService } from './music.service';
import { YoutubeService } from './youtube.service';
import { FbStorageService } from './upload/firebase.service';

export const APP_SERVICES = [
  AuthService,
  MidiService,
  MusicService,
  OsmdService,
  UIService,
  UploadService,
  WavesurferService,
  YoutubeService,
  FbStorageService,
];
export { AuthService } from './auth.service';
export { MidiService } from './midi.service';
export { UIService } from './ui.service';
export { WavesurferService } from './wavesurfer.service';
export { UploadService } from './upload.service';
export { OsmdService } from './osmd.service';
export { MusicService } from './music.service';
export { YoutubeService } from './youtube.service';
export { FbStorageService } from './upload/firebase.service';
