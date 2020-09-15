import { fromByteArray } from 'base64-js';

function binaryToBase64(data: ArrayBuffer | ArrayBufferView): any {
  if (data instanceof ArrayBuffer) {
    data = new Uint8Array(data);
  }
  if (data instanceof Uint8Array) {
    return fromByteArray(data);
  }
  if (!ArrayBuffer.isView(data)) {
    throw new Error('data must be ArrayBuffer or typed array');
  }
  const {buffer, byteOffset, byteLength} = data;
  return fromByteArray(new Uint8Array(buffer, byteOffset, byteLength));
}

export default binaryToBase64;