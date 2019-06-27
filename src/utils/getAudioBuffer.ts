
export const getAudioBufferFromFile = (file: File | Blob): Promise<AudioBuffer> => {
    return new Promise((resolve, reject) => {
        if (!AudioContext) { reject(new Error('Do not support we audio api')) }
        else {
            let ctx = new AudioContext();
            let reader = new FileReader();
            reader.onload = function(e) {
                this.result instanceof ArrayBuffer && ctx.decodeAudioData(this.result, function(buf) {
                    resolve(buf);
                });
            };
            reader.onerror = (e) => reject(e);
            reader.readAsArrayBuffer(file);
        }
    });
};

const b64toBlob = (b64Data: string, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays: Uint8Array[] = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
};

export const getAudioBufferFromBase64 = async (base64: string): Promise<AudioBuffer> => {
    return getAudioBufferFromFile(b64toBlob(base64));
};