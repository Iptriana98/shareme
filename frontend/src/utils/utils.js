export function fixStrEncoding(str) {
    // Convierte la cadena a un Uint8Array
    const bytes = new Uint8Array([...str].map(char => char.charCodeAt(0)));

    // Usa TextDecoder para decodificar la cadena con la codificación correcta
    const decoder = new TextDecoder('utf-8');
    return decoder.decode(bytes);
}