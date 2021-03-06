// Type definitions for winston 3.0
// Project: https://github.com/winstonjs/winston

/// <reference types="node" />

import {Agent} from "http";

import * as Transport from 'winston-transport';

declare namespace winston {
  interface ConsoleTransportOptions extends Transport.TransportStreamOptions {
    stderrLevels?: string[];
    debugStdout?: boolean;
    eol?: string;
  }

  interface ConsoleTransportInstance extends Transport {
    name: string;
    stderrLevels: string[];
    eol: string;

    new(options?: ConsoleTransportOptions): ConsoleTransportInstance;
  }

  interface FileTransportOptions extends Transport.TransportStreamOptions {
    filename?: string;
    dirname?: string;
    options?: object;
    maxsize?: number;
    stream?: NodeJS.WritableStream;
    rotationFormat?: Function;
    zippedArchive?: boolean;
    maxFiles?: number;
    eol?: string;
    tailable?: boolean;
  }

  interface FileTransportInstance extends Transport {
    name: string;
    filename: string;
    dirname: string;
    options: object;
    maxsize: number | null;
    rotationFormat: Function | boolean;
    zippedArchive: boolean;
    maxFiles: number | null;
    eol: string;
    tailable: boolean;

    new(options?: FileTransportOptions): FileTransportInstance;
  }

  interface HttpTransportOptions extends Transport.TransportStreamOptions {
    ssl?: any;
    host?: string;
    port?: number;
    auth?: { username: string; password: string; };
    path?: string;
    agent?: Agent;
    headers?: object;
  }

  interface HttpTransportInstance extends Transport {
    name: string;
    ssl: boolean;
    host: string;
    port: number;
    auth?: { username: string, password: string };
    path: string;
    agent?: Agent | null;

    new(options?: HttpTransportOptions): HttpTransportInstance;
  }

  interface StreamTransportOptions extends Transport.TransportStreamOptions {
    stream: NodeJS.WritableStream;
  }

  interface StreamTransportInstance extends Transport {
    new(options?: StreamTransportOptions): StreamTransportInstance;
  }

  interface Transports {
    File: FileTransportInstance;
    Console: ConsoleTransportInstance;
    Http: HttpTransportInstance;
    Stream: StreamTransportInstance;
  }
}

declare const winston: winston.Transports;
export = winston;
