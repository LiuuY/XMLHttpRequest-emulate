import binaryToBase64 from './utils/binaryToBase64';

export type RequestBody =
  | string
  | Blob
  | FormData
  | { uri: string }
  | ArrayBuffer
  | ArrayBufferView;

function convertRequestBody(body: RequestBody): Object {
  if (typeof body === 'string') {
    return { string: body };
  }
  if (body instanceof Blob) {
    return { blob: body };
  }
  if (body instanceof FormData) {
    return { formData: body };
  }
  if (body instanceof ArrayBuffer || ArrayBuffer.isView(body)) {
    // $FlowFixMe: no way to assert that 'body' is indeed an ArrayBufferView
    return { base64: binaryToBase64(body) };
  }
  return body;
}

export default convertRequestBody;
